"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var NYPizzaStore_1 = require("./NYPizzaStore");
var CaliforniaPizzaStore_1 = require("./CaliforniaPizzaStore");
var nyPizzaStore = new NYPizzaStore_1.NYPizzaStore();
nyPizzaStore.orderPizza('cheese');
var californiaPizzaStore, zaStore = new CaliforniaPizzaStore_1.CaliforniaPizzaStore();
californiaPizzaStore.orderPizza('pepperoni');
nyPizzaStore.orderPizza('nothing');
californiaPizzaStore.orderPizza('nothing');
