// Week 7 Coding Assignment
console.log("Week 7 Coding Assignment");
console.log("-------------------------");

console.log("QUESTION 1")
/*
INSTRUCTIONS
Create an array called ages that contains the following values: 3, 9, 23, 64, 2, 8, 28, 93.
	1	Programmatically subtract the value of the first element in the array from the value in the last element of the array.
	▪	Do not use numbers to reference the last element, find it programmatically.
	▪	ages[7] - ages[0] is not allowed!
	2	Add a new age to your array and repeat the step above to ensure it is dynamic. (works for arrays of different lengths).
	3	Use a loop to iterate through the array and calculate the average age.

*/

let ages = [3, 9, 23, 64, 2, 8, 28, 93]
// creating a function to find the difference between the first and last element
const diffLastMinusFirst = (array) => array[array.length - 1] - array[0];
console.log(`The difference in ages is ${diffLastMinusFirst(ages)}.`);

// adding another element to the end of the array and finding the difference between that element and the first one using the function created above.
ages.push(58);
console.log(`The difference in ages is now ${diffLastMinusFirst(ages)}.`);

// creating a function to find the average of the elements of a numerical array
function average(array) {
    let sum = 0
    for (let i = 0; i < array.length; i++) {
        sum += array[i];
        }
    return(sum/array.length);
}
console.log(`The average age is ${average(ages)}.`);

console.log("----------");
console.log("QUESTION 2");
/*
INSTRUCTIONS
Create an array called names that contains the following values: 'Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob'.
	1	Use a loop to iterate through the array and calculate the average number of letters per name.
	2	Use a loop to iterate through the array again and concatenate all the names together, separated by spaces.
*/
let names = ['Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob'];

/* The avgNumLetters function first creates a new array called numLetter. Each element in numLetter is the number of letters in the corresponding element of the input array. Then the avgNumLetters function applies the average function created above to the numLetter array.
*/
function avgNumLetters(array) {
    let numLetter = [] //start with an empty array
    for (let i = 0; i < array.length; i++) {
        numLetter.push(array[i].length); // add the number of letters to end of the array
    }
    return(average(numLetter)); // using the average function defined above
}
console.log(`The average number of letters per name is ${avgNumLetters(names)}`);

function concatWithSpaces(array) {
    let str = ""; // start with an empty string
    for (let i = 0; i < array.length; i++) {
        str += ` ${array[i]}`; // add a space and the name to the end of the string using object literals because it's easier.
    }
    return str;
}
console.log(concatWithSpaces(names));

console.log("----------");
console.log("QUESTION 3");
/*
INSTRUCTIONS
How do you access the last element of any array?
*/
console.log("The last element of an array is always the element at array.length-1.")
console.log(`The last element of the names array is ${names.at(names.length-1)}`);

console.log("----------");
console.log("QUESTION 4");
/*
How do you access the first element of any array?
*/
console.log(`The first element of an array is always the element at array[0].`);
console.log(names);
console.log(`The first element of the names array is ${names[0]}.`);
console.log(ages);
console.log(`The first element of the ages array is ${ages[0]}.`);

console.log("----------");
console.log("QUESTION 5");
/*
Create a new array called nameLengths. Write a loop to iterate over the previously created names array and add the length of each name to the nameLengths array.For example:
let names = ["Kelly", "Sam", "Kate"];    // starting with this array
let nameLengths = [5, 3, 4];             // create a new array
*/

let newNames = ["Kelly", "Sam", "Kate"]
function nameLengths(array) { // I created a function to replace the strings with string lengths.
    for (let i = 0; i < array.length; i++) {
        nameLength = array[i].length; // because the elements are being replaced, I created a new variable to hold the string length.
        array.splice(i,1,nameLength); 
    }
    return array;
}
console.log(newNames);
console.log(nameLengths(newNames));
console.log(`The array is overwritten:`);
console.log(newNames);

console.log("----------");
console.log("QUESTION 6");
/*
INSTRUCTIONS 
Write a loop to iterate over the nameLengths array and calculate the sum of all the elements in the array.
*/

function sumArray(array) {
    let sum = 0;
    for (let i = 0; i < newNames.length; i++) {
        sum += array[i];  
    }
    return sum;
}
console.log(newNames);
console.log(sumArray(newNames));

console.log("----------");
console.log("QUESTION 7");
/*
INSTRUCTIONS 
Write a function that takes two parameters, word and n, as arguments and returns the word concatenated to itself n number of times. (i.e. if I pass in 'Hello' and 3, I would expect the function to return 'HelloHelloHello').
*/
function repeatGreeting(word, n) {
    let str = ""; // start with an empty string; reusing this code from above
    for (let i = 0; i < n; i++) {
        str += `${word}`; // using object literals because it's easier.
    }
    return str;
}
console.log(repeatGreeting("Heeyaw", 5));


console.log("----------");
console.log("QUESTION 8");
/*
INSTRUCTIONS 
Write a function that takes two parameters, firstName and lastName, and returns a full name. The full name should be the first and the last name separated by a space.
*/