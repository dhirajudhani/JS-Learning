function sayMyName(){
    console.log("d")
    console.log("h")
    console.log("i")
    console.log("r")
    console.log("a")
    console.log("j")
}

sayMyName // this is a reference
sayMyName() // this is execution

// function addTwoNumber(number1 , number2){
//     console.log(number1+number2)
// }

// const result = addTwoNumber(3,4);
// console.log(result)


function addTwoNumber(number1 , number2){
        let result = number1+number2;
        console.log("dhiraj")
        return result;
       
    }
const result = addTwoNumber(3,5);
console.log(result)

function userLoggedIn(username){
    return `${username} just logged in`
}

console.log(userLoggedIn("dhiraj"))


// ********** IMP *****************
// Note for add to cart feature we use rest oprator(...)

function calculateCart(...num1){
    return num1;
}
console.log(calculateCart(200,300,400))


const user = {
    username: "dhiraj",
    price: 299
}

function handleObjects(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`)
}
handleObjects(user)
handleObjects({
    username:"sam",
    price: 222
})