export type ULID = string;

export interface LML {
  invocation?: string;
  persona?: { name?: string; traits?: string[] };
  canon?: { style?: string[]; constraints?: string[] };
  material?: { context?: string; exemplars?: string[] };
  rubrics?: { goals?: string[]; tests?: string[] };
}

export interface Weave {
  id: ULID;
  title: string;
  lml: LML;
  compiled: string;
  lenses?: Record<string, unknown>;
  lineage?: { parentId?: ULID; hash?: string };
  tags?: string[];
  enshrined: boolean;
  createdAt: number;
}

export interface Folio {
  id: ULID;
  weaveId: ULID;
  model: string;
  input: string;
  output: string;
  choir?: Record<string, unknown>;
  absolution?: 'Absolve'|'Amend'|'Flag';
  notes?: string;
  createdAt: number;
}

export interface ModelProfile {
  id: string;
  title: string;
  temperament?: string[];
  stats?: { casts: number; avgLatencyMs?: number };
  lastSeenAt?: number;
}
