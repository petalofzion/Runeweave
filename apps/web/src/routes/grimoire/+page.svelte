<script lang="ts">
  import { db } from '@runeweave/data/src/db';
  import type { Folio } from '@runeweave/core/src/types';

  let folios = $state<Folio[]>([]);
  $effect(() => {
    void db.folios.toArray().then(f => (folios = f));
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
