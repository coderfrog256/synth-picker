interface Synth {
    name: string;
    style: "Hardware" | "MPC" | "Software";
    roles: string[];
    numberChannels: number;
}

const roles = [
    "Sequencer",
    "Lead",
    "Bass",
    "Pad",
    "Drum",
]

const styles = [
    "Hardware",
    "MPC",
    "Software",
]

const synthList: Synth[] = [
    {
        name: "Hydrasynth",
        style: "Hardware",
        roles: ["Lead", "Bass", "Pad"],
        numberChannels: 1
    },
    {
        name: "OpSix",
        style: "Hardware",
        roles: ["Lead", "Bass", "Pad"],
        numberChannels: 1
    },
    {
        name: "Virus TI",
        style: "Hardware",
        roles: ["Lead", "Bass", "Pad"],
        numberChannels: 16
    },
    {
        name: "Iridium",
        style: "Hardware",
        roles: ["Lead", "Bass", "Pad"],
        numberChannels: 2
    },
    {
        name: "Digitone",
        style: "Hardware",
        roles: ["Sequencer", "Lead", "Bass", "Pad", "Drum"],
        numberChannels: 16
    },
    {
        name: "M8",
        style: "Hardware",
        roles: ["Sequencer", "Lead", "Bass", "Pad", "Drum"],
        numberChannels: 8
    },
    {
        name: "Modwave",
        style: "Hardware",
        roles: ["Lead", "Bass", "Pad"], // Technically has drums, but nah.
        numberChannels: 2
    },
    {
        name: "Matriarch",
        style: "Hardware",
        roles: ["Lead", "Bass", "Pad"],
        numberChannels: 1
    },
    {
        name: "Taiga",
        style: "Hardware",
        roles: ["Lead", "Bass", "Pad"],
        numberChannels: 1
    },
    {
        name: "Summit",
        style: "Hardware",
        roles: ["Lead", "Bass", "Pad"],
        numberChannels: 2
    },
    {
        name: "MC707",
        style: "Hardware",
        roles: ["Lead", "Bass", "Pad", "Drum"], // Technically sequencer too, but not hooked up for midi out
        numberChannels: 8
    },
    {
        name: "Deluge",
        style: "Hardware",
        roles: ["Sequencer", "Lead", "Bass", "Pad", "Drum"],
        numberChannels: 16
    },
    {
        name: "Ultra Proteus",
        style: "Hardware",
        roles: ["Lead", "Bass", "Pad", "Drum"],
        numberChannels: 16 // Technically 32, but only 16 midi channels connected
    },
    {
        name: "Proteus 2000",
        style: "Hardware",
        roles: ["Lead", "Bass", "Pad", "Drum"],
        numberChannels: 16 // Technically 32, but only 16 midi channels connected
    },
    {
        name: "SC880",
        style: "Hardware",
        roles: ["Lead", "Bass", "Pad", "Drum"],
        numberChannels: 16 // Technically 32, but only 16 midi channels connected
    },
    {
        name: "JV1080",
        style: "Hardware",
        roles: ["Lead", "Bass", "Pad", "Drum"],
        numberChannels: 16
    },
    {
        name: "E6400 Ultra",
        style: "Hardware",
        roles: ["Lead", "Bass", "Pad", "Drum"],
        numberChannels: 16
    },
    {
        name: "WaveState",
        style: "Hardware",
        roles: ["Lead", "Bass", "Pad"], // Technically has drums, but nah.
        numberChannels: 4
    },
    {
        name: "XFM",
        style: "Hardware",
        roles: ["Lead", "Bass", "Pad"],
        numberChannels: 1
    },
    {
        name: "JD-08",
        style: "Hardware",
        roles: ["Lead", "Bass", "Pad"],
        numberChannels: 2
    },
    {
        name: "Microfreak",
        style: "Hardware",
        roles: ["Lead", "Bass", "Pad"],
        numberChannels: 1
    },
    {
        name: "Hapax",
        style: "Hardware",
        roles: ["Sequencer"],
        numberChannels: 1 // Just a sequencer
    },
    {
        name: "Torso T-1",
        style: "Hardware",
        roles: ["Sequencer"],
        numberChannels: 1 // Just a sequencer
    },
    {
        name: "MegaSynth",
        style: "Hardware",
        roles: ["Lead", "Bass", "Pad", "Drum"],
        numberChannels: 6
    },
    {
        name: "Modx",
        style: "Hardware",
        roles: ["Lead", "Bass", "Pad", "Drum"],
        numberChannels: 16
    },
    {
        name: "Osmose",
        style: "Hardware",
        roles: ["Lead", "Bass", "Pad"],
        numberChannels: 1
    },
    {
        name: "Take 5",
        style: "Hardware",
        roles: ["Lead", "Bass", "Pad"],
        numberChannels: 1
    },
    // MPC Internal
    {
        name: "MPC",
        style: "MPC",
        roles: ["Sequencer"],
        numberChannels: 16 // Infinite?
    },
    {
        name: "MPC Sampler",
        style: "MPC",
        roles: ["Lead", "Bass", "Pad", "Drum"],
        numberChannels: 16
    },
    {
        name: "MPC Fabric",
        style: "MPC",
        roles: ["Lead", "Bass", "Pad"],
        numberChannels: 8
    },
    {
        name: "MPC OPx4",
        style: "MPC",
        roles: ["Lead", "Bass", "Pad"],
        numberChannels: 8
    },
    {
        name: "MPC Jura",
        style: "MPC",
        roles: ["Lead", "Bass", "Pad"],
        numberChannels: 8
    },
    {
        name: "MPC Odyssey",
        style: "MPC",
        roles: ["Lead", "Bass", "Pad"],
        numberChannels: 8
    },
    {
        name: "MPC Drum Synth",
        style: "MPC",
        roles: ["Drum"],
        numberChannels: 8
    },
    {
        name: "MPC Instruments", // Piano, Organ, Strings.
        style: "MPC",
        roles: ["Lead", "Bass"],
        numberChannels: 8
    },
    {
        name: "MPC TubeSynth",
        style: "MPC",
        roles: ["Lead", "Bass", "Pad"],
        numberChannels: 8
    },
    {
        name: "MPC Sub Factory",
        style: "MPC",
        roles: ["Bass"],
        numberChannels: 8
    },
    {
        name: "MPC Bassline",
        style: "MPC",
        roles: ["Bass"],
        numberChannels: 8
    },
    {
        name: "MPC Mellotron",
        style: "MPC",
        roles: ["Lead", "Bass", "Pad"],
        numberChannels: 8
    },
    {
        name: "MPC Solina",
        style: "MPC",
        roles: ["Lead", "Bass", "Pad"], // Does bass make sense?
        numberChannels: 8
    },
    {
        name: "MPC Hype",
        style: "MPC",
        roles: ["Lead", "Bass", "Pad"],
        numberChannels: 8
    },
    // Software (Note all are listed as 16 channels, as there's no real limit)
    // Free
    {
        name: "Helm",
        style: "Software",
        roles: ["Lead", "Bass", "Pad"],
        numberChannels: 16
    },
    {
        name: "Vital",
        style: "Software",
        roles: ["Lead", "Bass", "Pad"],
        numberChannels: 16
    },
    {
        name: "Surge",
        style: "Software",
        roles: ["Lead", "Bass", "Pad"],
        numberChannels: 16
    },
    // Misc Paid
    {
        name: "Omnisphere",
        style: "Software",
        roles: ["Lead", "Bass", "Pad", "Drum"], // Drum is a stretch, but it can do it.
        numberChannels: 16
    },
    {
        name: "Phase Plant",
        style: "Software",
        roles: ["Lead", "Bass", "Pad"],
        numberChannels: 16
    },
    {
        name: "Diva",
        style: "Software",
        roles: ["Lead", "Bass", "Pad"],
        numberChannels: 16
    },
    {
        name: "Hive",
        style: "Software",
        roles: ["Lead", "Bass", "Pad"],
        numberChannels: 16
    },
    {
        name: "Jura VST",
        style: "Software",
        roles: ["Lead", "Bass", "Pad"],
        numberChannels: 16
    },
    {
        name: "Sub Factory VST",
        style: "Software",
        roles: ["Bass"],
        numberChannels: 16
    },
    {
        name: "TAL Sampler",
        style: "Software",
        roles: ["Lead", "Bass", "Pad", "Drum"],
        numberChannels: 16
    },

    // Korg
    {
        name: "Electribe-R VST",
        style: "Software",
        roles: ["Drum"],
        numberChannels: 16
    },
    {
        name: "M1 VST",
        style: "Software",
        roles: ["Lead", "Bass", "Pad", "Drum"],
        numberChannels: 16
    },
    {
        name: "Microkorg VST",
        style: "Software",
        roles: ["Lead", "Bass", "Pad"],
        numberChannels: 16
    },
    {
        name: "Minikorg 700S VST",
        style: "Software",
        roles: ["Lead", "Bass", "Pad"],
        numberChannels: 16
    },
    {
        name: "Monopoly VST",
        style: "Software",
        roles: ["Lead", "Bass", "Pad"],
        numberChannels: 16
    },
    {
        name: "Korg MS-20 VST",
        style: "Software",
        roles: ["Lead", "Bass", "Pad"], // Pads is weird, but it can do it.
        numberChannels: 16
    },
    {
        name: "OpSix VST",
        style: "Software",
        roles: ["Lead", "Bass", "Pad"],
        numberChannels: 16
    },
    {
        name: "Polysix VST",
        style: "Software",
        roles: ["Lead", "Bass", "Pad"],
        numberChannels: 16
    },
    {
        name: "Prophecy VST",
        style: "Software",
        roles: ["Lead", "Bass", "Pad"],
        numberChannels: 16
    },
    {
        name: "Triton VST",
        style: "Software",
        roles: ["Lead", "Bass", "Pad", "Drum"],
        numberChannels: 16
    },
    {
        name: "Triton Extreme VST",
        style: "Software",
        roles: ["Lead", "Bass", "Pad", "Drum"],
        numberChannels: 16
    },
    {
        name: "Wavestation VST",
        style: "Software",
        roles: ["Lead", "Bass", "Pad", "Drum"],
        numberChannels: 16
    },
    {
        name: "Korg WaveState VST",
        style: "Software",
        roles: ["Lead", "Bass", "Pad"], // Technically has drums, but nah.
        numberChannels: 16
    },

    // Arturia
    {
        name: "Pigments",
        style: "Software",
        roles: ["Lead", "Bass", "Pad"],
        numberChannels: 16
    },
    {
        name: "Acid V",
        style: "Software",
        roles: ["Lead", "Bass"],
        numberChannels: 16
    },
    {
        name: "2600 V",
        style: "Software",
        roles: ["Lead", "Bass", "Pad"],
        numberChannels: 16
    },
    {
        name: "Augmented Strings",
        style: "Software",
        roles: ["Pad"], // Not really a lead or bass
        numberChannels: 16
    },
    {
        name: "Augmented Voices",
        style: "Software",
        roles: ["Pad"], // Not really a lead or bass?
        numberChannels: 16
    },
    {
        name: "B-3 V",
        style: "Software",
        roles: ["Lead", "Bass", "Pad"], // Does bass make sense?
        numberChannels: 16
    },
    {
        name: "Buchla Easel V",
        style: "Software",
        roles: ["Lead", "Bass", "Pad"], // Does pad make sense?
        numberChannels: 16
    },
    {
        name: "Clavinet V",
        style: "Software",
        roles: ["Lead", "Bass"], // Does bass make sense?
        numberChannels: 16
    },
    {
        name: "CMI V",
        style: "Software",
        roles: ["Lead", "Bass", "Pad", "Drum"],
        numberChannels: 16
    },
    {
        name: "CS-80 V",
        style: "Software",
        roles: ["Lead", "Bass", "Pad"],
        numberChannels: 16
    },
    {
        name: "CZ V",
        style: "Software",
        roles: ["Lead", "Bass", "Pad"],
        numberChannels: 16
    },
    {
        name: "DX7 V",
        style: "Software",
        roles: ["Lead", "Bass", "Pad"],
        numberChannels: 16
    },

    {
        name: "Emulator II V",
        style: "Software",
        roles: ["Lead", "Bass", "Pad", "Drum"],
        numberChannels: 16
    },
    {
        name: "Farfisa V",
        style: "Software",
        roles: ["Lead", "Bass", "Pad"],
        numberChannels: 16
    },
    {
        name: "Jun-6 V",
        style: "Software",
        roles: ["Lead", "Bass", "Pad"],
        numberChannels: 16
    },
    {
        name: "Jup-8 V",
        style: "Software",
        roles: ["Lead", "Bass", "Pad"],
        numberChannels: 16
    },
    {
        name: "Arturia MS-20 V",
        style: "Software",
        roles: ["Lead", "Bass", "Pad"], // Pads is weird, but it can do it.
        numberChannels: 16
    },
    {
        name: "Matrix-12 V",
        style: "Software",
        roles: ["Lead", "Bass", "Pad"],
        numberChannels: 16
    },
    {
        name: "Melotron V",
        style: "Software",
        roles: ["Lead", "Bass", "Pad"],
        numberChannels: 16
    },
    {
        name: "Mini V",
        style: "Software",
        roles: ["Lead", "Bass", "Pad"], // Does pad make sense?
        numberChannels: 16
    },
    {
        name: "Modular V",
        style: "Software",
        roles: ["Lead", "Bass", "Pad"],
        numberChannels: 16
    },
    {
        name: "OB-Xa V",
        style: "Software",
        roles: ["Lead", "Bass", "Pad"],
        numberChannels: 16
    },
    {
        name: "Piano V",
        style: "Software",
        roles: ["Lead", "Bass"], // Does "pad" make sense for a piano?
        numberChannels: 16
    },
    {
        name: "Prophet V",
        style: "Software",
        roles: ["Lead", "Bass", "Pad"],
        numberChannels: 16
    },
    {
        name: "Prophet VS V",
        style: "Software",
        roles: ["Lead", "Bass", "Pad"],
        numberChannels: 16
    },
    {
        name: "SEM V",
        style: "Software",
        roles: ["Lead", "Bass", "Pad"],
        numberChannels: 16
    },
    {
        name: "Solina V",
        style: "Software",
        roles: ["Lead", "Bass", "Pad"], // Does bass make sense?
        numberChannels: 16
    },
    {
        name: "SQ-80 V",
        style: "Software",
        roles: ["Lead", "Bass", "Pad"],
        numberChannels: 16
    },
    {
        name: "Stage-73 V",
        style: "Software",
        roles: ["Lead", "Bass"], // Does "pad" make sense for a piano?
        numberChannels: 16
    },
    {
        name: "Synclavier V",
        style: "Software",
        roles: ["Lead", "Bass", "Pad", "Drum"],
        numberChannels: 16
    },
    {
        name: "Synthi V",
        style: "Software",
        roles: ["Lead", "Bass", "Pad"],
        numberChannels: 16
    },
    {
        name: "Wurli V",
        style: "Software",
        roles: ["Lead", "Bass"], // Does "pad" make sense for a piano?
        numberChannels: 16
    },


    // NI
    {
        name: "Battery",
        style: "Software",
        roles: ["Drum"],
        numberChannels: 16
    },
    {
        name: "FM8",
        style: "Software",
        roles: ["Lead", "Bass", "Pad"],
        numberChannels: 16
    },
    {
        name: "Kontakt",
        style: "Software",
        roles: ["Lead", "Bass", "Pad", "Drum"],
        numberChannels: 16
    },
    {
        name: "Massive",
        style: "Software",
        roles: ["Lead", "Bass", "Pad"],
        numberChannels: 16
    },
    {
        name: "Massive X",
        style: "Software",
        roles: ["Lead", "Bass", "Pad"],
        numberChannels: 16
    },
    {
        name: "Reaktor",
        style: "Software",
        roles: ["Lead", "Bass", "Pad"],
        numberChannels: 16
    },

    // Bitwig
    {
        name: "Bitwig",
        style: "Software",
        roles: ["Sequencer"],
        numberChannels: 16
    },
    {
        name: "Bitwig PolyGrid",
        style: "Software",
        roles: ["Lead", "Bass", "Pad"],
        numberChannels: 16
    },
    {
        name: "Bitwig Drum Machine",
        style: "Software",
        roles: ["Drum"],
        numberChannels: 16
    },
    {
        name: "Bitwig FM-4",
        style: "Software",
        roles: ["Lead", "Bass", "Pad"],
        numberChannels: 16
    },
    {
        name: "Bitwig Organ",
        style: "Software",
        roles: ["Lead", "Bass", "Pad"], // Does bass make sense?
        numberChannels: 16
    },
    {
        name: "Bitwig Polysynth",
        style: "Software",
        roles: ["Lead", "Bass", "Pad"],
        numberChannels: 16
    },
    {
        name: "Bitwig Sampler",
        style: "Software",
        roles: ["Lead", "Bass", "Pad", "Drum"],
        numberChannels: 16
    },
    {
        name: "Bitwig Phase-4",
        style: "Software",
        roles: ["Lead", "Bass", "Pad"],
        numberChannels: 16
    },
    {
        name: "Bitwig Polymer",
        style: "Software",
        roles: ["Lead", "Bass", "Pad"],
        numberChannels: 16
    },
]

