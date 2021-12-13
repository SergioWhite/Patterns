import {PowerPerson} from "./PowerPerson";

export abstract class AmmunitionDecorator extends PowerPerson {
    abstract getDescription(): string;
}