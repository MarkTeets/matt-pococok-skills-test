import { test } from "node:test";
import assert from "node:assert/strict";
import { square } from "./index.js";

test("squares a positive integer", () => {
  assert.equal(square(3), 9);
});

test("squares a negative integer to a positive result", () => {
  assert.equal(square(-4), 16);
});

test("squares zero to zero", () => {
  assert.equal(square(0), 0);
});
