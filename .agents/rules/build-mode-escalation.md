# Build Mode Escalation

## Default

Start in Level 1: Fast Build unless the request clearly needs more structure.

Fast Build is the default because Eddie often wants momentum, exploration, and
working software quickly. The agent should still verify the result.

## Escalate To Level 2: Product Build When

- the work is user-facing
- the app or feature will be deployed
- the work involves auth, payments, private data, database writes, or production
  integrations
- requirements are ambiguous enough that implementation choices would matter
- UX quality matters beyond a rough prototype
- the requested scope spans multiple screens, services, or workflows
- failure would waste significant time or damage trust

## Escalate To Level 3: Multi-Agent Build When

- multiple independent tracks can proceed in parallel
- frontend, backend, agent, data, and deployment work are separable
- one agent cannot hold enough context safely
- code review or QA should be independent from implementation
- multiple target repos or worktrees are involved
- the work needs explicit ownership and handoff notes

## De-Escalate When

- the task is smaller than first assumed
- a throwaway prototype is enough
- the user explicitly asks for speed over completeness
- a single focused patch can satisfy the request safely

## Required Agent Behavior

For every new digital project or substantial feature, state the selected build
mode and why.

If the mode changes during work, say so and record the reason in the session
log or handoff note when useful.

Never use process as a substitute for judgment. The mode exists to match the
risk and complexity of the work.
