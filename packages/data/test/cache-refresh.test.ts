import "fake-indexeddb/auto";
import { describe, it, expect } from "vitest";
import { db } from "../src/db";
import { compile } from "../../core/src/lml";

describe("cache refresh", () => {
  it("recompiles stale prompts on read", async () => {
    const lml = { invocation: "hi" };
    const stale = "old";
    await db.weaves.add({
      id: "w1",
      title: "t",
      lml,
      compiled: stale,
      enshrined: false,
      createdAt: 0,
    });
    const expected = compile(lml);
    const weave = await db.weaves.get("w1");
    expect(weave?.compiled).toBe(expected);
    const stored = await db.weaves.get("w1");
    expect(stored?.compiled).toBe(expected);
    await db.close();
  });
});
