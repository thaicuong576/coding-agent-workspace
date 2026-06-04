# Agent Handoffs

This directory stores cross-session handoff logs. Use these files to maintain context, progress state, and blocks across different agent invocations.

## File Format

Name files chronologically:
`YYYY-MM-DD-<topic>-handoff.md`

## Template Structure

Handoff files should include:
- **Active Task**: What goal is currently in focus.
- **State of Checklist**: List of completed vs. uncompleted tasks from `task.md`.
- **Blockers & Insights**: Any API failures, environment config details, or architectural choices made.
- **Next Steps & Resuming Commands**: Clear commands and immediate steps to run next.
