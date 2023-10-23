// Create an empty object called dog
const dog = {}

// Print the the dog object on the console
console.log(dog);

// Add name, legs, color, age and bark properties for the dog object. The bark property is a method which return woof woof
dog.name = 'zeus'
dog.legs  = 4
dog.colors = ["black", "yellow"]
dog.age = 4
dog.bark = function (){
    return "woof ".repeat(5)
}

// Get name, legs, color, age and bark value from the dog object
const keys = Object.keys(dog)
for(let i = 0; i < keys.length - 1; i++){
    console.log(dog[keys[i]]);
}

console.log(dog.bark())

// Set new properties the dog object: breed, getDogInfo
dog.breed = function(food){
    return `i'm eating the ${food}`
}


dog.getDogInfo = function (){
    return `My name is ${this.name}. i have ${this.legs} legs and i have ${this.colors.toString()} as colors. i'm aged ${dog.age}`
}

console.log(dog.getDogInfo());