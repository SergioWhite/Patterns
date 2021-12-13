"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Orc = void 0;
const OrcVoice_1 = require("./Voice/OrcVoice");
const Person_1 = require("./Person");
class Orc extends Person_1.Person {
    constructor() {
        super();
        this.voiceBehaviour = new OrcVoice_1.OrcVoice();
    }
    fight() {
        console.log('[fight]: Mu-cha-cha!');
    }
}
exports.Orc = Orc;
