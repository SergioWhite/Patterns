import {PowerPerson} from "./PowerPerson";
import {Paladin} from "./Paladin";
import {ConsecratedOreBlade} from "./ConsecratedOreBlade";
import {FireBall} from "./FireBall";
import {Orc} from "./Orc";
import {KrushUrRok} from "./KrushUrRok";
import {Magician} from "./Magician";
import {FireRain} from "./FireRainl";

let paladin: PowerPerson = new Paladin();
paladin = new ConsecratedOreBlade(paladin);
paladin = new FireBall(paladin);
paladin = new FireBall(paladin);

console.log(`${paladin.getDescription()}: ${paladin.power()}`);

let orc: PowerPerson = new Orc();
orc = new KrushUrRok(orc);

console.log(`${orc.getDescription()}: ${orc.power()}`);

let magician: PowerPerson = new Magician();
magician = new FireBall(magician);
magician = new FireBall(magician);
magician = new FireBall(magician);
magician = new FireRain(magician);
magician = new FireRain(magician);

console.log(`${magician.getDescription()}: ${magician.power()}`);