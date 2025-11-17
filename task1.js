function sumArray(arr){
    let sum = 0;
    arr.forEach(num => {
        sum += num;
    });
    return sum;
}
const arr = [1,2,3,4,5];
console.log(sumArray(arr));


// advance using reduce
const sumArr = arr => arr.reduce((a,b) => a + b, 0);
console.log(sumArr(arr));

function reverseString(str){
    const len_str = str.length;
    let reverse = "";
    for (let i = 1; i <= len_str; i++){
        reverse += str[len_str - i];
    }
    return reverse;
}


const word = "husni ramanda lubis";
console.log(reverseString(word));

let reversed = "";
for (const char of word){
    reversed = char + reversed;
}
console.log(reversed);