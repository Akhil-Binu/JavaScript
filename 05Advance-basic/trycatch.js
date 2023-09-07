const convertToRs = (dollar) => {

    if(typeof dollar === "number"){
        return dollar * 64
    }else{
        throw Error('Amount Must be in number')
    }
}

try{
    const store = convertToRs('five')
    console.log(store)
} catch(error) {
    console.log( error )  // if we have custom message on console.log that will be printed if any error occur
}

console.log('check out') // to get printed this value the value inside the  catch and console.log should be same