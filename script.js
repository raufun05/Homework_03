// Assignment Code
var passContChar;

var specialChar;
var numericChar;
var lowerCaseChar;
var upperCaseChar;
// Declare an arrays for different characters
var upperCaseArr = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
var lowerCaseArr = "abcdefghijklmnopqrstuvwxyz".split("");
var numberArr = "0123456789".split("");
var specialCharArr = "!#$%&\()*+,-./:;<=>?@^[\\]^_`{|}~".split("");

var holdPassChars;
// Identify element
var generateBtn = document.querySelector("#generate");

generateBtn.addEventListener('click', function(){
        var password = generatePassword();
        document.querySelector("#password");
    });
// Welcome pup up box for the user to start
        window.onload = alert("Welcome! Please click 'Generate Password' button to start!");

// Start function to generate password
function generatePassword() {
// User input box
        passContChar = parseInt(prompt("Please enter a password values between 8 and 128 characters"));
//Start user validation 
    if (!passContChar) {
        alert("Enter a valid credential please!!");
    } else if (passContChar < 8 || passContChar > 128) {
        passContChar = parseInt(prompt("Please enter a values between 8 and 128"));
    } else {
// Password selection criteria
        var specialChar=confirm("Click OK to confirm including special characters");
        var numericChar=confirm("Click OK to confirm including numeric characters");
        var upperCaseChar=confirm("Click OK to confirm including upper case characters");
        var lowerCaseChar=confirm("Click OK to confirm including lower case characters");
    }

// When user select all negative answers
    if (!specialChar && !numericChar && !upperCaseChar && !lowerCaseChar) {
        holdPassChars = alert("Please follow the password rules!!");
    }
//When user select all positive answers
    else if (specialChar && numericChar && upperCaseChar && lowerCaseChar) {
        holdPassChars = specialCharArr.concat(numberArr, upperCaseArr, lowerCaseArr);
        console.log(holdPassChars)
    }
//When user select three positive answers
    else if (specialChar && numericChar && upperCaseChar) {
        holdPassChars =specialCharArr.concat(numberArr, upperCaseArr);
        console.log(holdPassChars)
    }
    else if (specialChar && numericChar && lowerCaseChar) {
        holdPassChars =specialCharArr.concat(numberArr, lowerCaseArr);
    }
    else if (specialChar && lowerCaseChar && upperCaseChar) {
        holdPassChars =specialCharArr.concat(lowerCaseArr, upperCaseArr);
    }
    else if (numericChar && lowerCaseChar && upperCaseChar) {
        holdPassChars =numberArr.concat(lowerCaseArr, upperCaseArr);
    }
//When user select two positive answers 
    else if (specialChar && numericChar) {
        holdPassChars =specialCharArr.concat(numberArr);

    } else if (specialChar && lowerCaseChar) {
        holdPassChars =specialCharArr.concat(lowerCaseArr);

    } else if (specialChar && upperCaseChar) {
        holdPassChars =specialCharArr.concat(upperCaseArr);
    }
    else if (lowerCaseChar && numericChar) {
        holdPassChars =lowerCaseArr.concat(numberArr);

    } else if (lowerCaseChar && upperCaseChar) {
        holdPassChars =lowerCaseArr.concat(upperCaseArr);

    } else if (numericChar && upperCaseChar) {
        holdPassChars =numberArr.concat(upperCaseArr);
    }
//When user select one positive answer
    else if (specialChar) {
        holdPassChars = specialCharArr;
    }
    else if (numericChar) {
        holdPassChars = numberArr;
    }
    else if (lowerCaseChar) {
        holdPassChars = lowerCaseArr;
    }
    else if (upperCaseChar) {
        holdPassChars = upperCaseArr;
    };

// Declare  array for password 
    var pwd = [];
    console.log(pwd)
    
// Iterate all characters 
    for (var i = 0; i < passContChar; i++) {
        var pickChoices = holdPassChars[Math.floor(Math.random() * holdPassChars.length)];
        pwd.push(pickChoices);
    }
// Password array and converts it to a string
    var password = pwd.join("");
    userInput(password);
    return password;
}
//Use textcontent to change function
function userInput(password) {
    document.getElementById("password").textContent = password;

}
