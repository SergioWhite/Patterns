"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Person = void 0;
const NoVoice_1 = require("./Voice/NoVoice");
const NoTeleport_1 = require("./Teleport/NoTeleport");
class Person {
    constructor() {
        this.voiceBehaviour = new NoVoice_1.NoVoice();
        this.teleportBehaviour = new NoTeleport_1.NoTeleport();
    }
    voice() {
        this.voiceBehaviour.voice();
    }
    teleport() {
        this.teleportBehaviour.teleport();
    }
}
exports.Person = Person;
