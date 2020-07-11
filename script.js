// // Assignment Code
// // var pwd=[];
// // var passChar;
// var generateBtn = document.querySelector("#generate");

// // Write password to the #password input
// function writePassword() {
//   var password = generatePassword();
//   var passwordText = document.querySelector("#password");
//   passChar= prompt("How many characters would you like your password to contain?");

//   passwordText.value = password;

// }

// Add event listener to generate button
//generateBtn.addEventListener("click", writePassword);

var generateBtn = document.querySelector("#generate");
generateBtn.addEventListener('click', function(){
  var passChar= prompt("How many characters would you like your password to contain?");
  var special=confirm("Click OK to confirm including special characters");
  var numeric=confirm("Click OK to confirm including numeric characters");
  var upper=confirm("Click OK to confirm including upper case characters");
  var lower=confirm("Click OK to confirm including lower case characters");
  var passwordText = document.querySelector("#password");

})