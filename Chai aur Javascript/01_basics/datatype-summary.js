// Primitive (call by value)

// Types 7 -> String , Number , Boolean , null , undefined , Symbol , BigInt

// Non-primitive (call by reference)

// Arrays , Objects , Functions

// Symbol
const id = Symbol('123');
const anotherId = Symbol('123');

console.log(id);
console.log(id === anotherId)
// 
// 
//
// Return type of variables in JavaScript
// 1) Primitive Datatypes
//        Number => number
//        String  => string
//        Boolean  => boolean
//        null  => object
//        undefined  =>  undefined
//        Symbol  =>  symbol
//        BigInt  =>  bigint

// 2) Non-primitive Datatypes
//        Arrays  =>  object
//        Function  =>  function
//        Object  =>  object

//  ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// Memory 2 types -> Stack (Primitive), Heap (Non-Primitive)

// Primitive stores in stack so (pass by value )
let ytName = "Dhiraj"
let anotherName = ytName;

console.log(ytName)//"Dhiraj"
console.log(anotherName)//"Dhiraj"

anotherName = "Udhani"

console.log(ytName)//Dhiraj
console.log(anotherName)//"Udhani"


// Non primitive is store in heap (pass by reference)

let userOne = {
    email:"dhirajudhani"
}
let userTwo = userOne;

console.log(userOne.email);//"dhirajudhani"
console.log(userTwo.email);//"dhirajudhani"

userTwo.email = "udhanidhiraj"

console.log(userOne.email);//"udhanidhiraj"
console.log(userTwo.email);//"udhanidhiraj"

