import {IRelease} from "./IRelease";

export class StandardRelease implements IRelease {
    release() {
        console.log('[release]: Go away!');
    }
}