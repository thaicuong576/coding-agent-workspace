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

### What Sessions Are
Sessions are granular, low-level audit logs documenting the exact chronological actions taken by the agent during a single active execution run. 

### How Sessions Differ from Handoffs
* **Handoffs** (`.agents/handoffs/`): Forward-looking summaries of current state, active tasks, blockers, and next steps used to hand over context to the next agent session.
* **Sessions** (`.agents/sessions/`): Backward-looking records of detailed work history, listing exact steps taken, terminal command outputs, file creations/modifications, and diagnostics.

### Filename Format
Project session logs are named using the `YYYY-MM-DD-HHMM.md` format (e.g., `2026-06-05-0158.md`) based on the current local system time at the start of the session.

### When to Create a New Session File
* A new session file must be created at the beginning of any new work session, task, project registration, or onboarding sequence.
* Never leave a project folder with just an empty `sessions/<project-slug>/` directory. The first registration or onboarding workflow must create the initial session file.

### When to Update an Existing Session File
* Update the active session file throughout the duration of the current run to append actions taken, diagnostic checks, compiler/test output traces, and error resolutions.
* Do not store API keys, secrets, or large raw binaries.
