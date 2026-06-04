# Repository Boundary Rules

This repository (`coding-agent-workspace`) acts as your home base and control deck. Respect the boundary lines between home and target sites:

## Core Boundary Rules

- **Workspace Purpose**: This workspace stores agent configurations, global rules, specialized skills, command templates, known project configurations, handoffs, and session metadata.
- **No Product Code**: Never create or modify product source code, databases, public documentation, or service deployments inside this workspace directory.
- **Mental Shift**: When instructed to work on a task, first locate the target repository path from the project pointer. Move your operational shell context to that target directory before calling file creation or modification tools.
- **Exceptions**: The only files you may modify in the workspace are those under `.agents/` (state, handoffs, sessions, decisions) and top-level boot configs (`AGENTS.md`, `CLAUDE.md`, `.codex/AGENTS.md`) when specifically tasked to optimize the workspace itself.
