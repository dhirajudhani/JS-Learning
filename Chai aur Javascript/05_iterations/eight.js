// reduce

const myNums = [1,2,3,4]

const myTotal = myNums.reduce(function(acc, currval) {
    console.log(`acc: ${acc} and currval: ${currval}`)
    return acc + currval
}, 0)

// using arrow function
const myTotals = myNums.reduce( (acc, curr) => acc + curr, 0 )

console.log(myTotal)
console.log(myTotals)


const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "java course",
        price: 3999
    },
    {
        itemName: "py course",
        price: 999
    },
    {
        itemName: "web dev course",
        price: 12999
    }
]

const priceToPay = shoppingCart.reduce( (acc, item) => acc + item.price, 0 );
console.log(priceToPay)
