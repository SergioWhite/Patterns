import {PaladinVoice} from "./Voice/PaladinVoice";
import {PaladinTeleport} from "./Teleport/PaladinTeleport";
import {Person} from "./Person";

export class Paladin extends Person {
    constructor() {
        super();
        this.voiceBehaviour = new PaladinVoice();
        this.teleportBehaviour = new PaladinTeleport();
    }

    fight() {
        console.log('[fight]: For Innos!');
    }
}