let numOne = 25
let numTwo = 20
result = numOne / numTwo
console.log(result.toFixed(2))


// console.log(Math.random()) //this will generate random number values 

let random = Math.floor((Math.random() * (numOne - numTwo + 1 ) + numTwo ))

console.log(random)
