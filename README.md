# Runeweave — Rite I Scaffold

Runeweave is a local-first, browser-native toolkit for composing AI interactions. Rite I delivers a minimal ritual UX with a SvelteKit web app and a set of reusable TypeScript packages.

## Overview

Runeweave treats prompt design as weaving. A weave is defined in **LML** (a structured prompt language) and persisted locally so it can be revisited, remixed and enshrined. The current modules include:

- **Veil of Unknowing** – a focus gate that can be skipped or opens after calm.
- **Scriptorium** – LML editor with compiled preview.
- **Grimoire** – auto-logged folios of model casts.
- **Reliquary** – list of enshrined weaves.
- **Bestiary** – mock model profiles and stats.
- **Crucible** – lens fusion stub.

Everything runs locally. The web app can be wrapped for desktop via a Tauri shell in `apps/desktop`. Persistence uses IndexedDB via Dexie and model calls use a deterministic MockAdapter. No telemetry or external network calls are made in Rite I.

## Monorepo Structure

```
/ (root)
├── apps/
│   ├── desktop/            # Tauri wrapper
│   └── web/                # SvelteKit + Tailwind web app
├── packages/
│   ├── core/               # types, LML compiler, state machines
│   ├── adapters/           # ModelAdapter interface + MockAdapter
│   ├── data/               # Dexie schema and helpers
│   └── ui/                 # shared Svelte components
├── docs/
│   ├── AGENTS_GUIDE.md     # workflow rules for agents
│   └── decisions/          # architecture decision records
├── .github/workflows/ci.yml
├── package.json            # root scripts
└── pnpm-workspace.yaml
```

## Getting Started

Prerequisites: [Node.js 20](https://nodejs.org/) and [pnpm](https://pnpm.io) 9.

```bash
nvm use             # ensure Node 20
pnpm -w install     # install all workspace deps
pnpm -w dev         # run apps/web in dev mode
pnpm -w test        # run package tests
pnpm -w build       # build the web app
```

Each package can be developed independently with `pnpm -F <package> <script>`.

## Packages

| Package               | Purpose                                                |
| --------------------- | ------------------------------------------------------ |
| `@runeweave/core`     | Type definitions, LML compiler, ritual state machines. |
| `@runeweave/adapters` | ModelAdapter interface with deterministic MockAdapter. |
| `@runeweave/data`     | Dexie wrapper for weaves, folios and model profiles.   |
| `@runeweave/ui`       | Shared Svelte components (stub for future use).        |

## Development Workflow

- **Tests**: [Vitest](https://vitest.dev/) and [`@testing-library/svelte`](https://testing-library.com/docs/svelte-testing-library/intro/).
- **Formatting/Linting**: [pre-commit](https://pre-commit.com/) runs Prettier and whitespace checks.
- **CI**: GitHub Actions (Node 20) runs lint, tests and builds. Placeholder jobs for macOS and Windows exist for future platform coverage.
- **Commit style**: Conventional Commits `feat|fix|docs|chore|refactor(scope): summary`.

See [docs/AGENTS_GUIDE.md](docs/AGENTS_GUIDE.md) for the full agent workflow and [docs/decisions](docs/decisions) for ADRs.

## License

Released under the [MIT License](LICENSE).
