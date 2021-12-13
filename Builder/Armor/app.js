var PaladinArmorBuilder = /** @class */ (function () {
    function PaladinArmorBuilder() {
        this.reset();
    }
    PaladinArmorBuilder.prototype.reset = function () {
        this.armor = new PaladinArmor;
    };
    PaladinArmorBuilder.prototype.produceHelmet = function () {
        this.armor.add('Helmet: +20');
    };
    PaladinArmorBuilder.prototype.produceChain = function () {
        this.armor.add('Chain: +40');
    };
    PaladinArmorBuilder.prototype.produceShields = function () {
        this.armor.add('Shields: +50');
    };
    PaladinArmorBuilder.prototype.produceElbowPads = function () {
        this.armor.add('Elbow pads: +10');
    };
    PaladinArmorBuilder.prototype.produceKneePads = function () {
        this.armor.add('Knee pads: +10');
    };
    PaladinArmorBuilder.prototype.produceShoes = function () {
        this.armor.add('Shoes: +10');
    };
    PaladinArmorBuilder.prototype.getProduct = function () {
        var result = this.armor;
        this.reset();
        return result;
    };
    return PaladinArmorBuilder;
}());
var PaladinArmor = /** @class */ (function () {
    function PaladinArmor() {
        this.parts = [];
    }
    PaladinArmor.prototype.add = function (part) {
        this.parts.push(part);
    };
    PaladinArmor.prototype.listParts = function () {
        console.log("Paladin armor parts: " + this.parts.join(', ') + "\n");
    };
    return PaladinArmor;
}());
var Harad = /** @class */ (function () {
    function Harad() {
    }
    Harad.prototype.setBuilder = function (armorBuilder) {
        this.armorBuilder = armorBuilder;
    };
    Harad.prototype.buildLightPaladinArmor = function () {
        this.armorBuilder.produceHelmet();
        this.armorBuilder.produceShields();
        this.armorBuilder.produceShoes();
    };
    Harad.prototype.buildHeavyPaladinArmor = function () {
        this.armorBuilder.produceHelmet();
        this.armorBuilder.produceChain();
        this.armorBuilder.produceShields();
        this.armorBuilder.produceElbowPads();
        this.armorBuilder.produceKneePads();
        this.armorBuilder.produceShoes();
    };
    return Harad;
}());
function clientCode(blacksmith) {
    var paladinArmorBuilder = new PaladinArmorBuilder();
    blacksmith.setBuilder(paladinArmorBuilder);
    console.log('Light armor:');
    blacksmith.buildLightPaladinArmor();
    paladinArmorBuilder.getProduct().listParts();
    console.log('Heavy armor:');
    blacksmith.buildHeavyPaladinArmor();
    paladinArmorBuilder.getProduct().listParts();
}
var blacksmith = new Harad();
clientCode(blacksmith);
