# Superpowers Plugin Migration

Goal: make the workspace copy the source of truth for Superpowers-like behavior, so other agents are not dependent on Codex's global cache.

## Current Global Codex Copy

In this machine, Codex currently exposes Superpowers from a global cache path like:

```text
C:\Users\ASUS\.codex\plugins\cache\openai-curated\superpowers\719ed655\
```

That path is Codex-specific. Claude Code, Hermes, Gemini, and local agents should not rely on it.

## Target Workspace Source

Use this folder as the workspace-owned plugin source:

```text
D:\eddie-agents\coding-agent-workspace\.agents\plugins\superpowers\
```

Optional runtime adapters:

```text
D:\eddie-agents\coding-agent-workspace\.codex\plugins\superpowers\
D:\eddie-agents\coding-agent-workspace\.claude\plugins\superpowers\
```

## Safe Manual Migration Plan

1. Open a fresh terminal.

2. Copy or install Superpowers source into the workspace:

```powershell
cd D:\eddie-agents\coding-agent-workspace
mkdir .agents\plugins\superpowers
```

Then place the plugin source under:

```text
.agents\plugins\superpowers\
```

3. Add adapter links or copies only after the source exists.

If a runtime supports symlinks and you are running PowerShell as a user allowed to create symlinks:

```powershell
New-Item -ItemType Junction `
  -Path .codex\plugins\superpowers `
  -Target .agents\plugins\superpowers

New-Item -ItemType Junction `
  -Path .claude\plugins\superpowers `
  -Target .agents\plugins\superpowers
```

If symlinks/junctions are annoying on Windows, copy instead:

```powershell
Copy-Item -Recurse .agents\plugins\superpowers .codex\plugins\superpowers
Copy-Item -Recurse .agents\plugins\superpowers .claude\plugins\superpowers
```

4. Uninstall or disable the global Codex Superpowers plugin using Codex's plugin management UI/command if available.

Do not manually delete random Codex cache folders unless you are sure the plugin manager has no uninstall path. Cache paths may be regenerated.

5. Reinstall into Codex from the workspace source if Codex supports local plugin install.

Desired source path:

```text
D:\eddie-agents\coding-agent-workspace\.agents\plugins\superpowers
```

6. Start a new agent session from:

```powershell
cd D:\eddie-agents\coding-agent-workspace
codex
```

7. Ask the agent to report where the active Superpowers skill was loaded from.

Expected healthy result:

```text
D:\eddie-agents\coding-agent-workspace\...
```

If it still reports:

```text
C:\Users\ASUS\.codex\plugins\cache\...
```

then Codex is still using the global installed plugin and needs a runtime-specific uninstall/reinstall step.

