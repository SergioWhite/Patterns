import {OrcVoice} from "./Voice/OrcVoice";
import {Person} from "./Person";

export class Orc extends Person {
    constructor() {
        super();
        this.voiceBehaviour = new OrcVoice();
    }

    fight() {
        console.log('[fight]: Mu-cha-cha!');
    }
}