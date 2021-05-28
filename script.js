// Assignment Code
var generateBtn = document.querySelector("#generate");
var lowerCase = "abcdefghijklmnopqrstuvwxyz";
var upperCase = lowerCase.toUpperCase();
var numeric = "0123456789"
var symbol = '+-:;?_~!@#$%^&*`|"(){}[]=<> /\,.'

// Values determined from generate password prompts
var charAmount = 14
var includeLower = true
var includeUpper = true
var includeNumeric = true
var includeSymbol = true 


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Potential code to generate password
function generatePassword (charAmount, includeLower, includeUpper, includeNumeric, includeSymbol) {
  var requireChar = lowerCase
  if (includeUpper) requireChar = requireChar + upperCase
  if (includeNumeric) requireChar = requireChar + numeric
  if (includeSymbol) requireChar = requireChar + symbol

  var passwordLength = []
  for (let i = 0; i < charAmount; i++) {
      var characterCode = requireChar[Math.floor(Math.random() * requireChar.length)]
      // passwordLength.push(String.fromrequireChar(characterCode))
  }
  return
}

console.log(generatePassword())


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword)

// Prompt box to enter password length
// Still need work
function charAmountNumber() {
  var length = prompt("How long do you want your password?\nEnter a number 8-128.", "12");
  if (length != null) 
  }

// Confirm box to enter password criteria