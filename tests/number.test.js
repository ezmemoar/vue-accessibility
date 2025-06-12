import { describe, expect, it, test, vi } from "vitest";
import { getModuloCount } from "../src/utils/number";

const getNum = (n) => n + 3;
const fun = vi.fn(getNum).mockName("getNum");

// test.each([
//   { num: 10, moduler: 4, expected: 2 },
//   { num: 9000, moduler: 5, expected: 1800 },
// ])("$num moduled by $moduler is $expected", ({ num, moduler, expected }) => {
//   expect.soft(getModuloCount(num, moduler)).toBe(expected);
// });

it("test", () => {
  expect(fun.getMockName()).toEqual("getNum");
})

it("should return 0", () => {
  expect(fun(1)).toBe(4);
  expect(fun.mock.calls[0][0]).toEqual(1);
});

expect(5).toBe(5);
