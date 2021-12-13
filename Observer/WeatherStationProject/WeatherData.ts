import {Subject} from "./Subject";
import {Observer} from "./Observer";

export class WeatherData implements Subject {
    observers: Observer[];
    temperature: number;
    humidity: number;
    pressure: number;

    constructor() {
        this.observers = [];
        this.temperature = 0;
        this.humidity = 0;
        this.pressure = 0;
    }

    registerObserver(o: Observer): void {
        this.observers.push(o);
    }

    removeObserver(o: Observer): void {

    }

    notifyObservers(): void {
        for (const observer of this.observers) {
            observer.update(this.temperature, this.humidity, this.pressure);
        }
    }

    measurementsChanged(): void {
        this.notifyObservers();
    }

    setMeasurements(temperature: number, humidity: number, pressure: number): void {
        this.temperature = temperature;
        this.humidity = humidity;
        this.pressure = pressure;
        this.measurementsChanged();
    }
}