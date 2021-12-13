import {Subject} from "./Subject";
import {Observer} from "./Observer";
import * as RN from "./RandomNumber";

export class King implements Subject {
    observers: Observer[];
    toRemoveObserversIndexes: number[];
    salary: number;
    tax: number;
    bonus: number;
    isNotifying: boolean;

    constructor() {
        this.observers = [];
        this.salary = this.tax = this.bonus = 0;
        this.toRemoveObserversIndexes = [];
        this.isNotifying = false;
    }

    registerObserver(o: Observer) {
        if (!this.observers.find(el => el.person === o.person)) {
            this.observers.push(o);
        } else {
            console.log(`${o} уже слушает указы Короля!`);
        }
    }

    removeObserver(o: Observer) {
        const oIndex = this.observers.findIndex(el => el.person === o.person);
        if (!~oIndex) {
            console.log(`Нельзя заставить ${o.person} перестать слушать Короля. Он его и так не слушает.`);
        } else {
            if (!this.isNotifying) {
                this.observers.splice(oIndex, 1);
            } else {
                this.toRemoveObserversIndexes.push(oIndex);
            }
            console.log(`${o.person} перестал слушать указы Короля...`);
        }
    }

    removeRegularObserver() {
        for (const oIndex of this.toRemoveObserversIndexes) {
            this.observers.splice(oIndex, 1);
        }
        this.toRemoveObserversIndexes = [];
    }

    notifyObservers() {
        this.isNotifying = true;
        for (const o of this.observers) {
            o.update(this.salary, this.tax, this.bonus);
        }
        this.isNotifying = false;
        this.removeRegularObserver();
    }

    decree() {
        this.setMoneyRandom();
        console.log('Новый указ короля:');
        console.log(`--- Жалование: ${this.salary} ---`);
        console.log(`--- Королевские сборы: ${this.tax} ---`);
        console.log(`--- Подачка: ${this.bonus} ---`);
        console.log();
        this.notifyObservers();
    }

    setMoneyRandom() {
        this.salary = RN.getRandomNumber();
        this.tax = RN.getRandomNumber(10);
        this.bonus = RN.getRandomNumber(-20, 20);
    }
}