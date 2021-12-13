import {IVoice} from "./IVoice";

export class PaladinVoice implements IVoice {
    voice() {
        console.log('[voice]: I am a paladin.');
    }
}