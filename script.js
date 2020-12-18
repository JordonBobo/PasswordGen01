// Initiate the password generator when the buttom gets clicked
document.querySelector("#generate").addEventListener("click", writePassword);


// Generates the password and publishes it on the page
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}


// Asks user what kind of password they need and generates it

function generatePassword() {

// Asks user how many characters to use, number can only be between 8-128
var limiter = parseInt(prompt ("how many characters do you need?"))
if (limiter > 128) { limiter = 128}
else if (limiter < 8) {limiter = 8}
else if (limiter > 7 && limiter < 129) {limiter = limiter}
else {alert ("That is not a valid number. Please choose a positive whole number which is not spelled out")}

// Asks user which data types are needed, if they gave a valid number
if (isNaN(limiter) == false) {
    var numbers1 = confirm ("numbers?") 
    if (numbers1 == true) {genPossible(number, combo, passWord2)}
    var letters1 = confirm ("lower case letters?") 
    if (letters1 == true) {genPossible(lwrLetter, combo, passWord2)}
    var letters2 = confirm ("upper case letters?") 
    if (letters2 == true) {genPossible(upLetter, combo, passWord2)}
    var symbols1 = confirm ("symbols?") 
    if (symbols1 == true) {genPossible(spclChar, combo, passWord2)}
}

// updates the two arrays that will make up the final password
    assemble(combo, passWord, limiter)

// Finalizes the password to be published on the page
  return passWord.join('') + passWord2.join('')
}


//  Adds the required data types to the pool of possible characters,
//  and guarantees at least 1 of each data type is in the final password
function genPossible(from, to, guarantee) {
  guarantee.push(from[Math.floor(Math.random() * from.length)]);
  for(let i = 0, len = from.length; i < len; i++) {
         to.push(from[i]);
  }
   return to;
}

// Assemble the password from the combo array, 
// minus the number of characters already added to the final password.

function assemble(source,result,size) {
  for(let i = 0; i < size - passWord2.length; i++) {
        result.push(source[Math.floor(Math.random() * source.length)])
  }
  return result;
}




// Possible data types to be used in the password
var number = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]
var upLetter = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var lwrLetter = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
var spclChar = ["!","#","$","&","(",")","*","+","-",".","/",":",";","<","=",">","?","@","[","]","^","_","`","{","|","~"]

// middle man arrays
var combo = []
var passWord = []
var passWord2 = []


