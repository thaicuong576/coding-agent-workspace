# Shared Plugins

Put workspace-owned plugin source here.

This is where Eddie-specific or pinned third-party plugin source should live when the goal is shared behavior across Codex, Claude Code, Hermes, or other coding agents.

Important distinction:

```text
.agents/plugins/
  Canonical workspace-owned plugin source.

.codex/plugins/ or .claude/plugins/
  Runtime adapters, mirrors, or links.

C:\Users\ASUS\.codex\plugins\cache\
  Codex global installed/cache location, not shared source.
```

