import {Car} from "./Car";
import {SuperBeep} from "./Beep/SuperBeep";
import {AggressiveRelease} from "./Release/AggressiveRelease";

export class BigCar extends Car {
    constructor() {
        super();
        this.beepBehaviour = new SuperBeep();
        this.releaseBehaviour = new AggressiveRelease();
    }

    drive() {
        console.log('[drive]: Rrrrrrrrrrrrrrrrr');
    }
}