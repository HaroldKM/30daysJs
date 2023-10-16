// Declare an empty array;
const empty = [];

// Declare an array with more than 5 number of elements
const arrayOfMoreTh5 = [1, 3, 7, 10, 17, 18, 33, 45, 99]
console.log(arrayOfMoreTh5);

// Find the length of your array
let arrayOfMoreTh5Length = arrayOfMoreTh5.length
console.log(arrayOfMoreTh5Length);

// Get the first item, the middle item and the last item of the array
let arrayOfMoreTh5FirstItm = arrayOfMoreTh5[0];
let getMiddleIndex = Math.floor((arrayOfMoreTh5Length - 1) / 2); // -1 to have access to actual index of elt
let arrayOfMoreTh5MiddleItm = arrayOfMoreTh5[getMiddleIndex];
let arrayOfMoreTh5LastItm = arrayOfMoreTh5[arrayOfMoreTh5Length-1];
console.log(arrayOfMoreTh5MiddleItm);

// Declare an array called mixedDataTypes, put different data types in the array and find the length of the array. The array size should be greater than 5
const mixedDataTypes = ["a",5,7,8,9,"yh", true, null, undefined]
let mixedDataTypesLength = mixedDataTypes.length
console.log(mixedDataTypesLength);

// Declare an array variable name itCompanies and assign initial values Facebook, Google, Microsoft, Apple, IBM, Oracle and Amazon
const itCompanies = ["Facebook", "Google", "Microsoft", "Apple", "IBM", "Oracle", "Amazon"]

// Print the array using console.log()
console.log(itCompanies);

// Print the number of companies in the array
let itCompaniesLength = itCompanies.length
console.log(itCompaniesLength);

// Print the first company, middle and last company
getMiddleIndex = Math.floor((itCompaniesLength - 1) / 2)
console.log(`middle: ${itCompanies[getMiddleIndex]}`);

// Print out each company
console.log(itCompanies.join(' '));

// Change each company name to uppercase one by one and print them out
// better do it with loop

// Print the array like as a sentence: Facebook, Google, Microsoft, Apple, IBM,Oracle and Amazon are big IT companies.
let itCompaniesNoAmazon = itCompanies.slice(0, itCompaniesLength - 1)
console.log(itCompaniesNoAmazon.toString().concat(" and Amazon are big IT companies."));

// Check if a certain company exists in the itCompanies array. If it exist return the company else return a company is not found
let itCompany = "Oracle";
itCompanies.includes(itCompany) === true ? console.log(`${itCompany} exist`) : console.log("Company not found");

// Filter out companies which have more than one 'o' without the filter method
// better do it with loop

// Sort the array using sort() method
console.log(itCompanies.sort());

// Reverse the array using reverse() method
console.log(itCompanies.reverse());

// Slice out the first 3 companies from the array
console.log(itCompanies.slice(0, 3));

// Slice out the last 3 companies from the array
console.log(itCompanies.slice(itCompaniesLength - 3));

// Slice out the middle IT company or companies from the array
console.log(itCompanies.slice(getMiddleIndex, getMiddleIndex+1));

// Remove the first IT company from the array
itCompanies.splice(0,1)
console.log(itCompanies);

// Remove the middle IT company or companies from the array
itCompanies.splice(getMiddleIndex, 1)
console.log(itCompanies);

// Remove the last IT company from the array
// can be done

// Remove all IT companies
// can be done