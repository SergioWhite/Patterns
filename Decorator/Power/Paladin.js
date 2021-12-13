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
exports.Paladin = void 0;
var PowerPerson_1 = require("./PowerPerson");
var Paladin = /** @class */ (function (_super) {
    __extends(Paladin, _super);
    function Paladin() {
        var _this = _super.call(this) || this;
        _this.description = 'Paladin';
        return _this;
    }
    Paladin.prototype.power = function () {
        return 150;
    };
    return Paladin;
}(PowerPerson_1.PowerPerson));
exports.Paladin = Paladin;
