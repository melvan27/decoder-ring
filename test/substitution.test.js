const { expect } = require("chai");
const { substitution } = require("../src/substitution");

describe("substitution()", () => {
  it("should return false if alphabet is not exactly 26 characters", () => {
    const expected = false
    const actual = substitution("thinkful", "short");
    expect(actual).to.equal(expected);
  });

  it("should return false if alphabet is not 26 unique characters", () => {
    const expected = false
    const actual = substitution("thinkful", "abcabcabcabcabcabcabcabcyz");
    expect(actual).to.equal(expected);
  });

  it("should maintain spaces", () => {
    const expected = "spaces are important to a sentence"
    const actual = substitution("uyqzsu qns ctybnjqgj jb q usgjsgzs", "qazwsxedcrfvtgbyhnujmikolp", false);
    expect(actual).to.equal(expected);
  });

  it("should ignore capital letters", () => {
    const actual = substitution("you are an excellent spy", "xoyqmcgrukswaflnthdjpzibev");
    const actual2 = substitution("You Are An Excellent Spy", "xoyqmcgrukswaflnthdjpzibev");
    expect(actual).to.equal(actual2);
  });
});
