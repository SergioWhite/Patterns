interface VehicleFactory {
    createDriver(): Driver;
    createMachine(): Machine;
}

class CarVehicleFactory implements VehicleFactory {
    public createDriver(): Driver {
        return new Chauffeur();
    }
    public createMachine(): Machine {
        return new Car();
    }
}

class ShipVehicleFactory implements VehicleFactory {
    public createDriver(): Driver {
        return new Pirate();
    }
    public createMachine(): Machine {
        return new Ship();
    }
}

class BicycleVehicleFactory implements VehicleFactory {
    public createDriver(): Driver {
        return new Boy();
    }
    public createMachine(): Machine {
        return new Bicycle();
    }
}

interface Driver {
    create(): string;
    move(machine: Machine): void;
    stop(machine: Machine): void;
}

class Chauffeur implements Driver {
    public create(): string {
        return 'The chauffeur was created.'
    }
    public move(machine: Machine): void {
        console.log('Go!');
        console.log(machine.move());
    }
    public stop(machine: Machine): void {
        console.log('Stop!');
        console.log(machine.stop());
    }
}

class Pirate implements Driver {
    public create(): string {
        return 'The pirate was created.'
    }
    public move(machine: Machine): void {
        console.log('Swam!');
        console.log(machine.move());
    }
    public stop(machine: Machine): void {
        console.log('Stop the ship!');
        console.log(machine.stop());
    }
}

class Boy implements Driver {
    public create(): string {
        return 'The boy was created.'
    }
    public move(machine: Machine): void {
        console.log(`Let's go ahead!`);
        console.log(machine.move());
    }
    public stop(machine: Machine): void {
        console.log('Wait for the rest!');
        console.log(machine.stop());
    }
}

interface Machine {
    create(): string;
    move(): string;
    stop(): string;
}

class Car implements Machine {
    public create(): string {
        return `The car was created!`;
    }
    public move(): string {
        return `Vr-r-r-r-rrr-r.`;
    }
    public stop(): string {
        return `Ts-sss-s.`;
    }
}

class Ship implements Machine {
    public create(): string {
        return `The ship was created!`;
    }
    public move(): string {
        return `Chuh-chuh!`;
    }
    public stop(): string {
        return `Po-om!`;
    }
}

class Bicycle implements Machine {
    public create(): string {
        return `The bicycle was created!`;
    }
    public move(): string {
        return `Pf-f-ff.`;
    }
    public stop(): string {
        return `Sh-h.`;
    }
}

function clientCode(factory: VehicleFactory) {
    const driver = factory.createDriver();
    const machine = factory.createMachine();

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