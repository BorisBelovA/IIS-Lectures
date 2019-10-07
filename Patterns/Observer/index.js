"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var CentralBank = /** @class */ (function () {
    function CentralBank() {
        this._state = {
            usd: 67.58,
            eur: 74.80
        };
        this._banks = [];
    }
    CentralBank.prototype.addBank = function (bank) {
        this.banks.push(bank);
        bank.state = this.state;
    };
    CentralBank.prototype.removeBank = function (bank) {
    };
    CentralBank.prototype.notify = function () {
        for (var _i = 0, _a = this.banks; _i < _a.length; _i++) {
            var bank = _a[_i];
            bank.update(this);
        }
    };
    Object.defineProperty(CentralBank.prototype, "state", {
        get: function () {
            return this._state;
        },
        set: function (state) {
            this._state = state;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CentralBank.prototype, "banks", {
        get: function () {
            return this._banks;
        },
        enumerable: true,
        configurable: true
    });
    return CentralBank;
}());
exports.CentralBank = CentralBank;
var SberBank = /** @class */ (function () {
    function SberBank() {
        this.state = {};
    }
    SberBank.prototype.update = function (subject) {
        console.log("\u041E\u0431\u043C\u0435\u043D\u043D\u044B\u0439 \u043A\u0443\u0440\u0441 \u0432\u0430\u043B\u044E\u0442 \u0421\u0431\u0435\u0440\u0431\u0430\u043D\u043A\u0430: \n    USD: " + subject.state.usd + " \n    EUR: " + subject.state.eur);
    };
    return SberBank;
}());
exports.SberBank = SberBank;
var VTB = /** @class */ (function () {
    function VTB() {
        this.state = {};
    }
    VTB.prototype.update = function (subject) {
        this.state = subject.state;
        console.log("\u041E\u0431\u043C\u0435\u043D\u043D\u044B\u0439 \u043A\u0443\u0440\u0441 \u0432\u0430\u043B\u044E\u0442 \u0412\u0422\u0411: \n    USD: " + subject.state.usd + " \n    EUR: " + subject.state.eur);
    };
    return VTB;
}());
exports.VTB = VTB;
var cb = new CentralBank();
var sb = new SberBank();
var vtb = new VTB();
cb.addBank(sb);
cb.notify();
cb.state = {
    usd: 70.50,
    eur: 91.35
};
console.log("Изменился курс валют!");
cb.addBank(vtb);
cb.notify();
