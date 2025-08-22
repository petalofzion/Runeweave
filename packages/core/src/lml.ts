import type { LML } from "./types";

/** Deterministic LML -> prompt string compiler (minimal v1). */
export function compile(lml: LML): string {
  const lines: string[] = [];
  if (lml.invocation) lines.push(`Invocation: ${lml.invocation}`);
  if (lml.persona) {
    const traits = (lml.persona.traits ?? []).join(", ");
    lines.push(
      `Persona: ${lml.persona.name ?? ""}${
        traits ? ` [${traits}]` : ""
      }`.trim(),
    );
  }
  if (lml.canon) {
    if (lml.canon.style?.length)
      lines.push(`Style: ${lml.canon.style.join(", ")}`);
    if (lml.canon.constraints?.length)
      lines.push(`Constraints: ${lml.canon.constraints.join(" | ")}`);
  }
  if (lml.material) {
    if (lml.material.context) lines.push(`Context: ${lml.material.context}`);
    if (lml.material.exemplars?.length)
      lines.push(`Exemplars: ${lml.material.exemplars.join(" || ")}`);
  }
  if (lml.rubrics) {
    if (lml.rubrics.goals?.length)
      lines.push(`Goals: ${lml.rubrics.goals.join(", ")}`);
    if (lml.rubrics.tests?.length)
      lines.push(`Tests: ${lml.rubrics.tests.join(", ")}`);
  }
  return lines.join("\n");
}

/**
 * Return a compiled prompt, regenerating the cache when missing or stale.
 *
 * The caller may persist the returned string to keep the cache in sync with
 * the canonical LML source.
 */
export function recompileIfStale(lml: LML, compiled?: string): string {
  const fresh = compile(lml);
  return compiled === fresh ? compiled : fresh;
}
