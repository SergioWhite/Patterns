"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.King = void 0;
const RN = __importStar(require("./RandomNumber"));
class King {
    constructor() {
        this.observers = [];
        this.salary = this.tax = this.bonus = 0;
        this.toRemoveObserversIndexes = [];
        this.isNotifying = false;
    }
    registerObserver(o) {
        if (!this.observers.find(el => el.person === o.person)) {
            this.observers.push(o);
        }
        else {
            console.log(`${o} уже слушает указы Короля!`);
        }
    }
    removeObserver(o) {
        const oIndex = this.observers.findIndex(el => el.person === o.person);
        if (!~oIndex) {
            console.log(`Нельзя заставить ${o.person} перестать слушать Короля. Он его и так не слушает.`);
        }
        else {
            if (!this.isNotifying) {
                this.observers.splice(oIndex, 1);
            }
            else {
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
exports.King = King;
