function sayMyName(){
    console.log("R");
    console.log("A");
    console.log("V");
    console.log("I");
}

// sayMyName()

// function addTwoNumbers(number1, number2){

//     console.log(number1 + number2);
// }
function addTwoNumbers(number1, number2){

    // let result = number1 + number2
    // return result
    return number1 + number2
    console.log("Ravi"); // after return no code will execute and shown in node terminal
}

const result = addTwoNumbers(3, 5)

// console.log("Result: ", result);

function loginUserMessage(username = "sam"){
    if(!username){
        console.log("Please enter a username");
        return
    }
    return `${username} just logged in`
}

// console.log(loginUserMessage("Ravi"))
// console.log(loginUserMessage("ravi"))


function calculatecarPrice(val1, vL2, ...num1){
    return num1
}

// console.log(calculatecarPrice(200, 400, 500, 2000));

const user = {
    username: "Ravi",
    Price: 199
}

function handleObject(anyoject){
    console.log(`Username is ${anyoject.username} and price is ${anyoject.Price}`);
}

// handleObject(user)
handleObject({
    username: "sam",
    Price: 399,
})

const myArray = [200, 400, 100, 600]

function returnSecondValue(getArray){
    return getArray[1]
}

// console.log(returnSecondValue(myArray));
console.log(returnSecondValue(myArray));

// second Option
console.log(returnSecondValue([200, 400, 100, 600]));
