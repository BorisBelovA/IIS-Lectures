
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

enum UrgencyEnum {
    QUICK = 1,
    MEDIUM = 2,
    LOW = 3
}


interface DeliveryOptions {
    departure: string;
    destination: string;
    urgency: UrgencyEnum,
    deliveryCost: number,
    multiplicationFactor: number,
}

interface IOrder {
    goods: string[];
    cost: number;
    deliveryOptions: DeliveryOptions
}

interface DeliveryService {
    defaultDeliveryCost: number,
    multiplicationFactor: number;
    deliver(order: IOrder);
}

class LocalDelieryService implements DeliveryService {
    defaultDeliveryCost = 100;
    multiplicationFactor = 0;
    deliver(order: IOrder){
        if(order.deliveryOptions.urgency = UrgencyEnum.QUICK){
            this.defaultDeliveryCost *= 2;
        }
        console.log(this.defaultDeliveryCost)
    }
}

class InternetShop {
    _order: IOrder;

    delivertService: any

    constructor() {
        this._order = {
            goods: null,
            cost: 0,
            deliveryOptions: null
        }
    }

    calculateDelivery() {

    }

    deliverOrder() {
        // if в одном городе
        // then LocalDliveryService.deliver
        // else CountryDeliverySevice.deliver

        // CountryDeliveryService и LocalDelieryService в зависимости от срочности будут ставить коэффициент на сумму стоимости доставки
    }

    get order(): IOrder {
        return this._order
    }
}



const order: IOrder = {
    goods: ['1', '2'],
    cost: 1200,
    deliveryOptions: {
        departure: "Moscow",
        destination: "Moscow",
        urgency: UrgencyEnum.QUICK,
        deliveryCost: 0,
        multiplicationFactor: 0,
    }
}

const internetShop = new InternetShop()

console.log(internetShop.order)

const localDelivery = new LocalDelieryService();
localDelivery.deliver(order)



