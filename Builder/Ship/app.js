var PirateShipBuilder = /** @class */ (function () {
    function PirateShipBuilder() {
        this.reset();
    }
    PirateShipBuilder.prototype.reset = function () {
        this.pirateShip = new PirateShip();
    };
    PirateShipBuilder.prototype.produceHull = function () {
        this.pirateShip.add('Hull: +50');
    };
    PirateShipBuilder.prototype.producePlating = function () {
        this.pirateShip.add('Plating: +30');
    };
    PirateShipBuilder.prototype.produceDeck = function () {
        this.pirateShip.add('Deck: +20');
    };
    PirateShipBuilder.prototype.producePlatform = function () {
        this.pirateShip.add('Platform: +30');
    };
    PirateShipBuilder.prototype.produceInnerBottom = function () {
        this.pirateShip.add('InnerBottom: +20');
    };
    PirateShipBuilder.prototype.produceLongitudinalWatertightBulkheads = function () {
        this.pirateShip.add('LongitudinalWatertightBulkheads: +20');
    };
    PirateShipBuilder.prototype.produceTransverseWatertightBulkheads = function () {
        this.pirateShip.add('TransverseWatertightBulkheads: +20');
    };
    PirateShipBuilder.prototype.produceStraightSail = function () {
        this.pirateShip.add('StraightSail: +10');
    };
    PirateShipBuilder.prototype.produceObliqueSail = function () {
        this.pirateShip.add('ObliqueSail: +10');
    };
    PirateShipBuilder.prototype.getShip = function () {
        var pirateShip = this.pirateShip;
        this.reset();
        return pirateShip;
    };
    return PirateShipBuilder;
}());
var PirateShip = /** @class */ (function () {
    function PirateShip() {
        this.parts = [];
    }
    PirateShip.prototype.add = function (part) {
        this.parts.push(part);
    };
    PirateShip.prototype.listParts = function () {
        console.log("Pirate ship parts: " + this.parts.join(', ') + "\n");
    };
    return PirateShip;
}());
var Jack = /** @class */ (function () {
    function Jack() {
    }
    Jack.prototype.setShipBuilder = function (shipBuilder) {
        this.shipBuilder = shipBuilder;
    };
    Jack.prototype.buildPirateBoat = function () {
        this.shipBuilder.produceHull();
        this.shipBuilder.producePlating();
        this.shipBuilder.produceStraightSail();
    };
    Jack.prototype.buildLightPirateShip = function () {
        this.shipBuilder.produceHull();
        this.shipBuilder.producePlating();
        this.shipBuilder.producePlatform();
        this.shipBuilder.produceInnerBottom();
        this.shipBuilder.produceStraightSail();
        this.shipBuilder.produceObliqueSail();
    };
    Jack.prototype.buildPirateShip = function () {
        this.shipBuilder.produceHull();
        this.shipBuilder.producePlating();
        this.shipBuilder.produceDeck();
        this.shipBuilder.producePlatform();
        this.shipBuilder.produceInnerBottom();
        this.shipBuilder.produceLongitudinalWatertightBulkheads();
        this.shipBuilder.produceTransverseWatertightBulkheads();
        this.shipBuilder.produceStraightSail();
        this.shipBuilder.produceObliqueSail();
    };
    Jack.prototype.buildBigPirateShip = function () {
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
    };
    return Jack;
}());
function clientCode(jack) {
    var pirateShipBuilder = new PirateShipBuilder();
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
var jack = new Jack();
clientCode(jack);
