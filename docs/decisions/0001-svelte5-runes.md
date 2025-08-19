---
id: 0001
title: "Svelte 5 Runes for Local State and Effects"
status: accepted
---

# ADR-0001: Svelte 5 Runes for Local State and Effects

- Context: Local-first app with ritual UX and lightweight reactivity.
- Decision: SvelteKit is the framework; Svelte 5 runes are mandatory for all local state and effects. Tailwind and Vitest round out the stack.
- Status: Accepted (Rite I).
- Consequences: Fast DX, minimal runtime, SSR-ready if needed, straightforward component tests.
