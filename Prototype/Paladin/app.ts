class PaladinPrototype {
    public power: number;
    public dateOfBorn: object;
    public animal: Dog;

    public clone(): this {
        const clone = Object.create(this);
        clone.dateOfBorn = Object.create(this.dateOfBorn);
        clone.animal = {
            ...this.animal,
            paladinPrototype: { ...this },
        };
        return clone;
    }
}

class Dog {
    public paladinPrototype;
    constructor(paladinPrototype: PaladinPrototype) {
        this.paladinPrototype = paladinPrototype;
    }
}

function clientCode() {
    const p1 = new PaladinPrototype();
    p1.power = 245;
    p1.dateOfBorn = new Date();
    p1.animal = new Dog(p1);

    const p2 = p1.clone();
    console.log(p1);
    console.log(p2);
    console.log(p1.power === p2.power);
    console.log(p1.dateOfBorn === p2.dateOfBorn);
    console.log(p1.animal === p2.animal);
    console.log(p1.animal.paladinPrototype === p2.animal.paladinPrototype);
}

clientCode();
