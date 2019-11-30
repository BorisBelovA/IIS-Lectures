/**
 * 1. Есть интернет заказ
 * 2. Нужно его доставить
 * 3. Цепочка обязанности решает чем доставить заказ в зависимости от условий:
 *         Город, срочность, стоимость
 * 4. Далее это делегируется соответствующей службе доставки
 *
 * Сделать форму для сбора даных на заказ
 * И в ответ выдавать простой чек
 */
/**
 * Если в город отправки и прибытия одинаков то делегируем в службу
 * Если города разные, то отпарвляем в цепочку вниз
 * Если доставка в другой город и не срочная, то почта
 * Если доставка в другой город и срочная, то спец служба
 */
var UrgencyEnum;
(function (UrgencyEnum) {
    UrgencyEnum[UrgencyEnum["QUICK"] = 1] = "QUICK";
    UrgencyEnum[UrgencyEnum["MEDIUM"] = 2] = "MEDIUM";
    UrgencyEnum[UrgencyEnum["LOW"] = 3] = "LOW";
})(UrgencyEnum || (UrgencyEnum = {}));
class LocalDelieryService {
    constructor() {
        this.defaultDeliveryCost = 100;
        this.multiplicationFactor = 1;
        this.nextDH = null;
    }
    deliver(order) {
        /*if(order.deliveryOptions.urgency = UrgencyEnum.QUICK){
            this.defaultDeliveryCost *= 2;
        }*/
        order.cost += this.defaultDeliveryCost * this.multiplicationFactor;
        console.log('По городу');
        if (this.nextDH) {
            this.nextDH.deliver(order);
        }
    }
    setNextDH(DH) {
        this.nextDH = DH;
    }
}
class CountryDeliveryService {
    constructor() {
        this.defaultDeliveryCost = 200;
        this.multiplicationFactor = 2;
        this.nextDH = null;
    }
    deliver(order) {
        console.log('По всей стране доставка');
        order.cost += this.defaultDeliveryCost * this.multiplicationFactor;
        if (this.nextDH) {
            this.nextDH.deliver(order);
        }
    }
    setNextDH(DH) {
        this.nextDH = DH;
    }
}
class InternetShop {
    constructor() {
        this._order = {
            goods: null,
            cost: 0,
            deliveryOptions: null
        };
    }
    calculateDelivery() {
        if (this.order.deliveryOptions.departure === this.order.deliveryOptions.destination) {
            this.deliveryService = new LocalDelieryService();
        }
        else {
            const cS = new CountryDeliveryService();
            cS.setNextDH(new LocalDelieryService());
            this.deliveryService = cS;
        }
        this.deliveryService.deliver(this.order);
    }
    deliverOrder() {
        //this.delivertService.deliver(this.order);
        // if в одном городе
        // then LocalDliveryService.deliver
        // else CountryDeliverySevice.deliver
        // CountryDeliveryService и LocalDelieryService в зависимости от срочности будут ставить коэффициент на сумму стоимости доставки
    }
    get order() {
        return this._order;
    }
    set order(order) {
        this._order = order;
    }
    get deliveryService() {
        return this._deliveryService;
    }
    set deliveryService(service) {
        this._deliveryService = service;
    }
}
const order = {
    goods: ['1', '2'],
    cost: 1200,
    deliveryOptions: {
        departure: "Moscow",
        destination: "Vladivostok",
        urgency: UrgencyEnum.QUICK,
        deliveryCost: 0,
        multiplicationFactor: 0,
    }
};
const internetShop = new InternetShop();
internetShop.order = order;
console.log(internetShop.order);
internetShop.calculateDelivery();
console.log(internetShop.order);
//const localDelivery = new LocalDelieryService();
//localDelivery.deliver(order)
/**
 * А что если сделать  степпер
 * Каждый степ которого - один хэндлер из цепочки
 */ 
