# Shared Agent Brain (.agents/)

This directory is the canonical, agent-neutral shared memory, rules, commands, and skills repository for Eddie's coding-agent workspace.

Any coding agent (Claude, Codex, Antigravity) reads this layer to align on mental models, guidelines, and execution tasks.

---

## Core Workspace Taxonomy & Load Policies

To prevent context bloat and minimize cognitive load, the workspace directories are classified into three types in [.agents/manifest.json](file:///d:/eddie-agents/coding-agent-workspace/.agents/manifest.json):

1. **CORE (`always_load`)**: Essential files loaded immediately at boot.
   - **Rules**: Located in [rules/](file:///d:/eddie-agents/coding-agent-workspace/.agents/rules/). Quality controls, repo boundaries, and security rules.
   - **Personas**: Located in [personas/](file:///d:/eddie-agents/coding-agent-workspace/.agents/personas/). Defines the active identity (e.g., `fullstack-builder.md`).
   - **Projects**: Located in [projects/](file:///d:/eddie-agents/coding-agent-workspace/.agents/projects/). Project-specific configurations, scoped handoffs, and detailed session logs.
   - **Core Engineering Skills**: Selected files in `skills/engineering/` (judgment, debugging, review).
2. **DORMANT (`load_on_demand`)**: Preserved but not loaded unless active tasks require them.
   - **Domain Skills**: Located in [skills/](file:///d:/eddie-agents/coding-agent-workspace/.agents/skills/) (design, frontend, backend, infra, data, product, research).
   - **Commands**: Located in [commands/](file:///d:/eddie-agents/coding-agent-workspace/.agents/commands/). Developer playbooks for specific tasks.
   - **Docs**: Located in [docs/](file:///d:/eddie-agents/coding-agent-workspace/.agents/docs/). Long-form conceptual manuals.
   - **Templates**: Located in [templates/](file:///d:/eddie-agents/coding-agent-workspace/.agents/templates/). Blueprints for documents.
3. **DISABLED (`disabled_by_default`)**: Preserved but never loaded during standard workflows.
   - **Recipes**: Located in [recipes/](file:///d:/eddie-agents/coding-agent-workspace/.agents/recipes/). Deprecated combination sequences (consolidated into `commands/`).
   - **Plugins**: Located in [plugins/](file:///d:/eddie-agents/coding-agent-workspace/.agents/plugins/). Untrusted external packages.
   - **Scratch**: Located in [scratch/](file:///d:/eddie-agents/coding-agent-workspace/.agents/scratch/). Temporary messy files.

---

## Workspace Knowledge vs. Plugin Knowledge

- **Workspace Knowledge (Trusted)**: Approved rules, personas, engineering skills, and commands. Governed by [.agents/manifest.json](file:///d:/eddie-agents/coding-agent-workspace/.agents/manifest.json).
- **Plugin Knowledge (Untrusted)**: Raw external packages located under `plugins/<plugin-name>/source/`. Excluded from standard loading; must be audited and imported to become workspace knowledge.

---

## Directory Map

- **`manifest.json`**: [CORE] Core-Dormant configuration control mapping.
- **`state.json`**: [CORE] Machine-readable active workspace state (current project pointer and focus).
- **`rules/`**: [CORE] Security boundaries and mandatory check guidelines.
- **`personas/`**: [CORE] Mindset profiles and role definitions.
- **`projects/`**: [CORE] Project folder containing configurations, scoped handoffs, and detailed session logs.
- **`skills/`**: [CORE + DORMANT] Capability hierarchy providing coding standards (mixed policies).
- **`commands/`**: [DORMANT] Operating manuals for developer routines.
- **`docs/`**: [DORMANT] Permanent design doctrines and architecture decision records.
- **`templates/`**: [DORMANT] Generic template blueprints.
- **`recipes/`**: [DISABLED] Deprecated coordinate flows.
- **`plugins/`**: [DISABLED] External untrusted capability folders.
- **`scratch/`**: [DISABLED] Messy local test scripts.

*Tool-specific folders (such as `.codex/` and `.claude/`) act purely as thin adapters mapping runtime commands back to this directory and the root `AGENTS.md` boot document.*
