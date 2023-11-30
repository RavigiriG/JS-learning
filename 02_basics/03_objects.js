// singleton
// Object.create

// object literals

const mySym = Symbol("key1")


const JsUser = {
    name: "ravi",
    "full name": "Ravi Gausvami",
    [mySym]: "mykey1",
    age: 20,
    location: "Jaipur",
    email: "rav@g.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

// console.log(JsUser.email);
// console.log(JsUser['email']);
// console.log(JsUser["full name"]);
// console.log(JsUser[mySym]);

JsUser.email = "ravi@gmail.com"
// Object.freeze(JsUser)
JsUser.email = "ravi@yahoo.com"
// console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello JS user");
}
JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());