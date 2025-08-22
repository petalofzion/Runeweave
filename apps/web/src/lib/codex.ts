import { writable } from "svelte/store";

export const codex = writable<string[]>([]);
