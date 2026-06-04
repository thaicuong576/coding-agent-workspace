# Project Registry (projects/)

This directory houses the JSON registry files that map external target repositories where the real product code resides.

## Definition

- **Projects = project registry**: Each JSON file (e.g. `eddie-team.json`) is populated using the schema defined in `_template.json`. It provides paths, installation routines, dependency stacks, and common CLI commands for that target repo.

## Target Project Registration Rule

When a project path, repository URL, or codebase is provided:
1. Locate the existing project JSON pointer under `projects/`.
2. If none exists, follow the **Register Project** workflow command (`.agents/commands/register-project.md`) to create and populate the pointer.
3. Never perform extended development work on an unregistered project.
4. Keep the active project pointer in `.agents/state.json` synced with the registry.
