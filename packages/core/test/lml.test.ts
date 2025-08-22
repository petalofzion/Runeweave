import { describe, it, expect } from "vitest";
import { compile, recompileIfStale } from "../src/lml";

describe("compile(LML)", () => {
  it("handles empty", () => {
    expect(compile({})).toBe("");
  });
  it("handles minimal invocation", () => {
    expect(compile({ invocation: "Hi" })).toBe("Invocation: Hi");
  });
  it("compiles key sections deterministically", () => {
    const out = compile({
      invocation: "Teach with reverent clarity.",
      persona: { name: "Archivist", traits: ["gentle", "incisive"] },
      canon: { style: ["active-voice"], constraints: ["Cite sources."] },
      material: { context: "Logic 101", exemplars: ["A", "B"] },
      rubrics: { goals: ["accuracy"], tests: ["self_checklist"] },
    });
    expect(out).toMatchInlineSnapshot(`
"Invocation: Teach with reverent clarity.\nPersona: Archivist [gentle, incisive]\nStyle: active-voice\nConstraints: Cite sources.\nContext: Logic 101\nExemplars: A || B\nGoals: accuracy\nTests: self_checklist"
`);
  });
});

describe("recompileIfStale", () => {
  const base = { invocation: "Hello" };
  it("reuses matching cache", () => {
    const compiled = compile(base);
    expect(recompileIfStale(base, compiled)).toBe(compiled);
  });
  it("regenerates when cache is missing", () => {
    const fresh = compile(base);
    expect(recompileIfStale(base)).toBe(fresh);
  });
  it("regenerates when cache is stale", () => {
    const stale = compile({ invocation: "Old" });
    const fresh = compile(base);
    expect(recompileIfStale(base, stale)).toBe(fresh);
  });
});
