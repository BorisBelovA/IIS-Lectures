// Конвеер сборки бургера

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

export abstract class BurgerBuilder {
    name: string;

    bread: string;

    chop: string;

    sauce: string;

    vegetables: string[];

    constructor(burgerName: string) {
        this.name = burgerName;
    }

    constructBurger() {
        this.addBread();
        this.addChop();
        this.addSauce();
        this.addVegetables();
    }

    addBread() { 
        this.bread = 'Пшеничная булочка'
    }

    abstract addChop()

    abstract addSauce()

    addVegetables() {
        this.vegetables = ['Помидоры', 'Огурцы', 'Салат', 'Лук']
     }

    serveBurger() {
        console.log(`Ваш ${this.name} готов! Состав: 
            ${this.bread}, 
            ${this.chop}, 
            ${this.sauce}, 
            ${this.vegetables}.
            Приятного аппетита!`)
    }
}
export class BigMackBuilder extends BurgerBuilder{
    addChop(){
        this.chop = 'Мясная котлета';
    }

    addSauce(){
        this.sauce = 'Легендарный соус бигмака'
    }
}

export class ChickenBurgerBuilder extends BurgerBuilder {

    addChop(){
        this.chop = 'Куриная котлета';
    }

    addSauce(){
        this.sauce = 'Соус чикенбургера';
    }

}

const bmMaker = new BigMackBuilder('Биг Мак')
bmMaker.constructBurger();
bmMaker.serveBurger();

const cbMaker = new ChickenBurgerBuilder('Чикен Бургер');

cbMaker.constructBurger();
cbMaker.serveBurger();
