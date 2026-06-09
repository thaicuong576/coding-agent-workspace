# BA Process & Specification Skill

## Purpose

Use this skill when turning a vague product idea, feature request, automation idea, or workflow into a clear, implementation-ready process specification.

This skill is not for coding directly. It is for clarifying what should be built, why, and how we'll know it's done before implementation begins.

## When to Use

Use this skill when the user asks to:
- build a new product or automation flow
- analyze a process or feature request
- convert an idea into implementation steps
- review an existing workflow
- identify missing requirements
- create an MVP plan
- define acceptance criteria
- split a large project into phases

## Core Principle: Spec-First & Doubt-Driven

A user-provided workflow or idea is the initial source of intent, not absolute implementation truth. 
Code without a spec is guessing. We write a structured specification to surface misunderstandings and validate assumptions *before* code gets written.

### The Assumptions Gate
Before writing any specification content, explicitly list your assumptions:
```
ASSUMPTIONS I'M MAKING:
1. [Tech stack assumption / dependency]
2. [Input/output format assumption]
3. [User experience / execution model assumption]
→ Correct me now or I'll proceed with these.
```
Do not silently fill in ambiguous requirements.

### Reframing Requirements
Translate vague requirements into concrete, testable success criteria:
- *Vague*: "Make the page load fast." -> *Reframed*: "Initial page load completed under 500ms, CLS < 0.1."
- *Vague*: "Support subtitles." -> *Reframed*: "Detect Chinese and English subtitles, remove drop-shadows, and output a clean MP4."

---

## BA Workflow (The 8-Point Analysis)

For every Business Analysis and product specification task, clarify these 8 points:

### 1. Goal
Define the business or product goal in 1-2 sentences. 
- Who is it for?
- What problem does it solve?
- What does success look like?

### 2. Input
List what the system receives.
Include:
- files
- URLs
- user parameters
- credentials
- configuration
- manual decisions

### 3. Output
List what the system must produce.
Include:
- final deliverables
- intermediate artifacts
- logs
- reports
- files for manual review

### 4. Actors
Identify who or what participates in the process.
Examples:
- user/operator
- system pipeline
- external API
- database
- model
- browser automation
- renderer
- reviewer

### 5. Process Flow & Vertical Slicing
Map the end-to-end flow from input to output.

**Rule**: Slice vertically, not horizontally. Do not build all databases, then all APIs, then all UIs. Build one complete vertical user path at a time (e.g., "User can register" -> schema + API + UI).

**Visual Mapping**:
Always include a visual diagram of the workflow. For simple linear flows, use clean ASCII arrow diagrams. For complex conditional logic, API interactions, or parallel pipelines, use standard **Mermaid diagrams** (using fenced code blocks with language `mermaid` to render cleanly in the UI).

For each step in the flow, define:
- Step name and purpose
- Input and Output
- Dependencies
- Possible failures

### 6. Business Rules
Define constraints and invariants the system must respect.
Examples:
- preserve original timing
- never overwrite source files
- allow local file fallback
- keep credentials in `.env`
- require user confirmation before destructive actions

### 7. Acceptance Criteria
Define how we know a task is done. Use specific, testable conditions (e.g., "final MP4 exists in the output folder", "audio track is synchronized"). Avoid subjective terms ("clean", "fast", "good UX").

### 8. Edge Cases & Pre-Mortem Risk Check
List failure modes and unusual inputs (missing inputs, API timeouts, invalid credentials, empty transcripts) and run a **Pre-Mortem**:
- "If this project fails during implementation, what would be the most likely cause?"
- List the top 2-3 risks and their mitigation strategies.

---

## Task Breakdown & Sizing Guidelines

Decompose the specification into small, verifiable tasks:

### Task Sizing Rubric
- **XS**: Single function/config change (e.g., add a validation rule). Fits in ~10 mins.
- **S**: One component or endpoint (e.g., add a new API route). Fits in ~30 mins.
- **M**: One feature slice (e.g., subtitle extraction flow). Fits in ~1 hour.
- **L**: Multi-component feature. **Too large — must be split.**
- **XL**: Touches multiple subsystems. **Must be split.**

### Splitting Patterns
If a task touches more than 5 files, has more than 3 acceptance criteria, or takes over 2 hours, split it using one of these patterns:
1. **By Workflow Step**: Break a multi-step flow into individual steps (e.g., Split "Fetch and Transcribe" into "Task 1: Fetch" and "Task 2: Transcribe").
2. **By Business Rule**: Implement the happy path first, then add business rules/constraints in subsequent tasks.
3. **By Data Variation**: Build for a single format first (e.g., MP4), then add support for others (e.g., MOV, AVI).

### Checkpoints
Insert explicit verification checkpoints after every 2-3 tasks:
```markdown
### Checkpoint: [Phase Name]
- [ ] All unit tests pass
- [ ] Build succeeds without errors
- [ ] Core flow runs end-to-end
- [ ] Human review before proceeding
```

---

## MVP-First Rule

Always reduce the first implementation to the smallest working version.

### V1 — MVP
Must be simple, reliable, and testable.
Prefer:
- local files over remote URLs
- manual config over auto-detection
- simple masking over complex inpainting
- deterministic scripts over agentic guessing

### V2 — Automation
Add convenience features after V1 works.
Examples:
- downloader
- auto-detection
- batch processing
- better UI
- API service

### V3 — Advanced
Add complex or experimental features later.
Examples:
- inpainting
- full auto-repair
- model-based quality scoring
- multi-agent orchestration

### The "Not Doing" List
Every MVP plan must contain a **Not Doing (and Why)** section. Focus is about saying "no" to good ideas to ensure V1 is delivered.

---

## Spec Template

Save specifications directly inside the target repository under `docs/specs/[feature-name].md` following this layout:

```markdown
# Spec: [Feature Name]

## Objective
[What we're building, why, and target user]

## Assumptions
- [Assumption 1]
- [Assumption 2]

## Success Criteria (Reframed)
- [Success Criterion 1]
- [Success Criterion 2]

## 8-Point Analysis
[Goal, Input, Output, Actors, Flow, Business Rules, Acceptance Criteria, Edge Cases]

## MVP Scope & Slicing
[V1 MVP details + Not Doing List]

## Task List & Checkpoints
- [ ] Task 1: [XS/S/M] ...
- [ ] Task 2: [XS/S/M] ...
### Checkpoint
- [ ] Verification steps...
```

## Review Mode

When reviewing an existing plan, check for:
1. Unstated assumptions or vague requirements.
2. Horizontal slicing (recommend vertical slices instead).
3. Overly large tasks (apply story-splitting patterns).
4. Missing checkpoints or verification steps.
5. Lack of a "Not Doing" list.

## Completion Standard

A BA/specification task is complete only when:
- The Assumptions Gate is passed and requirements are reframed.
- The 8-Point Analysis is documented.
- Vertical slices and tasks are sized (XS/S/M only).
- A "Not Doing" list is defined.
- The spec is saved to the target repository's `docs/` folder.