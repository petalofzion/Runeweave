<script lang="ts">
  import { nextVeilState, type VeilState } from '@runeweave/core/src/veil';

  let state = $state<VeilState>('covered');
  let calmTimer: ReturnType<typeof setTimeout> | null = null;

  const openNow = () => { state = nextVeilState(state, 'skip'); };
  const onKey = (e: KeyboardEvent) => {
    if (e.key === 'Escape') openNow();
  };

  $effect.root(() => {
    state = nextVeilState(state, 'mount');
    let activity = false;
    const mark = () => (activity = true);
    window.addEventListener('mousemove', mark, { once: true });
    window.addEventListener('keydown', mark, { once: true });
    calmTimer = setTimeout(() => {
      if (!activity) state = nextVeilState(state, 'calm');
    }, 2000);
    return () => calmTimer && clearTimeout(calmTimer);
  });
</script>

{#if state !== 'open'}
  <div
    class="fixed inset-0 grid place-items-center bg-black/80 text-white"
    onkeydown={onKey}
    role="dialog"
    tabindex="0"
    aria-label="Veil of Unknowing"
  >
    <div class="text-center p-6">
      <p class="mb-4 opacity-90">Name your intent, pilgrim.</p>
      <button class="px-4 py-2 border rounded" onclick={openNow} aria-label="Skip veil">Enter</button>
    </div>
  </div>
{/if}
