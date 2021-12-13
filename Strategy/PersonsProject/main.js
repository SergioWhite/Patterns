"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Paladin_1 = require("./Paladin");
const Orc_1 = require("./Orc");
const LizardMan_1 = require("./LizardMan");
let persons = [
    new Paladin_1.Paladin(),
    new Orc_1.Orc(),
    new LizardMan_1.LizardMan(),
];
for (const person of persons) {
    person.voice();
    person.fight();
    person.teleport();
    console.log('-------');
}
