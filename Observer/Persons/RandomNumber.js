"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getRandomCoefficient = exports.getRandomNumber = void 0;
function getRandomNumber(min = -100, max = 100) {
    const dif = min > 0 ? max - min : max + min;
    return Math.random() * (dif) + max ^ 0;
}
exports.getRandomNumber = getRandomNumber;
function getRandomCoefficient(min = 0, max = 2) {
    const dif = min > 0 ? max - min : max + min;
    return Math.random() * (dif) + max;
}
exports.getRandomCoefficient = getRandomCoefficient;
