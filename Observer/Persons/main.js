"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const King_1 = require("./King");
const Peasant_1 = require("./Peasant");
const Paladin_1 = require("./Paladin");
const king = new King_1.King();
const persons = [
    new Peasant_1.Peasant('Харад', king),
    new Paladin_1.Paladin('Парсиваль', king),
    new Paladin_1.Paladin('Удар', king),
    new Peasant_1.Peasant('Лобарт', king),
    new Paladin_1.Paladin('Андре', king),
    new Peasant_1.Peasant('Бронко', king),
];
king.decree();
king.decree();
king.decree();
