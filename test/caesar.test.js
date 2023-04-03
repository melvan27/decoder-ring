const { expect } = require("chai");
const { caesar } = require("../src/caesar");

describe("caesar()", () => {
  it("should return false if the shift value is equal to 0", () => {
    const expected = false;
    const actual = caesar("test", 0);
    expect(actual).to.equal(expected);
  });

  it("should return false if the shift value is less than -25", () => {
    const expected = false;
    const actual = caesar("test", -26);
    expect(actual).to.equal(expected);
  });

  it("should return false if the shift value is greater than 25", () => {
    const expected = false;
    const actual = caesar("test", 30);
    expect(actual).to.equal(expected);
  });

  it("should return false if the shift value is not present", () => {
    const expected = false;
    const actual = caesar("test");
    expect(actual).to.equal(expected);
  });

  it("should maintain spaces and other nonalphabetic symbols", () => {
    const expected = "bpqa qa i amkzmb umaaiom!";
    const actual = caesar("This is a secret message!", 8);
    expect(actual).to.equal(expected);
  });

  it("should ignore capital letters", () => {
    const actual = caesar("bpqa qa i amkzmb umaaiom!", 8, false);
    const actual2 = caesar("BPQA QA I amkzmb umaaiom!", 8, false);
    expect(actual).to.equal(actual2);
  });

  it("should wrap around to the front of the alphabet", () => {
    const expected = "cheud pdjdclqh";
    const actual = caesar("Zebra Magazine", 3);
    expect(actual).to.equal(expected);
  });
});
