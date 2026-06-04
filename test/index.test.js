import test from "node:test";
import assert from "node:assert/strict";
import { PromptArena } from "../src/index.js";
test("scores candidate", () => {
  const arena = new PromptArena([{ id: "a", input: "x", mustContain: ["hello"] }]);
  assert.equal(arena.run(() => "hello world").score, 100);
});
