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
exports.LittleCar = void 0;
var Car_1 = require("./Car");
var LittleCar = /** @class */ (function (_super) {
    __extends(LittleCar, _super);
    function LittleCar() {
        return _super.call(this) || this;
    }
    LittleCar.prototype.drive = function () {
        console.log('[drive]: Vi-vi-vi-vi-vi');
    };
    return LittleCar;
}(Car_1.Car));
exports.LittleCar = LittleCar;
