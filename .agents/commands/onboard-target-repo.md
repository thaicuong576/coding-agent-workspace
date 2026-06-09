# Command: onboard target repo

Use this command when introducing a new target project repo or switching the active target.

## Action Steps

### 1. Load Context
- Read root [AGENTS.md](file:///d:/eddie-agents/coding-agent-workspace/AGENTS.md).
- Load core skills:
  - [.agents/personas/fullstack-builder.md](file:///d:/eddie-agents/coding-agent-workspace/.agents/personas/fullstack-builder.md)
  - [.agents/rules/repo-boundaries.md](file:///d:/eddie-agents/coding-agent-workspace/.agents/rules/repo-boundaries.md)

### 2. Inspect
- Look for target project configs in `.agents/projects/<project-name>/config.json`. If missing, generate a new configuration based on `.agents/projects/_template.json`.
- Shift shell directory context into the target repository.
- Scan target project files:
  - Local `AGENTS.md` (if exists), `README.md`, `package.json`, `requirements.txt`, or environment configurations.
  - Explore route definitions, controller pathways, and database setups.

### 3. Output
- Create/update the target configuration file under `.agents/projects/<project-name>/config.json`.
- Update `active_project` and `known_projects` in `.agents/state.json`.
- Present a summary of the project's tech stack, installation patterns, testing commands, and potential integration paths.

## Boundaries & Warnings
- **Do not** modify the target's product source code during onboarding. Focus only on passive mapping and structural inspection.
