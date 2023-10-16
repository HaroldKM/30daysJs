// Using console.log() print out the following statement:
let quote1 = "The quote 'There is no exercise better for the heart than reaching down and lifting people up.' by John Holmes teaches us to help one another."
console.log(quote1);

// Using console.log() print out the following quote by Mother Teresa:
let quote2 = '"Love is not patronizing and charity isn\'t about pity, it is about love. Charity and love are the same -- with charity you give love, so don\'t just give money but reach out your hand instead."'
console.log(quote2);

// Check if typeof '10' is exactly equal to 10. If not make it exactly equal.
let var1 = '10'
let var2 = 10
console.log(typeof var1 == typeof var2);
var1 = +var1
console.log(typeof var1 == typeof var2);

// Check if parseFloat('9.8') is equal to 10 if not make it exactly equal with 10.
let float = parseFloat('9.8')

let num = 10

console.log(float == num);

float = Math.round(float)

console.log(float == num);


// Check if 'on' is found in both python and jargon
console.log('python'.includes('on'));
console.log('jargon'.includes('on'));

// I hope this course is not full of jargon. Check if jargon is in the sentence.
let sentences = "I hope this course is not full of jargon."
console.log(sentences.includes("jargon"));

// Generate a random number between 0 and 100 inclusively.
let randomVal = Math.random()
let numBtnZeroAndHundred = Math.floor(randomVal * 101);
console.log(numBtnZeroAndHundred);

// Generate a random number between 50 and 100 inclusively.
let numBtn50And100 = Math.floor((randomVal * 51) + 50);
console.log(numBtn50And100);

// Generate a random number between 0 and 255 inclusively.
let numBtn0And255 = Math.floor(randomVal * 256);
console.log(numBtn0And255);

// Access the 'JavaScript' string characters using a random number.
let js = 'JavaScript'
let numBtn0AndLength = Math.floor(randomVal * js.length)
console.log(js[numBtn0AndLength]);

/* Use console.log() and escape characters to print the following pattern.

    1 1 1 1 1
    2 1 2 4 8
    3 1 3 9 27
    4 1 4 16 64
    5 1 5 25 125

*/

console.log("1 1 1 1 1 \n2 1 2 4 8 \n3 1 3 9 27 \n4 1 4 16 64 \n5 1 5 25 125");


// Use substr to slice out the phrase because because because from the following sentence:'You cannot end a sentence with because because because is a conjunction'
let sentence3 = 'You cannot end a sentence with because because because is a conjunction'
const becauseLength = "because".length
let firstIndexOfBecause = sentence3.indexOf("because");
let lastIndexOfBecause = sentence3.lastIndexOf("because") + becauseLength;
let sliceSentence3 = sentence3.substring(firstIndexOfBecause, lastIndexOfBecause)

console.log(sliceSentence3);
