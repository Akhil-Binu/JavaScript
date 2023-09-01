const months = ['jan','feb','mar','april','may','june','july','aug','sep','oct','nov','dec']

months.forEach(
    function(month , index){
        console.log( `${index+1} st/nd/rd/th month is ${month}`)
    }
)