import type { LML } from "./types";

/**
 * Deterministically combine two lens names.
 * This stub simply concatenates them and builds a minimal LML invocation.
 */
export function fuse(
  lensA: string,
  lensB: string,
): { descriptor: string; lml: LML } {
  return {
    descriptor: `${lensA} + ${lensB}`,
    lml: { invocation: `Combine ${lensA} with ${lensB}.` },
  };
}
