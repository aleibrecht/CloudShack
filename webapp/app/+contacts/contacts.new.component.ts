import { Component, ViewChild, ElementRef, Renderer, AfterViewInit, HostListener, EventEmitter } from "@angular/core";
import { FormControl } from "@angular/forms";
import { Http, Response } from "@angular/http";
import { Observable } from "rxjs/Rx";
import { MODES, CONTESTS } from "../lib/constants";
import { coord_distance, coord_bearing, grid_to_coord } from "../lib/geo";

import {
    ContactService,
    FlashService,
    RigService,
    RotService,
    StateService
} from "../shared/index";

const RETAIN_FIELDS: [string] = ["freq", "mode", "submode", "tx_pwr"];

const GRID_PRIORITY: number = 0;
const CALLBOOK_PRIORITY: number = 1;
const DXCC_PRIORITY: number = 2;

@Component({
    templateUrl: "./contacts.new.component.html"
})
export class ContactsNewComponent implements AfterViewInit {
    @ViewChild("callsignInput") callsignInput: ElementRef;

    contact: Object = {};
    dxcc: Object = null;
    callbook: Object = null;
    previous: Array<Object> = null;

    startDate: string = null;
    endDate: string = null;

    callsignChange: EventEmitter<any> = new EventEmitter<any>();
    gridChange: EventEmitter<any> = new EventEmitter<any>();
    modeChange: EventEmitter<any> = new EventEmitter<any>();

    maptargets: Array<[number, number]> = [null, null, null];
    maptarget: [number, number] = null;
    distance: number = null;
    bearing: number = null;

    modes = MODES;
    submodes = null;
    rst = "";
    contests = CONTESTS;

    constructor(
        private renderer: Renderer,
        private api: ContactService,
        private flash: FlashService,
        private rig: RigService,
        private rot: RotService,
        private state: StateService,
        private http: Http
    )
    {
        this.callsignChange
            .filter((val: string) => val && val.length > 0)
            .debounceTime(200)
            .map(encodeURIComponent)
            .switchMap((val: string) => this.http.get("/dxcc/" + val))
            .catch((err, caught) => { this.resetDxcc(); return caught; })
            .map((res: Response) => res.json())
            .subscribe(this.updateDxcc.bind(this));

        this.callsignChange
            .filter((val: string) => val && val.length > 2)
            .debounceTime(400)
            .map(encodeURIComponent)
            .switchMap((val: string) => this.http.get("/callbook/" + val))
            .catch((err, caught) => { this.resetCallbook(); return caught; })
            .map((res: Response) => res.json())
            .subscribe(this.updateCallbook.bind(this));

        this.callsignChange
            .filter((val: string) => val && val.length > 2)
            .debounceTime(400)
            .switchMap((val: string) => this.api.previousContacts(val))
            .catch((err, caught) => { this.resetPreviousContacts(); return caught; })
            .subscribe(this.updatePreviousContacts.bind(this));

        this.modeChange
            .debounceTime(10)
            .subscribe(this.updateMode.bind(this));

        this.gridChange
            .debounceTime(10)
            .subscribe(this.updateGridsquare.bind(this));

        this.state.rigChange
            .subscribe(this.rigChange.bind(this));
    }

    ngAfterViewInit() {
        this.contact = this.state.log || {};
        this.reset();
    }

    qrz() {
        window.open("http://www.qrz.com/db/" + this.contact["call"]);
    }

    save() {
        this.contact["start"] = new Date(this.startDate);
        this.contact["end"] = new Date(this.endDate);

        this.api.insert(this.contact).subscribe(result => {
            this.flash.success("Contact saved.");
            this.reset();
        }, err => {
            this.flash.error("Failed to save contact.");
        });
    }

    reset() {
        this.resetPreviousContacts();
        this.resetCallbook();
        this.resetDxcc();
        this.resetStart();
        this.resetEnd();

        let contact = {};

        // Carry over the fields defined by RETAIN_FIELDS
        for (let field of RETAIN_FIELDS) {
            let value = this.contact[field];
            if (value) contact[field] = value;
        }

        this.callsignChange.emit("");
        this.modeChange.emit(contact["mode"]);
        this.gridChange.emit("");

        this.contact = contact;

        // Set focus to callsign input
        let callsignInput = this.callsignInput.nativeElement;
        this.renderer.invokeElementMethod(callsignInput, "focus", []);
    }

    resetStart() {
        let now = (new Date()).toJSON().slice(0, 19);
        this.startDate = now;
    }

    resetEnd() {
        let now = (new Date()).toJSON().slice(0, 19);
        this.endDate = now;
    }

