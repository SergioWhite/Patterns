interface ArmorBuilder {
    produceHelmet(): void;
    produceChain(): void;
    produceShields(): void;
    produceElbowPads(): void;
    produceKneePads(): void;
    produceShoes(): void;
}

class PaladinArmorBuilder implements ArmorBuilder {
    private armor: PaladinArmor;

    constructor() {
        this.reset();
    }
    public reset(): void {
        this.armor = new PaladinArmor;
    }
    public produceHelmet(): void {
        this.armor.add('Helmet: +20');
    }
    public produceChain(): void {
        this.armor.add('Chain: +40');
    }
    public produceShields(): void {
        this.armor.add('Shields: +50');
    }
    public produceElbowPads(): void {
        this.armor.add('Elbow pads: +10');
    }
    public produceKneePads(): void {
        this.armor.add('Knee pads: +10');
    }
    public produceShoes(): void {
        this.armor.add('Shoes: +10');
    }
    public getProduct(): PaladinArmor {
        const result = this.armor;
        this.reset();
        return result;
    }
}

class PaladinArmor {
    private parts: string[] = [];

    public add(part: string): void {
        this.parts.push(part);
    }
    public listParts(): void {
        console.log(`Paladin armor parts: ${this.parts.join(', ')}\n`);
    }
}

class Harad {
    private armorBuilder: ArmorBuilder;

    public setBuilder(armorBuilder: ArmorBuilder): void {
        this.armorBuilder = armorBuilder;
    }
    public buildLightPaladinArmor(): void {
        this.armorBuilder.produceHelmet();
        this.armorBuilder.produceShields();
        this.armorBuilder.produceShoes();
    }
    public buildHeavyPaladinArmor(): void {
        this.armorBuilder.produceHelmet();
        this.armorBuilder.produceChain();
        this.armorBuilder.produceShields();
        this.armorBuilder.produceElbowPads();
        this.armorBuilder.produceKneePads();
        this.armorBuilder.produceShoes();
    }
}

function clientCode(blacksmith: Harad) {
    const paladinArmorBuilder = new PaladinArmorBuilder();
    blacksmith.setBuilder(paladinArmorBuilder);

    console.log('Light armor:');
    blacksmith.buildLightPaladinArmor();
    paladinArmorBuilder.getProduct().listParts();

    console.log('Heavy armor:');
    blacksmith.buildHeavyPaladinArmor();
    paladinArmorBuilder.getProduct().listParts();
}

const blacksmith = new Harad();
clientCode(blacksmith);