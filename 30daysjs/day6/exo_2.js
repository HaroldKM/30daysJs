// Write a script which generates a random hexadecimal number. eg:'#ee33df'
const hexadecimal = "0123456789abcdef".split('');
let randomHexVal = "#"
for(let i = 0; i < 6; i++){
    randomHexVal+=hexadecimal[Math.floor(Math.random()* 16)]
}

console.log(randomHexVal);


// Write a script which generates a random rgb color number. rgb(240,180,80)
let randomRgbColor = 0
const rgbArray = [];
for(let i = 0; i < 3; i++){
    rgbArray.push(Math.floor(Math.random() * 255))
}

let rgb = `rgb(${rgbArray.toString()})`
console.log(rgb);

// Using the above countries array, create the following new array. 
// ["ALBANIA", "BOLIVIA", "CANADA", "DENMARK", "ETHIOPIA", "FINLAND", "GERMANY", "HUNGARY", "IRELAND", "JAPAN", "KENYA"]

const countries = [
    'Albania',
    'Bolivia',
    'Canada',
    'Denmark',
    'Ethiopia',
    'Finland',
    'Germany',
    'Hungary',
    'Ireland',
    'Japan',
    'Kenya'
]

const uppercaseCountries = []

for(let i = 0; i < countries.length; i++){
    uppercaseCountries.push(countries[i].toUpperCase())
}

console.log(uppercaseCountries);

// Using the above countries array, create an array for countries length'.
// can be done 

// Use the countries array to create the following array of arrays:
/*
    [
        ['Albania', 'ALB', 7],
        ['Bolivia', 'BOL', 7],
        ['Canada', 'CAN', 6],
        ['Denmark', 'DEN', 7],
        ['Ethiopia', 'ETH', 8],
        ['Finland', 'FIN', 7],
        ['Germany', 'GER', 7],
        ['Hungary', 'HUN', 7],
        ['Ireland', 'IRE', 7],
        ['Iceland', 'ICE', 7],
        ['Japan', 'JAP', 5],
        ['Kenya', 'KEN', 5]
    ]
*/

const arrayOfArray = []
let shortenCountries = ""
for(let i = 0; i < countries.length; i++){
    shortenCountries = countries[i].slice(0,3).toUpperCase()
    arrayOfArray.push([countries[i], shortenCountries, countries[i].length])
}

console.log(arrayOfArray);

// In above countries array, check if there is a country or countries containing the word 'land'. 
// If there are countries containing 'land', print it as array. If there is no country containing the word 'land', 
// print 'All these countries are without land'.

const containLand = [];

for (let i = 0; i < countries.length; i++) {
    if(countries[i].includes("land")){
        containLand.push(countries[i]);
    }
}

containLand.length > 0 
? console.log(containLand)
: console.log("No land on this hearth")


// In above countries array, check if there is a country or countries end with a substring 'ia'. 
// If there are countries end with, print it as array. 
// If there is no country containing the word 'ia', print 'These are countries ends without ia'.

const iaCountries = [];
for (let i = 0; i < countries.length; i++) {
   if(countries[i].slice(countries[i].length - 2, countries[i].length) === "ia"){
    iaCountries.push(countries[i]);
   }
}

console.log(iaCountries);


// Using the above countries array, find the country containing the biggest number of characters.
let bigestOne = 0
let longerCountry = ""
for (let i = 0; i < countries.length; i++) {
    if (countries[i].length >= bigestOne) {
        bigestOne = countries[i].length;
        longerCountry = countries[i]
    }
}

console.log(longerCountry);

// This is a fruit array , ['banana', 'orange', 'mango', 'lemon'] reverse the order using loop without using a reverse method.
const fruit = ['banana', 'orange', 'mango', 'lemon']
const reverseFruit = []
for(let i = fruit.length - 1; i >= 0 ; i--){
    reverseFruit.push(fruit[i])
}

console.log(reverseFruit);

// Print all the elements of array as shown below.
const fullStack = [
    ['HTML', 'CSS', 'JS', 'React'],
    ['Node', 'Express', 'MongoDB']
]

for(let i = 0; i < fullStack.length; i++){
    for(let j = 0; j < fullStack[i].length; j++){
        console.log(fullStack[i][j].toUpperCase());
    }
}





