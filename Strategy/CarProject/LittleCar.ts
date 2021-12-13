import {Car} from "./Car";

export class LittleCar extends Car {
    constructor() {
        super();
    }

    drive() {
        console.log('[drive]: Vi-vi-vi-vi-vi');
    }
}