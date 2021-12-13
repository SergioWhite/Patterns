interface PersonFactory {
    createCharacter(): Character;
    createSword(): Sword;
    createAnimal(): Animal;
}

class PaladinPersonFactory implements PersonFactory {
    public createCharacter(): Character {
        return new PaladinCharacter();
    }
    public createSword(): Sword {
        return new PaladinSword();
    }
    public createAnimal(): Animal {
        return new PaladinAnimal();
    }
}

class FarmerPersonFactory implements PersonFactory {
    public createCharacter(): Character {
        return new FarmerCharacter();
    }
    public createSword(): Sword {
        return new FarmerSword();
    }
    public createAnimal(): Animal {
        return new FarmerAnimal();
    }
}

class OrcPersonFactory implements PersonFactory {
    public createCharacter(): Character {
        return new OrcCharacter();
    }
    public createSword(): Sword {
        return new OrcSword();
    }
    public createAnimal(): Animal {
        return new OrcAnimal();
    }
}

interface Character {
    create(): string;
    callAnimal(animal: Animal);
    swingSword(sword: Sword);
}

class PaladinCharacter implements Character {
    public create() {
        return `Paladin was created.`
    }
    public callAnimal(animal: Animal) {
        console.log(`Paladin's animal was called`);
        console.log(animal.voice());
    }
    public swingSword(sword: Sword) {
        console.log(`I drew my paladin's sword!`);
        sword.use();
    }
}

class FarmerCharacter implements Character {
    public create() {
        return `Farmer was created.`
    }
    public callAnimal(animal: Animal) {
        console.log(`Farmer's animal was called`);
        console.log(animal.voice());
    }
    public swingSword(sword: Sword) {
        console.log(`I drew my farmer's sword!`);
        sword.use();
    }
}

class OrcCharacter implements Character {
    public create() {
        return `Orc was created.`
    }
    public callAnimal(animal: Animal) {
        console.log(`Orc's animal was called`);
        console.log(animal.voice());
    }
    public swingSword(sword: Sword) {
        console.log(`I drew my orc's sword!`);
        sword.use();
    }
}

interface Sword {
    create(): string;
    use(): string;
}

class PaladinSword implements Sword {
    public create() {
        return `Paladin's sword was created`;
    }
    public use() {
        return `Made 20 swings of the Paladin sword`;
    }
}

class FarmerSword implements Sword {
    public create() {
        return `Farmer's little sword was created`;
    }
    public use() {
        return `Made 10 swings of the farmer little sword`;
    }
}

class OrcSword implements Sword {
    public create() {
        return `Big orc's sword was created`;
    }
    public use() {
        return `Made 17 swings of the big orc's sword`;
    }
}

interface Animal {
    create(): string;
    voice(): string;
}

class PaladinAnimal implements Animal {
    public create() {
        return `Paladin's horse was created`;
    }
    public voice(): string {
        return 'Igo-go!'
    }
}

class FarmerAnimal implements Animal {
    public create() {
        return `Farmer's sheep was created`;
    }
    public voice(): string {
        return 'Be-e...'
    }
}

class OrcAnimal implements Animal {
    public create() {
        return `Orc's varg was created`;
    }
    public voice(): string {
        return 'Rrrr.'
    }
}

function clientCode(factory: PersonFactory) {
    const character = factory.createCharacter();
    const sword = factory.createSword();
    const animal = factory.createAnimal();

    console.log(character.create());
    console.log(sword.create());
    console.log(animal.create());

    character.callAnimal(animal);
    character.swingSword(sword);
}

console.log('Paladin:');
clientCode(new PaladinPersonFactory());
console.log();
console.log('--------------------------------');
console.log();

console.log('Farmer:');
clientCode(new FarmerPersonFactory());
console.log();
console.log('--------------------------------');
console.log();

console.log('Orc:');
clientCode(new OrcPersonFactory());

