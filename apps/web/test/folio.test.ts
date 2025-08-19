import "fake-indexeddb/auto";
import { describe, it, expect } from "vitest";
import { compile } from "@runeweave/core/src/lml";
import { MockAdapter } from "@runeweave/adapters/src/model";
import { db } from "@runeweave/data/src/db";

describe("Folio casting", () => {
  it("stores folio with expected shape", async () => {
    const compiled = compile({ invocation: "" });
    const adapter = new MockAdapter();
    const output = await adapter.invoke({ user: compiled });
    const id = crypto.randomUUID();
    const now = Date.now();
    await db.folios.add({
      id,
      weaveId: "demo",
      model: "mock",
      input: compiled,
      output,
      createdAt: now,
    });
    const stored = await db.folios.get(id);
    expect(stored).toStrictEqual({
      id,
      weaveId: "demo",
      model: "mock",
      input: compiled,
      output,
      createdAt: now,
    });
  });
});
