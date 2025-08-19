<script lang="ts">
  import { fuse } from '@runeweave/core/src/fusion';
  import { compile } from '@runeweave/core/src/lml';

  const lenses = ['Rhetoric', 'Persona', 'Structure', 'Tone', 'Imagery'];
  let a = $state(lenses[0]);
  let b = $state(lenses[1]);
  const fusion = $derived(() => fuse(a, b));
  const descriptor = $derived(() => fusion.descriptor);
  const preview = $derived(() => compile(fusion.lml));
</script>

<h1 class="text-xl font-bold mb-2">Crucible</h1>
<div class="space-x-2">
  <select bind:value={a} class="border p-1">
    {#each lenses as l}<option>{l}</option>{/each}
  </select>
  <select bind:value={b} class="border p-1">
    {#each lenses as l}<option>{l}</option>{/each}
  </select>
</div>
<p class="mt-2">{descriptor}</p>
<pre class="mt-2">{preview}</pre>
