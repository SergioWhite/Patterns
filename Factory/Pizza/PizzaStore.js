"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PizzaStore = void 0;
var PizzaStore = /** @class */ (function () {
    function PizzaStore() {
    }
    PizzaStore.prototype.orderPizza = function (type) {
        var pizza;
        pizza = this.createPizza(type);
        pizza.prepare();
        pizza.done();
        return pizza;
    };
    return PizzaStore;
}());
exports.PizzaStore = PizzaStore;
