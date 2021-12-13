var Singleton = /** @class */ (function () {
    function Singleton() {
    }
    Singleton.getInstance = function () {
        if (!Singleton.instance) {
            Singleton.instance = new Singleton();
        }
        return Singleton.instance;
    };
    Singleton.prototype.someLogic = function () {
        console.log(this);
    };
    return Singleton;
}());
function clientCode() {
    var s1 = Singleton.getInstance();
    var s2 = Singleton.getInstance();
    console.log(s1 === s2);
    s1.someLogic();
    s2.someLogic();
}
clientCode();
