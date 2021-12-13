var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var PaladinPrototype = /** @class */ (function () {
    function PaladinPrototype() {
    }
    PaladinPrototype.prototype.clone = function () {
        var clone = Object.create(this);
        clone.dateOfBorn = Object.create(this.dateOfBorn);
        clone.animal = __assign(__assign({}, this.animal), { paladinPrototype: __assign({}, this) });
        return clone;
    };
    return PaladinPrototype;
}());
var Dog = /** @class */ (function () {
    function Dog(paladinPrototype) {
        this.paladinPrototype = paladinPrototype;
    }
    return Dog;
}());
function clientCode() {
    var p1 = new PaladinPrototype();
    p1.power = 245;
    p1.dateOfBorn = new Date();
    p1.animal = new Dog(p1);
    var p2 = p1.clone();
    console.log(p1);
    console.log(p2);
    console.log(p1.power === p2.power);
    console.log(p1.dateOfBorn === p2.dateOfBorn);
    console.log(p1.animal === p2.animal);
    console.log(p1.animal.paladinPrototype === p2.animal.paladinPrototype);
}
clientCode();
