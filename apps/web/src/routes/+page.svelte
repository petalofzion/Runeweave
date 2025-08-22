<script lang="ts">
  import Veil from '$lib/components/Veil.svelte';
  import { Button } from '@runeweave/ui';
</script>

<Veil />
<main class="p-8 space-y-4">
  <nav class="flex flex-col gap-2">
    <a href="/scribe" class="underline" title="Scribe — Editor">Scribe</a>
    <a href="/grimoire" class="underline" title="Grimoire — Log">Grimoire</a>
    <a href="/reliquary" class="underline" title="Reliquary — Favorites">Reliquary</a>
    <a href="/bestiary" class="underline" title="Bestiary — Models">Bestiary</a>
    <a href="/crucible" class="underline" title="Crucible — Fusion">Crucible</a>
    <a href="/choir" class="underline" title="Choir — Voices">Choir</a>
    <a href="/codex" class="underline" title="Codex — Errors">Codex</a>
  </nav>
  <Button label="Demo" />
</main>
