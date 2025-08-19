<script lang="ts">
  import { db } from '@runeweave/data/src/db';
  import type { Weave } from '@runeweave/core/src/types';

  let weaves = $state<Weave[]>([]);
  $effect(() => {
    void db.weaves.filter(w => w.enshrined).toArray().then(w => (weaves = w));
  });
</script>

<h1 class="text-xl font-bold mb-2">Reliquary</h1>
<ul class="space-y-2">
  {#each weaves as w}
    <li class="border p-2">{w.title}</li>
  {/each}
</ul>
