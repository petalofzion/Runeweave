<script lang="ts">
  import { db } from '@runeweave/data/src/db';
  import { onMount } from 'svelte';
  import type { Weave } from '@runeweave/core/src/types';

  let weaves: Weave[] = [];
  onMount(async () => {
    weaves = await db.weaves.filter(w => w.enshrined).toArray();
  });
</script>

<h1 class="text-xl font-bold mb-2">Reliquary</h1>
<ul class="space-y-2">
  {#each weaves as w}
    <li class="border p-2">{w.title}</li>
  {/each}
</ul>
