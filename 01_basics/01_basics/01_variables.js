const accountId = 144553
let accountEmail = "ravi@gmail.email.com"
var accountPassword = "12345"
accountCity = "Jaipur"
let accountState;

// accountId = "2" // not allowed

accountEmail = "hc@hc.com"
accountPassword = "21212121"
accountCity = "Ahmedabad"

console.table([accountId, accountEmail, accountPassword, accountCity,accountState]);

/*
Prefer not to use var 
because of issue in block and functional scope.
*/
