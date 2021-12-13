import {PizzzaIngredientFactory} from "./PizzzaIngredientFactory";

export class NYPizzzaIngredientFactory implements PizzzaIngredientFactory {
    createDough(): Dough {
        return new ThinCrustDough();
    }
    createSauce(): Sauce {
        return new MarinaraSuace();
    }
    createCheese(): Cheese {
        return new ReggianoCheese();
    }
    createVeggies(): Veggies[] {
        return [new Garlic(), new Onion(), new Mushroom(), new RedPepper()];
    }
    createPepperoni(): Pepperoni {
        return new SlicedPepperoni();
    }
    createClams(): Clams {
        return new FreshClams();
    }
}