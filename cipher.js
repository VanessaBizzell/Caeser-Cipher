// TASK - change user-defined cipher key(keyNumber) after every character by user-defined shift (shiftKeyNumber)

// declare decode/encode function
const EnDeCrypt () => {
    // declare input variable (get user message)
    // declare input variable (get userkey)
    // declare input variable (get userShift)
    let userString = document.getElementById("userMessage").value;
    let enCrypt = document.getElementById("encrypt");
    let userKey = document.getElementById("userKey").value;
    let userShift = document.getElementById("userShift").value;
    // convert user input to lowercase-only string and array.
    let cleanString = (userString.trim()).toLowerCase();
    let outputMessage = [];
    let flag = true;
}



//validation - if user inputs number alert "numbers will not be encrypted"
//?????if user inputs uppercase alert "encryption will convert message to lowercase" OR can assign uppercase letters new index and code/encode????

// convert user input to lowercase-only string and array. 
//convert user message to array
// is encode/code button checked? Assign True/false value
// declare output message variable

//if encode radio true then output = encoded message (also change output label to "Coded Message" )
//else if decode radio true then output = decoded message (also change output label to "Decoded Message" )

//convert letter to index number function
//let letterIndex = [alphabet array number]
//let cipherKey = userKey + cipherShift
//if messageLetterArray position is 1, then cipherShift = 0, else cipherShift = userShift
// 
//newLetterIndex = letterIndex + cipherKey 
// 
// return newLetterindex converted to letter
