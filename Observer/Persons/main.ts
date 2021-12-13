import {King} from "./King";
import {Person} from "./Person";
import {Peasant} from "./Peasant";
import {Paladin} from "./Paladin";

const king: King = new King();

const persons: Person[] = [
    new Peasant('Харад', king),
    new Paladin('Парсиваль', king),
    new Paladin('Удар', king),
    new Peasant('Лобарт', king),
    new Paladin('Андре', king),
    new Peasant('Бронко', king),
];

king.decree();
king.decree();
king.decree();