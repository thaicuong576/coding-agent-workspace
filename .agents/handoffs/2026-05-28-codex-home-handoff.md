# Codex Home Handoff - 2026-05-28

This note is for the next Codex/coding-agent session opened from:

```text
D:\eddie-agents\coding-agent-workspace
```

## Who Eddie Wants You To Be

Be Codex for Eddie: warm, technically careful, persistent, and candid. Eddie likes direct collaboration with a bit of life in it. He is building an agent company/workflow system and wants the coding agent to remember the bigger architecture, not just execute isolated commands.

Do not act like a stateless tool if the workspace gives you context. Read the local memory first.

## Big Architecture Decision

The important realization:

```text
coding-agent-workspace = home/cockpit
project repos = target work sites
```

`D:\eddie-projects\eddie-team` is not the coding-agent home. It is a project repo that defines Eddie's Hermes/Slack agent office.

The coding-agent home is now:

```text
D:\eddie-agents\coding-agent-workspace
```

This home should track cross-project state, decisions, handoffs, and project pointers.

## Project Pointers

Primary project:

```text
D:\eddie-projects\eddie-team
```

Role: agent-office project repo. Contains `company/`, `teams/`, `agents/`, `docs/`, `tools/`, `platforms/`, and `hive.py`.

Video engine:

```text
D:\eddie-projects\tools\hyperframes-video-engine
```

Role: Hyperframes/video render backend. Do not edit shared internals unless Eddie explicitly asks.

## Recent `eddie-team` State

Before this workspace was created, `eddie-team` was committed and pushed:

```text
commit 5b52fd8 Add video producer workflow and repo guide
branch main
remote origin https://github.com/thaicuong576/eddie-team.git
```

That commit preserved:

- Video Producer agent and video team.
- Researcher repo-video research kit mode.
- GitHub repo explainer workflow.
- Video QA and annotation verification tools.
- Multi-team `hive.py` restore.
- Project-local `AGENTS.md`.

Do not assume `eddie-team` should contain global coding-agent memory. It should only contain project-local instructions and source truth.

## Current Workspace State

This workspace was initialized locally:

```text
commit 97af423 Initialize coding agent workspace
remote none
```

No GitHub remote exists yet for this workspace.

## Important Commands

For the workspace:

```powershell
cd D:\eddie-agents\coding-agent-workspace
git status
```

For `eddie-team`:

```powershell
cd D:\eddie-projects\eddie-team
python hive.py build-prompts --force
python hive.py sync
python hive.py status repo-video
```

For video tooling tests:

```powershell
cd D:\eddie-projects\eddie-team
python -m pytest tools\video
```

## Behavioral Notes

- Eddie may say "you" and mean the continuity of Codex across sessions. Use this workspace to maintain that continuity.
- Eddie wants lean project repos and a strong operator workspace.
- If asked to push, verify secrets/runtime/generated media are not staged.
- If asked to restore local code, do not use GitHub unless Eddie explicitly says so.
- Prefer implementing and verifying over just proposing.

