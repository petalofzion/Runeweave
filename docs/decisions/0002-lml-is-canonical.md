# ADR-0002: LML is Canonical; Compiled Prompt is Cache

- LML (YAML/JSON structure) is the single source of truth for a weave.
- Compiled prompt text is derived and can be regenerated.
- Storage stores both for convenience; logic must treat compiled as ephemeral.
