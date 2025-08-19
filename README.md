# Runeweave — Rite I Scaffold

Local‑first ritual UX for AI composition. MVP includes Veil, Scriptorium (LML), Grimoire, Reliquary, Bestiary (mock), Crucible stub.

## Quickstart

```bash
# require Node 20 + pnpm
nvm use
pnpm -w install
pnpm -w dev    # runs apps/web
pnpm -w test   # runs package tests
```

## Structure

```
runeweave/
  apps/
    web/       # SvelteKit app (browser)
    desktop/   # Tauri wrapper (stub)
  packages/
    core/      # types, LML, state machines, utilities
    adapters/  # ModelAdapter implementations
    data/      # Dexie schema/wrappers
    ui/        # reusable Svelte components
  docs/
    AGENTS_GUIDE.md
    decisions/
  .github/workflows/ci.yml
  .editorconfig
  pnpm-workspace.yaml
  .nvmrc
  package.json
```

See `docs/AGENTS_GUIDE.md` for agent workflow and `docs/decisions/*` for ADRs.

## No Cloud, No Tracking

Runeweave stores all data locally (IndexedDB now, SQLite in desktop builds). There is no telemetry, analytics, or remote storage.
