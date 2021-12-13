import {Observer} from "./Observer";
import {DisplayElement} from "./DisplayElement";
import {Subject} from "./Subject";

export class CurrentConditionsDisplay implements Observer, DisplayElement {
    temperature: number;
    humidity: number;
    weatherData: Subject;

    constructor(weatherData: Subject) {
        this.temperature = 0;
        this.humidity = 0;
        this.weatherData = weatherData;
        weatherData.registerObserver(this);
    }

    update(temperature: number, humidity: number, pressure: number): void {
        this.temperature = temperature;
        this.humidity = humidity;
        this.display();
    }

    display(): void {
        console.log(`Current conditions: ${this.temperature} F degrees and ${this.humidity} % humidity.`);
    }
}