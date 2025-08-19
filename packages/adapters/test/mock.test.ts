import { describe, it, expect } from 'vitest';
import { MockAdapter } from '../src/model';

describe('MockAdapter', () => {
  it('returns predictable echo', async () => {
    const a = new MockAdapter();
    const out = await a.invoke({ user: 'hello world' });
    expect(out).toContain('Echo: hello world');
  });
});
