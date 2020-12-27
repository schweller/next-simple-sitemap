import { getNextConfig } from "../src";

test("should hello world", () => {
  const config = getNextConfig(__dirname);
  expect(config).toBe(undefined);
});
