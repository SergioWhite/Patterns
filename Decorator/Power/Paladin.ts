import {PowerPerson} from "./PowerPerson";

export class Paladin extends PowerPerson {
    constructor() {
        super();
        this.description = 'Paladin';
    }

    power(): number {
        return 150;
    }
}