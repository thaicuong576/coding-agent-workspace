# Command: handoff

Use this command when concluding a session where tasks remain open, or when context needs preservation for future agent sessions.

## Action Steps

### 1. Load Context
- Read [.agents/handoffs/README.md](file:///d:/eddie-agents/coding-agent-workspace/.agents/handoffs/README.md).
- Read active status in [.agents/state.json](file:///d:/eddie-agents/coding-agent-workspace/.agents/state.json).

### 2. Inspect
- Note the state of uncompleted checklist items in `task.md`.
- Capture active problems, blockers, or API responses requiring manual resolution.

### 3. Output
- Update `.agents/state.json` with the latest checkpoint summary and current focus.
- Create a markdown file under `.agents/handoffs/YYYY-MM-DD-<topic>-handoff.md` following the template:
  - **Status**: What is completed vs. what remains.
  - **Context**: Critical decisions, API behavior, or debugging insights.
  - **Next Steps**: Exact checklist items and commands to run to resume work.

## Boundaries & Warnings
- **Do not** delete historical handoffs. Keep them as chronologically ordered logs.
