// Dates 

let myDate = new Date();
console.log(myDate) //2023-10-10T03:32:30.324Z
console.log(myDate.toString()); //Tue Oct 10 2023 09:02:30 GMT+0530 (India Standard Time)
console.log(myDate.toDateString());//Tue Oct 10 2023
console.log(myDate.toISOString());//2023-10-10T03:32:30.324Z
console.log(myDate.toLocaleDateString())//10/10/2023
console.log(myDate.toJSON())//2023-10-10T03:32:30.324Z

console.log(typeof myDate)

// let myCreatedDate = new Date(2023,0,23); //month start with 0-index
// let myCreatedDate = new Date(2023,0,23,5,3);
// let myCreatedDate = new Date("2023-01-14");
let myCreatedDate = new Date("01-13-2023");
console.log(myCreatedDate.toString())


//  Time stamp (very imp)

let myTimeStamp  = Date.now()// in ms
console.log(myTimeStamp)
console.log(myCreatedDate.getTime()); // date in ms

console.log(Math.floor(Date.now()/1000))  //in sec

let newDate = new Date();
console.log(newDate);
console.log(newDate.getMonth());

newDate.toLocaleString('default',{
    weekday:"narrow"
})