# Shared Agent Brain (.agents/)

This directory is the canonical, agent-neutral shared memory, rules, commands, and skills repository for Eddie's coding-agent workspace.

Any coding agent (Claude, Codex, Antigravity) reads this layer to align on mental models, guidelines, and execution tasks.

---

## Core Workspace Taxonomy

We organize the workspace using clear, easy-to-explain concepts:

1. **Personas (Who I am)**: Located in [personas/](file:///d:/eddie-agents/coding-agent-workspace/.agents/personas/). Defines identity, mindset, behavioral boundaries, and communication style.
2. **Skills (What I know)**: Located in [skills/](file:///d:/eddie-agents/coding-agent-workspace/.agents/skills/). Technical capabilities organized into a hierarchy (design, frontend, backend, infra, engineering, data, product).
3. **Commands (How I work)**: Located in [commands/](file:///d:/eddie-agents/coding-agent-workspace/.agents/commands/). Step-by-step developer scripts and workflow procedures (e.g. implement feature, fix bug).
4. **Recipes (How skills and commands combine)**: Located in [recipes/](file:///d:/eddie-agents/coding-agent-workspace/.agents/recipes/). Multi-step coordinate patterns to achieve bigger outcomes (e.g. schema refactoring).
5. **Projects (Where real product repos live)**: Located in [projects/](file:///d:/eddie-agents/coding-agent-workspace/.agents/projects/). Config files containing paths, framework specs, env settings, and commands for target repositories.
6. **Rules (Workshop laws)**: Located in [rules/](file:///d:/eddie-agents/coding-agent-workspace/.agents/rules/). Hard guidelines on coding standards, zero-secret security, and pre-commit verification.
7. **Handoffs (Session handoffs)**: Located in [handoffs/](file:///d:/eddie-agents/coding-agent-workspace/.agents/handoffs/). Scoped strictly by project (`handoffs/<project-slug>/`). Contains active status tasks and chronological logs.
8. **Sessions (Session logs)**: Located in [sessions/](file:///d:/eddie-agents/coding-agent-workspace/.agents/sessions/). Scoped strictly by project (`sessions/<project-slug>/`). Stores detailed terminal traces and run records.
9. **Templates (Document blueprints)**: Located in [templates/](file:///d:/eddie-agents/coding-agent-workspace/.agents/templates/). Standard document templates (e.g. `PROJECT_STATE.md`).
10. **Plugins (Executable helpers)**: Located in [plugins/](file:///d:/eddie-agents/coding-agent-workspace/.agents/plugins/). Executable scripts and helper libraries (e.g. `superpowers`).
11. **Docs (Long-form explanations)**: Located in [docs/](file:///d:/eddie-agents/coding-agent-workspace/.agents/docs/). Conceptual manuals and logs of architectural decisions (`decisions.md`).
12. **Scratch (Temporary experiments)**: Located in [scratch/](file:///d:/eddie-agents/coding-agent-workspace/.agents/scratch/). Temporary messy files and one-off diagnostic scripts.

---

## Directory Map

- **`state.json`**: Machine-readable active workspace state (current project pointer and focus).
- **`rules/`**: Security boundaries and mandatory check guidelines.
- **`personas/`**: Mindset profiles and role definitions.
- **`skills/`**: Capability hierarchy modules providing coding standards.
- **`commands/`**: Operating manuals for developer routines.
- **`recipes/`**: Combined workflow instructions.
- **`projects/`**: Project registry pointers (e.g. `eddie-team.json`).
- **`handoffs/`**: Project-scoped handoff logs (e.g. `handoffs/<project-slug>/latest.md`).
- **`sessions/`**: Project-scoped detailed session log folders.
- **`templates/`**: Generic template blueprints.
- **`plugins/`**: Superpowers tools.
- **`docs/`**: Permanent design doctrines and architecture decision records.
- **`scratch/`**: Messy local test scripts.

*Tool-specific folders (such as `.codex/` and `.claude/`) act purely as thin adapters mapping runtime commands back to this directory and the root `AGENTS.md` boot document.*
