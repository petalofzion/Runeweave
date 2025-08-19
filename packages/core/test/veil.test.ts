import { describe, it, expect } from "vitest";
import { nextVeilState } from "../src/veil";

describe("Veil machine", () => {
  it("flows covered -> awaiting -> fading -> open", () => {
    let s: any = "covered";
    s = nextVeilState(s, "mount");
    s = nextVeilState(s, "calm");
    s = nextVeilState(s, "fade_done");
    expect(s).toBe("open");
  });
  it("skip opens immediately", () => {
    expect(nextVeilState("covered", "skip")).toBe("open");
  });
});
