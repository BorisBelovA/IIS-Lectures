
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

export enum UrgencyEnum {
    QUICK = 1,
    MEDIUM = 2,
    LOW = 3
}


export interface DeliveryOptions {
    departure: string;
    destination: string;
    urgency: UrgencyEnum,
    deliveryCost: number,
    multiplicationFactor: number,
}

export interface IOrder {
    goods: string[];
    cost: number;
    deliveryOptions: DeliveryOptions
}

export interface DeliveryService {
    defaultDeliveryCost: number,
    multiplicationFactor: number;
    nextDH: DeliveryService;
    deliver(order: IOrder);
    setNextDH(DH: DeliveryService);
}


export class LocalDelieryService implements DeliveryService {
    defaultDeliveryCost = 100;
    multiplicationFactor = 1;
    nextDH = null;
    deliver(order: IOrder){
        /*if(order.deliveryOptions.urgency = UrgencyEnum.QUICK){
            this.defaultDeliveryCost *= 2;
        }*/
        order.cost += this.defaultDeliveryCost * this.multiplicationFactor;
        console.log('По городу')
        if(this.nextDH){
            this.nextDH.deliver(order)
        }
    }
    setNextDH(DH: DeliveryService){
        this.nextDH = DH;
    }
}

export class CountryDeliveryService implements DeliveryService {
    defaultDeliveryCost = 200;
    multiplicationFactor = 2;
    nextDH = null;
    deliver(order: IOrder) {
        console.log('По всей стране доставка')
        order.cost += this.defaultDeliveryCost*this.multiplicationFactor;
        if(this.nextDH){
            this.nextDH.deliver(order)
        }
    }
    setNextDH(DH: DeliveryService){
        this.nextDH = DH;
    }
}

export class InternetShop {
    _order: IOrder;

    _deliveryService: DeliveryService;

    constructor() {
        this._order = {
            goods: null,
            cost: 0,
            deliveryOptions: null
        }
    }

    calculateDelivery() {
        if(this.order.deliveryOptions.departure === this.order.deliveryOptions.destination){
            this.deliveryService = new LocalDelieryService();
        }else{

            const cS = new CountryDeliveryService()
            cS.setNextDH(new LocalDelieryService());
            this.deliveryService = cS;
        }
        this.deliveryService.deliver(this.order)

    }

    deliverOrder() {

    }

    get order(): IOrder {
        return this._order
    }

    set order(order: IOrder) {
        this._order = order;
    }

    get deliveryService(): DeliveryService {
        return this._deliveryService;
    }

    set deliveryService(service: DeliveryService) {
        this._deliveryService = service;
    }
}



const order: IOrder = {
    goods: ['1', '2'],
    cost: 1200,
    deliveryOptions: {
        departure: "Moscow",
        destination: "Vladivostok",
        urgency: UrgencyEnum.QUICK,
        deliveryCost: 0,
        multiplicationFactor: 0,
    }
}

const internetShop = new InternetShop()
internetShop.order = order;
console.log(internetShop.order)
internetShop.calculateDelivery()
console.log(internetShop.order)
