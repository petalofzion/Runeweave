<script lang="ts">
  import { db } from '@runeweave/data/src/db';
  import { countFoliosByModel } from '$lib/bestiary';

  type ModelCount = { model: string; casts: number };
  let models = $state<ModelCount[]>([]);
  $effect(() => {
    void db.folios.toArray().then(folios => {
      const counts = countFoliosByModel(folios);
      models = Object.entries(counts).map(([model, casts]) => ({
        model,
        casts,
      }));
    });
  });
</script>

<h1 class="text-xl font-bold mb-2">Bestiary</h1>
{#each models as { model, casts }}
  <p>{model} — casts: {casts}</p>
{/each}
