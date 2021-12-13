"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WeatherData = void 0;
var WeatherData = /** @class */ (function () {
    function WeatherData() {
        this.observers = [];
        this.temperature = 0;
        this.humidity = 0;
        this.pressure = 0;
    }
    WeatherData.prototype.registerObserver = function (o) {
        this.observers.push(o);
    };
    WeatherData.prototype.removeObserver = function (o) {
    };
    WeatherData.prototype.notifyObservers = function () {
        for (var _i = 0, _a = this.observers; _i < _a.length; _i++) {
            var observer = _a[_i];
            observer.update(this.temperature, this.humidity, this.pressure);
        }
    };
    WeatherData.prototype.measurementsChanged = function () {
        this.notifyObservers();
    };
    WeatherData.prototype.setMeasurements = function (temperature, humidity, pressure) {
        this.temperature = temperature;
        this.humidity = humidity;
        this.pressure = pressure;
        this.measurementsChanged();
    };
    return WeatherData;
}());
exports.WeatherData = WeatherData;
