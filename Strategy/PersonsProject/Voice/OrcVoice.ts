import {IVoice} from "./IVoice";

export class OrcVoice implements IVoice {
    voice() {
        console.log('[voice]: I am an orc.');
    }
}