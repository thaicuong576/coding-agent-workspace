# Command: start fullstack agent

Use this command when initializing the agent session or booting up workspace context.

## Action Steps

### 1. Load Context
- Read root [AGENTS.md](file:///d:/eddie-agents/coding-agent-workspace/AGENTS.md).
- Read active status in [.agents/state.json](file:///d:/eddie-agents/coding-agent-workspace/.agents/state.json).
- Load core skills:
  - [.agents/personas/fullstack-builder.md](file:///d:/eddie-agents/coding-agent-workspace/.agents/personas/fullstack-builder.md)
  - [.agents/skills/engineering/engineering-judgment.md](file:///d:/eddie-agents/coding-agent-workspace/.agents/skills/engineering/engineering-judgment.md)

### 2. Inspect
- Inspect target repositories listed under `.agents/projects/`.
- Identify if there is an `active_project` referenced in `.agents/state.json`.

### 3. Output
- Confirm workspace initialization.
- Output the current active project pointer, current focus, and summary of the last checkpoint.
- Ask the user to clarify the next immediate task or select the active project if none is set.

## Boundaries & Warnings
- **Do not** write code inside the workspace.
- **Do not** make modifications before receiving target-specific project context.
