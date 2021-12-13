import {IRelease} from "./IRelease";

export class AggressiveRelease implements IRelease {
    release() {
        console.log('[release]: Fuck off!');
    }
}