import { describe, it, expect } from 'vitest';
import { countFoliosByModel } from '../src/lib/bestiary';
import type { Folio } from '@runeweave/core/src/types';

describe('countFoliosByModel', () => {
  it('aggregates folios by model', () => {
    const folios: Pick<Folio, 'model'>[] = [
      { model: 'mock-rune-1' },
      { model: 'mock-rune-1' },
      { model: 'mock-rune-2' },
    ];
    expect(countFoliosByModel(folios)).toStrictEqual({
      'mock-rune-1': 2,
      'mock-rune-2': 1,
    });
  });
});

