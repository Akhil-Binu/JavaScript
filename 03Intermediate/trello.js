let days = ['mon','tue','wed','thu','fri','sat']



// let akhil = function(){
//     console.log('Greetings from user ')
// }



days.forEach(
    function(day , index){ //here we usese first parametee is value in the array sacond parameter is index
        console.log(`Starts with ${index} -- ${day}`);
    }
)

