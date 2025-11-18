// let x = 10;
// x = 20;
// console.log(x)

// const name = "Husni";
// name = "husni";
// console.log(name);

// var a = 10;
// var b = 14;
// console.log(b);


// if (true){
//     var b = 50;
// }
// console.log(b);
// console.log(b+50);

// console.log(y);
// let y = 30;

// const arr = [1,2,3,4]
// arr.push(4);
// console.log(arr);

// const person = {name : "Husni"};
// person = {name : "Husni"};

// function findMax(arr){
//     let max_num = 0;
//     for (num of arr){
//         if (max_num < num){
//             max_num = num;
//         }
//     }
//     return max_num;
// }

// const findMax = (arr) => Math.max(...arr);
// const findMax = (arr) => arr.reduce((max, num) => num > max ? num : max)
const findMax = arr => 
    arr.length === 0 ? null : Math.max(...arr);


const arr = [1,10,3,25,1];
console.log(findMax(arr));

// function isEven(num){
//     if (num % 2 == 0){
//         return true
//     }
//     else {
//         return false
//     }
// }

// const isEven = num => num % 2 ? true : false
// const number = 28;
// console.log(isEven(number));



// const squareArray = arr =>
//     arr.length === 0 ? null : arr.map(num => num**2);

// console.log(squareArray(arr));

// const isEvenArray = arr =>
//     arr.length === 0 ? null : arr.filter(num => num % 2 === 0);

// console.log(isEvenArray(arr));

const evenSquare = arr =>
    arr
    .filter(num => num % 2 === 0)
    .map(num => num * num);
const arrayChallenge = [1, 10, 3, 25, 1]
console.log(evenSquare(arrayChallenge));


// const evenSquareTop50 = arr =>
//     arr
//     .filter(num => num % 2 === 0)
//     .map(num => num ** 2)
//     .filter(num => num > 50);



// const evenSquareTop50 = arr =>
//     arr.reduce((acc, num) => {
//         if (num % 2 === 0) {
//             const square = num ** 2;
//             if (square > 50) acc.push(square);
//         }
//         return acc;
//     }, []);

// const arrayChallenge2 = [1, 10, 3, 25, 4, 6];
// console.log(evenSquareTop50(arrayChallenge2));

// const longName = arr =>
//     arr
//     .filter(name => name.length > 5)
//     .map(name => name.toUpperCase());



// const longName = arr =>
//     arr.reduce((acc, name) =>{
//         if (name.length > 5){
//             const upperName = name.toUpperCase();
//             acc.push(upperName);
//         }
//         return acc
//     }, []);


// const names = ["husni", "ramanda", "ani", "rafi", "jlubis"]
// console.log(longName(names));

// const topBuyers = arr =>
const users = [
    { name: "husni", purchases: [10, 50, 20] },
    { name: "ani", purchases: [5] },
    { name: "ramanda", purchases: [100, 20, 30, 50] },
    { name: "ani", purchases: [15, 25, 30] },     // duplicate name
    { name: "rafi", purchases: [5, 10, 15] },
    { name: "ani", purchases: [10] }              // duplicate name again
];

const topBuyers = arr =>
    Object.entries(
    arr
    .reduce((acc, user) => {
        if (!acc[user.name]) {
            acc[user.name] = [];
        }
        acc[user.name].push(...user.purchases);
        return acc;
    }, {})
);
    // .map(([name, purchases]) => ({
    //     name,
    //     purchases
    // }))
    // .filter(arr => {
    //     const itemCount = arr.purchases.length;
    //     return itemCount > 2;
    // })
    // .map(arr => {
    //     const totalSpending = arr.purchases.reduce((sum, n) => sum + n, 0);
    //     return {...arr, totalSpending};
    // })
    // .sort((a, b) => b.totalSpending - a.totalSpending)
    // .map(arr => ({
    //     ...arr,
    //     name : arr.name.toUpperCase()
    // }))
    // .slice(0,3)


console.log(topBuyers(users));


const transactions = [
    { user: "husni", amount: 50,  type: "credit", timestamp: 101 },
    { user: "ani", amount: 5,   type: "debit",  timestamp: 105 },
    { user: "ramanda", amount: 200, type: "credit", timestamp: 110 },
    { user: "ani",     amount: 100, type: "credit", timestamp: 120 },
    { user: "rafi",    amount: 20,  type: "credit", timestamp: 99  },
    { user: "ani",     amount: 15,  type: "debit",  timestamp: 121 },
    { user: "husni",   amount: 200, type: "credit", timestamp: 130 },
    { user: "rafi",    amount: 10,  type: "debit",  timestamp: 115 },
    { user: "ani",     amount: 500, type: "credit", timestamp: 150 }
];



const detectFrauds = transactions =>
    Object.entries(
    transactions
    .reduce((acc, transaction)=>{
        const key = transaction.user;
        if (!acc[key]){
            acc[key] = [];
        }
        const {user, ...itemWithoutKey} = transaction;
        acc[key].push(itemWithoutKey);
        return acc;
    },{}))
    .map(([user, transaction]) => ({
        user,
        net : [...transaction]
        .sort((a,b) => b.timestamp - a.timestamp)
        .slice(0,3)
        .reduce((sum, tx) =>
            tx.type === "credit"
                ? sum + tx.amount
                : sum - tx.amount
                ,0
        )
    }))
    .filter(user => user.net > 100)
    .sort((a,b)=> b.net - a.net)
    .slice(0,3);
console.log(JSON.stringify(detectFrauds(transactions), null, 2));





    

