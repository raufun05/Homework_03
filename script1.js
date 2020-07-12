// // Assignment Code
var enterChar;
var numericChar;
var specialChar;
var upperCaseChar;
var lowerCaseChar;

character = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", "\:", "\;", " < ", "=", " > ", " ? ", "@", "[", "\\", "]", " ^ ", "_", "`", "{", "|", "}", "~"];
lower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
upper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
number = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// // Write password to the #password input
// function writePassword() {
//   var password = generatePassword();
//   var passwordText = document.querySelector("#password");
//   passChar= prompt("How many characters would you like your password to contain?");

//   passwordText.value = password;

// }
//var values = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz123456789!$%&'()*+,-./:;<=>?@[]^_`{|}~".split("");

//console.log(values)
// Add event listener to generate button
//generateBtn.addEventListener("click", writePassword);
var option;
var generateBtn = document.querySelector("#generate");
generateBtn.addEventListener('click', function(){
  var password = generatePassword();
  document.querySelector("#password").placeholder=password;
})
// Start function to generate password

function generatePassword(){
  enterChar= parseInt(prompt("How many characters would you like your password to contain? Choose between 8 and 128"));
  if(!enterChar){
    alert("Enter a value please");
  }else if(enterChar<8 || enterChar>128){
    enterChar= parseInt(prompt("Please enter a value between 8 and 128"));
  }else{
    var special=confirm("Click OK to confirm including special characters");
    var numeric=confirm("Click OK to confirm including numeric characters");
    var upper=confirm("Click OK to confirm including upper case characters");
    var lower=confirm("Click OK to confirm including lower case characters");
  }
  
  if(!numericChar && !specialChar && !upperCaseChar && !lowerCaseChar){
        option= alert("Please follow the password rules!!")    
  }
  else if(numericChar && specialChar && upperCaseChar && lowerCaseChar){
    option=character.concat(number, lower, upper);
  }
  var pwd = [];

    for (var i = 0; i < enterChar; i++) {
        var pickOption = option[Math.floor(Math.random() * option.length)];
        pwd.push(pickOption);
    }
    var password = pwd.join("");
    UserInput(password);
    return password;
}
    
  function UserInput(password) {
    document.querySelector("pwd").textContent = password;

}
