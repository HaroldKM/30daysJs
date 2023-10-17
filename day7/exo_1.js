// Declare a function fullName and it print out your full name.
/*
    function fullName(name = "Aug"){
        console.log(`My name is: ${name}`);
    }

    const fullName = (name = "Aug") => console.log(`My name is: ${name}`);
    fullName()
*/

// Declare a function fullName and now it takes firstName, lastName as a parameter and it returns your full - name.
// can be done 

// Declare a function addNumbers and it takes two two parameters and it returns sum.
function addNumbers(num1, num2){
    let sum = num1 + num2
    return sum
}

console.log(addNumbers(25,10))

// An area of a rectangle is calculated as follows: area = length x width. Write a function which calculates areaOfRectangle.
function areaOfRectangle(l, w){
    let area = l * w
    return area
}

console.log(areaOfRectangle(5,2));

// A perimeter of a rectangle is calculated as follows: perimeter= 2x(length + width). Write a function which calculates perimeterOfRectangle.
// can be done

// A volume of a rectangular prism is calculated as follows: volume = length x width x height. Write a function which calculates volumeOfRectPrism.
// can be done 

// Area of a circle is calculated as follows: area = π x r x r. Write a function which calculates areaOfCircle
// can be done 

// Circumference of a circle is calculated as follows: circumference = 2πr. Write a function which calculates circumOfCircle
// can be done 

// Density of a substance is calculated as follows:density= mass/volume. Write a function which calculates density.
// can be done 

// Speed is calculated by dividing the total distance covered by a moving object divided by the total amount of time taken. Write a function which calculates a speed of a moving object, speed.
// can be done 

// Weight of a substance is calculated as follows: weight = mass x gravity. Write a function which calculates weight.
// can be done 

// Temperature in oC can be converted to oF using this formula: oF = (oC x 9/5) + 32. Write a function which convert oC to oF convertCelsiusToFahrenheit.
// can be done 

// Body mass index(BMI) is calculated as follows: bmi = weight in Kg / (height x height) in m2. Write a function which calculates bmi. BMI is used to broadly define different weight groups in adults 20 years old or older.
//Check if a person is underweight, normal, overweight or obese based the information given below.

// The same groups apply to both men and women.
// Underweight: BMI is less than 18.5
// Normal weight: BMI is 18.5 to 24.9
// Overweight: BMI is 25 to 29.9
// Obese: BMI is 30 or more
function calculBMI(weight, height){
    let bmi = weight / (height * height)
    let status = ""

    switch(true){
        case(bmi < 18.5):
            status = "Underweight"
            break
        
        case(bmi >= 18.5 && bmi <= 24.9):
            status = "Normal weight"
            break
        
        case(bmi >= 25 && bmi <= 29.9):
            status = "Overweight"
            break
        
        case(bmi >= 30):
            status = "Obese"
            break
        
        default:
            console.log('Try correct value');
            break
    }

    return status;
}

console.log(calculBMI(90, 1.5))

// Write a function called checkSeason, it takes a month parameter and returns the season:Autumn, Winter, Spring or Summer.
// can be done

// Math.max returns its largest argument. Write a function findMax that takes three arguments and returns their maximum with out using Math.max method.

// the method sort doesn't work well on number value
// to make it work we send him a reference to a function (compare function) 
const sortedFun = (a, b) => a-b

function findMax(arg1, arg2, arg3){
    const array = []
    // copying array value to use array methods
    for(const elt of arguments){
        array.push(elt)
    }

    let sortedArray = array.sort(sortedFun).reverse()
    return sortedArray[0]
    
}

console.log(findMax(0, 10, 5))
// 10
console.log(findMax(0, -10, -2))
