import {IBeep} from "./IBeep";

export class StandardBeep implements IBeep {
    beep() {
        console.log('[beep]: Beep.');
    }
}