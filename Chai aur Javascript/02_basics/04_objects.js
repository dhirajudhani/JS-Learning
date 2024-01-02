// const tinderUser = new Object();

const tinderUser = {};

tinderUser.id = "123abc"
tinderUser.name = "Sam" 
tinderUser.isLoggedIn = ""

console.log(tinderUser)

const regularUser = {
    email:"some@gmail.com",
    fullname: {
        username:{
            firstname:"dhiraj",
            lastname:"udhani"
        }
    }
}

console.log(regularUser.fullname.username.firstname)

const obj1 = {1:"a",2:"b"}
const obj2 = {3:"a",4:'c'}

const obj4 = Object.assign({},obj1,obj2);
const obj3  = {...obj1,...obj2}
console.log(obj3)
console.log(obj4)


// Things used in projects more

const users = [
    {
        id:1,
        email:"d@.com"
    },
    {
        id:1,
        email:"d@.com"
    },
    {
        id:1,
        email:"d@.com"
    }
]

console.log(users[1].email);

console.log(tinderUser)
console.log(Object.keys(tinderUser)); // return type is array *****IMP****
console.log(Object.values(tinderUser)); // return type is array

console.log(tinderUser.hasOwnProperty('isLoggedIn'))


// ++++++++++++++++++ Destructuring of object ******************************

const course = {
    coursename : "js in hindi",
    price: "999",
    courseInstructor:"hitesh"
}
// course.courseInstructor // another way is down

const {courseInstructor : inst} = course;

// console.log(courseInstructor)
console.log(inst)

// ++++++++++++++ NOTE very very imp for formatting api or json we use website JSON formatter which helps to know about data present in object

