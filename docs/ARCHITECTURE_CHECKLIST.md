# Rite I Architecture Checklist

This document is the authoritative reference for the current architecture. Every pull request must check the items below and update the checklist when the architecture changes.

## Repo Layout

- `apps/web` – SvelteKit + Tailwind web app
- `apps/desktop` – Tauri wrapper stub
- `packages/` – core TypeScript libraries
- `docs/` – agent guides and ADRs

## Tasks

- [ ] **R1-00**: Monorepo managed by pnpm; Node 20 enforced with `.nvmrc`.
- [ ] **R1-01**: Pre-commit runs formatting and basic hygiene checks.
- [ ] **R1-02**: CI executes `pnpm -w lint`, `pnpm -w test`, and build steps.
- [ ] **R1-03**: `apps/web` delivers the ritual UX via SvelteKit + Svelte 5 runes (see [ADR-0001](decisions/0001-svelte5-runes.md)).
- [ ] **R1-04**: `apps/desktop` wraps the web app in a Tauri shell.
- [ ] **R1-05**: `packages/core` provides types, LML compiler, and state machines.
- [ ] **R1-06**: `packages/adapters` defines `ModelAdapter` and a deterministic `MockAdapter`.
- [ ] **R1-07**: `packages/data` supplies Dexie schema and helpers for IndexedDB.
- [ ] **R1-08**: `packages/ui` hosts reusable Svelte components.
- [ ] **R1-09**: Core modules exist — Veil of Unknowing, Scriptorium, Grimoire, Reliquary, Bestiary, Crucible.
- [ ] **R1-10**: LML is canonical; compiled prompts are cached and regenerable.
- [ ] **R1-11**: Runtime is local-only with deterministic model calls; no external network requests.
- [ ] **R1-12**: Tests use Vitest and `@testing-library/svelte` with deterministic outputs.
