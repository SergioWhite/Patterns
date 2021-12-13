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
exports.NYPizzaStore = void 0;
var PizzaStore_1 = require("./PizzaStore");
var NYCheesePizza_1 = require("./NYCheesePizza");
var NYVeggiePizza_1 = require("./NYVeggiePizza");
var NYClamPizza_1 = require("./NYClamPizza");
var NYPepperoniPizza_1 = require("./NYPepperoniPizza");
var NYSimplePizza_1 = require("./NYSimplePizza");
var NYPizzaStore = /** @class */ (function (_super) {
    __extends(NYPizzaStore, _super);
    function NYPizzaStore() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    NYPizzaStore.prototype.createPizza = function (type) {
        if (type === 'cheese') {
            return new NYCheesePizza_1.NYCheesePizza();
        }
        else if (type === 'veggie') {
            return new NYVeggiePizza_1.NYVeggiePizza();
        }
        else if (type === 'clam') {
            return new NYClamPizza_1.NYClamPizza();
        }
        else if (type === 'pepperoni') {
            return new NYPepperoniPizza_1.NYPepperoniPizza();
        }
        return new NYSimplePizza_1.NYSimplePizza();
    };
    return NYPizzaStore;
}(PizzaStore_1.PizzaStore));
exports.NYPizzaStore = NYPizzaStore;
