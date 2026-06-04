# Command: fix bug

Use this command when addressing software regressions, exceptions, or unexpected behavior.

## Action Steps

### 1. Load Context
- Load core skills:
  - [.agents/skills/engineering/debugging.md](file:///d:/eddie-agents/coding-agent-workspace/.agents/skills/engineering/debugging.md)
  - [.agents/rules/coding.md](file:///d:/eddie-agents/coding-agent-workspace/.agents/rules/coding.md)
  - [.agents/rules/verification.md](file:///d:/eddie-agents/coding-agent-workspace/.agents/rules/verification.md)

### 2. Inspect
- Shift context to the target repository.
- Review error logs, crash details, or console screenshots.
- Trace inputs and locate failure lines.
- Attempt reproduction (e.g., draft a failing unit test or run local scenarios).

### 3. Output
- State the root cause diagnosis.
- Outline the proposed fix and regression prevention steps.
- Perform in-place edits to correct the defect.
- Run tests to prove the fix resolves the bug and introduces no side-effects.

## Boundaries & Warnings
- **Do not** refactor adjacent code blocks simply because they look complex. Keep edits localized.
- **Do not** mask warnings. Fix the actual failure mode.
