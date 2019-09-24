"use strict";
// Конвеер сборки бургера
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
/**
 * 1.Булочка
 * 2.Котлета
 *  2.1 Котлета мясная
 *  2.2 Котлета рыбная
 *  2.3 Котлета куриная
 * 3.Залить соус
 *  3.1 ДЛя мясной котелы
 *  3.2 ДЛя рыбной котлеты
 *  3.3 ДЛя куриной котлеты
 * 4. Положить овощи
 * 5. Подать
 */
var BurgerBuilder = /** @class */ (function () {
    function BurgerBuilder(burgerName) {
        this.name = burgerName;
    }
    BurgerBuilder.prototype.constructBurger = function () {
        this.addBread();
        this.addChop();
        this.addSauce();
        this.addVegetables();
    };
    BurgerBuilder.prototype.addBread = function () {
        this.bread = 'Пшеничная булочка';
    };
    BurgerBuilder.prototype.addVegetables = function () {
        this.vegetables = ['Помидоры', 'Огурцы', 'Салат', 'Лук'];
    };
    BurgerBuilder.prototype.serveBurger = function () {
        console.log("\u0412\u0430\u0448 " + this.name + " \u0433\u043E\u0442\u043E\u0432! \u0421\u043E\u0441\u0442\u0430\u0432: \n            " + this.bread + ", \n            " + this.chop + ", \n            " + this.sauce + ", \n            " + this.vegetables + ".\n            \u041F\u0440\u0438\u044F\u0442\u043D\u043E\u0433\u043E \u0430\u043F\u043F\u0435\u0442\u0438\u0442\u0430!");
    };
    return BurgerBuilder;
}());
exports.BurgerBuilder = BurgerBuilder;
var BigMackBuilder = /** @class */ (function (_super) {
    __extends(BigMackBuilder, _super);
    function BigMackBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    BigMackBuilder.prototype.addChop = function () {
        this.chop = 'Мясная котлета';
    };
    BigMackBuilder.prototype.addSauce = function () {
        this.sauce = 'Легендарный соус бигмака';
    };
    return BigMackBuilder;
}(BurgerBuilder));
exports.BigMackBuilder = BigMackBuilder;
var ChickenBurgerBuilder = /** @class */ (function (_super) {
    __extends(ChickenBurgerBuilder, _super);
    function ChickenBurgerBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ChickenBurgerBuilder.prototype.addChop = function () {
        this.chop = 'Куриная котлета';
    };
    ChickenBurgerBuilder.prototype.addSauce = function () {
        this.sauce = 'Соус чикенбургера';
    };
    return ChickenBurgerBuilder;
}(BurgerBuilder));
exports.ChickenBurgerBuilder = ChickenBurgerBuilder;
var bmMaker = new BigMackBuilder('Биг Мак');
bmMaker.constructBurger();
bmMaker.serveBurger();
var cbMaker = new ChickenBurgerBuilder('Чикен Бургер');
cbMaker.constructBurger();
cbMaker.serveBurger();
