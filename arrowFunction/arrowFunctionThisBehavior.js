/**
 * Scoping of this 
 */
class Person{
    constructor(name){
        this.name = name 
    }

    printNameArrow(){
        setTimeout(()=>{
            console.log('Arrow: ' + this.name)
        }, 100)
    }

    printNameFunction(){
        setTimeout(function(){
            console.log('Function: ' + this.name)
            // defined at where the function is called
        }, 100);
    }
}

let person = new Person('B')

person.printNameArrow() // this is nor re-defined, as per other programming language 

person.printNameFunction() // the function is called here, so this's scope is outside, like the line below 
console.log(this.name) // this.name is unfdefiend at global scope 
