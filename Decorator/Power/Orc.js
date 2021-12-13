"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.Orc = void 0;
var PowerPerson_1 = require("./PowerPerson");
var Orc = /** @class */ (function (_super) {
    __extends(Orc, _super);
    function Orc() {
        var _this = _super.call(this) || this;
        _this.description = 'Orc';
        return _this;
    }
    Orc.prototype.power = function () {
        return 200;
    };
    return Orc;
}(PowerPerson_1.PowerPerson));
exports.Orc = Orc;
