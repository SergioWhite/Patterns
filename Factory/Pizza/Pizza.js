"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Pizza = void 0;
var Pizza = /** @class */ (function () {
    function Pizza() {
        this.name = 'Pizza';
    }
    Pizza.prototype.prepare = function () {
        console.log("Preparing " + this.name);
    };
    Pizza.prototype.bake = function () {
        console.log('Bake for 25 minutes at 350');
    };
    Pizza.prototype.cut = function () {
        console.log('Cutting the pizza into diagonal slices');
    };
    Pizza.prototype.box = function () {
        console.log('Place pizza in official PizzaStore box');
    };
    Pizza.prototype.getName = function () {
        return this.name;
    };
    Pizza.prototype.done = function () {
        console.log('Your pizza is done!');
    };
    return Pizza;
}());
exports.Pizza = Pizza;
