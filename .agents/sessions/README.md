# Detailed Work Logs (sessions/)

This directory stores individual session logs, traces, and execution details, categorized strictly by project slug for clean navigation and auditability.

## Definition

- **Sessions = detailed work logs**: Contains granular logs of actions, compilation or test runs, terminal traces, and specific debugging/refactoring decisions made during a single work run.

## Folder Structure

Sessions are scoped strictly by project slug:

```text
sessions/
├── session-log.md                - Root cumulative workspace lifecycle log
├── <project-slug>/
│   └── YYYY-MM-DD-HHMM.md        - Granular session trace logs
```

## Guidelines

- Session logs are created for reference and audit trails.
- Store command inputs/outputs, error traceback blocks, and logical refactoring steps taken in these files.
- **Do not** store API keys, secrets, or large binaries.
