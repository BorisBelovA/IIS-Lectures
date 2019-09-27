"use strict";
exports.__esModule = true;
var EuropeanDateTimeConverter = /** @class */ (function () {
    function EuropeanDateTimeConverter() {
        this.options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    }
    EuropeanDateTimeConverter.prototype.convert = function (date) {
        return date.toLocaleString('en-US', this.options);
    };
    return EuropeanDateTimeConverter;
}());
var USDateTimeConverter = /** @class */ (function () {
    function USDateTimeConverter() {
    }
    USDateTimeConverter.prototype.convert = function (date) {
        return date.toLocaleString('en-US');
    };
    return USDateTimeConverter;
}());
var RuDateTimeConverter = /** @class */ (function () {
    function RuDateTimeConverter() {
        this.options = { year: 'numeric', month: 'numeric', day: '2-digit', hour: 'numeric', minute: 'numeric', hour12: false };
    }
    RuDateTimeConverter.prototype.convert = function (date) {
        var DateTime = date.toLocaleString('en-US', this.options);
        var replacer = /\//g;
        var Date = DateTime.split(',')[0].replace(replacer, '.');
        var _a = [Date.split('.')[0], Date.split('.')[1], Date.split('.')[2]], day = _a[0], month = _a[1], year = _a[2];
        if (Number(day) < 10) {
            day = "0" + day;
        }
        var str = month + "." + day + "." + year + '' + DateTime.split(',')[1];
        return str;
    };
    return RuDateTimeConverter;
}());
var DalilyGreeter = /** @class */ (function () {
    function DalilyGreeter(name) {
        this.personToGreet = name;
    }
    DalilyGreeter.prototype.setConverter = function (converterType) {
        this.dateTimeConverter = converterType;
    };
    DalilyGreeter.prototype.convertDateTime = function () {
        return this.dateTimeConverter.convert(new Date());
    };
    DalilyGreeter.prototype.greet = function () {
        console.log("Greetings, " + this.personToGreet + "! Current time: " + this.convertDateTime());
    };
    return DalilyGreeter;
}());
exports.DalilyGreeter = DalilyGreeter;
var region;
var dailyGreeter = new DalilyGreeter('Hans');
switch (region) {
    case 'eu': {
        dailyGreeter.setConverter(new EuropeanDateTimeConverter());
        break;
    }
    case 'us': {
        dailyGreeter.setConverter(new USDateTimeConverter());
        break;
    }
    default: {
        dailyGreeter.setConverter(new RuDateTimeConverter());
    }
}
dailyGreeter.greet();
