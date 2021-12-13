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
exports.Paladin = void 0;
const Observer_1 = require("./Observer");
const RN = __importStar(require("./RandomNumber"));
class Paladin extends Observer_1.Observer {
    constructor(person, king) {
        super(person);
        this.money = RN.getRandomNumber(0, 1000);
        this.salaryRation = RN.getRandomCoefficient(2, 5);
        this.limitOfPatience = RN.getRandomNumber(100, 300);
        this.king = king;
        this.king.registerObserver(this);
    }
    reaction() {
        const currentMoney = (this.salary - this.tax + this.bonus) * this.salaryRation ^ 0;
        this.voice(`Я получил ${currentMoney}`);
        let message = '';
        if (currentMoney > 100) {
            message = 'Куплю себе новый меч и доспехи!';
        }
        else if (currentMoney > 80) {
            message = 'Куплю новые доспехи для своего коня!';
        }
        else if (currentMoney > 60) {
            message = 'Чувствую себя крестьянином...';
        }
        else if (currentMoney > 40) {
            message = 'Ещё одна такая выходка, и ноги моей в этом городе не будет!';
        }
        else if (currentMoney < 40) {
            message = 'Пора обзавестись собственным замком!';
            this.king.removeObserver(this);
        }
        this.voice(message);
        console.log();
    }
    voice(message) {
        console.log(`[паладин ${this.person}]: ${message}`);
    }
}
exports.Paladin = Paladin;
