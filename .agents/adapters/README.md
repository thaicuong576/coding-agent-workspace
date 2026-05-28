# Runtime Adapters

Adapters explain how each agent runtime consumes the shared workspace source.

Canonical source stays in:

```text
.agents/
```

Runtime-specific wrappers live in:

```text
.codex/
.claude/
```

If a tool supports direct workspace plugin discovery, point it at the matching adapter folder. If not, install or link the canonical source into the tool's global runtime location.

