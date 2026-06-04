# Shared Agent Brain (.agents/)

This directory is the canonical, agent-neutral shared memory, rules, commands, and skills repository for Eddie's coding-agent workspace.

Any coding agent (Claude, Codex, Antigravity) will read this layer to synchronize operations.

---

## Core Workspace Taxonomy

We categorize agent configuration and rules using three clear taxonomies:

1. **Persona (Who I am)**: Located in [personas/](file:///d:/eddie-agents/coding-agent-workspace/.agents/personas/). Defines the agent's identity, general capability profile (e.g. senior fullstack developer), behavioral boundaries, and communication tone.
2. **Skill (What I know)**: Located in [skills/](file:///d:/eddie-agents/coding-agent-workspace/.agents/skills/). Defines engineering guidelines, styling preferences, Docker templates, API conventions, and diagnostic flows. Organized into a capability hierarchy (design, frontend, backend, infra, engineering, data, product).
3. **Command (How I work)**: Located in [commands/](file:///d:/eddie-agents/coding-agent-workspace/.agents/commands/). Defines step-by-step developer scripts and workflow procedures for routines (e.g., implementing features, fixing bugs, conducting reviews).

---

## Directory Map

- **`state.json`**: Machine-readable active workspace state (active project pointer, known projects, core principles).
- **`rules/`**: Global boundaries, safety constraints, coding conventions, and verification habits.
- **`personas/`**: Agent identities and role specifications.
- **`skills/`**: Capability hierarchy modules providing technical domain guidelines.
- **`commands/`**: Operational manuals for developer routines.
- **`projects/`**: Reference pointer JSON files configuring external target project paths.
- **`handoffs/`**: Session handoff markdown files keeping track of unfinished work between runs.
- **`sessions/`**: Historical logs and session metrics trackers.
- **`templates/`**: Generic briefs and structure patterns.
- **`plugins/`**: Scripts, tools, and extensions used during execution (e.g. `superpowers`).
- **`docs/`**: Shared operating doctrines.

*Tool-specific folders (such as `.codex/` and `.claude/`) act purely as thin adapters mapping runtime commands back to this directory and the root `AGENTS.md` boot document.*
