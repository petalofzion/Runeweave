# ADR-0002: LML is Canonical; Compiled Prompt is Cache

- LML (YAML/JSON structure) is the single source of truth for a weave.
- Compiled prompt text is derived and can be regenerated.
- Storage stores both for convenience; logic must treat compiled as ephemeral.
  - `recompileIfStale(lml, compiled)` regenerates prompts when the cache is missing or outdated.
  - The Dexie layer refreshes cached prompts on read and a migration script is available to backfill existing records (`pnpm -F @runeweave/data refresh-weaves`).
