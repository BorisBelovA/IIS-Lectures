interface Subject {
    state
    addBank(observer: Observer): void;
    removeBank(observer: Observer): void;
    notify(): void;
}

interface Observer {
    state
    update(subject: Subject): void;
}

export class CentralBank implements Subject {

    private _state = {
        usd: 67.58,
        eur: 74.80
    }

    private _banks: Observer[] = [];

    constructor() {}

    addBank(bank: Observer) {
        this.banks.push(bank);
        bank.state = this.state;
    }

    removeBank(bank: Observer) {

    }

    notify() {
        for(let bank of this.banks){
            bank.update(this)
        }
    }

    get state() {
        return this._state;
    }

    set state(state){
        this._state = state;
    }

    get banks(){
        return this._banks;
    }

}

export class SberBank implements Observer {
    
    constructor(){}

    public state = {}

    update(subject: Subject){
        console.log(`Обменный курс валют Сбербанка: \n    USD: ${subject.state.usd} \n    EUR: ${subject.state.eur}`)
    }
}

export class VTB implements Observer {
    
    constructor(){}

    public state = {}

    update(subject: Subject){
        this.state = subject.state;
        console.log(`Обменный курс валют ВТБ: \n    USD: ${subject.state.usd} \n    EUR: ${subject.state.eur}`)
    }
}

const cb = new CentralBank();

const sb = new SberBank();
const vtb = new VTB();

cb.addBank(sb)
cb.notify();

cb.state = {
    usd: 70.50,
    eur: 91.35
}
console.log("Изменился курс валют!")
cb.addBank(vtb)
cb.notify()
