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
var CharacterCreator = /** @class */ (function () {
    function CharacterCreator() {
    }
    CharacterCreator.prototype.voice = function () {
        var character = this.factoryMethod();
        return character.voice();
    };
    return CharacterCreator;
}());
var PaladinCharacterCreator = /** @class */ (function (_super) {
    __extends(PaladinCharacterCreator, _super);
    function PaladinCharacterCreator() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    PaladinCharacterCreator.prototype.factoryMethod = function () {
        return new PaladinCharacter();
    };
    return PaladinCharacterCreator;
}(CharacterCreator));
var OrcCharacterCreator = /** @class */ (function (_super) {
    __extends(OrcCharacterCreator, _super);
    function OrcCharacterCreator() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    OrcCharacterCreator.prototype.factoryMethod = function () {
        return new OrcCharacter();
    };
    return OrcCharacterCreator;
}(CharacterCreator));
var PaladinCharacter = /** @class */ (function () {
    function PaladinCharacter() {
    }
    PaladinCharacter.prototype.voice = function () {
        return 'I am Paladin and the light of the Innos are joining me in my way!';
    };
    return PaladinCharacter;
}());
var OrcCharacter = /** @class */ (function () {
    function OrcCharacter() {
    }
    OrcCharacter.prototype.voice = function () {
        return 'Mu-cha-cha.';
    };
    return OrcCharacter;
}());
function clientCode(creator) {
    console.log(creator.voice());
}
clientCode(new PaladinCharacterCreator());
clientCode(new OrcCharacterCreator());
