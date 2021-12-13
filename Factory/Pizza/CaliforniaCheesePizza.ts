import {Pizza} from "./Pizza";

export class CaliforniaCheesePizza extends Pizza {
    constructor() {
        super();
        this.name = 'California Cheese Pizza';
    }

    cut() {
        console.log('Cutting the pizza into square slices');
    }
}