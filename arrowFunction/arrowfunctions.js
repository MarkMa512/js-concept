function sum(a, b){
    return a + b 
}

let sum2 = (a, b) => {
    return a+b
}

// whatever after => is assumed to be returned 
let sum3 = (a, b) => a+b


function isPositive(number){
    return number >= 0
}

let isPositive2 = number => number >= 0


function randomNumber(){
    return Math.random
}

let randomNumber = () => Math.random

// Annonymous function: when we pass one function to another function 
document.addEventListener('click', function(){
    console.log('Click')
})

document.addEventListener('click', () =>console.log('Click'))

// this keyword 