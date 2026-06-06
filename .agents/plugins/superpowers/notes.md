# Plugin Notes: superpowers

This file documents the workspace observations, metadata, and import decisions for the `superpowers` plugin.

## Metadata
*   **Name**: Superpowers
*   **Path**: `.agents/plugins/superpowers/`
*   **Status**: Stage 2 — Analyzed (Untrusted / Not loaded at startup)
*   **Last Updated**: 2026-06-05

---

## Workspace Observations
The `superpowers` plugin is a package containing helper developer skills and workflow strategies designed for Codex and other coding agents.

### Available Skills
Located in `source/skills/`:
*   `brainstorming` - Prompts for system architecture brainstorming.
*   `dispatching-parallel-agents` - Rules for dividing work into parallel sub-agents.
*   `executing-plans` - Step-by-step execution guides.
*   `finishing-a-development-branch` - Git branch wrap-up protocol.
*   `receiving-code-review` / `requesting-code-review` - Code review handoff checklist.
*   `subagent-driven-development` - Strategies for sub-agents.
*   `systematic-debugging` - Debugging diagnostics.
*   `test-driven-development` - Checklist for TDD.
*   `using-git-worktrees` - Git worktree management instructions.
*   `using-superpowers` - Core plugin bootstrap guidance.
*   `verification-before-completion` - Post-implementation verification checklists.
*   `writing-plans` / `writing-skills` - Strategy guides.

---

## Import Decisions

### Approved & Imported Components
*   *None.* Currently, all components remain in the untrusted, unimported state. 

### Rejected / Skipped Components
*   `receiving-code-review` & `requesting-code-review`: Skipped because the workspace has its own canonical `code-review.md` and `coding.md` rules.
*   `systematic-debugging`: Skipped because the workspace already has its own canonical `.agents/skills/engineering/debugging.md`.
*   `verification-before-completion`: Skipped because the workspace already has its own canonical `.agents/rules/verification.md` law.

---

## Import Log
*   **2026-06-05**: Reorganized folder structure to conform to the Plugin Contract (moved raw files to `source/`). Initial notes written.
