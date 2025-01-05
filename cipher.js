const enDeCrypt = () => {
  let userString = document.getElementById("userMessage").value;
  let enCrypt = document.getElementById("encrypt");
  let userKey = Number(document.getElementById("userKey").value);
  let userShift = Number(document.getElementById("userShift").value);
  let cipherKey = 0;
  let cipherShift = 0;
  // convert user input to trimmed lowercase-only string and array.
  let trimmedString = userString.trim().toLowerCase();
  let outputMessage = [];
  let flag = true;
  //validation - if user inputs number alert "numbers will not be encrypted"
  let re = /\d+/;
  if (re.test(document.getElementById("userMessage").value)) {
    alert("Numbers will not be encrypted. Please remove numbers");
    return;
  }

  if (enCrypt.checked) {
    flag = true;
    document.getElementById("encrypted").innerHTML = "Encrypted Message:";
  } else {
    flag = false;
    document.getElementById("encrypted").innerHTML = "Decrypted Message:";
  }

  //first iteration, cipher shift = 0. All other iterations add on user shift.
  for (let i = 0; i < trimmedString.length; i++) {
    cipherKey = userKey + cipherShift;
    outputMessage.push(codeLetter(trimmedString[i], cipherKey, flag));
    cipherShift = cipherShift + userShift;
  }
  // sets value of input box called 'output' to be output message. Joins array elements into a string with no seperators.
  document.getElementById("output").value = outputMessage.join("");
};

//convert index to letter number
const convertIndexToLetter = (index) => {
  let alphabet = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];
  let letter = alphabet[index];
  return letter;
};

//convert letter to index number
const convertLetterToIndex = (letter) => {
  let alphabet = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];
  index = alphabet.indexOf(letter);
  return index;
};

const calculateNewIndex = (letter, cipherKey, enCrypt) => {
  let index = Number(convertLetterToIndex(letter));

  if (enCrypt) {
    index = index + Number(cipherKey);
  } else {
    index = index - Number(cipherKey);
  }

  if (index > 25) {
    index = index - 26;
  } else if (index < 0) {
    index = index + 26;
  }
  return index;
};

const codeLetter = (letter, cipherKey, flag) => {
  //deal with non letter like space or number
  let letterRegEx = /[^a-z]/;
  if (letterRegEx.test(letter)) {
    return letter;
  } else {
    let newIndex = calculateNewIndex(letter, cipherKey, flag);
    let codedLetter = convertIndexToLetter(newIndex);
    return codedLetter;
  }
};
