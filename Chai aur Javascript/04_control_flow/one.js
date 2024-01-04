// if

const temp = 41;
if(temp <= 50){
    console.log("temp is less than 50");
}else{
    console.log("temp is greater than 50")
}
console.log("executed")


const score = 200

if(score > 100){
    const power = "fly";
    console.log(`User power : ${power}`)
}
// console.log(`User power : ${power}`)
// > , < , >= , <= , == , != , === , !==

// ++++++++++++++++++++++ Shorthand Notation +++++++++++++++++++++++

const balance = 1000
if(balance > 500) console.log("test");

const userLoggedIn = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true

if(userLoggedIn && debitCard){
    console.log(`User allowed for buying`)
}
if(loggedInFromEmail || loggedInFromGoogle){
    console.log(`User logged in`)
}