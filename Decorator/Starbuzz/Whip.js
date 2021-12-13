"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.Whip = void 0;
var CondimentDecorator_1 = require("./CondimentDecorator");
var Whip = /** @class */ (function (_super) {
    __extends(Whip, _super);
    function Whip(beverage) {
        var _this = _super.call(this) || this;
        _this.beverage = beverage;
        return _this;
    }
    Whip.prototype.getDescription = function () {
        return this.beverage.getDescription() + ", Whip";
    };
    Whip.prototype.cost = function () {
        return .1 + this.beverage.cost();
    };
    return Whip;
}(CondimentDecorator_1.CondimentDecorator));
exports.Whip = Whip;
