<script lang="ts">
  import { onMount } from 'svelte';
  import { nextVeilState, type VeilState } from '@runeweave/core/src/veil';

  let state: VeilState = 'covered';
  let calmTimer: any;

  function openNow() { state = nextVeilState(state, 'skip'); }
  function onFadeDone() { state = nextVeilState(state, 'fade_done'); }

  onMount(() => {
    state = nextVeilState(state, 'mount');
    // Calm = 2000ms without key/mouse
    let activity = false;
    const mark = () => (activity = true);
    window.addEventListener('mousemove', mark, { once: true });
    window.addEventListener('keydown', mark, { once: true });
    calmTimer = setTimeout(() => {
      if (!activity) state = nextVeilState(state, 'calm');
    }, 2000);
    return () => clearTimeout(calmTimer);
  });

  const onKey = (e: KeyboardEvent) => {
    if (e.key === 'Escape') openNow();
  };
</script>

{#if state !== 'open'}
  <div class="fixed inset-0 grid place-items-center bg-black/80 text-white" on:keydown={onKey} tabindex="0" aria-label="Veil of Unknowing">
    <div class="animate-fade text-center p-6">
      <p class="mb-4 opacity-90">Name your intent, pilgrim.</p>
      <button class="px-4 py-2 border rounded" on:click={openNow} aria-label="Skip veil">Enter</button>
    </div>
    {#if state === 'fading'}
      <div on:introend={onFadeDone}></div>
    {/if}
  </div>
{/if}
