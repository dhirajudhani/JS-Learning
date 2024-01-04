// this kya hai ? -> current context ko refer karta hai

const user = {
    username : "dhiraj",
    price: 999,

    welcomeMessage : function(){
        console.log(`${this.username}, welcome to website`)
        console.log(this)
    }
}

// user.welcomeMessage();
// user.username = "sam"
// user.welcomeMessage();

console.log(this)


function chai(){
    let username = "dhiraj";
    console.log(this.username); // this statement will not execute because this cannot work inside function 
    console.log(this)
}
chai()


// +++++++++++++++++++++  ARROW FUnction ++++++++++++++++++++++++++++++++

const coffee = () => {
    let username = "dhiraj";
    console.log(this.username); // this statement will not execute because this cannot work inside function 
    console.log(this) // in arrow function this statement will return {} (empty)
}
coffee()

const addTwo = (val1 , val2) => {
    return val1 + val2
}
console.log(addTwo(1,3))

// Implicit return -> in which paranthesis {} is not used also we will not use return 

const addOne = (value1) => (value1+1)  
console.log(addOne(2))

const obj = () => ({username:"dhiraj"})

console.log(obj())