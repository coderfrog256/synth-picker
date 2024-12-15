interface Synth {
    name: string;
    type: "Hardware" | "Software";
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

const synthList: Synth[] = [
    {
        name: "Hydrasynth",
        type: "Hardware",
        roles: ["Lead", "Bass", "Pad"],
        numberChannels: 1
    },
    {
        name: "Opsix",
        type: "Hardware",
        roles: ["Lead", "Bass", "Pad"],
        numberChannels: 1
    },
    {
        name: "Virus TI",
        type: "Hardware",
        roles: ["Lead", "Bass", "Pad"],
        numberChannels: 16
    },
    {
        name: "Iridium",
        type: "Hardware",
        roles: ["Lead", "Bass", "Pad"],
        numberChannels: 2
    },
    {
        name: "Digitone",
        type: "Hardware",
        roles: ["Sequencer", "Lead", "Bass", "Pad", "Drum"],
        numberChannels: 16
    },
    {
        name: "M8",
        type: "Hardware",
        roles: ["Sequencer", "Lead", "Bass", "Pad", "Drum"],
        numberChannels: 8
    },
    {
        name: "Modwave",
        type: "Hardware",
        roles: ["Lead", "Bass", "Pad"], // Technically has drums, but nah.
        numberChannels: 2
    },
    {
        name: "Matriarch",
        type: "Hardware",
        roles: ["Lead", "Bass", "Pad"],
        numberChannels: 1
    },
    {
        name: "Taiga",
        type: "Hardware",
        roles: ["Lead", "Bass", "Pad"],
        numberChannels: 1
    },
    {
        name: "MPC",
        type: "Hardware",
        roles: ["Sequencer", "Lead", "Bass", "Pad", "Drum"],
        numberChannels: 16 // Infinite?
    },
    {
        name: "Summit",
        type: "Hardware",
        roles: ["Lead", "Bass", "Pad"],
        numberChannels: 2
    },
    {
        name: "MC707",
        type: "Hardware",
        roles: ["Lead", "Bass", "Pad", "Drum"], // Technically sequencer too, but not hooked up for midi out
        numberChannels: 8
    },
    {
        name: "Deluge",
        type: "Hardware",
        roles: ["Sequencer", "Lead", "Bass", "Pad", "Drum"],
        numberChannels: 16
    },
    {
        name: "Ultra Proteus",
        type: "Hardware",
        roles: ["Lead", "Bass", "Pad", "Drum"],
        numberChannels: 16 // Technically 32, but only 16 midi channels connected
    },
    {
        name: "Proteus 2000",
        type: "Hardware",
        roles: ["Lead", "Bass", "Pad", "Drum"],
        numberChannels: 16 // Technically 32, but only 16 midi channels connected
    },
    {
        name: "SC880",
        type: "Hardware",
        roles: ["Lead", "Bass", "Pad", "Drum"],
        numberChannels: 16 // Technically 32, but only 16 midi channels connected
    },
    {
        name: "JV1080",
        type: "Hardware",
        roles: ["Lead", "Bass", "Pad", "Drum"],
        numberChannels: 16
    },
    {
        name: "E6400 Ultra",
        type: "Hardware",
        roles: ["Lead", "Bass", "Pad", "Drum"],
        numberChannels: 16
    },
    {
        name: "WaveState",
        type: "Hardware",
        roles: ["Lead", "Bass", "Pad"], // Technically has drums, but nah.
        numberChannels: 4
    },
    {
        name: "XFM",
        type: "Hardware",
        roles: ["Lead", "Bass", "Pad"],
        numberChannels: 1
    },
    {
        name: "JD-08",
        type: "Hardware",
        roles: ["Lead", "Bass", "Pad"],
        numberChannels: 2
    },
    {
        name: "Microfreak",
        type: "Hardware",
        roles: ["Lead", "Bass", "Pad"],
        numberChannels: 1
    },
    {
        name: "Hapax",
        type: "Hardware",
        roles: ["Sequencer"],
        numberChannels: 1 // Just a sequencer
    },
    {
        name: "Torso T-1",
        type: "Hardware",
        roles: ["Sequencer"],
        numberChannels: 1 // Just a sequencer
    },
    {
        name: "MegaSynth",
        type: "Hardware",
        roles: ["Lead", "Bass", "Pad", "Drum"],
        numberChannels: 6
    },
    {
        name: "Modx",
        type: "Hardware",
        roles: ["Lead", "Bass", "Pad", "Drum"],
        numberChannels: 16
    },
    {
        name: "Osmose",
        type: "Hardware",
        roles: ["Lead", "Bass", "Pad"],
        numberChannels: 1
    },
    {
        name: "Take 5",
        type: "Hardware",
        roles: ["Lead", "Bass", "Pad"],
        numberChannels: 1
    }
]

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
        if (channelsUsed >= synth.numberChannels) {
            return false;
        }
        this.synth = synth;
        this._selection.value = synth.name;
        return true;
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
root.innerHTML = "";
for (const rolePicker of rolePickers) {
    root.appendChild(rolePicker);
}
const randomizeAllButton = document.createElement("button");
randomizeAllButton.classList.add("randomize-all");
randomizeAllButton.textContent = "Randomize All";
randomizeAllButton.addEventListener("click", randomizeAll);
root.appendChild(randomizeAllButton);
