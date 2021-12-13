interface ShipBuilder {
    produceHull(): void;
    producePlating(): void;
    produceDeck(): void;
    producePlatform(): void;
    produceInnerBottom(): void;
    produceLongitudinalWatertightBulkheads(): void;
    produceTransverseWatertightBulkheads(): void;
    produceStraightSail(): void;
    produceObliqueSail(): void;
}

class PirateShipBuilder implements ShipBuilder {
    private pirateShip: PirateShip;

    constructor() {
        this.reset();
    }
    public reset() {
        this.pirateShip = new PirateShip();
    }
    public produceHull(): void {
        this.pirateShip.add('Hull: +50');
    }
    public producePlating(): void {
        this.pirateShip.add('Plating: +30');
    }
    public produceDeck(): void {
        this.pirateShip.add('Deck: +20');
    }
    public producePlatform(): void {
        this.pirateShip.add('Platform: +30');
    }
    public produceInnerBottom(): void {
        this.pirateShip.add('InnerBottom: +20');
    }
    public produceLongitudinalWatertightBulkheads(): void {
        this.pirateShip.add('LongitudinalWatertightBulkheads: +20');
    }
    public produceTransverseWatertightBulkheads(): void {
        this.pirateShip.add('TransverseWatertightBulkheads: +20');
    }
    public produceStraightSail(): void {
        this.pirateShip.add('StraightSail: +10');
    }
    public produceObliqueSail(): void {
        this.pirateShip.add('ObliqueSail: +10');
    }
    public getShip(): PirateShip {
        const pirateShip = this.pirateShip;
        this.reset();
        return pirateShip;
    }
}

class PirateShip {
    private parts: string[] = [];

    public add(part: string): void {
        this.parts.push(part);
    }
    public listParts(): void {
        console.log(`Pirate ship parts: ${this.parts.join(', ')}\n`);
    }
}

class Jack {
    private shipBuilder: ShipBuilder;

    public setShipBuilder(shipBuilder: ShipBuilder): void {
        this.shipBuilder = shipBuilder;
    }
    public buildPirateBoat(): void {
        this.shipBuilder.produceHull();
        this.shipBuilder.producePlating();
        this.shipBuilder.produceStraightSail();
    }
    public buildLightPirateShip(): void {
        this.shipBuilder.produceHull();
        this.shipBuilder.producePlating();
        this.shipBuilder.producePlatform();
        this.shipBuilder.produceInnerBottom();
        this.shipBuilder.produceStraightSail();
        this.shipBuilder.produceObliqueSail();
    }
    public buildPirateShip(): void {
        this.shipBuilder.produceHull();
        this.shipBuilder.producePlating();
        this.shipBuilder.produceDeck();
        this.shipBuilder.producePlatform();
        this.shipBuilder.produceInnerBottom();
        this.shipBuilder.produceLongitudinalWatertightBulkheads();
        this.shipBuilder.produceTransverseWatertightBulkheads();
        this.shipBuilder.produceStraightSail();
        this.shipBuilder.produceObliqueSail();
    }
    public buildBigPirateShip(): void {
        this.shipBuilder.produceHull();
        this.shipBuilder.producePlating();
        this.shipBuilder.produceDeck();
        this.shipBuilder.produceDeck();
        this.shipBuilder.produceDeck();
        this.shipBuilder.producePlatform();
        this.shipBuilder.produceInnerBottom();
        this.shipBuilder.produceLongitudinalWatertightBulkheads();
        this.shipBuilder.produceLongitudinalWatertightBulkheads();
        this.shipBuilder.produceTransverseWatertightBulkheads();
        this.shipBuilder.produceTransverseWatertightBulkheads();
        this.shipBuilder.produceStraightSail();
        this.shipBuilder.produceStraightSail();
        this.shipBuilder.produceStraightSail();
        this.shipBuilder.produceObliqueSail();
        this.shipBuilder.produceObliqueSail();
        this.shipBuilder.produceObliqueSail();
        this.shipBuilder.produceObliqueSail();
    }
}

function clientCode(jack: Jack) {
    const pirateShipBuilder = new PirateShipBuilder();
    jack.setShipBuilder(pirateShipBuilder);

    console.log('Pirate boat:');
    jack.buildPirateBoat();
    pirateShipBuilder.getShip().listParts();
    console.log('\n');

    console.log('Light pirate ship:');
    jack.buildLightPirateShip();
    pirateShipBuilder.getShip().listParts();
    console.log('\n');

    console.log('Pirate ship:');
    jack.buildPirateShip();
    pirateShipBuilder.getShip().listParts();
    console.log('\n');

    console.log('Big pirate ship:');
    jack.buildBigPirateShip();
    pirateShipBuilder.getShip().listParts();
    console.log();
}

const jack = new Jack();
clientCode(jack);