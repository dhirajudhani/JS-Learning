// singleton yeh apne tarike ka ek hi object hai
// Object.create


// object literals

const mySym = Symbol("key1");


const jsUser = {
    name :"dhiraj",
    "full name":"Dhiraj Udhani",
    [mySym]: "key1",
    age : 21,
    location: "ahmedabad",
    email:"dhiraj@google.com",
    isLoggedIn : true,
    lastLoggin : ["monday","sunday"]
}

console.log(jsUser.email)
console.log(jsUser["email"]) // another way of accessing
console.log(jsUser["full name"])
console.log(jsUser[mySym])

jsUser.email = "dhirajudhani@zoho.com";
// Object.freeze(jsUser) // after this changes cannot be made
jsUser.email = "dhirajudhani@microsoft.com";



console.log(jsUser)


jsUser.greeting = function(){
    console.log("Hello JS User");
}
jsUser.greetingTwo = function(){
    console.log(`Hello JS User , ${this.name}`);
}

console.log(jsUser.greeting())
console.log(jsUser.greetingTwo())