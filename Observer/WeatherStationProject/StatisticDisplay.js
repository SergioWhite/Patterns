"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StatisticDisplay = void 0;
var StatisticDisplay = /** @class */ (function () {
    function StatisticDisplay(weatherData) {
        this.temperature = 0;
        this.temperatures = [];
        this.avgTemperature = 0;
        this.maxTemperature = -Infinity;
        this.minTemperature = Infinity;
        this.weatherData = weatherData;
        weatherData.registerObserver(this);
    }
    StatisticDisplay.prototype.update = function (temperature, humidity, pressure) {
        this.temperature = temperature;
        this.addTemperature();
        this.display();
    };
    StatisticDisplay.prototype.display = function () {
        console.log("Avg/Max/Min temperature = " + this.avgTemperature + "/" + this.maxTemperature + "/" + this.minTemperature);
    };
    StatisticDisplay.prototype.addTemperature = function () {
        this.temperatures.push(this.temperature);
        this.calculateParameters();
    };
    StatisticDisplay.prototype.calculateParameters = function () {
        this.avgTemperature = this.temperatures.reduce(function (a, b) { return a + b; }) / this.temperatures.length;
        if (this.temperature > this.maxTemperature) {
            this.maxTemperature = this.temperature;
        }
        if (this.temperature < this.minTemperature) {
            this.minTemperature = this.temperature;
        }
    };
    return StatisticDisplay;
}());
exports.StatisticDisplay = StatisticDisplay;
