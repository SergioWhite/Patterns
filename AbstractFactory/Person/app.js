var PaladinPersonFactory = /** @class */ (function () {
    function PaladinPersonFactory() {
    }
    PaladinPersonFactory.prototype.createCharacter = function () {
        return new PaladinCharacter();
    };
    PaladinPersonFactory.prototype.createSword = function () {
        return new PaladinSword();
    };
    PaladinPersonFactory.prototype.createAnimal = function () {
        return new PaladinAnimal();
    };
    return PaladinPersonFactory;
}());
var FarmerPersonFactory = /** @class */ (function () {
    function FarmerPersonFactory() {
    }
    FarmerPersonFactory.prototype.createCharacter = function () {
        return new FarmerCharacter();
    };
    FarmerPersonFactory.prototype.createSword = function () {
        return new FarmerSword();
    };
    FarmerPersonFactory.prototype.createAnimal = function () {
        return new FarmerAnimal();
    };
    return FarmerPersonFactory;
}());
var OrcPersonFactory = /** @class */ (function () {
    function OrcPersonFactory() {
    }
    OrcPersonFactory.prototype.createCharacter = function () {
        return new OrcCharacter();
    };
    OrcPersonFactory.prototype.createSword = function () {
        return new OrcSword();
    };
    OrcPersonFactory.prototype.createAnimal = function () {
        return new OrcAnimal();
    };
    return OrcPersonFactory;
}());
var PaladinCharacter = /** @class */ (function () {
    function PaladinCharacter() {
    }
    PaladinCharacter.prototype.create = function () {
        return "Paladin was created.";
    };
    PaladinCharacter.prototype.callAnimal = function (animal) {
        console.log("Paladin's animal was called");
        console.log(animal.voice());
    };
    PaladinCharacter.prototype.swingSword = function (sword) {
        console.log("I drew my paladin's sword!");
        sword.use();
    };
    return PaladinCharacter;
}());
var FarmerCharacter = /** @class */ (function () {
    function FarmerCharacter() {
    }
    FarmerCharacter.prototype.create = function () {
        return "Farmer was created.";
    };
    FarmerCharacter.prototype.callAnimal = function (animal) {
        console.log("Farmer's animal was called");
        console.log(animal.voice());
    };
    FarmerCharacter.prototype.swingSword = function (sword) {
        console.log("I drew my farmer's sword!");
        sword.use();
    };
    return FarmerCharacter;
}());
var OrcCharacter = /** @class */ (function () {
    function OrcCharacter() {
    }
    OrcCharacter.prototype.create = function () {
        return "Orc was created.";
    };
    OrcCharacter.prototype.callAnimal = function (animal) {
        console.log("Orc's animal was called");
        console.log(animal.voice());
    };
    OrcCharacter.prototype.swingSword = function (sword) {
        console.log("I drew my orc's sword!");
        sword.use();
    };
    return OrcCharacter;
}());
var PaladinSword = /** @class */ (function () {
    function PaladinSword() {
    }
    PaladinSword.prototype.create = function () {
        return "Paladin's sword was created";
    };
    PaladinSword.prototype.use = function () {
        return "Made 20 swings of the Paladin sword";
    };
    return PaladinSword;
}());
var FarmerSword = /** @class */ (function () {
    function FarmerSword() {
    }
    FarmerSword.prototype.create = function () {
        return "Farmer's little sword was created";
    };
    FarmerSword.prototype.use = function () {
        return "Made 10 swings of the farmer little sword";
    };
    return FarmerSword;
}());
var OrcSword = /** @class */ (function () {
    function OrcSword() {
    }
    OrcSword.prototype.create = function () {
        return "Big orc's sword was created";
    };
    OrcSword.prototype.use = function () {
        return "Made 17 swings of the big orc's sword";
    };
    return OrcSword;
}());
var PaladinAnimal = /** @class */ (function () {
    function PaladinAnimal() {
    }
    PaladinAnimal.prototype.create = function () {
        return "Paladin's horse was created";
    };
    PaladinAnimal.prototype.voice = function () {
        return 'Igo-go!';
    };
    return PaladinAnimal;
}());
var FarmerAnimal = /** @class */ (function () {
    function FarmerAnimal() {
    }
    FarmerAnimal.prototype.create = function () {
        return "Farmer's sheep was created";
    };
    FarmerAnimal.prototype.voice = function () {
        return 'Be-e...';
    };
    return FarmerAnimal;
}());
var OrcAnimal = /** @class */ (function () {
    function OrcAnimal() {
    }
    OrcAnimal.prototype.create = function () {
        return "Orc's varg was created";
    };
    OrcAnimal.prototype.voice = function () {
        return 'Rrrr.';
    };
    return OrcAnimal;
}());
function clientCode(factory) {
    var character = factory.createCharacter();
    var sword = factory.createSword();
    var animal = factory.createAnimal();
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
