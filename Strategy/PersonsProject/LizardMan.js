"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LizardMan = void 0;
const Person_1 = require("./Person");
class LizardMan extends Person_1.Person {
    constructor() {
        super();
    }
    fight() {
        console.log('[fight]: Agh-agh!');
    }
}
exports.LizardMan = LizardMan;
