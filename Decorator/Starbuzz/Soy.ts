import {CondimentDecorator} from "./CondimentDecorator";
import {Beverage} from "./Beverage";

export class Soy extends CondimentDecorator {
    protected beverage: Beverage;

    constructor(beverage: Beverage) {
        super();
        this.beverage = beverage;
    }

    getDescription(): string {
        return this.beverage.getDescription() + ", Soy";
    }

    cost(): number {
        return .15 + this.beverage.cost();
    }
}