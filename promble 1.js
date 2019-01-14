// Asking the user to enter a 4 digit code.
// Then ask the user to enter password.
// If the passwords are the same Print Password is set.
// If the passwords are different Print ERROR, Passwords are different.


var secretCode = parseInt(prompt("Enter a 4 digit code"));
var password = (prompt("Enter a password"));

if ( secretCode == password)
{
    console.log("Password is Set")
}
else
{
    console.log("ERROR, Passwords are different");
}