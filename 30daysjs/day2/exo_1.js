// Declare a variable named challenge and assign it to an initial value '30 Days Of JavaScript'.
let challenge = '30 Days Of JavaScript'

// Print the string on the browser console using console.log()
console.log(challenge);

// Print the length of the string on the browser console using console.log()
console.log(challenge.length);

// Change all the string characters to capital letters using toUpperCase() method
let capitalChallenge = challenge.toUpperCase();
console.log(capitalChallenge);

// Change all the string characters to lowercase letters using toLowerCase() method
let lowerChallenge = challenge.toLocaleLowerCase();
console.log(lowerChallenge);

// Cut (slice) out the first word of the string using substr() or substring() method
let newChallenge = challenge.substring(0,2);
console.log(newChallenge)

// Slice out the phrase Days Of JavaScript from 30 Days Of JavaScript.
let newChallengePhrase = challenge.substring(3, challenge.length);
console.log(newChallengePhrase)

// Check if the string contains a word Script using includes() method
console.log(challenge.includes('Script'));

// Split the string into an array using split() method
console.log(challenge.split());

// Split the string 30 Days Of JavaScript at the space using split() method
console.log(challenge.split(' '));

// 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon' split the string at the comma and change it to an array.
let gafam = 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon'.split(',');
console.log(gafam);

// Change 30 Days Of JavaScript to 30 Days Of Python using replace() method.
let pythonChallenge = challenge.replace('JavaScript', 'Python');
console.log(pythonChallenge);

// What is character at index 15 in '30 Days Of JavaScript' string? Use charAt() method.
let charAt_15 = challenge.charAt(15);
console.log(charAt_15);

// What is the character code of J in '30 Days Of JavaScript' string using charCodeAt()
let charOfJ = challenge.charCodeAt(challenge.indexOf('J'));
console.log(charOfJ);

// Use indexOf to determine the position of the first occurrence of a in 30 Days Of JavaScript
let firstOccurenceOfA = challenge.indexOf('a');
console.log(firstOccurenceOfA);

// Use lastIndexOf to determine the position of the last occurrence of a in 30 Days Of JavaScript.
let lastOccurenceOfA = challenge.lastIndexOf('a');
console.log(lastOccurenceOfA);

// Use indexOf to find the position of the first occurrence of the word because in the following sentence:'You cannot end a sentence with because because because is a conjunction'
let sentence = 'You cannot end a sentence with because because because is a conjunction';
console.log(sentence.indexOf('because'));

// Use lastIndexOf to find the position of the last occurrence of the word because in the following sentence:'You cannot end a sentence with because because because is a conjunction'
let sentence_1 = 'You cannot end a sentence with because because because is a conjunction';
console.log(sentence_1.lastIndexOf('because'));

// Use search to find the position of the first occurrence of the word because in the following sentence:'You cannot end a sentence with because because because is a conjunction'
let sentence_2 = 'You cannot end a sentence with because because because is a conjunction'
console.log(sentence_2.search("because"));

// Use trim() to remove any trailing whitespace at the beginning and the end of a string.E.g ' 30 Days Of JavaScript '.
let challengeWithSpace = ' 30 Days Of JavaScript '.trim();
console.log(challengeWithSpace);

// Use startsWith() method with the string 30 Days Of JavaScript and make the result true
console.log(challenge.startsWith('30'));

// Use endsWith() method with the string 30 Days Of JavaScript and make the result true
console.log(challenge.endsWith("JavaScript"));

// Use match() method to find all the a’s in 30 Days Of JavaScript
console.log(challenge.match('a'));

// Use concat() and merge '30 Days of' and 'JavaScript' to a single string, '30 Days Of JavaScript'
let firstPartSentence = "30 Days of";
let secondPartSentence = 'JavaScript';
let newSentence = firstPartSentence.concat(" ", secondPartSentence);
console.log(newSentence);

// Use repeat() method to print 30 Days Of JavaScript 2 times
console.log(challenge.repeat(2));