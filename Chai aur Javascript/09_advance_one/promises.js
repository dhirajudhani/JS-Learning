const promiseOne = new Promise(function(resolve, reject){
    // Do an async task 
        // DB calls, cryptography, network call
    setTimeout(function(){
        console.log("Asyn task is complete")
        resolve()
        
    }, 1000)

});
// console.log(typeof promiseOne) // object

promiseOne.then(function(){
    console.log("Promise consumed")
}) //seedha connecton hai resolve ke sath

// Another way of calling Promise
new Promise(function(resolve, reject){
    setTimeout(()=> {
        console.log("Async task 2")
        resolve()
    }, 1000)
}).then(function(){
    console.log("Async 2 cosumed")
})

// Promise three (How data is consumed by resolve )
const PromiseThree = new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve({username: "chai", email: "chai@exampl.com"})
    },1000)
})

PromiseThree.then(function(user){
    console.log(user)
})

// Promise four (How chaining works how to catch error and how to execute finally)
const promiseFour = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = true
        if(!error){
            resolve({username:"dhiraj", password: 123})
        }
        else{
            reject('ERROR: Something went wrong')
        }
    },1000)
})

promiseFour
.then((user) => {
    console.log(user)
    return user.username
})
.then((username) => {
    console.log(username)
})
.catch(function(error){
    console.log(error)
})
.finally(() => console.log("The promise either resolve or reject"))

// console.log(username)



// Promise five (How async await works same as promise but not able to catch error so we will use it in try catch block okay)

const promiseFive = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = true
        if(!error){
            resolve({username:"javascript", password: 123})
        }
        else{
            reject('ERROR: Js went wrong')
        }
    },1000)
})

async function consumePromiseFive(){
    try {
        const response = await promiseFive
        console.log(response)
    } catch (error) {
        console.log(error)
    }  
    
}
consumePromiseFive()


//new concept

// async function getAllUsers(){
//     try {
//         const response = await fetch("https://jsonplaceholder.typicode.com/users") 
//     // -> it will give "PROMISE" and fetch is a library or we can say it  is an object
//         const data = await response.json() //convert string into json (Note in async await convert string to json also takes time so write await in front of .json())
//         console.log(data)
//     } catch (error) {
//         console.log("E: ",error)
//     }
    
// }
// getAllUsers()


fetch("https://jsonplaceholder.typicode.com/users")
.then((response) => {
    return response.json()
})
.then((data) => {
    console.log(data)
})
.catch((error) => console.log(error)) 