import {IVoice} from "./IVoice";

export class NoVoice implements IVoice {
    voice() {
        console.log('[voice]:');
    }
}