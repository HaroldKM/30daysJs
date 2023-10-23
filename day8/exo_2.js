const users = {
    Alex: {
        email: 'alex@alex.com',
        skills: ['HTML', 'CSS', 'JavaScript'],
        age: 20,
        isLoggedIn: false,
        points: 30
    },
    Asab: {
        email: 'asab@asab.com',
        skills: ['HTML', 'CSS', 'JavaScript', 'Redux', 'MongoDB', 'Express', 'React', 'Node'],
        age: 25,
        isLoggedIn: false,
        points: 50
    },
    Brook: {
        email: 'daniel@daniel.com',
        skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux'],
        age: 30,
        isLoggedIn: true,
        points: 50
    },
    Daniel: {
        email: 'daniel@alex.com',
        skills: ['HTML', 'CSS', 'JavaScript', 'Python'],
        age: 20,
        isLoggedIn: false,
        points: 40
    },
    John: {
        email: 'john@john.com',
        skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux', 'Node.js'],
        age: 20,
        isLoggedIn: true,
        points: 50
    },
    Thomas: {
        email: 'thomas@thomas.com',
        skills: ['HTML', 'CSS', 'JavaScript', 'React'],
        age: 20,
        isLoggedIn: false,
        points: 40
    },
    Paul: {
        email: 'paul@paul.com',
        skills: ['HTML', 'CSS', 'JavaScript', 'MongoDB', 'Express', 'React', 'Node'],
        age: 20,
        isLoggedIn: false,
        points: 40
    }
}


// Find the person who has many skills in the users object.


// steps : 
// 1 - get all the keys of the users object
const userKeys = Object.keys(users)
const userKeysLength = userKeys.length
let higherArrValu = 0
let userHigherVal = ""
let arrValLength = 0
// info - all the keys are object with skills has value (skills being an array)
// 2 - acces all the skills of all keys got at step 1
for(let i = 0; i < userKeysLength; i++){
    arrValLength = users[userKeys[i]].skills.length
    if(higherArrValu <= arrValLength){
        higherArrValu = arrValLength
        userHigherVal = userKeys[i]
    }
}

console.log(userHigherVal)

// Count logged in users, from the following object.
// const accesUsersElt = (elt) => {
//     for(let i = 0; i < userKeysLength; i++){
//        return users[userKeys[i]][elt]
//     }
// }

// console.log(accesUsersElt);

function countLoggedUsers() {
    let countItem = 0
    for(let i = 0; i < userKeysLength; i++){
        if(users[userKeys[i]].isLoggedIn){
            countItem++
        }
    }

    return countItem
}

console.log(countLoggedUsers());

// count users having greater than equal to 50 points from the following object.
function countGreaterThanOrEqualTo50() {
    let countItem = 0
    for(let i = 0; i < userKeysLength; i++){
        if(users[userKeys[i]].points >= 50){
            countItem++
        }
    }

    return countItem
}

console.log(countGreaterThanOrEqualTo50());


// Find people who are MERN stack developer from the users object
let user = []
for(let i = 0; i < userKeysLength; i++){
    let val = users[userKeys[i]].skills
    if(val.includes("MongoDB") && val.includes("Express") && val.includes("React") && val.includes("Node")){
        user.push(users[userKeys[i]])
    }
}

console.log(user);

// Set your name in the users object without modifying the original users object
// can be done 

// Get all keys or properties of users object
// can be done 

// Get all the values of users object
// can be done 

// Use the countries object to print a country name, capital, populations and languages.
// can be done 


