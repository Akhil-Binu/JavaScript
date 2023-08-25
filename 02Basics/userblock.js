let whoIsHere = 'teacher'

if(whoIsHere === 'user'){

console.log("Greeting message for user ")
console.log('allow acess to view all courses')

}else if(whoIsHere === 'teacher'){
    console.log('greeting message for teacher ')
    console.log('allow access to view all courses ')
}
else{
    console.log('Message : Please Verify your identity');
    console.log('Message : Please verify your email')
}