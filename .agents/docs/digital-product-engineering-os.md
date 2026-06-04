# Digital Product Engineering OS

## Purpose

This workspace is Eddie's command center for turning digital ideas into real,
usable products.

It supports webapps, SaaS products, agent tools, automations, integrations,
data workflows, creative tools, internal utilities, and project infrastructure.
The target output is not a demo by default. The target output is a working
product, feature, workflow, or system that can be verified.

## Core Model

```text
idea -> brief -> build mode -> target repo -> project state -> spec/plan -> implementation -> verification -> state update -> handoff
```

The workspace holds shared operating memory, rules, templates, commands, and
agent habits. Product code belongs in target repos under `D:\eddie-projects`
or another explicit project path.

## Operating Principle

```text
Fast by default.
Structured when risk, size, or parallel work increases.
```

Do not add process for ceremony. Add structure when it prevents real failure:
unclear scope, user-facing risk, production data, security, payments, deployment,
large surfaces, or multiple agents working at once.

## Build Modes

### Level 1: Fast Build

Use for small tools, scripts, simple webapps, prototypes, UI experiments, and
low-risk internal utilities.

```text
idea -> short brief -> build -> verify -> note outcome
```

Expected artifacts:

- project brief or short task note
- focused implementation
- relevant checks
- short session/handoff note when useful

### Level 2: Product Build

Use for real products or important features with users, auth, database state,
integrations, deployment, money, sensitive data, or serious UX expectations.

```text
idea -> product brief -> spec -> implementation plan -> build -> test/browser QA -> release notes
```

Expected artifacts:

- product brief
- product spec
- implementation plan
- tests and browser verification where relevant
- decisions and handoff notes

### Level 3: Multi-Agent Build

Use when multiple agents or worktrees are useful, or when the product spans
independent frontend, backend, agent, data, deployment, or QA tracks.

```text
idea -> spec -> roles -> task packets -> parallel worktrees -> reviews -> integration -> handoff
```

Expected artifacts:

- shared spec and architecture notes
- task packets with owners and acceptance checks
- handoff notes for each agent
- integration review
- final verification record

## Product Lanes

Classify each new project or feature into one or more lanes:

- Webapp or SaaS
- Backend/API
- Agent tool or workflow
- Automation/integration
- Data product or analysis workflow
- Creative/media tool
- Infrastructure/deployment
- Documentation/knowledge system

The lane determines which skills, checks, and templates are needed. A small
single-lane request can stay fast. Multi-lane requests often need Product Build
or Multi-Agent Build.

## Repo Boundary

Use this workspace for:

- shared memory and decisions
- project pointers
- reusable skills, rules, commands, and templates
- cross-project handoffs
- agent operating doctrine

Use target repos for:

- source code
- tests
- product docs
- `docs/PROJECT_STATE.md`
- local `AGENTS.md`
- deployment config
- project-specific architecture

Project repos remember themselves. This workspace remembers relationships
between projects.

Every real product repo should keep a local `docs/PROJECT_STATE.md` that tells
any agent:

- what the product is
- what works now
- what is broken or missing
- what changed recently
- how to verify it
- what to do next

Agents must read `docs/PROJECT_STATE.md` before meaningful project work and
update it after meaningful project work.

Do not store secrets, generated media, runtime cache, or product artifacts in
this workspace unless the artifact is intentionally part of the agent operating
system.

## Verification Standard

Before claiming completion, run the closest relevant checks:

- compile or typecheck changed code
- run focused tests
- run build when scope warrants it
- inspect changed UI in a browser
- test the main happy path and one likely failure path
- record skipped checks and remaining risk

The final report should say what changed, what was verified, and what risk
remains.

## Success Criteria

This workspace is working when Eddie can bring a digital idea here and agents
can reliably:

- identify the right target repo or create one
- choose the right build mode
- produce a clear brief/spec when needed
- implement in small, coherent steps
- verify with evidence
- preserve decisions and handoff context
- keep product repos clean and focused
