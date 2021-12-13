import {AmmunitionDecorator} from "./AmmunitionDecorator";
import {PowerPerson} from "./PowerPerson";

export class FireRain extends AmmunitionDecorator {
    protected powerPerson: PowerPerson;

    constructor(powerPerson: PowerPerson) {
        super();
        this.powerPerson = powerPerson;
    }

    getDescription(): string {
        return this.powerPerson.getDescription() + ' + FireRain';
    }

    power(): number {
        return this.powerPerson.power() + 500;
    }
}