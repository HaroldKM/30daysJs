const hexaDex = "0123456789abcdef"
const hexaLetter = "abcdef"
const alphabet = "abcdefghijklmnopqrstuvwxyz"
const hexaDexLenght = hexaDex.length
// console.log(hexaDexLenght);
// Modify the userIdGenerator function. Declare a function name userIdGeneratedByUser. 
// It doesn’t take any parameter but it takes two inputs using prompt(). 
// One of the input is the number of characters and the second input is the number of ids 
// which are supposed to be generated.

/*
    const userIdGeneratedByUser = () =>{
        let charNum = +prompt("Enter the number of character")
        let idsNum = +prompt("Enter the number of ids to be generated")
        let idsArr = []
        console.log(typeof charNum, typeof idsNum);
        let id = ""
        const alphaNum = "abcdefghijklmnopqrstuvwxyz0123456789"
        let randomVal = 0
        for(let i = 0; i < idsNum; i++){
            for(let j = 0; j < charNum; j++){
                randomVal = Math.floor(Math.random() * alphaNum.length)
                id+=alphaNum[randomVal]
            }
            idsArr.push(id)
            id = ""
        }

        return idsArr

    }

    console.log("hello");

    console.log(userIdGeneratedByUser())
*/
// 'kcsy2
// SMFYb
// bWmeq
// ZXOYh
// 2Rgxf
// '
// userIdGeneratedByUser()
// '1GCSgPLMaBAVQZ26
// YD7eFwNQKNs7qXaT
// ycArC5yrRupyG00S
// UbGxOFI7UXSWAyKN
// dIV0SSUTgAdKwStr
// '


// Write a function name rgbColorGenerator and it generates rgb colors.
const rgbColorGenerator = () => {
    const rgbVal = [];
    for (let i = 0; i < 3; i++) {
        let random = Math.floor(Math.random() * 256)
        rgbVal.push(random);
    }

    return `rgb(${rgbVal.toString()})`
}

// const randValGenerator = n => {
//     let random = 0;
//     for(let i = 0; i < n; i++){
//         random = Math.floor(Math.random() * 256)
//     }
// }

// console.log(rgbColorGenerator())
// rgb(125,244,255)


// Write a function arrayOfHexaColors which return any number of hexadecimal colors in an array.
const arrayOfHexaColors = n => {
    const arrHexa = []
    let hex = "#"
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < 6; j++) {
            hex += hexaDex[Math.floor(Math.random() * hexaDexLenght)]
        }
        arrHexa.push(hex)
        hex = '#';
    }
    return arrHexa;

}

// console.log(arrayOfHexaColors(5));

// Write a function arrayOfRgbColors which return any number of RGB colors in an array.

const arrayOfRgbColors = n => {
    const randomRgbColor = []
    const arrayRandomVal = []
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < 3; j++) {
            arrayRandomVal.push(Math.floor(Math.random() * 256))
        }
        randomRgbColor.push(`rgb(${arrayRandomVal.toString()})`)
        arrayRandomVal.length = 0
    }

    return randomRgbColor;
}

// console.log(arrayOfRgbColors(5));


const convertNumberToLetter = (n) => {
    n = Math.floor(n)
    if (n >= 10) {
        return hexaDex[n]
    }
    return n
}

const convertLetterToNumber = (letter) => {
    if (hexaLetter.includes(letter)) {
        return hexaDex.indexOf(letter)
    }
    return Math.floor(+letter)
}

convertLetterToNumber("a")
// Write a function convertHexaToRgb which converts hexa color to rgb and it returns an rgb color.
const convertRgbToHexa = (r, g, b) => {
    let hexVal = "#"
    const rgbArray = [r, g, b]
    for (let i = 0; i < 3; i++) {
        hexVal += convertNumberToLetter(rgbArray[i] / 16)
        hexVal += convertNumberToLetter(rgbArray[i] % 16)
    }

    return hexVal

}

// console.log(convertRgbToHexa(80, 6, 143));
// console.log(convertRgbToHexa(182, 0, 35));
// console.log(convertRgbToHexa(125, 96, 32));
// Write a function convertRgbToHexa which converts rgb to hexa color and it returns an hexa color.


const splitHex = (hex) => { //split the hexadecimal number into array.
    const regex = /[a-zA-Z0-9]{2,2}/g
    const hexSplited = hex.match(regex)
    return hexSplited
}

