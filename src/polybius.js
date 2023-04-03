const polybiusModule = (function () {

  function polybius(input, encode = true) {
    // initalize polybius square in an object
    const table = {
      a: "11", b: "21", c: "31", d: "41", e: "51",
      f: "12", g: "22", h: "32", i: "42", j: "42", k: "52",
      l: "13", m: "23", n: "33", o: "43", p: "53",
      q: "14", r: "24", s: "34", t: "44", u: "54",
      v: "15", w: "25", x: "35", y: "45", z: "55"
    };
  
    // convert input to lower case and initialize empty variables for future use
    input = input.toLowerCase();
    let output = "";
    let currentPair = "";
    let currentChar = "";
  
    // check length of string to be decoded; return false if odd
    if (!encode && input.split(" ").join("").length % 2 !== 0) {
      return false;
    }
  
    // loop through each input character
    for (let i = 0; i < input.length; i++) {
      currentChar = input[i];
  
      // keep spaces the same
      if (encode) {
        if (!table[currentChar]) {
          output += currentChar;
          continue;
        }
        // get the number associated with the letter and add to output
        currentPair = table[currentChar];
        output += currentPair;
      } else if (!encode && currentChar !== " ") {
        currentPair += currentChar; // only get numbers while decoding
  
        if (currentPair === "42") { // (i/j) decode
          output += "(i/j)";
          currentPair = "";
        } else if (currentPair.length === 2) { // decoding for other pairs of numbers
          currentChar = Object.keys(table).find(key => table[key] === currentPair);
          output += currentChar || currentPair;
          currentPair = "";
        }
      } else {
        output += " "; // add spaces directly to output
      }
    }
  
    return output;
  }
  

  return {
    polybius,
  };
})();

module.exports = { polybius: polybiusModule.polybius };
