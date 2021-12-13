import {Beverage} from "./Beverage";
import {Espresso} from "./Espresso";
import {DarkRoast} from "./DarkRoast";
import {Mocha} from "./Mocha";
import {Whip} from "./Whip";
import {Soy} from "./Soy";
import {HouseBlend} from "./HouseBlend";

const beverage: Beverage = new Espresso();
console.log(`${beverage.getDescription()} $${beverage.cost()}`);

let beverage2: Beverage = new DarkRoast();
beverage2 = new Mocha(beverage2);
beverage2 = new Mocha(beverage2);
beverage2 = new Whip(beverage2);
console.log(`${beverage2.getDescription()} $${beverage2.cost()}`);

let beverage3: Beverage = new HouseBlend();
beverage3 = new Soy(beverage3);
beverage3 = new Mocha(beverage3);
beverage3 = new Whip(beverage3);
console.log(`${beverage3.getDescription()} $${beverage3.cost()}`);

let beverage4: Beverage = new Whip(new Mocha(new Mocha(new DarkRoast())));
console.log(`${beverage4.getDescription()} $${beverage4.cost()}`);

let beverage5: Beverage = new Whip(new Soy(new Mocha(new HouseBlend())));
console.log(`${beverage5.getDescription()} $${beverage5.cost()}`);

