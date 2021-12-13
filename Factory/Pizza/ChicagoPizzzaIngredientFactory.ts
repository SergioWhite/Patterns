import {PizzzaIngredientFactory} from "./PizzzaIngredientFactory";

export class NYPizzzaIngredientFactory implements PizzzaIngredientFactory {
    createDough(): Dough {
        return new ThickCrustDough();
    }
    createSauce(): Sauce {
        return new PlumTomatoSuace();
    }
    createCheese(): Cheese {
        return new MozzarellaCheese();
    }
    createVeggies(): Veggies[] {
        return [new EggPlant(), new Spinach(), new BlackOlives()];
    }
    createPepperoni(): Pepperoni {
        return new SlicedPepperoni();
    }
    createClams(): Clams {
        return new FrozenClams();
    }
}