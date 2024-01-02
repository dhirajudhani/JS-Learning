const myArr = [0,1,2,3,4];

const myHeroes = ["Krissh"]

const myArr2 = new Array(1,2,3);

console.log(myHeroes)

//Array methods

myArr.push(6)
myArr.push(7)
myArr.pop();
console.log(myArr)

myArr.unshift(9); // add in first
console.log(myArr)

myArr.shift(); // remove in first
console.log(myArr)

console.log(myArr.includes(9));
console.log(myArr.indexOf(9));

// Note *******

const newArray = myArr.join();

console.log(myArr) //[ 0, 1, 2, 3, 4, 6 ]
console.log(newArray); //0,1,2,3,4,6


console.log(typeof newArray); //string 


//  slice vs splice

console.log("A ",myArr);

//slice 
const myn1 = myArr.slice(1,3);
console.log("B ",myArr);
console.log(myn1)

// splice
const myn2 = myArr.splice(1,3);
console.log("C ",myArr);
console.log(myn2)
