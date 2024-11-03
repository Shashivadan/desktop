import { describe, expect, it, test } from "@jest/globals";
import { sum } from "../index";

describe("sum funtion", () => {
  it("adds 1+2 equal to 3", () => {
    expect(sum(1, 2)).toBe(3);
  });

  it("adds 0+1", () => {
    expect(sum(0, 1)).toBe(1);
  });
});
