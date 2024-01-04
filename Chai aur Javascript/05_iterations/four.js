const myObj = {
    js : "javascript",
    cpp : "C++",
    rb: "ruby",
    swift: "swift by apple"
}

for (const key in myObj) {
    // console.log(key)
    // console.log(myObj[key])
    //console.log(`${key} is shorcut for ${myObj[key]}`)
}

// forin loop for array
const prog = ["js", "java","cpp"]
for (const key in prog) {
    // console.log(prog[key])
}

const map = new Map();
map.set('IN',"India")
map.set('USA',"America")
map.set('UK',"England")

for (const key in map) {
    console.log(key)
}
// in map forin will not iterate