const caesarModule = (function () {
  
  function caesar(input, shift, encode = true) {
    // if shift is not provided, is 0, or if it is outside the range of -25 to 25, return false
    if (!shift || shift === 0 || shift < -25 || shift > 25) return false;
    // convert input to lowercase and split alphabet into an array
    const formatInput = input.toLowerCase();
    const letters = "abcdefghijklmnopqrstuvwxyz".split("");
    // initialize an empty string for the result
    let result = "";
    // loop through each character of the input
    for (let i = 0; i < formatInput.length; i++) {
      // find the index of the current character in the alphabet array
      let index = letters.findIndex((letter) => letter === formatInput[i]);
      // if the character is not in the alphabet array, add it to the result and continue to the next character
      if (index === -1) {
        result += formatInput[i];
        continue;
      }
      // initialize a variable to hold the shifted index
      let shiftedIndex = index;
      // if encoding, add the shift value; if decoding, subtract the shift value
      if (encode) {
        shiftedIndex += shift;
      } else {
        shiftedIndex -= shift;
      }
      // if the shifted index is less than 0, wrap around to the end of the alphabet
      if (shiftedIndex < 0) {
        shiftedIndex = letters.length + shiftedIndex;
      } 
      // if the shifted index is greater than or equal to the length of the alphabet, wrap around to the beginning of the alphabet
      else if (shiftedIndex >= letters.length) {
        shiftedIndex = shiftedIndex - letters.length;
      }
      // add the shifted letter to the result
      result += letters[shiftedIndex];
    }
    // return the encoded or decoded result
    return result;
  }

  return {
    caesar,
  };
})();

module.exports = { caesar: caesarModule.caesar };
