import Dexie, { Table } from "dexie";
import type { Weave, Folio, ModelProfile } from "@runeweave/core/src/types";

export class RuneDB extends Dexie {
  // typed tables
  weaves!: Table<Weave, string>;
  folios!: Table<Folio, string>;
  models!: Table<ModelProfile, string>;
  constructor() {
    super("runeweave");
    this.version(1).stores({
      weaves: "id, createdAt, enshrined, title",
      folios: "id, weaveId, createdAt, model",
      models: "id, lastSeenAt",
    });
  }
}

export const db = new RuneDB();
