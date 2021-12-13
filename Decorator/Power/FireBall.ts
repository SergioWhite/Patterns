import {AmmunitionDecorator} from "./AmmunitionDecorator";
import {PowerPerson} from "./PowerPerson";

export class FireBall extends AmmunitionDecorator {
    protected powerPerson: PowerPerson;

    constructor(powerPerson: PowerPerson) {
        super();
        this.powerPerson = powerPerson;
    }

    getDescription(): string {
        return this.powerPerson.getDescription() + ' + FireBall';
    }

    power(): number {
        return this.powerPerson.power() + 50;
    }
}