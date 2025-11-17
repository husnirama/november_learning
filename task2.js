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



const evenSquareTop50 = arr =>
    arr.reduce((acc, num) => {
        if (num % 2 === 0) {
            const square = num ** 2;
            if (square > 50) acc.push(square);
        }
        return acc;
    }, []);

const arrayChallenge2 = [1, 10, 3, 25, 4, 6];
console.log(evenSquareTop50(arrayChallenge2));
