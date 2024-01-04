// for each
const prog = ["js", "java","cpp","python","rust"]

// here function is callback function so name will be not there
// variation 1
prog.forEach( function(item) {
    console.log(item)
} )

// variation 2
prog.forEach( (item) => {
    console.log(item)
} )

// variation 3

function printMe(item){
    console.log(item)
}

prog.forEach(printMe) // here we will pass reference of function 

// variation 4

prog.forEach( (item,index,arr) => {
    console.log(item,index,arr)
} )

// foreach is also used for array of object [{}, {}, {}]

const myObj = [
    {
        languageName: "javascript",
        languageFile: "js"
    },
    {
        languageName: "java",
        languageFile: "java"
    },
    {
        languageName: "python",
        languageFile: "py"
    }
]

myObj.forEach( (item) => {
    // console.log(item.languageFile)
    console.log(`${item.languageName} = ${item.languageFile}`)
} )