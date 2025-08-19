import "fake-indexeddb/auto";
import { describe, it, expect } from "vitest";
import { db } from "../src/db";

describe("Dexie schema", () => {
  it("opens database", async () => {
    await db.open();
    expect(db.name).toBe("runeweave");
    await db.close();
  });
});
