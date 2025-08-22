import { describe, it, expect } from "vitest";
import { listVoices } from "../src/lib/choir";

describe("listVoices", () => {
  it("returns no voices by default", () => {
    expect(listVoices()).toStrictEqual([]);
  });
});
