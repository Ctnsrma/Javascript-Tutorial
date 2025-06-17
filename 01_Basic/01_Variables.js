const accountId = 12324177
let accountEmail = "chetan@gmail.com"
var accountPassword = "12345678"
accountCity = "Etawah"

// accountId = 2;  /*Not allowed, const variable can't changed once declared.*/
accountEmail = "sharma@gmail.com"
accountPassword = "abcdef"
accountCity = "Bengaluru"
let accountState; // Undefined
/*
Prefer not to use var
because of issue in block scope and functional scope
*/

console.log(accountId)
console.table([accountId,accountEmail,accountPassword,accountCity,accountState])