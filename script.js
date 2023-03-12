// Weekly Challenge Title: Random Password Generator
// Description: Generating a random password based on the characters the person selects when asked by the system.


// Getting references to the #generate element
var generateBtn = document.querySelector("#generate");

// Password Generator Function
function generatePassword(){
  var generatedPassword = '';

  // Character Arrays
  var lowercaseCharacters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
  var uppercaseCharacters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
  var specialCharacters = ['"', '#', '!', '&', '$', '%', "'", '*', '+', '(',')', '-', ',', '.', ':', '/', '\'', ';', '>', '<', '=', '@', '?', '[', ']', '^', '_', '`', '~', '{','|','}'];
  var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

  // Counters
  i=0;
  j=0;

  // Password Length Prompt
  var passwordLength = parseInt(window.prompt("How long will your password be? Please choose a password length of atleast 8 characters and no more than 128 characters.", "Enter a password length e.g. '8'"));
  // Password Length Approval
  while (!(parseInt(passwordLength)>=8 && parseInt(passwordLength)<=128)){
    passwordLength = parseInt(window.prompt("Your Input was not valid! Please try again. How long will your password be? Please choose a password length of atleast 8 characters and no more than 128 characters", "Enter a password length e.g. '8'"));
  }

  console.log('Password length: '.passwordLength);

  while (i===0){
    // Lowercase Characters Prompt
    var lowercaseConfirm = window.prompt("Should the password contain lowercase characters? Type 'Y' for yes or 'N' for no.", "'Y' or 'N'").toUpperCase();
    // Lowercase Characters Approval
    while (!(lowercaseConfirm==='Y'||lowercaseConfirm==='N')){
      lowercaseConfirm = window.prompt("Your input was not valid! Please try again. Should the password contain lowercase characters? Type 'Y' for yes or 'N' for no.", "'Y' or 'N'").toUpperCase();
    }
    // Add to Counter if 'Y' is selected
    if (lowercaseConfirm==='Y'){
      i++;
    }

    // Uppercase Characters Prompt
    var uppercaseConfirm = window.prompt("Should the password contain uppercase characters? Type 'Y' for yes or 'N' for no.", "'Y' or 'N'").toUpperCase();
    // Uppercase Characters approval
    while (!(uppercaseConfirm==='Y'||uppercaseConfirm==='N')){
      uppercaseConfirm = window.prompt("Your input was not valid! Please try again. Should the password contain uppercase characters? Type 'Y' for yes or 'N' for no.", "'Y' or 'N'").toUpperCase();
    }
    // Add to counter if 'Y' is selected
    if(uppercaseConfirm==='Y'){
      i++;
    }

    // Numeric Characters Prompt
    var numericConfirm = window.prompt("Should the password contain numbers? Type 'Y' for yes or 'N' for no.", "'Y' or 'N'").toUpperCase();
    // Numeric Characters Approval
    while (!(numericConfirm==='Y'||numericConfirm==='N')){
      numericConfirm = window.prompt("Your input was not valid! Please try again. Should the password contain numbers? Type 'Y' for yes or 'N' for no.", "'Y' or 'N'").toUpperCase();
    }
    // Add to counter if 'Y' is selected
    if (numericConfirm==='Y'){
      i++;
    }

    // Special Characters prompt
    var specialCharactersConfirm = window.prompt("Should the password contain any special characters? Type 'Y' for yes or 'N' for no.", "'Y' or 'N'").toUpperCase();
    // Special Characters Approval
    while (!(specialCharactersConfirm==='Y'||specialCharactersConfirm==='N')){
      specialCharactersConfirm = window.prompt("Your input was not valid! Please try again. Should the password contain special characters? Type 'Y' yes or 'N' for no.", "'Y' or 'N'").toUpperCase();
    }
    // Add to counter if 'Y' is selected
    if (specialCharactersConfirm==='Y'){
      i++;
    }
  }

  // Generate the password
  while (j<parseInt(passwordLength)){
    // Choose A Random Lowercase Character
    if (lowercaseConfirm==='Y'){
      generatedPassword = generatedPassword.concat(lowercaseCharacters[(Math.floor(Math.random()*lowercaseCharacters))]);
      j++;
    }

    // Choose A Random Uppercase Character
    if (uppercaseConfirm==='Y'){
      generatedPassword = generatedPassword.concat(uppercaseCharacters[(Math.floor(Math.random()*uppercaseCharacters))]);
      j++;
    }

    // Choose A Random Number
    if (numericConfirm==='Y'){
      generatedPassword = generatedPassword.concat(numericCharacters[(Math.floor(Math.random()*numericCharacters.length))]);
      j++;
    }

    // Choose A Random Special Character
    if (specialCharactersConfirm==='Y'){
      generatedPassword = generatedPassword.concat(specialCharacters[(Math.floor(Math.random()*specialCharacters.length))]);
      j++;
    }
  }

  // Return The Generated Password to the writePassword() Function
  return generatedPassword;

}

// Write Password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
