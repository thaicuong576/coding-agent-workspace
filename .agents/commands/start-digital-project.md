# Start Digital Project

Use this command pattern when Eddie asks to build a new digital product,
feature, tool, automation, agent workflow, or integration.

## Steps

1. Read workspace context:
   - `AGENTS.md`
   - `.agents/state.json`
   - relevant `.agents/projects/*.json`
   - `.agents/docs/digital-product-engineering-os.md`
   - `.agents/rules/build-mode-escalation.md`

2. Classify the work:
   - webapp or SaaS
   - backend/API
   - agent tool or workflow
   - automation/integration
   - data product
   - creative/media tool
   - infrastructure/deployment
   - documentation/knowledge system

3. Pick a build mode:
   - Level 1: Fast Build
   - Level 2: Product Build
   - Level 3: Multi-Agent Build

4. Identify the target repo:
   - use an existing project pointer when one fits
   - otherwise propose or create a new repo under `D:\eddie-projects`
   - keep product code out of this workspace

5. Read or create project-local memory:
   - read the target repo's `AGENTS.md`
   - read the target repo's `docs/PROJECT_STATE.md` if it exists
   - for a new product repo, create `docs/PROJECT_STATE.md` from `.agents/templates/PROJECT_STATE.md`
   - project-local state is canonical for that project's current status

6. Fill the lightest useful artifact:
   - Level 1: `.agents/templates/project-brief.md`
   - Level 2: project brief plus `.agents/templates/product-spec.md`
   - Level 3: product spec plus `.agents/templates/agent-handoff.md`

7. Implement in the target repo.

8. Verify with the closest real checks.

9. Update project-local memory:
   - append the meaningful work to `docs/PROJECT_STATE.md`
   - include changed behavior, verification, known gaps, and next actions
   - update workspace handoffs only for cross-project or cross-session context

10. Report:
   - what changed
   - where it lives
   - what was verified
   - what remains risky or unfinished

## Agent Rule

If the user says "build it", do not stop at a proposal unless the selected
build mode requires a spec approval gate or a critical ambiguity would change
the implementation.
