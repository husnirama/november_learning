function sumArray(arr){
    var numbers = arr;
    let sum = 0;
    numbers.forEach(element => {
        sum += element;
    });
    return sum
}
const arr = [1,2,3,4,5];
console.log(sumArray(arr));

function reverseString(str){
    var string = str;
    var len_str = string.length;
    let reverse = "";
    for (let i = 1; i <= len_str; i++){
        reverse += string[len_str - i];
    }
    return reverse
}
const word = "husni ramanda lubis";
console.log(reverseString(word));