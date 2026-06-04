# AGENTS.md

## Project Role

`<what this product repo is for>`

## Read First

- `README.md`
- `docs/PROJECT_STATE.md`
- `<architecture-or-product-doc>`

## Stack

- `<framework/runtime>`
- `<database/service>`
- `<test/build tools>`

## Common Commands

```text
<install command>
<test command>
<build command>
<dev server command>
```

## Working Rules

- Keep product source, tests, docs, and deployment config in this repo.
- Keep cross-project coding-agent memory in `D:\eddie-agents\coding-agent-workspace`.
- Treat `docs/PROJECT_STATE.md` as this repo's local memory. Read it before work and update it after meaningful work.
- Prefer existing project patterns over new abstractions.
- Keep changes focused on the current request.
- Verify before claiming completion.

## Verification

Use the closest relevant checks:

```text
<focused test>
<build/typecheck>
<browser/manual QA>
```

## Project State Updates

After meaningful work, update `docs/PROJECT_STATE.md` with:

- current status
- what changed
- what was verified
- known gaps
- next actions

## Boundaries

Do not store secrets, runtime cache, generated media, or unrelated global agent
state in this repo.
