# Cross-Session Continuity (handoffs/)

This directory stores cross-session handoff logs, categorized cleanly by project slug to maintain context and continuity across agent invocations.

## Definition

- **Handoffs = cross-session continuity**: Preserves status, blockages, environment contexts, and next steps so subsequent agent runs can resume exactly where the previous session finished.

## Folder Structure

Handoffs are scoped strictly by project slug:

```text
handoffs/
├── <project-slug>/
│   ├── latest.md                 - The current active task list and status
│   └── YYYY-MM-DD-session.md     - Historical handoff notes from past sessions
```

## Update Rules

1. **`latest.md`**: Must be updated whenever meaningful work is completed or a session ends. It contains the current state of tasks and active blockers.
2. **`YYYY-MM-DD-session.md`**: Created at the end of a session where tasks remain open to preserve the chronological log of that specific run.
