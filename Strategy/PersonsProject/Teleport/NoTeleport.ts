import {ITeleport} from "./ITeleport";

export class NoTeleport implements ITeleport {
    teleport() {
        console.log('[teleport]:');
    }
}