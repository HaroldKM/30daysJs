// Iterate 0 to 10 using for loop, do the same using while and do while loop
/*
    for(let i = 0; i <= 10; i++){
        console.log(i);
    }
*/

/*
    let i = 0;
    while(i <= 10){
        console.log(i);
        i++
    }
*/

/*
    let j = 0
    do{
        console.log(j);
        j++
    }while(j <= 10)

*/

// Iterate 10 to 0 using for loop, do the same using while and do while loop
/*
    for(let i = 10; i >=0; i--){
        console.log(i);
    }
*/

// Iterate 0 to n using for loop
// can be done

// Write a loop that makes the following pattern using console.log():
// #
// ##
// ###
// ####
// #####
// ######
// #######

/*
    for(let i = 0; i <=7; i++){
        console.log("#".repeat(i));
    }
*/

// Use for loop to iterate from 0 to 100 and print only even numbers
/*
    for(let i = 0; i <= 100; i++){
        if( i % 2 === 0 ){
            console.log(i);
        }
    }
*/

// Use for loop to iterate from 0 to 100 and print only odd numbers
/*
    for(let i = 0; i <= 100; i++){
        if(!(i % 2 === 0)){
            console.log(i);
        }
    }
*/

// Use for loop to iterate from 0 to 100 and print only prime numbers
// can be done

// Use for loop to iterate from 0 to 100 and print the sum of all numbers.
/*
    let sum = 0;
    for(let i = 0; i <= 100; i++){
        sum+=i
    }

    console.log(sum);
*/


// Develop a small script which generate array of 5 random numbers
const arrayOfFiveRandNum = []
for(let i = 0; i < 5; i++){
    arrayOfFiveRandNum.push(Math.round(Math.random()*52))
}
console.log(arrayOfFiveRandNum);

// Develop a small script which generate array of 5 random numbers and the numbers must be unique
const arrayOfFiveRandUniqNum = []
let randomVal = 0;
for(let i = 0; i < 5; i++){
    randomVal = Math.round(Math.random()*52)
    if(!arrayOfFiveRandUniqNum.includes(randomVal)){
        arrayOfFiveRandUniqNum.push(randomVal);
    }
}
console.log(arrayOfFiveRandUniqNum);

// Develop a small script which generate a six characters random id: 5j2khz
const alphaNumVal = "abcdefghij012klmno67pqrstu34vwxyz589".split('');
let alphaNumValLength = alphaNumVal.length;
let randomIndexVal = 0;
let code = "";
// let n = +prompt("Enter n")
for(let i = 0; i < 7; i++){
    randomIndexVal = Math.floor(Math.random() * alphaNumValLength)
    code+=alphaNumVal[randomIndexVal]
}
console.log(code);