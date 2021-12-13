import {Car} from "./Car";
import {LittleCar} from "./LittleCar";
import {BigCar} from "./BigCar";

const cars: Car[] = [
    new LittleCar(),
    new BigCar(),
];

for (const car of cars) {
    car.drive();
    car.beep();
    car.release();
    console.log('--------------')
}