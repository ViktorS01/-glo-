// -- define property --

const mazda = {
    model: 'v3',
    color: 'red',
    set full(model){ 
        this.model = model;
    },
    get full(){
        return this;
    }
};

mazda.full = 'v5';
console.log(mazda.full);

Object.defineProperty(mazda, 'age', {
    value: '13',
    writable: true, // переписывать свойство
    configurable: true, //удалить
    enumerable: true //перебор с помощью циклов
});

Object.defineProperty(mazda, 'getAndSet', {
    set: function (value){
        this.model = value;
    },
    get: function(){
        return this.model + " color: " + this.color;
    },
});

mazda.getAndSet = "mazda 3";

console.log(mazda.getAndSet);

// -- CLASS --

class Human {
    constructor (foot = Human.isNull(), head = Human.isNull(), services = []){
        this.foot = foot;
        this.head = head;
        this.mind = false;
        this._services = services; // _ - инкапсуляция
    }

    static isNull (){ // статичный метод
        return null;
    }

    toMind (){
        Human.counter++; // переменная к которой не добраться
        this.mind = true;
    }

    get services(){
        console.log(this._services);
        return this._services.length > 0 ? "Есть доп услуги" : "Нет доп услуг"; 
    }

    set services(addServ){
        this._services.push(addServ); 
    }
}

Human.counter = 0;

const human = new Human(null, null, ['Помыл машину']);

console.log(human.services);

// -- Extends --

class Morgenshtern extends Human {
    constructor(foot, head, services, brain = false){
        super(foot, head, services); // наследуем конструктор родителя
        this. brain = brain;
        this.mind = false;
    }

    toMind(){
        super.toMind();
        console.log('Невозможно!');
    }


}

const morgen = new Morgenshtern();
console.log(morgen.toMind());

// -- Доп. задание --

class First {
    hello (){
        console.log('Привет, я метод родителя!');
    }
}

class Second extends First {
    hello (){
        super.hello();
        console.log('А я наследуемый метод!');
    }
}

const first = new First();
const second = new Second();

first.hello();
second.hello();