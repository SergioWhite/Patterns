import {PizzaStore} from "./PizzaStore";
import {NYCheesePizza} from "./NYCheesePizza";
import {NYVeggiePizza} from "./NYVeggiePizza";
import {NYClamPizza} from "./NYClamPizza";
import {NYPepperoniPizza} from "./NYPepperoniPizza";
import {NYSimplePizza} from "./NYSimplePizza";
import {Pizza} from "./Pizza";

export class NYPizzaStore extends PizzaStore {
    createPizza(type: string): Pizza {
        if (type === 'cheese') {
            return new NYCheesePizza();
        } else if (type === 'veggie') {
            return new NYVeggiePizza();
        } else if (type === 'clam') {
            return new NYClamPizza();
        } else if (type === 'pepperoni') {
            return new NYPepperoniPizza();
        }
        return new NYSimplePizza();
    }
}