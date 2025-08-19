<script lang="ts">
  import { compile } from '@runeweave/core/src/lml';
  import { MockAdapter } from '@runeweave/adapters/src/model';
  import { db } from '@runeweave/data/src/db';

  let lmlText = $state('{\n  "invocation": ""\n}');
  let output = $state('');
  let enshrined = $state(false);
  const adapter = new MockAdapter();

  $effect(() => {
    void db.weaves.get('demo').then(w => (enshrined = w?.enshrined ?? false));
  });
  const compiled = $derived(() => {
    try {
      return compile(JSON.parse(lmlText || '{}'));
    } catch {
      return '';
    }
  });

  async function cast() {
    output = await adapter.invoke({ user: compiled });
    await db.folios.add({
      id: crypto.randomUUID(),
      weaveId: 'demo',
      model: 'mock',
      input: compiled,
      output,
      createdAt: Date.now()
    });
  }

  async function toggleEnshrine() {
    enshrined = !enshrined;
    await db.weaves.put({
      id: 'demo',
      title: 'Demo',
      lml: JSON.parse(lmlText || '{}'),
      compiled,
      enshrined,
      createdAt: Date.now()
    });
  }
</script>

<textarea bind:value={lmlText} class="w-full h-40 border" aria-label="LML input"></textarea>
<div class="mt-2 flex gap-2">
  <button class="px-4 py-2 border" onclick={cast}>Cast</button>
  <button class="px-4 py-2 border" onclick={toggleEnshrine}>
    {enshrined ? '✦ Enshrined' : '✧ Enshrine'}
  </button>
</div>
<div class="mt-4 space-y-2">
  <div>
    <h2 class="font-bold">Compiled</h2>
    <pre>{compiled}</pre>
  </div>
  <div>
    <h2 class="font-bold">Output</h2>
    <pre>{output}</pre>
  </div>
  <a href="/grimoire" class="underline text-blue-600">Go to Grimoire</a>
</div>
