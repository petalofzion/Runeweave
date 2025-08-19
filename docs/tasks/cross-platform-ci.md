**Goal:** Implement full CI runs on macOS and Windows.

**Files:**

- `.github/workflows/ci.yml`

**Implementation notes:**

- mirror Linux steps for macOS and Windows
- ensure tooling (Node, pnpm, pre-commit) works cross-platform
- add build steps for desktop wrapper when implemented

**Tests:**

- `pnpm -w lint`
- `pnpm -w test`

**Docs:**

- update `README.md` with platform support

**Acceptance:**

- CI jobs pass on macOS and Windows
