import {Observer} from "./Observer";
import {Voice} from "./Voice";
import {Subject} from "./Subject";
import {Person} from "./Person";
import * as RN from "./RandomNumber";

export class Paladin extends Observer implements Voice, Person {
    money: number;
    salaryRation: number;
    limitOfPatience: number;

    king: Subject;

    constructor(person: string, king: Subject) {
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
        } else if (currentMoney > 80) {
            message = 'Куплю новые доспехи для своего коня!';
        } else if (currentMoney > 60) {
            message = 'Чувствую себя крестьянином...';
        } else if (currentMoney > 40) {
            message = 'Ещё одна такая выходка, и ноги моей в этом городе не будет!';
        } else if (currentMoney < 40) {
            message = 'Пора обзавестись собственным замком!';
            this.king.removeObserver(this);
        }
        this.voice(message);
        console.log();
    }

    voice(message: string) {
        console.log(`[паладин ${this.person}]: ${message}`);
    }

}