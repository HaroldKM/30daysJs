// Declare firstName, lastName, country, city, age, isMarried, year variable and assign value to it and use the typeof operator to check different data types.
// Done

// Check if type of '10' is equal to 10
// Done

// Check if parseInt('9.8') is equal to 10
// Done

// Boolean value is either true or false.

// Write three JavaScript statement which provide truthy value.
// console.log(0 == false);
// console.log(1 == true);
// console.log(3 == "3");

// Write three JavaScript statement which provide falsy value.
// console.log(0 === false);
// console.log(1 == 2);
// console.log(3 > "3");

// Figure out the result of the following comparison expression first without using console.log(). After you decide the result confirm it using console.log()

// 4 > 3        // true
// 4 >= 3       // true
// 4 < 3        // false
// 4 <= 3       // false
// 4 == 4       // true
// 4 === 4      // true
// 4 != 4       // false
// 4 !== 4      // false
// 4 != '4'     // false
// 4 == '4'     // true
// 4 === '4'    // false
// console.log(4 === '4')

// Find the length of python and jargon and make a falsy comparison statement.
let pyLength = "python".length
let jgLength = "jargon".length

console.log(pyLength > jgLength);
// Figure out the result of the following expressions first without using console.log(). After you decide the result confirm it by using console.log()

// 4 > 3 && 10 < 12     // true
// 4 > 3 && 10 > 12     // false
// 4 > 3 || 10 < 12     // true
// 4 > 3 || 10 > 12     // true
// !(4 > 3)             // false
// !(4 < 3)             // true
// !(false)             // true
// !(4 > 3 && 10 < 12)  // false
// !(4 > 3 && 10 > 12)  // true
// !(4 === '4')         // true

// console.log(!(4 === '4'));


// There is no 'on' in both dragon and python
let python = "pyhton"
let dragon = "dragon"
console.log(!(python.includes('on')) && !(dragon.includes('on')));

// Use the Date object to do the following activities

const date = new Date()

// What is the year today?
console.log(date.getFullYear());

// What is the month today as a number?
console.log(date.getMonth());

// What is the date today?
console.log(date.getDate());

// What is the day today as a number?
console.log(date.getDay()); // sunday = 0

// What is the hours now?
console.log(date.getHours());

// What is the minutes now?
console.log(date.getMinutes());

// Find out the numbers of seconds elapsed from January 1, 1970 to now.
console.log(date.getTime());
