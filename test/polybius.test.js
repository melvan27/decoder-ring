const { expect } = require("chai");
const { polybius } = require("../src/polybius");

describe("polybius()", () => {
  it("should return a string when encoding", () => {
    const actual = polybius("test");
    expect(actual).to.be.a("string");
  });

  it("should return false if decoding an odd number of numbers", () => {
    const expected = false
    const actual = polybius("12345", false);
    expect(actual).to.equal(expected);
  });

  it("should maintain spaces throughout", () => {
    const expected = "hello world"
    const actual = polybius("3251131343 2543241341", false);
    expect(actual).to.equal(expected);
  });

  it("should ignore capital letters", () => {
    const actual = polybius("hello world")
    const actual2 = polybius("Hello World");
    expect(actual).to.equal(actual2);
  });

  it("should use 42 for both i and j when encoding", () => {
    const expected = "4432423352125413"
    const actual = polybius("thinkful");
    expect(actual).to.equal(expected);
  });

  it("should use (i/j) for both i and j when decoding", () => {
    const expected = "th(i/j)nkful"
    const actual = polybius("4432423352125413", false);
    expect(actual).to.equal(expected);
  });
});