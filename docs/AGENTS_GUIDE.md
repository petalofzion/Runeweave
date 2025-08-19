# Agents Guide (Runeweave)

## Invariants

- Monorepo with pnpm workspaces. Node 20 only (`.nvmrc`).
- Tests and docs are required for every change. CI must be green.
- Lexicon is canonical: Veil, Scriptorium, Grimoire, Reliquary, Bestiary, Crucible, Weave, Relic, Folio.
- LML is the canonical prompt representation; compiled prompt is a cache.

## Repo Structure

```
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
```

## Commit & PR

- Use Conventional Commits: feat|fix|docs|chore|refactor(scope): summary
- One intent per PR. Include:
  - Summary
  - Affected packages
  - Test plan (commands + results)
  - Checklist (CI green, docs updated)
- If direction is unclear, open an ADR draft in `docs/decisions`.

## Acceptance Test Pattern

- Unit: Vitest (deterministic output or snapshots).
- Component: @testing-library/svelte (no flakiness).
- Do not add external network calls in Rite I.

## Task Template (copy)

**Goal:**
**Files:**
**Implementation notes:**
**Tests:**
**Docs:**
**Acceptance:** (commands & expected outputs)
