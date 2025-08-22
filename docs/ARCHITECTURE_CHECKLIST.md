# Rite I Architecture Checklist

This document is the authoritative reference for the current architecture. Every pull request must check the items below and update the checklist when the architecture changes.

## Invariants

- Local-first.
- No telemetry.
- WCAG AA+ with Vigil Mode (≥7:1 contrast, honors `prefers-reduced-motion`, keyboard navigable).
- Local component state and effects must use Svelte 5 runes (`$state`, `$derived`, `$effect`); legacy lifecycles like `onMount` are forbidden. Svelte stores only cross-route.

## Repo Layout

- `apps/web` – SvelteKit + Tailwind web app
- `apps/desktop` – Tauri wrapper stub
- `packages/` – core TypeScript libraries
- `docs/` – agent guides and ADRs

## Tasks

| ID                                              | Title                                                                                                                 | Depends On | Status | Owner | PR  | Commit |
| ----------------------------------------------- | --------------------------------------------------------------------------------------------------------------------- | ---------- | ------ | ----- | --- | ------ |
| <!-- TASK:{ "id":"R1-00", "deps":[] } --> R1-00 | Monorepo managed by pnpm; Node 20 enforced with `.nvmrc`.                                                             | —          | DONE   | —     | —   | —      |
| <!-- TASK:{ "id":"R1-01", "deps":[] } --> R1-01 | Pre-commit runs formatting and basic hygiene checks.                                                                  | —          | DONE   | —     | —   | —      |
| <!-- TASK:{ "id":"R1-02", "deps":[] } --> R1-02 | CI executes `pnpm -w lint`, `pnpm -w test`, and build steps.                                                          | —          | DONE   | —     | —   | —      |
| <!-- TASK:{ "id":"R1-03", "deps":[] } --> R1-03 | `apps/web` delivers the ritual UX via SvelteKit + Svelte 5 runes (see [ADR-0001](decisions/0001-svelte5-runes.md)).   | —          | DONE   | —     | —   | —      |
| <!-- TASK:{ "id":"R1-04", "deps":[] } --> R1-04 | `apps/desktop` wraps the web app in a Tauri shell.                                                                    | —          | TODO   | —     | —   | —      |
| <!-- TASK:{ "id":"R1-05", "deps":[] } --> R1-05 | `packages/core` provides types, LML compiler, and state machines.                                                     | —          | DONE   | —     | —   | —      |
| <!-- TASK:{ "id":"R1-06", "deps":[] } --> R1-06 | `packages/adapters` defines `ModelAdapter` and a deterministic `MockAdapter`.                                         | —          | DONE   | —     | —   | —      |
| <!-- TASK:{ "id":"R1-07", "deps":[] } --> R1-07 | `packages/data` supplies Dexie schema and helpers for IndexedDB.                                                      | —          | DONE   | —     | —   | —      |
| <!-- TASK:{ "id":"R1-08", "deps":[] } --> R1-08 | `packages/ui` hosts reusable Svelte components.                                                                       | —          | DONE   | —     | —   | —      |
| <!-- TASK:{ "id":"R1-09", "deps":[] } --> R1-09 | Core modules exist — Veil of Unknowing, Scriptorium, Grimoire, Reliquary, Bestiary, Crucible, Choir, Codex of Errors. | —          | DONE   | —     | —   | —      |
| <!-- TASK:{ "id":"R1-10", "deps":[] } --> R1-10 | LML is canonical; compiled prompts are cached and regenerable.                                                        | —          | TODO   | —     | —   | —      |
| <!-- TASK:{ "id":"R1-11", "deps":[] } --> R1-11 | Runtime is local-only with deterministic model calls; no external network requests.                                   | —          | DONE   | —     | —   | —      |
| <!-- TASK:{ "id":"R1-12", "deps":[] } --> R1-12 | Tests use Vitest and `@testing-library/svelte` with deterministic outputs.                                            | —          | TODO   | —     | —   | —      |

## Next Task

The next task is the first numerically ordered TODO whose dependencies are all marked DONE.

```pseudo
for task in tasks.sort_by_id():
    if task.status == "TODO" and all(dep.status == "DONE" for dep in task.deps):
        return task.id
return None
```
