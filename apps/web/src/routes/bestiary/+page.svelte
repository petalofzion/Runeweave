<script lang="ts">
  import { db } from '@runeweave/data/src/db';

  let casts = $state(0);
  $effect(() => {
    void db.folios.count().then(c => (casts = c));
  });
</script>

<h1 class="text-xl font-bold mb-2">Bestiary</h1>
<p>Mock Model — casts: {casts}</p>
