export abstract class Pizza {
    protected name: string;
    protected dough: Dough;
    protected sauce: Sauce;
    protected veggies: Veggies[];
    protected cheese: Cheese;
    protected pepperoni: Pepperoni;
    protected clam: Clam;

    protected constructor() {
        this.name = 'Pizza';
    }

    abstract prepare(): void;

    bake(): void {
        console.log('Bake for 25 minutes at 350');
    }

    cut(): void {
        console.log('Cutting the pizza into diagonal slices');
    }

    box(): void {
        console.log('Place pizza in official PizzaStore box');
    }

    getName() {
         return this.name;
    }

    done(): void {
        console.log('Your pizza is done!');
    }
}