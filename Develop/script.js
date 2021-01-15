


// Assignment Code
var generateBtn = document.querySelector("#generate");

var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
var lowerCase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var specialCharacters = ["!","@","#","$","%","^","&","*","(",")","+","=","-"];
// Write password to the #password input

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);





var passwordSelection = [];
var newPassword = [];
function generatePassword() {
  let upperCaseVar = confirm("Do you want upper case letter??");

  let lowerCaseVar = confirm("Do you want lower case letter??");
  
  let specialVar = confirm("Do you want special characters??");
  
  
  let numVar = confirm("Do you want numbers??");
// prompt password length
  var passwordLength = prompt("How long would you like the password? Please pick a number between 8 - 128.");
  console.log(passwordLength)
    if (passwordLength < 8 || passwordLength > 128) {
    alert("The number you selected is outside the parameters of 8-128, please adjust.");
    
    }

      // yes or no for each array

if (numVar){
  passwordSelection.push(numbers)
  }

  if (upperCaseVar){
    passwordSelection.push(upperCase)
  }

  if (lowerCaseVar){
    passwordSelection.push(lowerCase)
    }

    if (specialVar){
      passwordSelection.push(specialCharacters)
    }
  console.log(passwordSelection)
  
console.log(upperCaseVar);
console.log(lowerCaseVar);
console.log(specialVar);
console.log(numVar);

// if yes to array push to selector array
// if (upperCaseVar){
//   passwordSelection.push(upperCase)
// }
// if (lowerCaseVar){
//   passwordSelection.push(lowerCase)
//   }
//   if (specialVar){
//     passwordSelection.push(specialCharacters)
//   }
//   if (numVar){
//     passwordSelection.push(numbers)
//     }

// go through selector array and add random to newpassword array
for (let i = 0; i < passwordLength.length; i++){
  newPassword.push(passwordSelection[Math.floor(Math.random() * passwordSelection.length)])
}
console.log(newPassword);


}


  //for loop through password.length

    // new array filled with selections from comfirms     var passwordSelection = []
    // use Math.random



//  WHEN the password is generated
//   THEN the password is either displayed in an alert or written to the page

   // newPassword.push(letterSelection[Math.floor(Math.random() * letterSelection.length)])

//giong to want to .join it    .join pushes string together