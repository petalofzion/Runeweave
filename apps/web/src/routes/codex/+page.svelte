<script lang="ts">
  import { codex } from '$lib/codex';
  const entries = $derived(codex);
</script>

<h1 class="text-xl font-bold mb-2">Codex of Errors</h1>
{#if entries.length === 0}
  <p>No errors recorded.</p>
{/if}
