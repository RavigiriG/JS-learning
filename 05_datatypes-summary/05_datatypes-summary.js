// Primative

// 7 Types : String, Number, Boolean, Null, undefined, Symbol, BigInt

const score = 100;
const scoreValue = 100.3;

const isLoggedIn = false;
const outsideTemp = null
let userEmail;

const id = Symbol ('123')
const anotherId = Symbol ('123')

console.log(id  == anotherId);

const bigNumber = 34234325455n



// Reference (Non primative)

// Array, Objects, Functions

const heroes = ["shaktiman", "naagraj", "doga"];
let myObj = {
    name: "ravi",
    age: 25,
}

const myFunction = function(){
    console.log("Hello world");
}

console.log(typeof outsideTemp); // null = object

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// stack (Primitive), Heap (Non-primitive)

let myYoutubename = "GamerDash"

let anothername = myYoutubename
anothername = "gameslife"

console.log(myYoutubename);
console.log(anothername);

let user1 = {
    email: "user@gmail.com",
    upi: "user@ybl",
}

let user2 = user1

user2.email = "ravi@gmail.com"

console.log(user1.email);
console.log(user2.email);