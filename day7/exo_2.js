// Linear equation is calculated as follows: ax + by + c = 0. Write a function which calculates value of a linear equation, solveLinEquation.
// can be done

// Quadratic equation is calculated as follows: ax2 + bx + c = 0. Write a function which calculates value or values of a quadratic equation, solveQuadEquation.
// can be done (calculate discriminent'delta) and find solution based on the delta)

// console.log(solveQuadratic()) // {0}
// console.log(solveQuadratic(1, 4, 4)) // {-2}
// console.log(solveQuadratic(1, -1, -2)) // {2, -1}
// console.log(solveQuadratic(1, 7, 12)) // {-3, -4}
// console.log(solveQuadratic(1, 0, -4)) //{2, -2}
// console.log(solveQuadratic(1, -1, 0)) //{1, 0}

// Declare a function name printArray. It takes array as a parameter and it prints out each value of the array.
// can be done

// Write a function name showDateTime which shows time in this format: 08/01/2020 04:08 using the Date object.
// that function is meant to convert date element to the format eg: 04:08
function manageTime(val) {
    if (val >= 10) {
        return val
    } else {
        return "0" + val
    }
}
function showDateTime() {
    const date = new Date()
    const day = manageTime(date.getDate())
    const month = manageTime(date.getMonth() + 1)
    const years = manageTime(date.getFullYear())
    const hours = manageTime(date.getHours())
    const min = manageTime(date.getMinutes())

    return `${day}/${month}/${years} ${hours}:${min}`
}

console.log(showDateTime())
// 08/01/2020 04:08

// Declare a function name swapValues. This function swaps value of x to y.
function swapValues(x, y) {
    let tamponValu = x;
    x = y
    y = tamponValu
    return `x = ${x}, y = ${y}`
}
console.log(swapValues(3, 4)) // x => 4, y=>3
console.log(swapValues(4, 5)) // x = 5, y = 4

// Declare a function name reverseArray. It takes array as a parameter and it returns the reverse of the array (don't use method).
// console.log(reverseArray([1, 2, 3, 4, 5]))
// //[5, 4, 3, 2, 1]
// console.log(reverseArray(['A', 'B', 'C']))
// //['C', 'B', 'A']
// can be done (juste create a reverse loop)


// Declare a function name capitalizeArray. It takes array as a parameter and it returns the - capitalizedarray.
// can be done

// Declare a function name addItem. It takes an item parameter and it returns an array after adding the item
// can be done 

// Declare a function name removeItem. It takes an index parameter and it returns an array after removing an item
function removeItem(idx, array) {
    idx > array.length - 1 ? console.log("your index is out of range") : array.splice(idx, 1)
    return array
}

console.log(removeItem(8, ["Banana", "Orange", "Apple", "Mango", "Kiwi"]));

// Declare a function name sumOfNumbers. It takes a number parameter and it adds all the numbers in that range.
// can be done

// Declare a function name sumOfOdds. It takes a number parameter and it adds all the odd numbers in that - range.
// can be done 

// Declare a function name sumOfEven. It takes a number parameter and it adds all the even numbers in that - range.
// can be done 

// Declare a function name evensAndOdds . It takes a positive integer as parameter and it counts number of evens and odds in the number.
function evensAndOdds(num) {
    let countOdds = 0;
    let countEvens = 0;

    for (let i = 0; i <= num; i++) {
        i % 2 == 0
            ? countEvens++
            : countOdds++
    }

    return `The number of odds are: ${countOdds}\nThe number of even are: ${countEvens}`
}
console.log(evensAndOdds(100));
// The number of odds are 50.
// The number of evens are 51.

// Write a function which takes any number of arguments and return the sum of the arguments
// sum(1, 2, 3) // -> 6
// sum(1, 2, 3, 4) // -> 10
// can be done

// Write a function which generates a randomUserIp.
function randomUserIp() {
    let randomVal = Math.floor(Math.random() * 50)
    return randomVal
}

console.log(randomUserIp());

// Write a function which generates a randomMacAddress
function randomMacAddress() {
    const hexadecimal = '0123456789abcdef'
    const hexadecimalSize = hexadecimal.length
    let randomVal = 0
    let hexArr = []
    let elt = ""

    // we will use randomVal as index for accessing randomly hexadecimal elt
    for (let i = 0; i < 12; i++) {
        randomVal = Math.floor(Math.random() * hexadecimalSize)
        elt += hexadecimal[randomVal]
    }

    return `${elt[0]}${elt[1]}-${elt[2]}${elt[3]}-${elt[4]}${elt[5]}-${elt[6]}${elt[7]}-${elt[8]}${elt[9]}-${elt[10]}${elt[11]}`

}

console.log(randomMacAddress())
// Declare a function name randomHexaNumberGenerator. When this function is called it generates a random hexadecimal number. The function return the hexadecimal number.
function randomHexaNumberGenerator() {
    const hexadecimal = "0123456789abcdef".split('');
    let randomHexVal = "#"
    for (let i = 0; i < 6; i++) {
        randomHexVal += hexadecimal[Math.floor(Math.random() * 16)]
    }
    return randomHexVal
}
console.log(randomHexaNumberGenerator());
// '#ee33df'

// Declare a function name userIdGenerator. When this function is called it generates seven character id. 
// The function return the id.
function userIdGenerator(){
    const alphaNum = "abcdefghijklmnopqrstuvwxyz0123456789"
    let alphaNumSize = alphaNum.length
    let randomVal = 0
    let userId = ""
    for(let i = 0; i < 7; i++){
        randomVal = Math.floor(Math.random() * alphaNumSize)
        if(typeof alphaNum[randomVal] == "string" && randomVal >= 19){
            userId+=alphaNum[randomVal].toUpperCase()
        }else{
            userId+=alphaNum[randomVal]
        }
        
    }
    return userId
}
console.log(userIdGenerator());
// 41XTDbE