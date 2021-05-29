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

generateBtn.addEventListener("click", function() {
  characterInput = prompt("How long would do you want your passcode", "12");
  lowerInput = confirm('Do you want lower case letters in your password?\nOK for "Yes"\nCancel for "No"');
  upperInput = confirm('Do you want upper case letters in your password?\nOK for "Yes"\nCancel for "No"');
  numberInput = confirm('Do you want numbers in your password?\nOK for "Yes"\nCancel for "No"');
  symbolInput = confirm('Do you want special characters in your password?\nOK for "Yes"\nCancel for "No"');
  console.log(characterInput, lowerInput, upperInput, numberInput, symbolInput)
})

var charAmount = (characterInput);
var includeLower = (lowerInput);
var includeUpper = (upperInput);
var includeNumeric = (numberInput);
var includeSymbol = (symbolInput);

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
console.log(generatePassword())

// Add event listener to generate button



// function writePassword() {
  //   while (characterInput < 8 || characterInput > 128 || isNaN(characterInput) || characterInput == null) {
    //     alert("Enter a value between 8 and 128")
    //     var characterInput = prompt("How long would do you want your passcode", "12")};
  //   var characterInput = prompt("How long would do you want your passcode", "12");
  // var lowerInput = confirm('Do you want lower case letters in your password?\nOK for "Yes"\nCancel for "No"');
  // var upperInput = confirm('Do you want upper case letters in your password?\nOK for "Yes"\nCancel for "No"');
  // var numberInput = confirm('Do you want numbers in your password?\nOK for "Yes"\nCancel for "No"');
  // var symbolInput = confirm('Do you want special characters in your password?\nOK for "Yes"\nCancel for "No"');
//   alert("Thank you");
//     return (characterInput, lowerInput, upperInput, numberInput, symbolInput)
//   }
// console.log(characterInput)

  //Criteria from the prompt boxes
