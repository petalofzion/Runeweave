<script lang="ts">
  import { db } from '@runeweave/data/src/db';
  import { onMount } from 'svelte';

  let casts = 0;
  onMount(async () => {
    casts = await db.folios.count();
  });
</script>

<h1 class="text-xl font-bold mb-2">Bestiary</h1>
<p>Mock Model — casts: {casts}</p>
