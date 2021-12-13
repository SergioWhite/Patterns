import {PowerPerson} from "./PowerPerson";

export class Orc extends PowerPerson {
    constructor() {
        super();
        this.description = 'Orc';
    }

    power(): number {
        return 200;
    }
}