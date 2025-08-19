<script lang="ts">
  import { compile } from '@runeweave/core/src/lml';
  import { MockAdapter } from '@runeweave/adapters/src/model';
  import { db } from '@runeweave/data/src/db';

  let lmlText = '{\n  "invocation": ""\n}';
  let compiled = '';
  let output = '';
  const adapter = new MockAdapter();

  async function cast() {
    const lml = JSON.parse(lmlText || '{}');
    compiled = compile(lml);
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
</script>

<textarea bind:value={lmlText} class="w-full h-40 border" aria-label="LML input"></textarea>
<button class="mt-2 px-4 py-2 border" on:click={cast}>Cast</button>
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