const currentStyles = [...styles];

class SynthRole extends HTMLDivElement {
    role: string;
    locked: boolean;
    synth: Synth | null;
    _selection: HTMLSelectElement;
    _lockElement: HTMLInputElement;

    constructor(role: string) {
        super();
        this.role = role;
        this.locked = false;
        this.synth = null;
        this.classList.add("synth-role");
        const header = document.createElement("h2");
        header.textContent = role;
        this.appendChild(header);
        this._selection = document.createElement("select");
        const nullOption = document.createElement("option");
        nullOption.textContent = "None";
        this._selection.appendChild(nullOption);
        shuffle(synthList);
        for (const synth of synthList) {
            if (synth.roles.includes(role)) {
                const option = document.createElement("option");
                option.textContent = synth.name;
                this._selection.appendChild(option);
            }
        }
        this._selection.addEventListener("change", () => {
            if (!this.tryAssignSynth(synthList.find(synth => synth.name === this._selection.value))) {
                this._selection.value = this.synth?.name || "None";
            }
        });
        this.appendChild(this._selection);
        this._lockElement = document.createElement("input");
        this._lockElement.type = "checkbox";
        this._lockElement.checked = this.locked;
        this._lockElement.textContent = "Lock";
        this._lockElement.addEventListener("change", () => {
            this.locked = this._lockElement.checked;
        });
        this.appendChild(this._lockElement);
        const randomizeButton = document.createElement("button");
        randomizeButton.textContent = "Randomize";
        randomizeButton.addEventListener("click", () => {
            randomizeRole(this);
        });
        this.appendChild(randomizeButton);
    }

