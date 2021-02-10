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

}

let myFirstClassInst = new MyFirstClass('Bulent');
myFirstClassInst.sayHi();