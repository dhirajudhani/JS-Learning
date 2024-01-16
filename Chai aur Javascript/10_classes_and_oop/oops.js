const user = {
    username: "Dhiraj",
    loginCount: 8,
    signedIn: true,
    getUserDetails: function(){
        //console.log("Got user details from database");
        // console.log(`Username: ${this.username}`);
        console.log(this);
    }
}


//console.log(user.username)
//console.log(user.getUserDetails());
// console.log(this);


// Construction function

function User(username, loginCount, isLoggedIn){
    this.username = username
    this.loginCount = loginCount
    this.isLoggedIn = isLoggedIn
    this.greeting = function(){
        console.log(`greeting ${this.username}`)
    }

    return this
}

// const userOne = User("dhiraj",12,true)
// const userTwo = User("chai",11,false) 
// "NOTE" without writing new keyword userOne copy data of userTwo hence on printing userOne it will return userTwo i/p so it so not correct way , Correct way is wriiten below 
// console.log(userOne)

// Correct way of above
const userOne = new User("dhiraj",12,true)
const userTwo = new User("chai",11,false) 
console.log(userOne)
console.log(userTwo)


// new keyword basically work in 4 steps

// Step 1 = naya object humare pass create ho jayega
// Step 2 = constructor function call hota hai new keyword ke karar , isme sare argument pack kar ta hai aur hume de deta hai
//step 3 = this keyword ke ander ye argument inject ho jate 
//step 4 = hume mil jate function ke ander 
