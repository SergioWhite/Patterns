export abstract class Observer {
    person: string;
    salary: number;
    tax: number;
    bonus: number;
    money: number;
    salaryRation: number;

    protected constructor(person: string) {
        this.person = person;
        this.salary = this.tax = this.bonus = this.money = this.salaryRation = 0;
    }

    update(salary: number, tax: number, bonus: number): void {
        this.salary = salary;
        this.tax = tax;
        this.bonus = bonus;
        this.money += (this.salary - this.tax + this.bonus) * this.salaryRation;
        this.reaction();
    }

    abstract reaction(): void;
}