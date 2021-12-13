import {Pizza} from "./Pizza";

export abstract class PizzaStore {
    orderPizza(type: string): Pizza {
        let pizza: Pizza;

        pizza = this.createPizza(type);

        pizza.prepare();
        pizza.done();

        return pizza;
    }

    protected abstract createPizza(type: string): Pizza;
}