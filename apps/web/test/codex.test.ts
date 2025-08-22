import { describe, it, expect } from "vitest";
import { codex } from "../src/lib/codex";
import { get } from "svelte/store";

describe("codex store", () => {
  it("starts empty", () => {
    expect(get(codex)).toStrictEqual([]);
  });
});
