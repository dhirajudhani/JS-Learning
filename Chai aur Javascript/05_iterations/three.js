// forof loop (array specific)

// ["","",""]
// [{},{},{}] // array of obj

const arr = [1,2,3,4,5]

for (const num of arr) {
    console.log(num)
}

const greetings = "Hello world!"
for (const greet of greetings) {
    console.log(greet)
}

// Map -->it returns object use generally forof loop (Note : It does not have duplicate values and also order remain the same )

const map = new Map();
map.set('IN',"India")
map.set('USA',"America")
map.set('UK',"England")

console.log(map)

for (const [key,value] of map) {
    console.log(`${key} :- ${value}`)
}

const myObj = {
    'game1':'NFS',
    'game2':'fifa'
}

for (const [key,value] of myObj) {
    console.log(`${key} :- ${value}`)
}
// Note for object forof loop will not work for objects forin loop will work refer four.js file for it