// let mark = 30


// let percentage = (mark/totalmarks) * 100 ;

// if(mark > 100){
//     console.log("Please make sure that mark entered by you is a valid mark obtained in exam ")
// }
// else if(mark >= 90 ){
//     console.log('your grade is A')
// }

// else if(mark >=  80 ){
//     console.log('your grade  is B')
// }
// else if (mark >= 70 ){
//     console.log('your grade is C')
// }
// else if (mark >= 60 ){
//     console.log('your grade is D')
// }
// else if(mark >= 50 ){
//     console.log('your grade is E')
// }
// else{
//     console.log('you failed in the exam ')
// }


let getMyGrade = function(currentmarks , totalmarks)
{
let percentage = (currentmarks/totalmarks)*100 ;

if(percentage > 100 )
{
    console.log('please enter a valid mark')
}
else if(percentage >= 90 ){
    console.log('your grade is A')

}
else if (percentage >= 80){
    console.log('your grade is B')
}
else if(percentage >= 70)
{
    console.log('your grade is C')
}
else if(percentage>=60)
{
    console.log('your grade is D')
}
else if(percentage>=50)
{
    console.log('your grade is E')
}
else{
    console.log('you failed in the exam')
}


return percentage
}
getMyGrade(25,30)

//console.log(getMyGrade(25,40))