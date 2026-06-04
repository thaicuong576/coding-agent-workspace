# Command: implement feature

Use this command when writing code, adding components, or building functional features in target projects.

## Action Steps

### 1. Load Context
- Load core guidelines:
  - [.agents/rules/coding.md](file:///d:/eddie-agents/coding-agent-workspace/.agents/rules/coding.md)
  - [.agents/rules/verification.md](file:///d:/eddie-agents/coding-agent-workspace/.agents/rules/verification.md)
- Load task-relevant capabilities:
  - [.agents/skills/frontend/frontend.md](file:///d:/eddie-agents/coding-agent-workspace/.agents/skills/frontend/frontend.md)
  - [.agents/skills/backend/backend.md](file:///d:/eddie-agents/coding-agent-workspace/.agents/skills/backend/backend.md)

### 2. Inspect
- Shift context to the target repository.
- Locate the target components/routes.
- Trace upstream dependencies (imports, models, schemas).
- Identify relevant test suites.

### 3. Output
- Present a concise implementation plan with targeted file edits and specific verification checks.
- Build components/APIs/schemas directly.
- Execute compiler, lint, and test runs.
- Output a verification report containing test results and changes.

## Boundaries & Warnings
- **Do not** write code inside the workspace base directory.
- **Do not** create speculative abstractions or speculative files. Use simple, in-place edits.
- **Do not** leave console prints or diagnostic messages in committed files.
