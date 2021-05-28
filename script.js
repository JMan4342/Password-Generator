// Assignment Code
var generateBtn = document.querySelector("#generate");
var lowerCase = "abcdefghijklmnopqrstuvwxyz";
var upperCase = lowerCase.toUpperCase();
var numeric = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
// var specialChar = ["!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?"]

var charAmount = 
var includeLower = 
var includeUpper =
var includeNumeric =


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword)