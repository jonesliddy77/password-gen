// Assignment Code
var generateBtn = document.querySelector("#generate");
var randomChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
var upper_case= 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
var lower_case= 'abcdefghijklmnopqrstuvwxyz';
var numbers='0123456789';
var special = '!\"§$%&/()=?\u{20ac}';
// Write password to the #password input

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

function generatePassword(){
  var length = prompt("how many char do you need?");
if(length<=8){
  alert('you need at least 8 chars');
  return generatePassword();
}
if(length>=128){
  alert('you cant have more than 128 chars');
  return generatePassword();
}
  // this is where you would want to store your ultimate string
  // out of which you would pick random characters
  var ultimateString = "";

  // maybe rename this to password?
  var password = '';

  var upper_question = confirm('do you want upper case letters');
  
  // if that is true, then you want to tackle all upper letters
  // to the end of the `ultimateString` variable (your ultimate variable)
  // so that you can later pick something from it
  if(upper_question === true){
    // but we use a for loop to generate a password
    // and we don't yet have a full ultimate string to pick from
    // so we don't need a for loop here
ultimateString = ultimateString + upper_case;
    // instead, we want to add all upper letters
    // to our ultimate variable
    // and just continue
    for (var i = 0; i < parseInt(length); i++) {
      ultimateString = ultimateString + upper_case[getRandomInt(upper_case.length)];}  
  }
  var lower_question= confirm('do you want lower case letters')
  if(lower_question === true){
    ultimateString = ultimateString + lower_case;
    for(var i = 0; i < parseInt(length); i++)
    ultimateString = ultimateString + lower_case[getRandomInt(lower_case.length)];
  }
  var number_question= confirm('do you want numbers')
  ultimateString = ultimateString + numbers;
  if(number_question === true){
    for(var i = 0; i < parseInt(length); i++)
    ultimateString = ultimateString + numbers[getRandomInt(numbers.length)];
  }
  var special_question= confirm('do you want special char')
  ultimateString = ultimateString + special;
  if(special_question === true){
    for(var i = 0; i < parseInt(length); i++)
    ultimateString = ultimateString + special[getRandomInt(special.length)];
  }
for(var i = 0; i < parseInt(length); i++){
  password = password + ultimateString[getRandomInt(ultimateString.length)];
}
  // and here, after all the if checks
  // you would want to have a for loop
  // to generate a password
  // using random items from ultimateVariable

  // all of logic goes inside here
  return password; //will be a var;
}
function writePassword() {
  var password = generatePassword(); // return the value in the return
  var passwordText = document.querySelector("#password");
  passwordText.value = password;

}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
