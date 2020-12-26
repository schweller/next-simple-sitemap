import { hello } from "../src";

test("should hello world", () => {
  expect(hello()).toEqual("hello world");
});
