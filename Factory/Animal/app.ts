abstract class AnimalCreator {
    public abstract factoryMethod(): Animal;

    public voice(): string {
        const animal = this.factoryMethod();
        return animal.voice();
    }
}

class CowAnimalCreator extends AnimalCreator {
    public factoryMethod(): Animal {
        return new CowAnimal();
    }
}

class SheepAnimalCreator extends AnimalCreator {
    public factoryMethod(): Animal {
        return new SheepAnimal();
    }
}

class ChickenAnimalCreator extends AnimalCreator {
    public factoryMethod(): Animal {
        return new ChickenAnimal();
    }
}

interface Animal {
    voice(): string;
}

class CowAnimal implements Animal {
    public voice(): string {
        return 'Muu.'
    }
}

class SheepAnimal implements Animal {
    public voice(): string {
        return 'Mee.'
    }
}

class ChickenAnimal implements Animal {
    public voice(): string {
        return 'Co-co-co.'
    }
}

function clientCode(animalCreator: AnimalCreator) {
    console.log(animalCreator.voice());
}

console.log('Cow:');
clientCode(new CowAnimalCreator());
console.log();

console.log('Sheep:');
clientCode(new SheepAnimalCreator());
console.log();

console.log('Chicken:');
clientCode(new ChickenAnimalCreator());
console.log();