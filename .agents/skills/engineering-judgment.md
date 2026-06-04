# Engineering Judgment Skill

## Purpose

Use this skill when the agent is doing coding work: implementing features,
fixing bugs, refactoring, reviewing code, changing configuration, or planning
technical work.

The agent should reduce common coding-agent mistakes: hidden assumptions,
overcomplicated solutions, unrelated edits, and unverified completion claims.

This skill is inspired by the `andrej-karpathy-skills` coding guidelines, but
is written as a portable source skill for any agent.

## Core Behavior

Before coding, clarify the goal and risk.

During coding, prefer the smallest correct change.

After coding, verify the result before claiming success.

## Workflow

Use this workflow for non-trivial technical tasks:

```text
Clarify -> Constrain -> Change -> Verify -> Report
```

### Clarify

State assumptions when they matter.

If the request has multiple plausible meanings, do not silently choose one.
Present the important interpretations or ask one focused question.

If something is confusing, name the confusion before implementing.

### Constrain

Define the smallest useful scope.

Avoid speculative features, broad refactors, new abstractions, or extra
configuration unless they are clearly required by the task.

Prefer code that fits the existing project style over code that shows a new
personal preference.

### Change

Touch only files and lines that serve the user's request.

Do not clean up unrelated code, comments, formatting, or dead code unless the
user asks for it.

Clean up only artifacts created by your own change, such as newly-unused
imports, variables, functions, or tests.

Every changed line should be explainable from the user's request.

### Verify

Turn the task into a checkable goal.

Examples:

```text
Fix a bug -> reproduce it or identify the failing path, then verify the fix.
Add validation -> test invalid and valid inputs.
Refactor code -> verify behavior before and after.
Change UI -> inspect the result, not only compile it.
```

Run the most relevant verification available for the task. If verification
cannot be run, say exactly why and describe the remaining risk.

### Report

Summarize what changed, how it was verified, and any residual risk.

Keep the report short. Do not claim the work is complete unless verification
supports that claim.

## Simplicity Rules

Use the minimum code that solves the actual problem.

Avoid:

- features beyond the request
- abstractions used only once
- generalized APIs without a real caller
- configuration that no one asked for
- error handling for impossible or irrelevant scenarios
- large rewrites when a small patch solves the issue

If a solution feels much larger than the problem, simplify before continuing.

## Ambiguity Rules

Ask a question when:

- the answer changes the implementation
- several interpretations are plausible
- the task could affect data, security, money, production, or user trust
- the user appears to be asking for something risky or irreversible

Do not ask a question when:

- the task is low-risk and the intended behavior is obvious
- the project already establishes a clear pattern
- a reasonable default can be chosen and explained briefly

## Output Pattern

For complex tasks, use a compact plan:

```markdown
Plan:
1. <step> -> verify: <check>
2. <step> -> verify: <check>
3. <step> -> verify: <check>
```

For simple tasks, respond naturally and proceed.

## Anti-Patterns

Avoid:

- guessing silently when ambiguity matters
- writing code before understanding the request
- overengineering a small task
- changing unrelated files
- refactoring adjacent code as a side quest
- claiming success without verification
- hiding failed or skipped verification
- adding broad flexibility because it "might be useful later"

## Success Criteria

This skill is working when:

- clarifying questions happen before mistakes, not after
- diffs contain only requested or necessary changes
- solutions are smaller and simpler than a speculative rewrite
- implementation choices are tied to explicit assumptions
- verification is performed or the lack of verification is clearly reported
- the final result is practical, minimal, and reliable

