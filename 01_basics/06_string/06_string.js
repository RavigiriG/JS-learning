const name = "ravi"
const repoCount = 50

// console.log(name + repoCount + " value"); // outdated

console.log(`Hello my name is ${name} an my repo count is ${repoCount}`); // actually use.

const gameName = new String('ravi-cm-rb')

console.log(gameName[0]);          // output : r
console.log(gameName.__proto__);   // output : {}


console.log(gameName.length);       // output : 4
console.log(gameName.toUpperCase());// output : RAVI
console.log(gameName.charAt(2));    // output : i
console.log(gameName.indexOf('i')); // output : 3

const newString = gameName.substring(0,2)
console.log(newString);

const anotherString = gameName.slice(2,3)
console.log(anotherString);

const newStringOne = "     ravi         "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://ravi.com/ravi%20002"

console.log(url.replace('%20','-'));
console.log(url.includes('ravi'));

console.log(gameName.split('-'));