    resetDxcc() {
        delete this.contact["dxcc"];
        delete this.contact["cqz"];
        delete this.contact["ituz"];
        delete this.contact["country"];
        this.removeMaptarget(DXCC_PRIORITY);
        this.dxcc = null;
    }

    updateDxcc(dxcc) {
        if (!dxcc) this.resetDxcc();

        this.dxcc = dxcc;
        this.contact["dxcc"] = dxcc["dxcc"];
        this.contact["cqz"] = dxcc["cqz"];
        this.contact["ituz"] = dxcc["ituz"];
        this.contact["country"] = dxcc["country"];
        this.updateMaptarget(dxcc["latlon"], DXCC_PRIORITY);
    }

    resetCallbook() {
        this.callbook = null;
        this.removeMaptarget(CALLBOOK_PRIORITY);
    }

    updateCallbook(callbook) {
        console.log(callbook);
        this.callbook = callbook;

        if (callbook["gridsquare"]) {
            let coord = grid_to_coord(callbook["gridsquare"]);
            this.updateMaptarget(coord, CALLBOOK_PRIORITY);
        }
        else {
            this.removeMaptarget(CALLBOOK_PRIORITY);
        }
    }

    resetPreviousContacts() {
        this.previous = null;
    }

    updatePreviousContacts(result) {
        if (result && result["rows"]) {
            this.previous = result["rows"];
        }
        else {
            this.resetPreviousContacts();
        }
    }

    updateMode(newMode: string) {
        var mode = this.modes.find(mode => mode.name == newMode);

        if (mode) {
            this.rst = mode["rst"] || "599";
        }

        if (mode["submodes"]) {
            this.submodes = mode["submodes"];
        }
        else {
            this.submodes = null;
            delete this.contact["submode"];
        }
    }

    updateGridsquare(newGrid: string) {
        let coord = grid_to_coord(newGrid);
        if (coord) this.updateMaptarget(coord, GRID_PRIORITY);
        else this.removeMaptarget(GRID_PRIORITY);
    }

    updateMaptarget(coord: [number, number], priority: number) {
        this.maptargets[priority] = coord;

        for (var i in this.maptargets) {
            let target = this.maptargets[i];
            if (target) {
                this.maptarget = target;
                this.updateDistance(target);
                return;
            }
        }

        this.distance = null;
        this.bearing = null;
        this.maptarget = null;
    }

    updateDistance(target) {
        let profile = this.state.profile["fields"];
        if (profile && profile["my_gridsquare"]) {
            let myCoord = grid_to_coord(profile["my_gridsquare"]);
            this.distance = coord_distance(myCoord, target);
            this.bearing = coord_bearing(myCoord, target);
        }
        else {
            this.bearing = null;
            this.distance = null;
        }
    }

    removeMaptarget(priority: number) {
        this.updateMaptarget(null, priority);
    }

    rigChange(rig) {
        if (rig && rig["freq"]) {
            this.contact["freq"] = rig["freq"];
        }
    }

    sendCW(text) {
        this.rig.send_cw(text);
    }

    rotate(target) {
        this.rot.set_target(target);
    }

    @HostListener("keydown.alt.w", ["$event"])
    resetShortcut(event) {
        this.reset();
        event.preventDefault();
    }

    @HostListener("keydown.control.s", ["$event"])
    saveShortcut(event) {
        this.save();
        event.preventDefault();
    }

    @HostListener("keydown.F1", ["$event"])
    macroF1(event) {
        let call = (this.state.profile["fields"] || {})["operator"];
        if (call) {
            this.sendCW("CQ de " + call + " " + call + " k");
        }
        event.preventDefault();
    }

    @HostListener("keydown.F2", ["$event"])
    macroF2(event) {
        let grid = (this.state.profile["fields"] || {})["my_gridsquare"];
        if (grid) {
            this.sendCW("5NN in " + grid + " ");
        }
        else {
            this.sendCW("5NN ")
        }
        event.preventDefault();
    }

    @HostListener("keydown.F3", ["$event"])
    macroF3(event) {
        this.sendCW("TU ");
        event.preventDefault();
    }

    @HostListener("keydown.F4", ["$event"])
    macroF4(event) {
        let call = ((this.state.profile["fields"] || {})["operator"] || null);
        if (call) {
            this.sendCW(call);
        }
        event.preventDefault();
    }

    @HostListener("keydown.F5", ["$event"])
    macroF5(event) {
        if (this.contact["call"]) {
            this.sendCW(this.contact["call"] + " ");
        }
        event.preventDefault();
    }

    @HostListener("keydown.F6", ["$event"])
    macroF6(event) {
        let grid = (this.state.profile["fields"] || {})["my_gridsquare"];
        if (grid) {
            this.sendCW(grid);
        }
        event.preventDefault();
    }
}
