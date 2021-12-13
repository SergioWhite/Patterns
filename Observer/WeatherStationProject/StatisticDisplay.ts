import {Observer} from "./Observer";
import {DisplayElement} from "./DisplayElement";
import {Subject} from "./Subject";

export class StatisticDisplay implements Observer, DisplayElement {
    temperature: number;
    temperatures: number[];
    avgTemperature: number;
    maxTemperature: number;
    minTemperature: number;
    weatherData: Subject;

    constructor(weatherData: Subject) {
        this.temperature = 0;
        this.temperatures = [];
        this.avgTemperature = 0;
        this.maxTemperature = -Infinity;
        this.minTemperature = Infinity;
        this.weatherData = weatherData;
        weatherData.registerObserver(this);
    }

    update(temperature: number, humidity: number, pressure: number): void {
        this.temperature = temperature;
        this.addTemperature();
        this.display();
    }

    display(): void {
        console.log(`Avg/Max/Min temperature = ${this.avgTemperature}/${this.maxTemperature}/${this.minTemperature}`);
    }

    addTemperature() {
        this.temperatures.push(this.temperature);
        this.calculateParameters();
    }

    calculateParameters() {
        this.avgTemperature = this.temperatures.reduce((a, b) => a + b) / this.temperatures.length;

        if (this.temperature > this.maxTemperature) {
            this.maxTemperature = this.temperature;
        }

        if (this.temperature < this.minTemperature) {
            this.minTemperature = this.temperature;
        }
    }
}