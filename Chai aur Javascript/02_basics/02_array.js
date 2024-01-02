const marvel_heros = ["thor","ironman","spider-man"];
const dc_heros = ["superman","batman","flash"];

// marvel_heros.push(dc_heros)

// console.log(marvel_heros)
// console.log(marvel_heros[3][1])

// const combine = marvel_heros.concat(dc_heros) //concat will return a new array
// console.log(combine)

// +++++++++++ another way to combine

const all_new_heros  = [...marvel_heros,...dc_heros]
console.log(all_new_heros)


// Not imp only for interview
const another_array = [1,2,3,[4,5,6],7,[6,7,[4,5]]];

const real_array = another_array.flat(Infinity);
console.log(real_array)

// ******** Very important ********
console.log(Array.isArray("Dhiraj")); // check whether given argument is an array or not
console.log(Array.from("Dhiraj")); // converts into array

console.log(Array.from({name:"dhiraj"})); // intresting

let score1 = 100;
let score2 = 200;
let score3 = 300;

console.log(Array.of(score1,score2,score3)) // of -> it coverts items(like variable, array, object etc) into an array