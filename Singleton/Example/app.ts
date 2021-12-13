class Singleton {
    private static instance: Singleton;

    private constructor() {
    }

    public static getInstance(): Singleton {
        if (!Singleton.instance) {
            Singleton.instance = new Singleton();
        }
        return Singleton.instance;
    }

    public someLogic() {
        console.log(this);
    }
}

function clientCode() {
    const s1 = Singleton.getInstance();
    const s2 = Singleton.getInstance();
    console.log(s1 === s2);
    s1.someLogic();
    s2.someLogic();
}

clientCode();