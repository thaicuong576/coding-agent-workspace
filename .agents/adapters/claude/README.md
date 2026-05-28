# Claude Code Adapter

Claude-style workspaces commonly use:

```text
CLAUDE.md
.claude/skills/
.claude/plugins/
.claude/commands/
.claude/agents/
.claude/hooks/
```

For shared Eddie behavior, keep canonical source in `.agents/` and mirror/link it into `.claude/` only as an adapter.

