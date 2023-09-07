// let see example of coercion in javascript 

// coercion simply means that javascript try to interpret with its own logic 

// console.log('subtraction sample') // considering subtraction javascript do exact arithmetical operation

// console.log('5'- 5)

// console.log('addition sample')

// console.log('5'+5) // while coming into addition javascript concatenate the values

// lets look in the case of boolean values 


// console.log(true + 1 ) //|
                      // | here we can see that in case of  boolean valuse the entire ideology changes and we get answers
// console.log(false+1)  // | like in the case of subtraction
// ----------------------------------------lets look another example----------------------------------------------------

const loginDetail = ''

const loginId = loginDetail[0] // here the array doesn't contain any values so this will considered as undefined



if(loginId) {
    console.log('allow user to login')
}
else{0
    console.log('auth failed')
}


// values that interpret as false

// null
// undefined
// 0
// false
// '' --> empty string