let score = "33"
let score1 = "33abc"
let score2 = null;


// console.log(typeof score);
// console.log(typeof(score));

console.log(typeof score1);
console.log(typeof(score1));

// console.log(typeof(score2));


let valueInNumber = Number(score);
let valueInNumber1 = Number(score1);
let valueInNumber2 = Number(score2);

// console.log(typeof valueInNumber)
// console.log(typeof(valueInNumber))
// console.log(typeof(valueInNumber1))
// console.log(valueInNumber1) // NaN
console.log(typeof(valueInNumber2))
console.log(valueInNumber2);



//"33" => 33
//"33abc" => Nan
// true => 1 or false => 0

let isLoggedIn = "";
 
let booleanLoggedIn = Boolean(isLoggedIn);

console.log(booleanLoggedIn)

// 1 => true or 0-> false
// "" => false
// " " => true
// "abx" => true

// ****************************** Operations ******************************* //

console.log(1 + 2);
console.log(1+"2")
console.log("1"+2);
console.log("1" + 2 + 2); // left to rigth string is first concat
console.log(1 + 2 + "2"); // left to rigth number is first add


