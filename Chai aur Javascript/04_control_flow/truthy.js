const userEmail = " "
 
if(userEmail){
    console.log("User loggedin")
}
else{
    console.log("User not logged in")
}


// falsy value => 0, false, -0, BigInt 0n, "", null, undefined, NaN
// other than is are truthy values some imp are as follow
// truthy values => [], {}, function(){}, "0"

// check if given variable is empty object or not

const emptyObj = {}
if(Object.keys(emptyObj).length === 0){
    console.log("Empty obj")
}

/// Nullish Coalescing Operator (??) : null and undefined

let val1;
// val1 = 5 ?? 10 --> O/p is 5
// val1 = null ?? 11 ---> o/p is 11
// val1 = undefined ?? 4 --> o/p is 4

console.log(val1)

/// Terniary Operator (?)

// condition ? true : false

const iceTea = 100

iceTea >= 80 ? console.log("yes") : console.log("no")