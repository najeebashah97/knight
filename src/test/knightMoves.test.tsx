import isValidMove from "../KnightMoves";
import getKnightMoves from "../KnightMoves";

describe("isValidMove", () => {
  test("it should return true for valid coordinates", () => {
    expect(isValidMove(0, 0)).toBe(true);
    expect(isValidMove(7, 7)).toBe(true);
  });

  test("it should return false for invalid coordinates", () => {
    expect(isValidMove(-1, 0)).toBe(false);
    expect(isValidMove(8, 7)).toBe(false);
  });
});

describe("getKnightMoves", () => {
  test("it should return an array of possible moves for the given coordinates", () => {
    expect(getKnightMoves(0, 0)).toEqual(["b2", "c1"]);
    expect(getKnightMoves(1, 1)).toEqual([
      "a3",
      "c3",
      "d2",
      "d0",
      "c1",
      "a1",
      "b0",
    ]);
  });
});
