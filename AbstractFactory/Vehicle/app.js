var CarVehicleFactory = /** @class */ (function () {
    function CarVehicleFactory() {
    }
    CarVehicleFactory.prototype.createDriver = function () {
        return new Chauffeur();
    };
    CarVehicleFactory.prototype.createMachine = function () {
        return new Car();
    };
    return CarVehicleFactory;
}());
var ShipVehicleFactory = /** @class */ (function () {
    function ShipVehicleFactory() {
    }
    ShipVehicleFactory.prototype.createDriver = function () {
        return new Pirate();
    };
    ShipVehicleFactory.prototype.createMachine = function () {
        return new Ship();
    };
    return ShipVehicleFactory;
}());
var BicycleVehicleFactory = /** @class */ (function () {
    function BicycleVehicleFactory() {
    }
    BicycleVehicleFactory.prototype.createDriver = function () {
        return new Boy();
    };
    BicycleVehicleFactory.prototype.createMachine = function () {
        return new Bicycle();
    };
    return BicycleVehicleFactory;
}());
var Chauffeur = /** @class */ (function () {
    function Chauffeur() {
    }
    Chauffeur.prototype.create = function () {
        return 'The chauffeur was created.';
    };
    Chauffeur.prototype.move = function (machine) {
        console.log('Go!');
        console.log(machine.move());
    };
    Chauffeur.prototype.stop = function (machine) {
        console.log('Stop!');
        console.log(machine.stop());
    };
    return Chauffeur;
}());
var Pirate = /** @class */ (function () {
    function Pirate() {
    }
    Pirate.prototype.create = function () {
        return 'The pirate was created.';
    };
    Pirate.prototype.move = function (machine) {
        console.log('Swam!');
        console.log(machine.move());
    };
    Pirate.prototype.stop = function (machine) {
        console.log('Stop the ship!');
        console.log(machine.stop());
    };
    return Pirate;
}());
var Boy = /** @class */ (function () {
    function Boy() {
    }
    Boy.prototype.create = function () {
        return 'The boy was created.';
    };
    Boy.prototype.move = function (machine) {
        console.log("Let's go ahead!");
        console.log(machine.move());
    };
    Boy.prototype.stop = function (machine) {
        console.log('Wait for the rest!');
        console.log(machine.stop());
    };
    return Boy;
}());
var Car = /** @class */ (function () {
    function Car() {
    }
    Car.prototype.create = function () {
        return "The car was created!";
    };
    Car.prototype.move = function () {
        return "Vr-r-r-r-rrr-r.";
    };
    Car.prototype.stop = function () {
        return "Ts-sss-s.";
    };
    return Car;
}());
var Ship = /** @class */ (function () {
    function Ship() {
    }
    Ship.prototype.create = function () {
        return "The ship was created!";
    };
    Ship.prototype.move = function () {
        return "Chuh-chuh!";
    };
    Ship.prototype.stop = function () {
        return "Po-om!";
    };
    return Ship;
}());
var Bicycle = /** @class */ (function () {
    function Bicycle() {
    }
    Bicycle.prototype.create = function () {
        return "The bicycle was created!";
    };
    Bicycle.prototype.move = function () {
        return "Pf-f-ff.";
    };
    Bicycle.prototype.stop = function () {
        return "Sh-h.";
    };
    return Bicycle;
}());
function clientCode(factory) {
    var driver = factory.createDriver();
    var machine = factory.createMachine();
    console.log(driver.create());
    console.log(machine.create());
    driver.move(machine);
    driver.stop(machine);
}
console.log('Car:');
clientCode(new CarVehicleFactory());
console.log();
console.log('-------------------------------------------');
console.log();
console.log('Ship:');
clientCode(new ShipVehicleFactory());
console.log();
console.log('-------------------------------------------');
console.log();
console.log('Bicycle:');
clientCode(new BicycleVehicleFactory());
console.log();
console.log('-------------------------------------------');
console.log();
