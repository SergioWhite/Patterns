import {CondimentDecorator} from "./CondimentDecorator";
import {Beverage} from "./Beverage";

export class Whip extends CondimentDecorator {
    protected beverage: Beverage;

    constructor(beverage: Beverage) {
        super();
        this.beverage = beverage;
    }

    getDescription(): string {
        return this.beverage.getDescription() + ", Whip";
    }

    cost(): number {
        return .1 + this.beverage.cost();
    }
}