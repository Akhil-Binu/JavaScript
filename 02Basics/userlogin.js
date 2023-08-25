let isVerified = false
let isLoggedIn = true
let hasPaymentToken = true
let isGuest = false

if(isVerified && isLoggedIn && hasPaymentToken){
    console.log("Greetings hello user you are succesfully logged in")
    console.log("Grant access to paid course ")

}else if(isVerified || isGuest){

    console.log('Allow free previews')

}else{
    console.log('Please Contact Admin');
}
