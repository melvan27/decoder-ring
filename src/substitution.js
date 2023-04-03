const substitutionModule = (function () {
  function substitution(input, alphabet, encode = true) {
    // check if the alphabet has exactly 26 characters and all characters are unique
    if (!alphabet || alphabet.length !== 26 || new Set(alphabet).size !== 26) {
      return false;
    }
  
    const standardAlphabet = "abcdefghijklmnopqrstuvwxyz";
  
    // convert the input to lowercase and split it into an array of characters
    const inputCharacters = input.toLowerCase().split("");
  
    // create a map of the standard alphabet to the substitution alphabet
    const characterMap = {};
    for (let i = 0; i < standardAlphabet.length; i++) {
      characterMap[standardAlphabet[i]] = alphabet[i];
    }
  
    // apply the substitution alphabet to each input character
    const outputChars = inputCharacters.map(character => {
      if (character === " ") {
        // return space character as is
        return " ";
      } else if (encode) {
        // encode the character using the substitution alphabet
        return characterMap[character] || character;
      } else {
        // decode the character using the standard alphabet
        return Object.keys(characterMap).find(key => characterMap[key] === character) || character;
      }
    });
  
    // join the output characters into a string
    const output = outputChars.join("");
  
    return output;
  }
  

  return {
    substitution,
  };
})();

module.exports = { substitution: substitutionModule.substitution };