//   console.log(splitHex('#12ab3d'));

const convertHexaToRgb = (hex) => {
    const arrayHexaToRgb = splitHex(hex);// call of splitHex
    for (let i = 0; i < arrayHexaToRgb.length; i++) {
        // here we are basically saying i want to convert my element from base 16 to base 10
        arrayHexaToRgb[i] = parseInt(arrayHexaToRgb[i], 16)
    }
    console.log(`rgb(${arrayHexaToRgb[0]},${arrayHexaToRgb[1]},${arrayHexaToRgb[2]})`);
}

// convertHexaToRgb('#12ab3d')
// convertHexaToRgb("#50068f")

// Write a function generateColors which can generate any number of hexa or rgb colors.

const generateColors = (colorType, numberOfColor) => {
    if (colorType === 'hexa') {
        return arrayOfHexaColors(numberOfColor) // ah ah ah who's stupid 
    }

    if (colorType === 'rgb') {
        return arrayOfRgbColors(numberOfColor)
    }

    return 'enter a valid color type (hexa or rgb)'
}


// console.log(generateColors('hexa', 3)) // ['#a3e12f', '#03ed55', '#eb3d2b']
// console.log(generateColors('hexa', 1)) // '#b334ef'
// console.log(generateColors('rgb', 3)) // ['rgb(5, 55, 175)', 'rgb(50, 105, 100)', 'rgb(15, 26, 80)']
// console.log(generateColors('rgb', 1)) // 'rgb(33,79, 176)'

// Call your function shuffleArray, it takes an array as a parameter and it returns a shuffled array
function shuffleArray(arr) {
    return arr.sort((a, b) => { 0.5 * Math.random() })
}

console.log(shuffleArray(['1', '2', '3', '4', '5'])); // not working however

// Call your function factorial, it takes a whole number as a parameter and it return a factorial of the number
const factorial = (num) => {
    if (num === 0) { return 1 }
    else {
        return num * factorial(num - 1)
    }
}

console.log(factorial(10));


// Call your function isEmpty, it takes a parameter and it checks if it is empty or not
// can be done 

// Call your function sum, it takes any number of arguments and it returns the sum.
// can be done

// Write a function called sumOfArrayItems, it takes an array parameter and return the sum of all the items. Check if all the array items are number types. If not give return reasonable feedback.
// can be done 

// Write a function called average, it takes an array parameter and returns the average of the items. Check if all the array items are number types. If not give return reasonable feedback.
// can be done

// Write a function called modifyArray takes array as parameter and modifies the fifth item of the array and return the array. If the array length is less than five it return 'item not found'.
// can be done

// console.log(modifyArray(['Avocado', 'Tomato', 'Potato','Mango', 'Lemon','Carrot']);
// ['Avocado', 'Tomato', 'Potato','Mango', 'LEMON', 'Carrot']
// console.log(modifyArray(['Google', 'Facebook','Apple', 'Amazon','Microsoft',  'IBM']);
// ['Google', 'Facebook','Apple', 'Amazon','MICROSOFT',  'IBM']
// console.log(modifyArray(['Google', 'Facebook','Apple', 'Amazon']);
//   'Not Found'

// Write a function called isPrime, which checks if a number is prime number.
// can be done

// Write a functions which checks if all items are unique in the array.
const isUnique = (arr) => {
    let itemCounter = 0
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length; j++) {
            if (arr[i] === arr[j]) {
                itemCounter++
            }
        }
        if (itemCounter >= 2) { return false }
        itemCounter = 0
    }

    return true



}


// console.log(isUnique([1, 2, 3, 4, 5, 7]))

// Write a function which checks if all the items of the array are the same data type.
// can be done 

// JavaScript variable name does not support special characters or symbols except $ or _
// Write a function isValidVariable which check if a variable is valid or invalid variable.

const isValidVariable = (variable) => {
    const regex = /[^a-zA-Z0-9$_]/g
    if(regex.test(variable)) {return false}
    return true
}

console.log(isValidVariable('hello_world'));

// Write a function which returns array of seven random numbers in a range of 0-9. All the numbers must be unique.
// can be done 

// sevenRandomNumbers()
// [(1, 4, 5, 7, 9, 8, 0)]

// Write a function called reverseCountries, it takes countries array and first it copy the array and returns the reverse of the original array
// can be done 