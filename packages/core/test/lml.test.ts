import { describe, it, expect } from 'vitest';
import { compile } from '../src/lml';

describe('compile(LML)', () => {
  it('handles empty', () => {
    expect(compile({})).toBe('');
  });
  it('compiles key sections deterministically', () => {
    const out = compile({
      invocation: 'Teach with reverent clarity.',
      persona: { name: 'Archivist', traits: ['gentle','incisive'] },
      canon: { style: ['active-voice'], constraints: ['Cite sources.'] },
      material: { context: 'Logic 101', exemplars: ['A','B'] },
      rubrics: { goals: ['accuracy'], tests: ['self_checklist'] }
    });
    expect(out).toMatchInlineSnapshot(`
"Invocation: Teach with reverent clarity.\nPersona: Archivist [gentle, incisive]\nStyle: active-voice\nConstraints: Cite sources.\nContext: Logic 101\nExemplars: A || B\nGoals: accuracy\nTests: self_checklist"
`);
  });
});
