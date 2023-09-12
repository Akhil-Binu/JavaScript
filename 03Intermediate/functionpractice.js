let MyAdder = function(num1 , num2){

    let result = num1 + num2 ;
    return result;
}

// console.log(MyAdder(5,3))

let MyMultiplier = function(num3 , num4){

    return num3 * num4 ;
}

// console.log(MyMultiplier(5,6))

let guestUser = function(name = 'unName' , courseCount = 0 ){

    return 'hello ' + name + ' you have enrolled in ' + courseCount + ' courses' ;
}


console.log(guestUser('akhil',3))

