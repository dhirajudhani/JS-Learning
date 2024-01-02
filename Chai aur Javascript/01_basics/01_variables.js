const accountId = 123445;
let accountEmail = "xnvjelj";
var accountPasswword = "ejlfj f";
accountCity = "Ahmedabad";
let accountState;

// accountId = 2; // Not allowed

console.log(accountId);

accountEmail = "@.com";
accountPasswword = "12333";
accountCity = "Mumbai";

/*
    Prefer not to use var
    because of issue in block scope and functional scope
*/

console.table([accountId,accountEmail,accountPasswword,accountState,accountCity]);