# Session Log

## 2026-05-28

- Clarified the architecture split: coding-agent workspace is home; project repos are targets.
- Preserved `D:\eddie-projects\eddie-team` by committing and pushing `5b52fd8 Add video producer workflow and repo guide`.
- Created this workspace at `D:\eddie-agents\coding-agent-workspace`.

## 2026-05-28 - Conversation Handoff Memory

Eddie and Codex clarified a major architecture mistake Eddie had been feeling for months: `eddie-team` should not be the universal coding-agent home. It is a project repo: the agent-office project for Edide Branding Company. The coding agents need a separate home workspace that can point to many project repos.

Current intended structure:

```text
D:\eddie-agents\coding-agent-workspace
  Coding-agent home, memory, state, project pointers, global rules.

D:\eddie-projects\eddie-team
  Agent-office project repo: company truth, teams, agents, workflows, Hive controller, tools.

D:\eddie-projects\tools\hyperframes-video-engine
  Video render engine repo used by Video Producer.
```

The working mental model is:

```text
coding-agent-workspace = home/cockpit
project repos = target work sites
```

Important emotional/context note: Eddie felt relief when this clicked. He joked that he had been "working wrongly for 3 months." The right response is not to overcorrect or shame the old setup. Treat it as a good evolution: the old setup helped reveal the better architecture.

`eddie-team` was pushed to GitHub before creating this workspace:

```text
Repo: D:\eddie-projects\eddie-team
Remote: https://github.com/thaicuong576/eddie-team.git
Branch: main
Commit: 5b52fd8 Add video producer workflow and repo guide
```

What was committed there:

- Multi-team `hive.py` prompt/controller support.
- Content team remains intact.
- Video team added with one `producer` agent.
- Researcher + Video Producer repo explainer workflow.
- GitHub repo video workflow docs.
- Video QA/verification tools.
- Project-local `AGENTS.md` cleaned and added.
- Runtime/generated files, `.hermes`, `.agents`, env files, video outputs, and local artifacts were ignored.

New coding-agent workspace was initialized locally only:

```text
Repo: D:\eddie-agents\coding-agent-workspace
Commit: 97af423 Initialize coding agent workspace
Remote: none
```

No GitHub repo exists for this workspace yet.

How future Codex sessions should start:

1. Open from `D:\eddie-agents\coding-agent-workspace`.
2. Read `AGENTS.md`.
3. Read `.agents/state.json`.
4. Read `.agents/projects/<target>.json`.
5. Then `cd` into the target repo and read its local `AGENTS.md`.

If Eddie asks to work on `eddie-team`, use:

```text
D:\eddie-projects\eddie-team
```

If Eddie asks to work on video rendering or Hyperframes preview, use:

```text
D:\eddie-projects\tools\hyperframes-video-engine
```

Current highest-level next move: keep this workspace as the long-lived coding-agent memory layer, then gradually move any cross-project state out of `eddie-team` and into this workspace. Do not restructure everything immediately unless Eddie asks.
