"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Beverage = void 0;
var Beverage = /** @class */ (function () {
    function Beverage() {
        this.description = 'Unknown Beverage';
    }
    Beverage.prototype.getDescription = function () {
        return this.description;
    };
    return Beverage;
}());
exports.Beverage = Beverage;
