# Codex Adapter

Codex currently exposes installed skills/plugins from its global runtime, such as:

```text
C:\Users\ASUS\.codex\plugins\cache\
C:\Users\ASUS\.codex\skills\
```

For shared Eddie behavior:

1. Keep canonical source in `.agents/skills/` and `.agents/plugins/`.
2. Mirror or link needed items into `.codex/skills/` and `.codex/plugins/` if Codex supports workspace discovery.
3. If Codex does not discover workspace adapters, install from the canonical workspace source into Codex's global runtime.

Do not treat the global Codex cache as shared source of truth.

