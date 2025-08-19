export type VeilState = 'covered'|'awaiting'|'fading'|'open';
export type VeilEvent = 'mount'|'calm'|'skip'|'fade_done';

export function nextVeilState(s: VeilState, e: VeilEvent): VeilState {
  switch (s) {
    case 'covered':   return e === 'skip' ? 'open' : (e === 'mount' ? 'awaiting' : 'covered');
    case 'awaiting':  return e === 'calm' ? 'fading' : 'awaiting';
    case 'fading':    return e === 'fade_done' ? 'open' : 'fading';
    case 'open':      return 'open';
  }
}
