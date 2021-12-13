export abstract class PowerPerson {
    protected description: string;

    protected constructor() {
        this.description = 'Unknown power person';
    }

    getDescription() {
        return this.description;
    }

    abstract power(): number;
}