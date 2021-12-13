export abstract class Beverage {
    protected description: string;

    protected constructor() {
        this.description = 'Unknown Beverage';
    }

    getDescription(): string {
        return this.description;
    }

    abstract cost(): number;

}