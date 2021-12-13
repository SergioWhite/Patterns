import {IBeep} from "./Beep/IBeep";
import {StandardBeep} from "./Beep/StandardBeep";
import {IRelease} from "./Release/IRelease";
import {StandardRelease} from "./Release/StandardRelease";

export abstract class Car {
    protected beepBehaviour: IBeep;
    protected releaseBehaviour: IRelease;

    protected constructor() {
        this.beepBehaviour = new StandardBeep();
        this.releaseBehaviour = new StandardRelease();
    }

    abstract drive(): void;

    beep(): void {
        this.beepBehaviour.beep();
    }

    release(): void {
        this.releaseBehaviour.release();
    }
}