import {IBeep} from "./IBeep";

export class SuperBeep implements IBeep {
    beep() {
        console.log('[beep]: BE-BEEP');
    }
}