// Assignment Code
var generateBtn = document.querySelector("#generate");
var lowerCase = "abcdefghijklmnopqrstuvwxyz";
var upperCase = lowerCase.toUpperCase();
var numeric = "0123456789";
var symbol = '+-:;?_~!@#$%^&*`|"(){}[]=<> /,.';

//Criteria from the prompt boxes
var charAmount = 20;
var includeLower = true;
var includeUpper = true;
var includeNumeric = true;
var includeSymbol = true;              

//Adding character criteria to a string
var passCriteria = lowerCase;
  // if (includeLower = true) {return lowerCase},
  if (includeUpper) passCriteria = passCriteria + upperCase;
  if (includeNumeric) passCriteria = passCriteria + numeric;
  if (includeSymbol) passCriteria = passCriteria + symbol; 


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function generatePassword() {
  var result = ""
for (let i = 0; i < charAmount; i++) {
  result += passCriteria[Math.floor(Math.random() * passCriteria.length)];
}
return result
}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword)

function writePassword() {
  var characterInput = prompt("How long would do you want your passcode", "12");
  while(characterInput < 8) {
    alert("Enter a value between 8 and 128")
    var characterInput = prompt("How long would do you want your passcode", "12");
  }
  while(characterInput > 128) {
    alert("Enter a value between 8 and 128")
    var characterInput = prompt("How long would do you want your passcode", "12");
  }
  confirm('Do you want lower case letters in your password?\nOK for "Yes"\nCancel for "No"');
  confirm('Do you want upper case letters in your password?\nOK for "Yes"\nCancel for "No"');
  confirm('Do you want numbers in your password?\nOK for "Yes"\nCancel for "No"');
  confirm('Do you want special characters in your password?\nOK for "Yes"\nCancel for "No"');
  alert("Thank you");
}


// Confirm box to enter password criteria