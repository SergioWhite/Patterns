import {Paladin} from "./Paladin";
import {Orc} from "./Orc";
import {LizardMan} from "./LizardMan";
import {Person} from "./Person";

let persons: Person[] = [
    new Paladin(),
    new Orc(),
    new LizardMan(),
];

for (const person of persons) {
    person.voice();
    person.fight();
    person.teleport();
    console.log('-------');
}