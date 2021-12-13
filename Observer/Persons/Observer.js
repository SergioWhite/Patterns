"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Observer = void 0;
class Observer {
    constructor(person) {
        this.person = person;
        this.salary = this.tax = this.bonus = this.money = this.salaryRation = 0;
    }
    update(salary, tax, bonus) {
        this.salary = salary;
        this.tax = tax;
        this.bonus = bonus;
        this.money += (this.salary - this.tax + this.bonus) * this.salaryRation;
        this.reaction();
    }
}
exports.Observer = Observer;
