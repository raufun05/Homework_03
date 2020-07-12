// Assignment Code
var passContChar;

var specialChar;
var numericChar;
var lowerCaseChar;
var upperCaseChar;

var upperCaseArr = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
var lowerCaseArr = "abcdefghijklmnopqrstuvwxyz".split("");
var numberArr = "0123456789".split("");
var specialCharArr = "!#$%&\()*+,-./:;<=>?@^[\\]^_`{|}~".split("");

var holdPassChars;
// Write password to the #password input
var generateBtn = document.querySelector("#generate");

generateBtn.addEventListener('click', function(){
        var password = generatePassword();
        document.getElementById("#password").placeholder=password;
});
// Welcome pup up box for the user to start
        window.onload = alert("Welcome! Please click 'Generate password' button to start!");

// Start function to generate password
function generatePassword() {
// User input box
        passContChar = parseInt(prompt("Please enter a password between 8 and 128 characters"));
//Start user validation 
    if (!passContChar) {
        alert("Enter a value please!!");
    } else if (passContChar < 8 || passContChar > 128) {
        passContChar = parseInt(prompt("Please enter a value between 8 and 128"));
    } else {
// Password character criteria
        var specialChar=confirm("Click OK to confirm including special characters");
        var numericChar=confirm("Click OK to confirm including numeric characters");
        var upperCaseChar=confirm("Click OK to confirm including upper case characters");
        var lowerCaseChar=confirm("Click OK to confirm including lower case characters");
    }

// If user select all negative answer
    if (!specialChar && !numericChar && !upperCaseChar && !lowerCaseChar) {
        holdPassChars = alert("Please follow the password rules!!");
    }
    // First if statement that uses user input prompts to determine choices
    // Else if for 4 positive options
    else if (specialChar && numericChar && upperCaseChar && lowerCaseChar) {

        holdPassChars = specialCharArr.concat(numberArr, upperCaseArr, lowerCaseArr);
    }
    // Else if for 3 positive options
    // else if (confirmCharacter && confirmNumber && confirmUppercase) {
    //     choices =specialCharArr.concat(numberArr, upperCaseArr);
    //     console.log(choices)
    // }
    // else if (confirmCharacter && confirmNumber && confirmLowercase) {
    //     choices =specialCharArr.concat(numberArr, lowerCaseArr);
    // }
    // else if (confirmCharacter && confirmLowercase && confirmUppercase) {
    //     choices =specialCharArr.concat(lowerCaseArr, upperCaseArr);
    // }
    // else if (confirmNumber && confirmLowercase && confirmUppercase) {
    //     choices =numberArr.concat(lowerCaseArr, upperCaseArr);
    // }
    // // Else if for 2 positive options 
    // else if (confirmCharacter && confirmNumber) {
    //     choices =specialCharArr.concat(numberArr);

    // } else if (confirmCharacter && confirmLowercase) {
    //     choices =specialCharArr.concat(lowerCaseArr);

    // } else if (confirmCharacter && confirmUppercase) {
    //     choices =specialCharArr.concat(upperCaseArr);
    // }
    // else if (confirmLowercase && confirmNumber) {
    //     choices =lowerCaseArr.concat(numberArr);

    // } else if (confirmLowercase && confirmUppercase) {
    //     choices =lowerCaseArr.concat(upperCaseArr);

    // } else if (confirmNumber && confirmUppercase) {
    //     choices =numberArr.concat(upperCaseArr);
    // }
    // // Else if for 1 positive option
    // else if (confirmCharacter) {
    //     choices = specialCharArr;
    // }
    // else if (confirmNumber) {
    //     choices = numberArr;
    // }
    // else if (confirmLowercase) {
    //     choices = lowerCaseArr;
    // }
    // else if (confirmUppercase) {
    //     choices = upperCaseArr;
    // };

    // password variable is an array placeholder for user generated amount of length
    var pwd = [];

    // Start random selection variables:
    // Random selection for all variables: 
    for (var i = 0; i < passContChar; i++) {
        var pickChoices = holdPassChars[Math.floor(Math.random() * holdPassChars.length)];
        pwd.push(pickChoices);
    }
    // This joins the password array and converts it to a string
    // Worked with a tutor to incorporate this option
    var password = pwd.join("");
    UserInput(password);
    return password;
}
// This puts the password value into the textbox
// Changed function input to use textcontent
function UserInput(password) {
    document.getElementById("password").textContent = password;

}
