let iamGlobal = 'someValue'

if(true){
    let iamLocal ='localvalue'
    var local = 'demo'
    console.log(iamGlobal)
    console.log(iamLocal)

}

// console.log(iamLocal) 
// (if we try to print we will get an error if use u need to declare using var the global declartion in javascript)


console.log(local)