
var akhil = {
    name : 'I am Akhil',
    age : 21 ,
    isActive : true,
}

var athul = {
    name :  'I am athul',
    age : 12,
    isActive : true
}

var vishnu = {

    name : 'vishnu is my nick name',
    age : 12,
    isActive : false

}

let userLoop = new Map() // let revisit 

userLoop.set('akhil',akhil) // here in first bracket will be printed as it is and 2nd bracket will point towards the akhil object
userLoop.set('athul',athul)



// console.log(userLoop) //here it will visit all object which seted

// console.log(userLoop.values()) // here it will iterate through all the objects

// ---------------------------------------------------------------------------------------------------------------------------------

// for(const key of userLoop.keys()){ //here it will print the key which is the name of object
//     console.log(key)
// }
// --------------------------------------------------------------------------------------------------------------------------------
// for(const value of userLoop.values()){ //here it will print name values inside the object
//     console.log(value.name)
// }


// --------------------------------------------------------------------------------------------------------------------------------------


// for (const [akku , values] of userLoop.entries()){ // here it all we can name it any key value or any other all the operations are 
//     // by function please remember --> const[akku,value] akku refer to object name value refer to object
//     console.log(akku + ' = ' + values.name)
// }

// ------------------------------------------------------------------------------------------------------------------------------

// above function in string literals

//  for (const [akku , values] of userLoop.entries()){ // here it all we can name it any key value or any other all the operations are 
//     // by function please remember --> const[akku,value] akku refer to object name value refer to object
//     console.log(`${akku} = ${values.name}`)
// }

// ----------------------------------------------------------------------------------------------------------------------------------

// userLoop.forEach( (akku,akhil) => console.log(akku.name + ' = '+akhil) ) // here in case of map foreach loop first is value the is the index or the object
// map can be taken in case of array and object now let have in the case of array 

// ------------------------------------------------------------------------------------------------------------------------------------


let arrOfArr = [['one',1],['two',2],['three',3]]

let usLoop = new Map(arrOfArr)

console.log(usLoop)

