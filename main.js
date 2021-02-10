/*Syntax:
class ClassNameWithCapitalInitial !!no parentheses here!! {

    constructor (params) {
        ...code goes here
    }

    !!No function keyword!! 
    !!camelCase name!!
    method1() {

    }

    method2() {

    }
}
*/
class MyFirstClass {
    
    constructor (name) {
        this.userName = name;
        console.log(`Constructor already set userName as ${name}`);
    }

    sayHi () {
        console.log(`Hi ${this.userName}`)
    }

    ['say'+'Hello'] () {
        console.log('Hello World!');
    }

    //
    static test () {
        console.log('static method')
    }

}

let myFirstClassInst = new MyFirstClass('Bulent');
myFirstClassInst.sayHi();
myFirstClassInst.sayHello();
console.log('class:',typeof(MyFirstClass), MyFirstClass);
console.log('instance:',typeof(myFirstClassInst), myFirstClassInst);

let mySecondInstanceFromFirstClass = new MyFirstClass('DCI');
mySecondInstanceFromFirstClass.sayHi();

console.log(myFirstClassInst, mySecondInstanceFromFirstClass)


/* 
////Class is NOT just a syntactic sugar////
---------------------------------------------
1. We can create dummy structure which is similar to Class.
2. We can call functions without new but not classes.
3. We can loop function methods but not class method.
4. Classes always use strict. All code inside the class construct is automatically in strict mode. This gives more secure scope
*/


class Animal {
    constructor (name) {
        this.name = name;
        this.speed = 0;
    }
    run(speed) {
        this.speed = speed;
        console.log(`${this.name} runs with speed ${this.speed}`);
    }
    stop () {
        this.speed = 0;
        console.log(`${this.name} stands`);
    }
}
let animal = new Animal('My animal');
animal.run('20km/h');
animal.stop();
//animal.hide();

class Rabbit extends Animal {
    stop () {
        super.stop();
        console.log('This is new!');
    }
    hide() {
        console.log(`${this.name} hides!`);
    }
}
let rabbit = new Rabbit ('White Rabbit');
rabbit.run('10km/s');
rabbit.stop();
rabbit.hide();




class CoffeeMachine {
    //protected property
    _waterAmount = 0;
    //Heads-up: Protection is not language level!

    #coffee = 0;

    setWaterAmount(newAmount){
        if(newAmount >= 0) {
            this._waterAmount = newAmount;
        } else {
            console.warn('Water amount can not be minus!');
        }
    }

    setCoffeeAmount (newAmount) {
        if(newAmount >= 0) {
            this.#coffee = newAmount;
        } else {
            console.warn('Coffee amount can not be minus!');
        }
    }


    constructor (power) {
        this.power = power;
        console.log(`Coffee machine id ready with power: ${this.power}`);
    }
}

let coffeeMachine = new CoffeeMachine ('100w');

//We should not do something like below.
//coffeeMachine._waterAmount = 200;

coffeeMachine.setWaterAmount(-50);
coffeeMachine.setWaterAmount(50);

//coffeeMachine.#coffee = 30;
coffeeMachine.setCoffeeAmount(-50);

console.dir( coffeeMachine);