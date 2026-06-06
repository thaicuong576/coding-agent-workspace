# External Plugins Directory

This directory stores external and untrusted plugin capability packs.

## Structure Rule

Every plugin directory under `plugins/` must adhere to this folder structure:

```text
.agents/plugins/<plugin-name>/
├── source/     - The raw, untouched files of the external plugin
└── notes.md    - Workspace observations, audit notes, and selective import decisions
```

---

## The Plugin Contract

*   **Untrusted by Default**: Plugins are treated as raw material and are never loaded during the default agent boot process.
*   **Symlinks & Adapters**: Do **not** create symlinks or junctions from your local agent runtimes (e.g. `.codex/plugins/` or `.claude/plugins/`) directly to raw plugin directories. Instead, only import selected components into the canonical `.agents/skills/` or `.agents/commands/` folders, and let runtimes load those approved, workspace-owned assets.
*   **Import Process**:
    1.  Place files in `<plugin-name>/source/`.
    2.  Execute `analyze plugin <plugin-name>` to evaluate capabilities.
    3.  Execute `import plugin component` to copy and rewrite the selected skill/command into the workspace.
