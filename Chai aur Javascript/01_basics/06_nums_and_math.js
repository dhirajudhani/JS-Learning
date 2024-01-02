const score = 400
console.log(score)

const balance = new Number(1000)
console.log(balance)

console.log(balance.toString());
console.log(balance.toFixed(3));

const otherNumber = 23.8999;
console.log(otherNumber.toPrecision(3));

// Very good

const otherNumber1 = 123.8999;
console.log(otherNumber1.toPrecision(3));

const hundreds = 1000000
console.log(hundreds.toLocaleString('en-IN'));


// +++++++++++++++++++++++++++++  Maths +++++++++++++++++++++++++++++++++

console.log(Math)
console.log(Math.abs(-4));
console.log(Math.round(4.5));


console.log(Math.random()); // always give value between 0 and 1
console.log((Math.random()*10)+1);
console.log(Math.floor(Math.random()*10)+1);

// Very Important formula may use in future to find no between the range
const min = 10;
const max = 20;

console.log(Math.floor(Math.random()*(max-min+1))+min);