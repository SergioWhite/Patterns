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
exports.CaliforniaPizzaStore = void 0;
var PizzaStore_1 = require("./PizzaStore");
var CaliforniaCheesePizza_1 = require("./CaliforniaCheesePizza");
var CaliforniaVeggiePizza_1 = require("./CaliforniaVeggiePizza");
var CaliforniaClamPizza_1 = require("./CaliforniaClamPizza");
var CaliforniaPepperoniPizza_1 = require("./CaliforniaPepperoniPizza");
var CaliforniaSimplePizza_1 = require("./CaliforniaSimplePizza");
var CaliforniaPizzaStore = /** @class */ (function (_super) {
    __extends(CaliforniaPizzaStore, _super);
    function CaliforniaPizzaStore() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CaliforniaPizzaStore.prototype.createPizza = function (type) {
        if (type === 'cheese') {
            return new CaliforniaCheesePizza_1.CaliforniaCheesePizza();
        }
        else if (type === 'veggie') {
            return new CaliforniaVeggiePizza_1.CaliforniaVeggiePizza();
        }
        else if (type === 'clam') {
            return new CaliforniaClamPizza_1.CaliforniaClamPizza();
        }
        else if (type === 'pepperoni') {
            return new CaliforniaPepperoniPizza_1.CaliforniaPepperoniPizza();
        }
        return new CaliforniaSimplePizza_1.CaliforniaSimplePizza();
    };
    return CaliforniaPizzaStore;
}(PizzaStore_1.PizzaStore));
exports.CaliforniaPizzaStore = CaliforniaPizzaStore;
