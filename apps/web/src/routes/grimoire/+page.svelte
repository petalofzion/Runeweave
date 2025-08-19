<script lang="ts">
  import { db } from '@runeweave/data/src/db';
  import { onMount } from 'svelte';
  import type { Folio } from '@runeweave/core/src/types';

  let folios: Folio[] = [];
  onMount(async () => {
    folios = await db.folios.toArray();
  });
</script>

<h1 class="text-xl font-bold mb-2">Grimoire</h1>
<ul class="space-y-2">
  {#each folios as f}
    <li class="border p-2">
      <p class="text-sm">{f.input}</p>
      <p class="font-mono">{f.output}</p>
    </li>
  {/each}
</ul>
