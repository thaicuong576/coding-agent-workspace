# Shared Agent Source

This `.agents/` folder is the canonical, agent-neutral source of truth for Eddie's coding-agent workspace.

Any coding brain can read this layer:

```text
.agents/state.json
.agents/projects/
.agents/handoffs/
.agents/rules/
.agents/skills/
.agents/plugins/
.agents/commands/
.agents/agents/
```

Tool-specific folders such as `.codex/` and `.claude/` are adapters. They may link to or mirror this canonical source, but they should not become the only source of truth.

