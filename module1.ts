const productName : string = 'Indomie Goreng';
let price : number = 23000;
var isExpiry : boolean = false; 
console.log(price);

// string.slice(startIndex?: number, endIndex?: number): string;

const productSlice : string = productName.slice(8);
console.log(productSlice);

// string.substring(indexA, [indexB])
const productSub : string = productName.substring(0,7);
console.log(productSub);

// string.substr(start, [length])
const productSubStr : string = productName.substr(8);
console.log(productSubStr);

// string.padStart(targetLength: number, padString?: string): string;
let greeting: string = "Hello";
let greeingAfter: string = "World";
let message: string = greeting.concat(" ", greeingAfter, "!"); // "Hello World!"
console.log(message);

let textWithWhitespace: string = "  Hello, World!  ";
let trimmedText: string = textWithWhitespace.trim();

console.log(textWithWhitespace); // Output: "  Hello, World!  "
console.log(trimmedText);       // Output: "Hello, World!"

// string.charCodeAt(index: number): number;
let myString: string = "Hello, TypeScript!";

// Get the Unicode value of the character at index 0 ('H')
let charCode0: number = myString.charCodeAt(0);
console.log(`Unicode value of character at index 0: ${charCode0}`); // Output: Unicode value of character at index 0: 72

// Get the Unicode value of the character at index 6 (',')
let charCode6: number = myString.charCodeAt(6);
console.log(`Unicode value of character at index 6: ${charCode6}`); // Output: Unicode value of character at index 6: 44

// Attempt to get the Unicode value at an invalid index
let charCodeInvalid: number = myString.charCodeAt(100);
console.log(`Unicode value at invalid index: ${charCodeInvalid}`); // Output: Unicode value at invalid index: NaN

const text = "The quick brown fox jumps over the lazy dog.";
const index = text.search(/fox/); // index will be 16
console.log(index);

// number.toPrecision(precision)
// precision (Optional): An integer between 1 and 100 (inclusive) specifying the number of significant digits to which the number should be rounded. If omitted, the method behaves like toString().

// Example usage of toFixed()
let num1 = 3.14159;
let num2 = 10;
let num3 = 5.678;

// Format to 2 decimal places
let fixedNum1 = num1.toFixed(2); // "3.14"

// Format an integer to 2 decimal places
let fixedNum2 = num2.toFixed(2); // "10.00"

// Rounding behavior
let fixedNum3 = num3.toFixed(1); // "5.7" (rounds up)

// No argument: defaults to 0 decimal places
let fixedNum4 = num1.toFixed(); // "3"

console.log(fixedNum1);
console.log(fixedNum2);
console.log(fixedNum3);
console.log(fixedNum4);


// parseInt(string, radix);
// string: The value to parse. If the string is not a string, it is converted to one. Leading whitespace is ignored.
// radix (optional): An integer between 2 and 36 that represents the numeral system (base) of the string. For example, 10 for decimal, 2 for binary, 16 for hexadecimal.

// template literals
const fullName : string = 'Aboy';
const age: number = 25;
const messageLiteral : string = `Hi! my name is ${fullName}, and I am ${age} years old`;
console.log(messageLiteral);

let counter : number = 1;
counter--;
// counter = counter - 1 
console.log(counter--);

let preCounter : number = 1;
console.log(--preCounter);

// Excercise 1
const rectangleArea = (length : number, width : number) : number => {
    let result: number = length * width;
    return result;
};
console.log(rectangleArea(5,3));

const rectanglePerimeter = (length : number, width : number) : number => {
    let result: number = 2*(length + width);
    return result;
};
console.log(rectanglePerimeter(5,3));

const circleAttributes = (radius : number) : {
    diameter : number;
    circumferences : number;
    area : number;
} => {
    const phi: number = Math.PI;
    let diameter: number = 2*radius;
    let circumferences: number = Math.floor(2*phi*radius*10000)/10000;
    let area: number = Math.floor(phi*radius*radius*1000)/1000;
    return {diameter, circumferences, area};
};
const resultsCircle = circleAttributes(5);
console.log(`diameter = ${resultsCircle.diameter}, circumfences = ${resultsCircle.circumferences.toString()}, area = ${resultsCircle.area}`);

const anglesOfTriangle = (angleA : number, angleB : number) : number =>{
    const totalAngle : number = 180;
    let result : number = totalAngle - angleA - angleB;
    return result;
}
console.log(anglesOfTriangle(80,65));

const convertDaystoYears = (numDays : number) : {
    years : number;
    months : number;
    days : number;
} => {
    const years = Math.floor(numDays / 365);
    const remainingDaysForMonths = numDays % 365;

    const months = Math.floor(remainingDaysForMonths / 30);
    const days = remainingDaysForMonths % 30;

    return {years, months, days};
};
console.log(convertDaystoYears(366));

const diffDates = (dateStart: Date, dateEnd: Date) : number =>{
    const msPerDays: number = 1000 * 60 * 60 * 24
    const diffInMs = Math.abs(dateEnd - dateStart);
    return diffInMs / msPerDays;
}
const date1 = new Date('2022-01-20')
const date2 = new Date('2022-01-22')
console.log(diffDates(date1, date2));

