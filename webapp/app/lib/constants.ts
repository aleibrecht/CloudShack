export const MODES = [
    {name: "CW"},
    {name: "SSB", rst: "59", submodes: [
        {name: "LSB"},
        {name: "USB"}
    ]},
    {name: "AM", rst: "59"},
    {name: "FM", rst: "59"},
    {name: "PSK", submodes: [
        {name: "PSK31"},
        {name: "PSK63"},
        {name: "PSK63F"},
        {name: "PSK125"},
        {name: "PSK250"},
        {name: "PSK500"},
        {name: "PSK1000"},
        {name: "QPSK31"},
        {name: "QPSK63"},
        {name: "QPSK125"},
        {name: "QPSK250"},
        {name: "QPSK500"}
    ]},
    {name: "RTTY"},
    {name: "MFSK", submodes: [
        {name: "MFSK4"},
        {name: "MFSK8"},
        {name: "MFSK11"},
        {name: "MFSK16"},
        {name: "MFSK22"},
        {name: "MFSK31"},
        {name: "MFSK32"}
    ]},
    {name: "OLIVIA", submodes: [
        {name: "OLIVIA 4/125"},
        {name: "OLIVIA 4/250"},
        {name: "OLIVIA 8/250"},
        {name: "OLIVIA 8/500"},
        {name: "OLIVIA 16/500"},
        {name: "OLIVIA 16/1000"},
        {name: "OLIVIA 32/1000"}
    ]},
    {name: "JT65", rst: "-1", submodes: [
        {name: "JT65A"},
        {name: "JT65B"},
        {name: "JT65B2"},
        {name: "JT65C"},
        {name: "JT65C2"}
    ]},
    {name: "JT9", rst: "-1", submodes: [
        {name: "JT9-1"},
        {name: "JT9-2"},
        {name: "JT9-5"},
        {name: "JT9-10"},
        {name: "JT9-30"}
    ]},
    {name: "HELL", submodes: [
        {name: "FMHELL"},
        {name: "FSKHELL"},
        {name: "HELL80"},
        {name: "HFSK"},
        {name: "PSKHELL"}
    ]},
    {name: "CONTESTIA"},
    {name: "DOMINO", submodes: [
        {name: "DOMINOEX"},
        {name: "DOMINOF"},
    ]},
    {name: "MT63"},
    {name: "JT6M", rst: "26"},
    {name: "JTMSK", rst: "-1"},
    {name: "MSK144", rst: "0"},
    {name: "FSK441", rst: "26"},
    {name: "DIGITALVOICE", rst: "59"},
    {name: "DSTAR", rst: "59"},
    {name: "PKT"},
    {name: "ATV"},
    {name: "SSTV"}
];

export const BANDS = [
    {name: "2190m", start: 0.136, end: 0.137},
    {name: "630m", start: 0.472, end: 0.479},
    {name: "560m", start: 0.501, end: 0.504},
    {name: "160m", start: 1.8, end: 2.0},
    {name: "80m", start: 3.5, end: 4.0},
    {name: "60m", start: 5.102, end: 5.4065},
    {name: "40m", start: 7.0, end: 7.3},
    {name: "30m", start: 10.0, end: 10.15},
    {name: "20m", start: 14.0, end: 14.35},
    {name: "17m", start: 18.068, end: 18.168},
    {name: "15m", start: 21.0, end: 21.45},
    {name: "12m", start: 24.89, end: 24.99},
    {name: "10m", start: 28.0, end: 29.7},
    {name: "6m", start: 50.0, end: 54.0},
    {name: "4m", start: 70.0, end: 71.0},
    {name: "2m", start: 144.0, end: 148.0},
    {name: "1.25m", start: 222.0, end: 225.0},
    {name: "70cm", start: 420.0, end: 450.0},
    {name: "33cm", start: 902.0, end: 928.0},
    {name: "23cm", start: 1240.0, end: 1300.0},
    {name: "13cm", start: 2300.0, end: 2450.0},
    {name: "9cm", start: 3300.0, end: 3500.0},
    {name: "6cm", start: 5650.0, end: 5925.0},
    {name: "3cm", start: 10000.0, end: 10500.0},
    {name: "1.25cm", start: 24000.0, end: 24250.0},
    {name: "6mm", start: 47000.0, end: 47200.0},
    {name: "4mm", start: 75500.0, end: 81000.0},
    {name: "2.5mm", start: 119980.0, end: 120020.0},
    {name: "2mm", start: 142000.0, end: 149000.0},
    {name: "1mm", start: 241000.0, end: 250000.0}
];

