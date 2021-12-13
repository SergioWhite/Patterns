import {PowerPerson} from "./PowerPerson";

export class Magician extends PowerPerson {
    constructor() {
        super();
        this.description = 'Magician';
    }

    power(): number {
        return 140;
    }
}