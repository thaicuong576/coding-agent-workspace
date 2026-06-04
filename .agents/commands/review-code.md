# Command: review code

Use this command when performing quality audits, code checkups, or self-reviews before finishing tasks.

## Action Steps

### 1. Load Context
- Load core skills:
  - [.agents/skills/engineering/code-review.md](file:///d:/eddie-agents/coding-agent-workspace/.agents/skills/engineering/code-review.md)
  - [.agents/rules/coding.md](file:///d:/eddie-agents/coding-agent-workspace/.agents/rules/coding.md)

### 2. Inspect
- Analyze file diffs or target project files.
- Walk through architectural layers to trace logical pathways.

### 3. Output
- Produce a structured audit report summarizing:
  - Quality and logic checks
  - Styling alignment
  - Potential security issues (secrets, input sanitization)
  - Test validation status
  - Recommendations (ranked by severity)

## Boundaries & Warnings
- **Do not** modify source files during the review step. Focus entirely on auditing and highlighting improvements.
