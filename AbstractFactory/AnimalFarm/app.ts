interface AnimalFactory {
    createCow(): Cow;
    createSheep(): Sheep;
    createChicken(): Chicken;
}

class SekobAnimalFacory implements AnimalFactory {
    public createCow(): Cow {
        return new SekobCow();
    }
    public createSheep(): Sheep {
        return new SekobSheep();
    }
    public createChicken(): Chicken {
        return new SekobChicken();
    }
}

class LobartAnimalFactory implements AnimalFactory {
    public createCow(): Cow {
        return new LobartCow();
    }
    public createSheep(): Sheep {
        return new LobartSheep();
    }
    public createChicken(): Chicken {
        return new LobartChicken();
    }
}

interface Cow {
    create(): string;
    touchSheep(sheep: Sheep): string;
    touchChicken(chicken: Chicken): string;
}

class SekobCow implements Cow {
    public create(): string {
        return `A Sekob's cow was created.`;
    }
    public touchSheep(sheep: Sheep): string {
        const result = sheep.touchedByCow();
        return `Sekob's sheep was touched. ${result}`;
    }
    public touchChicken(chicken: Chicken): string {
        const result = chicken.touchedByCow();
        return `Sekob's chicken was touched. ${result}`;
    }
}

class LobartCow implements Cow {
    public create(): string {
        return `A Lobart's cow was created.`;
    }
    public touchSheep(sheep: Sheep): string {
        const result = sheep.touchedByCow();
        return `Lobart's sheep was touched. ${result}`;
    }
    public touchChicken(chicken: Chicken): string {
        const result = chicken.touchedByCow();
        return `Lobart's chicken was touched. ${result}`;
    }
}

interface Sheep {
    create(): string;
    touchedByCow(): string;
}

class SekobSheep implements Sheep {
    public create(): string {
        return `A Sekob's sheep was created.`;
    }
    public touchedByCow(): string {
        return 'Fuck off!'
    }
}

class LobartSheep implements Sheep {
    public create(): string {
        return `A Lobart's sheep was created.`;
    }
    public touchedByCow(): string {
        return 'Oh noooo! Help me, please!'
    }
}

interface Chicken {
    create(): string;
    touchedByCow(): string;
}

class SekobChicken implements Chicken {
    public create(): string {
        return `A Sekob's chicken was created.`;
    }
    public touchedByCow(): string {
        return 'What the fuck?!'
    }
}

class LobartChicken implements Chicken {
    public create(): string {
        return `A Lobart's chicken was created.`;
    }
    public touchedByCow(): string {
        return 'Oh my god! Run away!'
    }
}

function clientCode(factory: AnimalFactory) {
    const cow = factory.createCow();
    const sheep = factory.createSheep();
    const chicken = factory.createChicken();

    console.log(cow.create());
    console.log(sheep.create());
    console.log(chicken.create());

    console.log(cow.touchSheep(sheep));
    console.log(cow.touchChicken(chicken));
}

console.log(`Sekob's farm:`);
clientCode(new SekobAnimalFacory());
console.log();
console.log('-------------------------------------------');
console.log();
console.log(`Lobart's farm:`);
clientCode(new LobartAnimalFactory());
