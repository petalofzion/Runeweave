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

* `apps/web`: SvelteKit app (TS + Tailwind)
* `packages/core`: types, LML compiler, ritual state machines
* `packages/adapters`: ModelAdapter interface + MockAdapter
* `packages/data`: Dexie (IndexedDB) persistence

See `docs/AGENTS_GUIDE.md` for agent workflow and `docs/decisions/*` for ADRs.
