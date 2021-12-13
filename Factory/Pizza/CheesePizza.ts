import {Pizza} from "./Pizza";
import {PizzzaIngredientFactory} from "./PizzzaIngredientFactory";

export class CheesePizza extends Pizza {
    ingredientFactory: PizzzaIngredientFactory;

    constructor(ingredientFactory: PizzzaIngredientFactory) {
        super();
        this.ingredientFactory = ingredientFactory
    }

    prepare() {
        console.log(`Preparing ${this.name}`);
        this.dough = this.ingredientFactory.createDough();
        this.sauce = this.ingredientFactory.createSauce();
        this.cheese = this.ingredientFactory.createCheese();
    }
}