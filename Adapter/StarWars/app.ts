class Stormtrooper {
    public fire(): string {
        return 'Stormtrooper: piu-piu-piu.';
    }
}

class Jedi {
    public attack(): number {
        return 50;
    }
}

class StormtrooperAdapter extends Stormtrooper {
    private jedi: Jedi;

    constructor(jedi: Jedi) {
        super();
        this.jedi = jedi;
    }

    public fire(): string {
        const result = this.jedi.attack();
        return `Jedi: Attack with ${result} fires!`;
    }
}

function clientCode(stormtrooper: Stormtrooper) {
    console.log(stormtrooper.fire());
}

const stormtrooper = new Stormtrooper();
clientCode(stormtrooper);

const jedi = new Jedi();
console.log(jedi.attack());

const stormtrooperAdapter = new StormtrooperAdapter(jedi);
clientCode(stormtrooperAdapter);