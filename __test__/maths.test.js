import { sum, mult, subtract, div } from "../maths";

describe("Maths tests", () => {
  test("Sum test", () => {
    expect(sum(1, 1)).toBe(2);
  });

  test("Mult test", () => {
    expect(mult(3, 4)).toBe(12);
  });

  test("Subtract test", () => {
    expect(subtract(10, 4)).toBe(6);
  });

  test("Div test", () => {
    expect(div(15, 3)).toBe(5);
  });
});
