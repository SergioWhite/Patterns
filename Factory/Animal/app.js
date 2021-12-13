var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var AnimalCreator = /** @class */ (function () {
    function AnimalCreator() {
    }
    AnimalCreator.prototype.voice = function () {
        var animal = this.factoryMethod();
        return animal.voice();
    };
    return AnimalCreator;
}());
var CowAnimalCreator = /** @class */ (function (_super) {
    __extends(CowAnimalCreator, _super);
    function CowAnimalCreator() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CowAnimalCreator.prototype.factoryMethod = function () {
        return new CowAnimal();
    };
    return CowAnimalCreator;
}(AnimalCreator));
var SheepAnimalCreator = /** @class */ (function (_super) {
    __extends(SheepAnimalCreator, _super);
    function SheepAnimalCreator() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SheepAnimalCreator.prototype.factoryMethod = function () {
        return new SheepAnimal();
    };
    return SheepAnimalCreator;
}(AnimalCreator));
var ChickenAnimalCreator = /** @class */ (function (_super) {
    __extends(ChickenAnimalCreator, _super);
    function ChickenAnimalCreator() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ChickenAnimalCreator.prototype.factoryMethod = function () {
        return new ChickenAnimal();
    };
    return ChickenAnimalCreator;
}(AnimalCreator));
var CowAnimal = /** @class */ (function () {
    function CowAnimal() {
    }
    CowAnimal.prototype.voice = function () {
        return 'Muu.';
    };
    return CowAnimal;
}());
var SheepAnimal = /** @class */ (function () {
    function SheepAnimal() {
    }
    SheepAnimal.prototype.voice = function () {
        return 'Mee.';
    };
    return SheepAnimal;
}());
var ChickenAnimal = /** @class */ (function () {
    function ChickenAnimal() {
    }
    ChickenAnimal.prototype.voice = function () {
        return 'Co-co-co.';
    };
    return ChickenAnimal;
}());
function clientCode(animalCreator) {
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
