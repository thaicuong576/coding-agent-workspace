# Project Registry (projects/)

This directory houses the JSON registry files that map external target repositories where the real product code resides.

## Definition

- **Projects = Consolidated Project Folders**: Each project contains its configuration (`config.json`), its active handoff checklists (`latest.md` / `handoffs/`), and its detailed execution traces (`sessions/`). The configuration is populated using the schema defined in `_template.json`.

## Target Project Registration Rule

When a project path, repository URL, or codebase is provided:
1. Locate the existing project directory under `projects/<project-slug>/config.json`.
2. If none exists, follow the **Register Project** workflow command (`.agents/commands/register-project.md`) to create and populate the pointer.
3. Never perform extended development work on an unregistered project.
4. Keep the active project pointer in `.agents/state.json` synced with the registry.
