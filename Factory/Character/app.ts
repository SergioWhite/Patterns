abstract class CharacterCreator {
    public abstract factoryMethod(): Character;
    public voice(): string {
        const character = this.factoryMethod();
        return character.voice();
    }
}

class PaladinCharacterCreator extends CharacterCreator {
    public factoryMethod(): Character {
        return new PaladinCharacter();
    }
}

class OrcCharacterCreator extends CharacterCreator {
    public factoryMethod(): Character {
        return new OrcCharacter();
    }
}

interface Character {
    voice(): string;
}

class PaladinCharacter implements Character {
    public voice(): string {
        return 'I am Paladin and the light of the Innos are joining me in my way!'
    }
}

class OrcCharacter implements Character {
    public voice(): string {
        return 'Mu-cha-cha.'
    }
}

function clientCode(creator: CharacterCreator) {
    console.log(creator.voice());
}

clientCode(new PaladinCharacterCreator());
clientCode(new OrcCharacterCreator());