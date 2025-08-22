<script lang="ts">
  import { listVoices } from '$lib/choir';
  const voices = listVoices();
</script>

<h1 class="text-xl font-bold mb-2">Choir</h1>
{#if voices.length === 0}
  <p>Silence. No voices yet.</p>
{/if}
