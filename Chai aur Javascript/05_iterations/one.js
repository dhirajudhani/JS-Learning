// for

for (let index = 0; index < 10; index++) {
    const element = index;
    console.log(element)
}

let myArray = ["batman", "superman", "flash"]

for (let index = 0; index < myArray.length; index++) {
    const element = myArray[index];
    console.log(element)
}

// break and continue
for (let index = 1; index <= 20; index++) {
    if(index == 5){
        console.log(`5 detected`);
        continue;
    }
    console.log(`value of i is ${index}`)
}