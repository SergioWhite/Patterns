import {PizzaStore} from "./PizzaStore";
import {CaliforniaCheesePizza} from "./CaliforniaCheesePizza";
import {CaliforniaVeggiePizza} from "./CaliforniaVeggiePizza";
import {CaliforniaClamPizza} from "./CaliforniaClamPizza";
import {CaliforniaPepperoniPizza} from "./CaliforniaPepperoniPizza";
import {CaliforniaSimplePizza} from "./CaliforniaSimplePizza";
import {Pizza} from "./Pizza";

export class CaliforniaPizzaStore extends PizzaStore {
    createPizza(type: string): Pizza {
        if (type === 'cheese') {
            return new CaliforniaCheesePizza();
        } else if (type === 'veggie') {
            return new CaliforniaVeggiePizza();
        } else if (type === 'clam') {
            return new CaliforniaClamPizza();
        } else if (type === 'pepperoni') {
            return new CaliforniaPepperoniPizza();
        }
        return new CaliforniaSimplePizza();
    }
}