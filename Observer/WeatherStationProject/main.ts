import {WeatherData} from "./WeatherData";
import {CurrentConditionsDisplay} from "./CurrentConditionsDisplay";
import {StatisticDisplay} from "./StatisticDisplay";

const weatherData: WeatherData = new WeatherData();

const currentDisplay: CurrentConditionsDisplay = new CurrentConditionsDisplay(weatherData);
const statisticDisplay: StatisticDisplay = new StatisticDisplay(weatherData);

weatherData.setMeasurements(80, 65, 30.4);
weatherData.setMeasurements(82, 70, 29.2);
weatherData.setMeasurements(78, 90, 29.2);