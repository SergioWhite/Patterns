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
exports.DarkRoast = void 0;
var Beverage_1 = require("./Beverage");
var DarkRoast = /** @class */ (function (_super) {
    __extends(DarkRoast, _super);
    function DarkRoast() {
        var _this = _super.call(this) || this;
        _this.description = 'Dark Roast Coffee';
        return _this;
    }
    DarkRoast.prototype.cost = function () {
        return .99;
    };
    return DarkRoast;
}(Beverage_1.Beverage));
exports.DarkRoast = DarkRoast;
