import {Person} from "./Person";

export class LizardMan extends Person {
    constructor() {
        super();
    }
    fight() {
        console.log('[fight]: Agh-agh!');
    }
}