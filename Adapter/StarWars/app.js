var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Stormtrooper = /** @class */ (function () {
    function Stormtrooper() {
    }
    Stormtrooper.prototype.fire = function () {
        return 'Stormtrooper: piu-piu-piu.';
    };
    return Stormtrooper;
}());
var Jedi = /** @class */ (function () {
    function Jedi() {
    }
    Jedi.prototype.attack = function () {
        return 50;
    };
    return Jedi;
}());
var StormtrooperAdapter = /** @class */ (function (_super) {
    __extends(StormtrooperAdapter, _super);
    function StormtrooperAdapter(jedi) {
        var _this = _super.call(this) || this;
        _this.jedi = jedi;
        return _this;
    }
    StormtrooperAdapter.prototype.fire = function () {
        var result = this.jedi.attack();
        return "Jedi: Attack with " + result + " fires!";
    };
    return StormtrooperAdapter;
}(Stormtrooper));
function clientCode(stormtrooper) {
    console.log(stormtrooper.fire());
}
var stormtrooper = new Stormtrooper();
clientCode(stormtrooper);
var jedi = new Jedi();
console.log(jedi.attack());
var stormtrooperAdapter = new StormtrooperAdapter(jedi);
clientCode(stormtrooperAdapter);
