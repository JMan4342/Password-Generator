// Assignment Code
var generateBtn = document.querySelector("#generate");
var lowerCase = "abcdefghijklmnopqrstuvwxyz";
var upperCase = lowerCase.toUpperCase();
var numeric = "0123456789";
var symbol = '+-:;?_~!@#$%^&*`|"(){}[]=<> /,.';

var characterInput = "";
var lowerInput = "";
var upperInput = "";
var numberInput = "";
var symbolInput = "";
var passCriteria = "";

// Add event listener to generate button
generateBtn.addEventListener("click", function () {
  characterInput = prompt("How long would do you want your passcode", "12");
  // Loops character length question if not meet parameters of number 8-128.
  while (
    characterInput < 8 ||
    characterInput > 128 ||
    isNaN(characterInput) ||
    characterInput == null
  ) {
    alert("Enter a value between 8 and 128");
    characterInput = prompt("How long would do you want your passcode", "12");
  }
  lowerInput = confirm(
    'Do you want lower case letters in your password?\nOK for "Yes"\nCancel for "No"'
  );
  upperInput = confirm(
    'Do you want upper case letters in your password?\nOK for "Yes"\nCancel for "No"'
  );
  numberInput = confirm(
    'Do you want numbers in your password?\nOK for "Yes"\nCancel for "No"'
  );
  symbolInput = confirm(
    'Do you want special characters in your password?\nOK for "Yes"\nCancel for "No"'
  );
  console.log(characterInput, lowerInput, upperInput, numberInput, symbolInput);
  alert("Thank you");

  //Adding character criteria to a string
  if (lowerInput) passCriteria = passCriteria + lowerCase;
  if (upperInput) passCriteria = passCriteria + upperCase;
  if (numberInput) passCriteria = passCriteria + numeric;
  if (symbolInput) passCriteria = passCriteria + symbol;

  console.log(passCriteria);
  console.log(generatePassword());
});

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

function generatePassword() {
  var result = "";
  for (let i = 0; i < characterInput; i++) {
    result += passCriteria[Math.floor(Math.random() * passCriteria.length)];
  }
  // Sends new password to page
  return (document.getElementById("password").innerHTML = result);
}
