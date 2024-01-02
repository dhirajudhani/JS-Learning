const name = "dhiraj";
const repoCount = 13

console.log(name + repoCount + "value"); // Not recommendable

// String interpolation(use bactticks ``)

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);


const gameName = new String("dhirajud");


console.log(gameName.length);
console.log(gameName.toUpperCase()); // here orignal value is not changed as string is primitive data type and it will use stack memory
console.log(gameName.charAt(2));
console.log(gameName.indexOf('t'));

const newString = gameName.substring(0,4);
console.log(newString);

const anotherString = gameName.slice(-7,4)
console.log(anotherString)

const newStringOne = "     dhiraj.    ";
console.log(newStringOne)
console.log(newStringOne.trim());


const url = "https://dhiraj.com/dhiraj%13udhani";
console.log(url.replace('%13','-'));

console.log(url.includes('dhiraj')); // Very good

console.log(gameName.split('-'));