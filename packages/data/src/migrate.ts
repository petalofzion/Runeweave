import { db } from './db';
import { recompileIfStale } from '../../core/src/lml';
import { fileURLToPath } from 'node:url';

/**
 * Recompile any stale weave caches. Safe to run multiple times.
 */
export async function refreshCompiledWeaves(): Promise<void> {
  const weaves = await db.weaves.toArray();
  await Promise.all(
    weaves.map(async (w) => {
      const compiled = recompileIfStale(w.lml, w.compiled);
      if (compiled !== w.compiled) {
        await db.weaves.update(w.id, { compiled });
      }
    })
  );
}

// If executed directly via `node migrate.ts`, run the migration and exit.
if (process.argv[1] === fileURLToPath(import.meta.url)) {
  refreshCompiledWeaves().finally(() => db.close());
}
