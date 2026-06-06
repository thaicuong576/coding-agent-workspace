# Command: start fullstack agent

Use this command when initializing the agent session or booting up workspace context.

## Desired Boot Order

1. **Read Root Guidelines**: Read [AGENTS.md](file:///d:/eddie-agents/coding-agent-workspace/AGENTS.md).
2. **Read Directory Map**: Read [.agents/README.md](file:///d:/eddie-agents/coding-agent-workspace/.agents/README.md).
3. **Read Workspace State**: Read [.agents/state.json](file:///d:/eddie-agents/coding-agent-workspace/.agents/state.json).
4. **Load Active Persona**: Read [.agents/personas/fullstack-builder.md](file:///d:/eddie-agents/coding-agent-workspace/.agents/personas/fullstack-builder.md).
5. **Load Mandatory Workspace Rules**: Read:
   - [.agents/rules/repo-boundaries.md](file:///d:/eddie-agents/coding-agent-workspace/.agents/rules/repo-boundaries.md)
   - [.agents/rules/coding.md](file:///d:/eddie-agents/coding-agent-workspace/.agents/rules/coding.md)
   - [.agents/rules/verification.md](file:///d:/eddie-agents/coding-agent-workspace/.agents/rules/verification.md)
6. **Load Core Engineering Skills**: Read:
   - [.agents/skills/engineering/engineering-judgment.md](file:///d:/eddie-agents/coding-agent-workspace/.agents/skills/engineering/engineering-judgment.md)
   - [.agents/skills/engineering/debugging.md](file:///d:/eddie-agents/coding-agent-workspace/.agents/skills/engineering/debugging.md)
   - [.agents/skills/engineering/code-review.md](file:///d:/eddie-agents/coding-agent-workspace/.agents/skills/engineering/code-review.md)
7. **Determine Active Project Status**: Evaluate `active_project` key in `state.json`.

---

## Active Project Logic

### Scenario A: If `active_project` is NOT null
1. Load matching project configuration from `.agents/projects/<project-slug>.json`.
2. Load only the latest handoff file from `.agents/handoffs/<project-slug>/latest.md`.
3. Do **NOT** load, read, or inspect other unregistered/unrelated project files or handoffs to avoid unnecessary context noise.

### Scenario B: If `active_project` is null
1. List all available registered project configurations located in `.agents/projects/` (read their JSON files to extract name, path, and stack).
2. Provide a brief summary of each project.
3. Ask the user which project should be activated.
4. Do **NOT** read every handoff, inspect every session, or load every project deeply. Keep startup lightweight.

---

## Mandatory Rule Loading

The following rules must always be loaded during startup:
* `repo-boundaries.md`
* `coding.md`
* `verification.md`

The startup process should explicitly state that they were loaded.

---

## Startup Output Format

After completing the boot sequence, the agent must output exactly this structure:

### Workspace
* **Active Persona**: `<persona-name>`
* **Workspace Mode**: `<mode-name>`

### Rules Loaded
- [x] repo boundaries (`repo-boundaries.md`)
- [x] coding (`coding.md`)
- [x] verification (`verification.md`)

### Core Skills Loaded
- [x] engineering judgment (`engineering-judgment.md`)
- [x] debugging (`debugging.md`)
- [x] code review (`code-review.md`)

### Active Project
* **Status**: `<Active Project Name / Slug> (active)` OR `None`
* **Path**: `<Project folder path>` (if active)
* **Stack**: `<Brief stack description>` (if active)
* **Latest Handoff Checkpoint**: `<Brief summary of latest handoff>` (if active)
*(Note: If no project is active, list the registered projects available for activation in this section)*

### Available Actions
* activate project
* register project
* onboard repository
* workspace maintenance
