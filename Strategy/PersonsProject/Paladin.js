"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Paladin = void 0;
const PaladinVoice_1 = require("./Voice/PaladinVoice");
const PaladinTeleport_1 = require("./Teleport/PaladinTeleport");
const Person_1 = require("./Person");
class Paladin extends Person_1.Person {
    constructor() {
        super();
        this.voiceBehaviour = new PaladinVoice_1.PaladinVoice();
        this.teleportBehaviour = new PaladinTeleport_1.PaladinTeleport();
    }
    fight() {
        console.log('[fight]: For Innos!');
    }
}
exports.Paladin = Paladin;