export const CONTESTS = [
    {id: "070-PSKFEST", desc: "PODXS PSKFest"},
    {id: "070-VALENTINE-SPRINT", desc: "PODXS Valentine Sprint"},
    {id: "070-ST-PATS-DAY", desc: "PODXS St. Patricks Day"},
    {id: "070-31-FLAVORS", desc: "PODXS 31 Flavors"},
    {id: "070-3-DAY", desc: "PODXS Three Day Weekend"},
    {id: "070-40M-SPRINT", desc: "PODXS 40m Firecracker Sprint"},
    {id: "070-80M-SPRINT", desc: "PODXS 80m Jay Hudak Memorial Sprint"},
    {id: "070-160M-SPRINT", desc: "PODXS Great Pumpkin Sprint"},
    {id: "7QP", desc: "7th-Area QSO Party"},
    {id: "AL-QSO-PARTY", desc: "Alabama QSO Party"},
    {id: "ALL-ASIAN-DX-CW", desc: "JARL All Asian DX Contest (CW)"},
    {id: "ALL-ASIAN-DX-PHONE", desc: "JARL All Asian DX Contest (PHONE)"},
    {id: "ANARTS-RTTY", desc: "ANARTS WW RTTY"},
    {id: "ANATOLIAN-RTTY", desc: "Anatolian WW RTTY"},
    {id: "AP-SPRINT", desc: "Asia - Pacific Sprint"},
    {id: "AR-QSO-PARTY", desc: "Arkansas QSO Party"},
    {id: "ARI-DX", desc: "ARI DX Contest"},
    {id: "ARRL-10", desc: "ARRL 10 Meter Contest"},
    {id: "ARRL-160", desc: "ARRL 160 Meter Contest"},
    {id: "ARRL-DX-CW", desc: "ARRL International DX Contest (CW)"},
    {id: "ARRL-DX-SSB", desc: "ARRL International DX Contest (Phone)"},
    {id: "ARRL-FIELD-DAY", desc: "ARRL Field Day"},
    {id: "ARRL-RTTY", desc: "ARRL RTTY Round-Up"},
    {id: "ARRL-SS-CW", desc: "ARRL November Sweepstakes (CW)"},
    {id: "ARRL-SS-SSB", desc: "ARRL November Sweepstakes (Phone)"},
    {id: "ARRL-UHF-AUG", desc: "ARRL August UHF Contest"},
    {id: "ARRL-VHF-JAN", desc: "ARRL January VHF Sweepstakes"},
    {id: "ARRL-VHF-JUN", desc: "ARRL June VHF QSO Party"},
    {id: "ARRL-VHF-SEP", desc: "ARRL September VHF QSO Party"},
    {id: "AZ-QSO-PARTY", desc: "Arizona QSO Party"},
    {id: "BARTG-RTTY", desc: "BARTG Spring RTTY Contest"},
    {id: "BARTG-SPRINT", desc: "BARTG Sprint Contest"},
    {id: "BC-QSO-PARTY", desc: "British Columbia QSO Party"},
    {id: "CA-QSO-PARTY", desc: "California QSO Party"},
    {id: "CO-QSO-PARTY", desc: "Colorado QSO Party"},
    {id: "CQ-160-CW", desc: "CQ WW 160 Meter DX Contest (CW)"},
    {id: "CQ-160-SSB", desc: "CQ WW 160 Meter DX Contest (SSB)"},
    {id: "CQ-M", desc: "CQ-M International DX Contest"},
    {id: "CQ-VHF", desc: "CQ World-Wide VHF Contest"},
    {id: "CQ-WPX-CW", desc: "CQ WW WPX Contest (CW)"},
    {id: "CQ-WPX-RTTY", desc: "CQ/RJ WW RTTY WPX Contest"},
    {id: "CQ-WPX-SSB", desc: "CQ WW WPX Contest (SSB)"},
    {id: "CQ-WW-CW", desc: "CQ WW DX Contest (CW)"},
    {id: "CQ-WW-RTTY", desc: "CQ/RJ WW RTTY DX Contest"},
    {id: "CQ-WW-SSB", desc: "CQ WW DX Contest (SSB)"},
    {id: "CWOPS-CWT", desc: "CWops Mini-CWT Test"},
    {id: "CIS-DX", desc: "CIS DX Contest"},
    {id: "CT-QSO-PARTY", desc: "Connecticut QSO Party"},
    {id: "DARC-WAEDC-CW", desc: "WAE DX Contest (CW)"},
    {id: "DARC-WAEDC-RTTY", desc: "WAE DX Contest (RTTY)"},
    {id: "DARC-WAEDC-SSB", desc: "WAE DX Contest (SSB)"},
    {id: "DARC-WAG", desc: "DARC Worked All Germany"},
    {id: "DE-QSO-PARTY", desc: "Delaware QSO Party"},
    {id: "DL-DX-RTTY", desc: "DL-DX RTTY Contest"},
    {id: "EA-RTTY (Deprecated) ", desc: "Unión de Radioaficionados Españoles RTTY Contest"},
    {id: "EA-WW-RTTY", desc: "Unión de Radioaficionados Españoles RTTY Contest"},
    {id: "EPC-PSK63", desc: "PSK63 QSO Party"},
    {id: "EU Sprint", desc: "EU Sprint"},
    {id: "EUCW160M", desc: "European CW Association 160m CW Party"},
    {id: "EU-HF", desc: "EU HF Championship"},
    {id: "EU-PSK-DX", desc: "EU PSK DX Contest"},
    {id: "Fall Sprint", desc: "FISTS Fall Sprint"},
    {id: "FL-QSO-PARTY", desc: "Florida QSO Party"},
    {id: "GA-QSO-PARTY", desc: "Georgia QSO Party"},
    {id: "HELVETIA", desc: "Helvetia Contest"},
    {id: "HI-QSO-PARTY", desc: "Hawaiian QSO Party"},
    {id: "HOLYLAND", desc: "IARC Holyland Contest"},
    {id: "IARU-FIELD-DAY", desc: "DARC IARU Region 1 Field Day"},
    {id: "IARU-HF", desc: "IARU HF World Championship"},
    {id: "IA-QSO-PARTY", desc: "Iowa QSO Party"},
    {id: "ID-QSO-PARTY", desc: "Idaho QSO Party"},
    {id: "IL QSO Party", desc: "Illinois QSO Party"},
    {id: "IN-QSO-PARTY", desc: "Indiana QSO Party"},
    {id: "JARTS-WW-RTTY", desc: "JARTS WW RTTY"},
    {id: "JIDX-CW", desc: "Japan International DX Contest (CW)"},
    {id: "JIDX-SSB", desc: "Japan International DX Contest (SSB)"},
    {id: "KS-QSO-PARTY", desc: "Kansas QSO Party"},
    {id: "KY-QSO-PARTY", desc: "Kentucky QSO Party"},
    {id: "LA-QSO-PARTY", desc: "Louisiana QSO Party"},
    {id: "LZ DX", desc: "LZ DX Contest"},
    {id: "MAR-QSO-PARTY", desc: "Maritimes QSO Party"},
    {id: "MI-QSO-PARTY", desc: "Michigan QSO Party"},
    {id: "MIDATLANTIC-QSO-PARTY", desc: "Mid-Atlantic QSO Party"},
    {id: "MD-QSO-PARTY", desc: "Maryland QSO Party"},
    {id: "ME-QSO-PARTY", desc: "Maine QSO Party"},
    {id: "MI-QSO-PARTY", desc: "Michigan QSO Party"},
    {id: "MN-QSO-PARTY", desc: "Minnesota QSO Party"},
    {id: "MO-QSO-PARTY", desc: "Missouri QSO Party"},
    {id: "MS-QSO-PARTY", desc: "Mississippi QSO Party"},
    {id: "MT-QSO-PARTY", desc: "Montana QSO Party"},
    {id: "NAQP-CW", desc: "North America QSO Party (CW)"},
    {id: "NAQP-RTTY", desc: "North America QSO Party (RTTY)"},
    {id: "NAQP-SSB", desc: "North America QSO Party (Phone)"},
    {id: "NA-SPRINT-CW", desc: "North America Sprint (CW)"},
    {id: "NA-SPRINT-RTTY", desc: "North America Sprint (RTTY)"},
    {id: "NA-SPRINT-SSB", desc: "North America Sprint (Phone)"},
    {id: "NEQP", desc: "New England QSO Party"},
    {id: "NC-QSO-PARTY", desc: "North Carolina QSO Party"},
    {id: "ND-QSO-PARTY", desc: "North Dakota QSO Party"},
    {id: "NE-QSO-PARTY", desc: "Nebraska QSO Party"},
    {id: "NH-QSO-PARTY", desc: "New Hampshire QSO Party"},
    {id: "NJ-QSO-PARTY", desc: "New Jersey QSO Party"},
    {id: "NM-QSO-PARTY", desc: "New Mexico QSO Party"},
    {id: "NRAU-BALTIC-CW", desc: "NRAU-Baltic Contest (CW)"},
    {id: "NRAU-BALTIC-SSB", desc: "NRAU-Baltic Contest (SSB)"},
    {id: "NV-QSO-PARTY", desc: "Nevada QSO Party"},
    {id: "NY-QSO-PARTY", desc: "New York QSO Party"},
    {id: "OCEANIA-DX-CW", desc: "Oceania DX Contest (CW)"},
    {id: "OCEANIA-DX-SSB", desc: "Oceania DX Contest (SSB)"},
    {id: "OH-QSO-PARTY", desc: "Ohio QSO Party"},
    {id: "OK-DX-RTTY", desc: "Czech Radio Club OK DX Contest"},
    {id: "OK-OM-DX", desc: "Czech Radio Club OK-OM DX Contest"},
    {id: "OK-QSO-PARTY", desc: "Oklahoma QSO Party"},
    {id: "OMISS-QSO-PARTY", desc: "Old Man International Sideband Society QSO Party"},
    {id: "ON-QSO-PARTY", desc: "Ontario QSO Party"},
    {id: "OR-QSO-PARTY", desc: "Oregon QSO Party"},
    {id: "PACC", desc: "Dutch PACC Contest"},
    {id: "PA-QSO-PARTY", desc: "Pennsylvania QSO Party"},
    {id: "QC-QSO-PARTY", desc: "Quebec QSO Party"},
    {id: "RAC ", desc: "Canadian Amateur Radio Society Contest"},
    {id: "RAC-CANADA-DAY", desc: "Canadian Amateur Radio Society Canada Day Contest"},
    {id: "RAC-CANADA-WINTER", desc: "Canadian Amateur Radio Society Canada Winter Contest"},
    {id: "RDAC", desc: "Russian District Award Contest"},
    {id: "RDXC", desc: "Russian DX Contest"},
    {id: "REF-160M", desc: "Reseau des Emetteurs Francais 160m Contest"},
    {id: "REF-CW", desc: "Reseau des Emetteurs Francais Contest (CW)"},
    {id: "REF-SSB", desc: "Reseau des Emetteurs Francais Contest (SSB)"},
    {id: "RI-QSO-PARTY", desc: "Rhode Island QSO Party"},
    {id: "RSGB-160", desc: "1.8Mhz Contest"},
    {id: "RSGB-21/28-CW", desc: "21/28 MHz Contest (CW)"},
    {id: "RSGB-21/28-SSB", desc: "21/28 MHz Contest (SSB)"},
    {id: "RSGB-80M-CC", desc: "80m Club Championships"},
    {id: "RSGB-AFS-CW", desc: "Affiliated Societies Team Contest (CW)"},
    {id: "RSGB-AFS-SSB", desc: "Affiliated Societies Team Contest (SSB)"},
    {id: "RSGB-CLUB-CALLS", desc: "Club Calls"},
    {id: "RSGB-COMMONWEALTH", desc: "Commonwealth Contest"},
    {id: "RSGB-IOTA", desc: "IOTA Contest"},
    {id: "RSGB-LOW-POWER", desc: "Low Power Field Day"},
    {id: "RSGB-NFD", desc: "National Field Day"},
    {id: "RSGB-ROPOCO", desc: "RoPoCo"},
    {id: "RSGB-SSB-FD", desc: "SSB Field Day"},
    {id: "RUSSIAN-RTTY", desc: "Russian Radio RTTY Worldwide Contest"},
    {id: "SAC-CW", desc: "Scandinavian Activity Contest (CW)"},
    {id: "SAC-SSB", desc: "Scandinavian Activity Contest (SSB)"},
    {id: "SARTG-RTTY", desc: "SARTG WW RTTY"},
    {id: "SCC-RTTY", desc: "SCC RTTY Championship"},
    {id: "SC-QSO-PARTY", desc: "South Carolina QSO Party"},
    {id: "SD-QSO-PARTY", desc: "South Dakota QSO Party"},
    {id: "SMP-AUG", desc: "SSA Portabeltest"},
    {id: "SMP-MAY", desc: "SSA Portabeltest"},
    {id: "SPDXContest", desc: "SP DX Contest"},
    {id: "SP-DX-RTTY", desc: "PRC SPDX Contest (RTTY)"},
    {id: "Spring Sprint", desc: "FISTS Spring Sprint"},
    {id: "SR-MARATHON", desc: "Scottish-Russian Marathon"},
    {id: "STEW-PERRY", desc: "Stew Perry Topband Distance Challenge"},
    {id: "Summer Sprint", desc: "FISTS Summer Sprint"},
    {id: "TARA-RTTY", desc: "TARA RTTY Mêlée"},
    {id: "TMC-RTTY", desc: "The Makrothen Contest"},
    {id: "TN-QSO-PARTY", desc: "Tennessee QSO Party"},
    {id: "TX-QSO-PARTY", desc: "Texas QSO Party"},
    {id: "UBA-DX-CW", desc: "UBA Contest (CW)"},
    {id: "UBA-DX-SSB", desc: "UBA Contest (SSB)"},
    {id: "UK-DX-BPSK63", desc: "European PSK Club BPSK63 Contest"},
    {id: "UK-DX-RTTY", desc: "UK DX RTTY Contest"},
    {id: "UKRAINIAN DX", desc: "Ukrainian DX"},
    {id: "UKR-CHAMP-RTTY", desc: "Open Ukraine RTTY Championship"},
    {id: "URE-DX", desc: "Ukrainian DX Contest"},
    {id: "US-COUNTIES-QSO", desc: "Mobile Amateur Awards Club"},
    {id: "UT-QSO-PARTY", desc: "Utah QSO Party"},
    {id: "VENEZ-IND-DAY", desc: "RCV Venezuelan Independence Day Contest"},
    {id: "Virginia QSO Party (deprecated) ", desc: "Virginia QSO Party"},
    {id: "VA-QSO-PARTY", desc: "Virginia QSO Party"},
    {id: "VOLTA-RTTY", desc: "Alessandro Volta RTTY DX Contest"},
    {id: "WA-QSO-PARTY", desc: "Washington QSO Party"},
    {id: "WI-QSO-PARTY", desc: "Wisconsin QSO Party"},
    {id: "WV-QSO-PARTY", desc: "West Virginia QSO Party"},
    {id: "WY-QSO-PARTY", desc: "Wyoming QSO Party"},
    {id: "Winter Sprint", desc: "FISTS Winter Sprint"},
    {id: "XE-INTL-RTTY", desc: "Mexico International Contest (RTTY)"},
    {id: "YUDXC", desc: "YU DX Contest"}
];
