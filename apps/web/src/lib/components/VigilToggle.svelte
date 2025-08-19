<script lang="ts">
  let vigil = $state(false);

  $effect.root(() => {
    vigil = localStorage.getItem('vigil') === 'true';
    document.documentElement.dataset.theme = vigil ? 'vigil' : '';
  });

  const toggle = () => {
    vigil = !vigil;
    document.documentElement.dataset.theme = vigil ? 'vigil' : '';
    localStorage.setItem('vigil', vigil ? 'true' : 'false');
  };
</script>

<button
  class="fixed top-2 right-2 px-2 py-1 border rounded"
  onclick={toggle}
  aria-pressed={vigil}
  aria-label={vigil ? 'Disable Vigil Mode' : 'Enable Vigil Mode'}
  title="Toggle Vigil Mode — High Contrast"
>
  Vigil
</button>
