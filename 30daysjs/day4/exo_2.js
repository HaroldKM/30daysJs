// Write a code which can give grades to students according to theirs scores:
// 80-100, A
// 70-79, B
// 60-69, C
// 50-59, D
// 0-49, F
/*
    let scores = +prompt("Enter student score")
    switch (true) {
        case scores >= 80 && scores <= 100:
            console.log(`For ${scores} you are graded A`);
            break;
        case scores >= 70 && scores <= 79:
            console.log(`For ${scores} you are graded B`);
            break;
        case scores >= 60 && scores <= 69: 
            console.log(`For ${scores} you are graded C`);
            break;
        case scores >= 50 && scores <= 59: 
            console.log(`For ${scores} you are graded D`);
            break;
        case scores >= 0 && scores <= 49: // [0-49]
            console.log(`For ${scores} you are graded F`);
            break;
        default:
            console.log("Enter correct val");
    }
*/

// Check if the season is Autumn, Winter, Spring or Summer. If the user input is :
// September, October or November, the season is Autumn.
// December, January or February, the season is Winter.
// March, April or May, the season is Spring
// June, July or August, the season is Summer
/*
    let seasonInput = prompt("Enter season").toLowerCase()
    switch(true){
        case seasonInput == "september" || seasonInput == "october" || seasonInput == "november":
            console.log(`for ${seasonInput} the season is Autumn`);
            break;
        case seasonInput == "december" || seasonInput == "january" || seasonInput == "february":
            console.log(`for ${seasonInput} the season is Winter`);
            break;
        case seasonInput == "march" || seasonInput == "april" || seasonInput == "may":
            console.log(`for ${seasonInput} the season is Spring`);
            break;
        case seasonInput == "june" || seasonInput == "july" || seasonInput == "august":
            console.log(`for ${seasonInput} the season is Summer`);
            break;
        default:
            console.log("You must enter a valid month");

    }
*/ 

// Check if a day is weekend day or a working day. Your script will take day as an input.
// can be done