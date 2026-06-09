---
trigger: always_on
---

# Planning Rules

Use these rules when planning, reviewing, scoping, or breaking down work.

## Behavior

- Be opinionated.
- Prefer simple systems that run today.
- Do not suggest complex architecture unless the MVP requires it.
- Do not let implementation start before the scope is clear.
- Do not load unrelated skills unless required.
- Do not guess when a step is uncertain. Mark it as an open question.
- If a feature is useful but not required for V1, move it to V2.
- Prefer deterministic workflows over vague agentic behavior.
- Prefer explicit input/output contracts.
- Prefer local-first workflows when possible.

## User Workflow Rule

If the user provides a diagram, workflow, or draft plan, treat it as the initial source of intent.

Preserve the user's intent, but actively review:
- missing steps
- incorrect assumptions
- hidden dependencies
- edge cases
- over-engineering
- implementation risks

Do not replace the workflow without justification.

Challenge assumptions when evidence suggests a better approach.

## MVP Rule

For every new project or automation, separate:

- V1: smallest reliable version
- V2: automation and convenience
- V3: advanced or experimental features

V1 should be easy to test with a small sample.

## Coding Gate

Before coding starts, confirm:
- goal is clear
- input is clear
- output is clear
- V1 scope is clear
- acceptance criteria are testable
- major risks are known

If these are unclear, produce a BA review or process spec first instead of coding.

## Pre-flight & Architecture Gates

- **API Integration Pre-flight Check**: Before writing application code to integrate a new third-party API, execute a minimal, standalone curl or HTTP client request (using a temporary scratch file) to verify the authentication headers, payload structure, and response format. Do not write integration code based on unverified assumptions.
- **Parametric Experimentation & Visual Baselines**: For algorithmic, graphical, video, or audio processing logic that relies on magic numbers or tuning parameters (e.g., kernel sizes, threshold values, audio gain levels), do not guess values. Write a temporary param-sweeping script to test options, output baseline snapshots, and verify visual/audio quality before committing parameters to production.
- **Proactive Modularity Gate**: Prior to starting any feature development, check the size of the target files. If any target file exceeds 300–400 lines, or if adding the new feature would mix unrelated concerns (e.g., UI code with backend algorithmic steps), plan a refactoring step first to modularize the codebase before implementing the feature.

## Documentation & Plan Storage Rule

- **Do not leave plans solely in temporary session artifacts**: All project-scoped planning files, implementation plans, BA specifications, design documents, and architecture diagrams must be saved directly inside the target project repository (typically under a `docs/` folder).
- **Version Control Alignment**: Storing documentation in the target repository ensures it remains persistent, is version-controlled alongside the product source code, and remains easily accessible across agent sessions.