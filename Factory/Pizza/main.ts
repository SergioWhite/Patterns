import {NYPizzaStore} from "./NYPizzaStore";
import {CaliforniaPizzaStore} from "./CaliforniaPizzaStore";

const nyPizzaStore: NYPizzaStore = new NYPizzaStore();
nyPizzaStore.orderPizza('cheese');

const californiaPizzaStore: CaliforniaPizconst zaStore = new CaliforniaPizzaStore();
californiaPizzaStore.orderPizza('pepperoni');

nyPizzaStore.orderPizza('nothing');
californiaPizzaStore.orderPizza('nothing');