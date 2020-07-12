// // Assignment Code
var passContChar;

var specialChar;
var numericChar;
var lowerCaseChar;
var upperCaseChar;

var specialCharArr = "!#$%&\()*+,-./:;<=>?@^[\\]^_`{|}~".split("");
var numberArr = "0123456789".split("");
var lowerCaseArr = "abcdefghijklmnopqrstuvwxyz".split("");
var upperCaseArr = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

// // Write password to the #password input
// function writePassword() {
//   var password = generatePassword();
//   var passwordText = document.querySelector("#password");
//   passChar= prompt("How many characters would you like your password to contain?");

//   passwordText.value = password;


// Add event listener to generate button
//generateBtn.addEventListener("click", writePassword);
var holdPassChars;
var generateBtn = document.querySelector("#generate");
    generateBtn.addEventListener('click', function(){
    ps = generatePassword();
    document.getElementById("#password").placeholder=ps;
});
// Welcome pup up box for the user to start
    window.onload = alert("Welcome! Please click 'Generate password' button to start!");
// Start function to generate password

function generatePassword(){
  passContChar= parseInt(prompt("Please enter a password between 8 and 128 characters"));
  if(!passContChar){
    alert("Enter a value please");
  }else if(passContChar<8 || passContChar>128){
    passContChar= parseInt(prompt("Please enter a value between 8 and 128"));
  }else{
    var specialChar=confirm("Click OK to confirm including special characters");
    var numericChar=confirm("Click OK to confirm including numeric characters");
    var upperCaseChar=confirm("Click OK to confirm including upper case characters");
    var lowerCaseChar=confirm("Click OK to confirm including lower case characters");
  };
  
  if(!numericChar && !specialChar && !upperCaseChar && !lowerCaseChar){
    holdPassChars= alert("Please follow the password rules!!");    
  }
  else if(numericChar && specialChar && upperCaseChar && lowerCaseChar){
    holdPassChars=specialCharArr.concat(numberArr, lowerCaseArr, upperCaseArr);
    console.log(holdPassChars);
  }
  var password = [];

    for (var i = 0; i < passContChar; i++) {
        var pickOption = holdPassChars[Math.floor(Math.random() * holdPassChars.length)];
        password.push(pickOption);
    }
    var ps = password.join("");
    UserInput(ps);
    return ps;
}
    
function UserInput(ps) {
    document.querySelector("password").textContent = ps;

}
