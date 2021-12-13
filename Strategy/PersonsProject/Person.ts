import {IVoice} from "./Voice/IVoice";
import {ITeleport} from "./Teleport/ITeleport";
import {NoVoice} from "./Voice/NoVoice";
import {NoTeleport} from "./Teleport/NoTeleport";

export abstract class Person {
    voiceBehaviour: IVoice;
    teleportBehaviour: ITeleport;

    protected constructor() {
        this.voiceBehaviour = new NoVoice();
        this.teleportBehaviour = new NoTeleport();
    }

    voice(): void {
        this.voiceBehaviour.voice();
    }

    teleport(): void {
        this.teleportBehaviour.teleport();
    }

    abstract fight(): void;

}



