// var c = 300;
let a = 200

if(true){
    let a = 20;
    const b = 30;
    // var c = 40;
    console.log("Inner: ",a)
}

// console.log(a);
// console.log(b);
// console.log(c);


// ******* Nested scoping *************

function one(){
    const username = "dhiraj"

    function two(){
        const website = "youtube"
        console.log(username)
    }

    // console.log(website)    

    two()
   
}

one()



if(true){
    const username = "dhiraj"
    if(true){
        const website = " youtube"
        console.log(username + website)
    }
    // console.log(website) // error out of scope
}
// console.log(username) // error out of scope



//  ******************* intresting(Hoisting) *************

addone(5);
function addone(num1){
    return num1+1;
}

addtwo(5)
const addtwo = function(num2){
    return num2+2;
}
// Note = if any function is called inside a variable then hoisting will not work
// for above code addone will execute BUT addtwo will give an error as it is in variable