"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var LittleCar_1 = require("./LittleCar");
var BigCar_1 = require("./BigCar");
var cars = [
    new LittleCar_1.LittleCar(),
    new BigCar_1.BigCar(),
];
for (var _i = 0, cars_1 = cars; _i < cars_1.length; _i++) {
    var car = cars_1[_i];
    car.drive();
    car.beep();
    car.release();
    console.log('--------------');
}
