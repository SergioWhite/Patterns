var SekobAnimalFacory = /** @class */ (function () {
    function SekobAnimalFacory() {
    }
    SekobAnimalFacory.prototype.createCow = function () {
        return new SekobCow();
    };
    SekobAnimalFacory.prototype.createSheep = function () {
        return new SekobSheep();
    };
    SekobAnimalFacory.prototype.createChicken = function () {
        return new SekobChicken();
    };
    return SekobAnimalFacory;
}());
var LobartAnimalFactory = /** @class */ (function () {
    function LobartAnimalFactory() {
    }
    LobartAnimalFactory.prototype.createCow = function () {
        return new LobartCow();
    };
    LobartAnimalFactory.prototype.createSheep = function () {
        return new LobartSheep();
    };
    LobartAnimalFactory.prototype.createChicken = function () {
        return new LobartChicken();
    };
    return LobartAnimalFactory;
}());
var SekobCow = /** @class */ (function () {
    function SekobCow() {
    }
    SekobCow.prototype.create = function () {
        return "A Sekob's cow was created.";
    };
    SekobCow.prototype.touchSheep = function (sheep) {
        var result = sheep.touchedByCow();
        return "Sekob's sheep was touched. " + result;
    };
    SekobCow.prototype.touchChicken = function (chicken) {
        var result = chicken.touchedByCow();
        return "Sekob's chicken was touched. " + result;
    };
    return SekobCow;
}());
var LobartCow = /** @class */ (function () {
    function LobartCow() {
    }
    LobartCow.prototype.create = function () {
        return "A Lobart's cow was created.";
    };
    LobartCow.prototype.touchSheep = function (sheep) {
        var result = sheep.touchedByCow();
        return "Lobart's sheep was touched. " + result;
    };
    LobartCow.prototype.touchChicken = function (chicken) {
        var result = chicken.touchedByCow();
        return "Lobart's chicken was touched. " + result;
    };
    return LobartCow;
}());
var SekobSheep = /** @class */ (function () {
    function SekobSheep() {
    }
    SekobSheep.prototype.create = function () {
        return "A Sekob's sheep was created.";
    };
    SekobSheep.prototype.touchedByCow = function () {
        return 'Fuck off!';
    };
    return SekobSheep;
}());
var LobartSheep = /** @class */ (function () {
    function LobartSheep() {
    }
    LobartSheep.prototype.create = function () {
        return "A Lobart's sheep was created.";
    };
    LobartSheep.prototype.touchedByCow = function () {
        return 'Oh noooo! Help me, please!';
    };
    return LobartSheep;
}());
var SekobChicken = /** @class */ (function () {
    function SekobChicken() {
    }
    SekobChicken.prototype.create = function () {
        return "A Sekob's chicken was created.";
    };
    SekobChicken.prototype.touchedByCow = function () {
        return 'What the fuck?!';
    };
    return SekobChicken;
}());
var LobartChicken = /** @class */ (function () {
    function LobartChicken() {
    }
    LobartChicken.prototype.create = function () {
        return "A Lobart's chicken was created.";
    };
    LobartChicken.prototype.touchedByCow = function () {
        return 'Oh my god! Run away!';
    };
    return LobartChicken;
}());
function clientCode(factory) {
    var cow = factory.createCow();
    var sheep = factory.createSheep();
    var chicken = factory.createChicken();
    console.log(cow.create());
    console.log(sheep.create());
    console.log(chicken.create());
    console.log(cow.touchSheep(sheep));
    console.log(cow.touchChicken(chicken));
}
console.log("Sekob's farm:");
clientCode(new SekobAnimalFacory());
console.log();
console.log('-------------------------------------------');
console.log();
console.log("Lobart's farm:");
clientCode(new LobartAnimalFactory());
