import Dexie, { Table } from "dexie";
import type { Weave, Folio, ModelProfile } from "../../core/src/types";
import { recompileIfStale } from "../../core/src/lml";

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

    this.weaves.hook("reading", (obj) => {
      const compiled = recompileIfStale(obj.lml, obj.compiled);
      if (compiled !== obj.compiled) {
        void this.weaves.update(obj.id, { compiled });
        obj.compiled = compiled;
      }
      return obj;
    });
  }
}

export const db = new RuneDB();
