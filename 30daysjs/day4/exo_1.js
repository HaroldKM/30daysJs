// Get user input using prompt(“Enter your age:”). If user is 18 or older , give feedback:'You are old enough to drive' but if not 18 give another feedback stating to wait for the number of years he needs to turn 18.

/*
    let userAge = +prompt("Enter your age");
    isOld = userAge >= 18
    ? console.log("You are old enough to drive")
    : console.log(`it remains you ${18 - userAge} years to be old enough to drive`)
*/

// Compare the values of myAge and yourAge using if … else. Based on the comparison and log the result to console stating who is older (me or you). Use prompt(“Enter your age:”) to get the age as input.
/*
    let myAge = +prompt("Enter my age");
    let yourAge = +prompt("Enter your age")
    if(myAge > yourAge){
        console.log("seems like i'm older than you");
    }else{
        console.log("seems like you're older than me");
    }
*/

// if a is greater than b return 'a is greater than b' else 'a is less than b'. Try to implement it in to ways
/*
    let a = +prompt("Enter a");
    let b = +prompt("Enter b")
    // using if else
    if(a > b){
        console.log(`${a} is greater than ${b}`);
    }else {
        console.log(`${a} is less than ${b}`);
    }
    // ternary operator.
    a > b 
    ? console.log(`${a} is greater than ${b}`)
    : console.log(`${a} is less than ${b}`)
*/

// Even numbers are divisible by 2 and the remainder is zero. How do you check, if a number is even or not using JavaScript?

/*
    let inputNum = +prompt("Enter number")
    
    inputNum % 2 === 0 
    ? console.log(`${inputNum} is even`)
    : console.log(`${inputNum} is odd`)
*/