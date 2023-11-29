const score = 400
// console.log(score);

const balance = new Number(100)

// console.log(balance);

// console.log(balance.toString());
// console.log(balance.toString().length);
// console.log(balance.toFixed(2));

const otherNumber = 123.8966

// console.log(otherNumber.toPrecision(4));

const hundreds = 1000000

// console.log(hundreds.toLocaleString('en-IN'));

// +++++++++++++++++++++++++++++++++ Maths +++++++++++++++++++++++++++++++++++++++++++++++++++

// console.log(Math);
// console.log(Math.abs(-4)); // neg to possitive
// console.log(Math.floor(4.9)); // round, floor, ceil
// console.log(Math.min(4,3,6,8));
// console.log(Math.max(4,3,6,8));

console.log(Math.random()); // random gives value from 0 to 1 in decimal
console.log((Math.random()*10) + 1); // decimal shift to left
console.log(Math.floor(Math.random()*10) + 1); // avoid 0 so +1

const min = 10
const max = 20

console.log(Math.floor((Math.random() * (max - min + 1))) + min)
