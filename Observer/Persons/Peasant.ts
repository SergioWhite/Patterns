import {Observer} from "./Observer";
import {Voice} from "./Voice";
import {Subject} from "./Subject";
import {Person} from "./Person";
import * as RN from "./RandomNumber";

export class Peasant extends Observer implements Voice, Person {
    money: number;
    salaryRation: number;
    limitOfPatience: number;

    king: Subject;

    constructor(person: string, king: Subject) {
        super(person);

        this.money = RN.getRandomNumber(0, 100);
        this.salaryRation = RN.getRandomCoefficient(0, 1.5);
        this.limitOfPatience = RN.getRandomNumber(-100,-50);

        this.king = king;
        this.king.registerObserver(this);
    }

    reaction() {
        const currentMoney = (this.salary - this.tax + this.bonus) * this.salaryRation ^ 0;
        this.voice(`Я получил ${currentMoney}`);
        let message = '';
        if (currentMoney > 20) {
            message = 'Закажу себе медовухи!';
        } else if (currentMoney > 10) {
            message = 'Куплю себе чёрствого хлеба!';
        } else if (currentMoney > 0) {
            message = 'Обойдусь в этом месяце без лишних трат.';
        } else if (currentMoney > -10) {
            message = 'Опять идти к ростовщику. Лема-ар!';
        } else if (currentMoney < -10) {
            message = 'Ухожу в соседнюю деревню пасти овец!';
            this.king.removeObserver(this);
        }
        this.voice(message);
        console.log();
    }

    voice(message: string) {
        console.log(`[крестьянин ${this.person}]: ${message}`);
    }

}