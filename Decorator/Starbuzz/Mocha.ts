import {CondimentDecorator} from "./CondimentDecorator";
import {Beverage} from "./Beverage";

export class Mocha extends CondimentDecorator {
    protected beverage: Beverage;

    constructor(beverage: Beverage) {
        super();
        this.beverage = beverage;
    }

    getDescription(): string {
        return this.beverage.getDescription() + ", Mocha";
    }

    cost(): number {
        return .20 + this.beverage.cost();
    }
}