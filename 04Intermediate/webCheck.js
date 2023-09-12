let userEmail = ' akhilbinu123'
let passWord = '123@445678@3'


// In Javscript we can use predefined functions

// console.log(passWord.length)
// console.log(userEmail.toUpperCase())
// console.log(userEmail.trim()) // trim function also convert uppercase letters into lowercase

let userChecker = function(myString){
    if((myString.includes(123) && (myString.length >6))){
       return true
    }
    else{
        return false
    }
   
}

let passChecker = function(myPass){
    if((myPass.includes('123@') &&(myPass.length > 8 )))
    {
        return true
    }
    else
    return false
}

console.log(userChecker(userEmail))
console.log(passChecker(passWord))