    tryAssignSynth(synth: Synth | undefined): boolean {
        if (!synth) {
            this._selection.value = "None";
            return true;
        }
        const channelsUsed = rolePickers.filter(role => role.synth === synth && role !== this).length;
        if (channelsUsed >= synth.numberChannels || !currentStyles.includes(synth.style)) {
            return false;
        }
        this.synth = synth;
        this._selection.value = synth.name;
        return true;
    }

    updateStyle() {
        for (const option of this._selection.options) {
            if (option.textContent === "None") {
                continue;
            }
            const synth = synthList.find(synth => synth.name === option.textContent);
            const hide = synth && !currentStyles.includes(synth.style);
            option.hidden = hide;
            if (hide && this.synth?.name === option.textContent) {
                this.tryAssignSynth(undefined);
            }
        }
    }
}
window.customElements.define("synth-role", SynthRole, { extends: "div" });

function shuffle<T>(array: T[]): T[] {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

const rolePickers: SynthRole[] = roles.map(role => new SynthRole(role));

function randomizeRole(role: SynthRole) {
    let roleSynths = synthList.filter(synth => synth.roles.includes(role.role));
    shuffle(roleSynths);
    for (const synth of roleSynths) {
        if (role.tryAssignSynth(synth)) {
            return;
        }
    }
    role.tryAssignSynth(undefined);
}

function randomizeAll() {
    shuffle(rolePickers);
    const unlockedRoles = rolePickers.filter(role => !role.locked);
    for (const role of unlockedRoles) {
        randomizeRole(role);
    }
}

const root = document.getElementById("root");
const stylePicker = document.createElement("div");
stylePicker.classList.add("style-picker");
for (const style of styles) {
    const check = document.createElement("input");
    check.type = "checkbox";
    check.value = style;
    check.id = style;
    check.checked = true;
    check.addEventListener("change", () => {
        if (check.checked) {
            currentStyles.push(style);
        } else {
            currentStyles.splice(currentStyles.indexOf(style), 1);
        }
        rolePickers.forEach(role => role.updateStyle());
    });
    const label = document.createElement("label");
    label.htmlFor = style;
    label.textContent = style;
    stylePicker.appendChild(check);
    stylePicker.appendChild(label);
}
root.appendChild(stylePicker);
for (const rolePicker of rolePickers) {
    root.appendChild(rolePicker);
}
const randomizeAllButton = document.createElement("button");
randomizeAllButton.classList.add("randomize-all");
randomizeAllButton.textContent = "Randomize All";
randomizeAllButton.addEventListener("click", randomizeAll);
root.appendChild(randomizeAllButton);
