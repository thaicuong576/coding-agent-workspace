# Product Scoping & Business Analysis Skills Research

This document analyzes existing local product skills against elite, battle-tested product management, specification, and business analysis skills found in the developer ecosystem.

---

## 1. Local Product Skills (Current State)

Our workspace currently has two specialized product-related capability modules under `.agents/skills/product/`:

1.  **`ba-process/SKILL.md` (Business Analysis Process)**:
    *   **Purpose**: Clarify requirements *before* implementation.
    *   **Structure**: 8-point analysis: Goal, Input, Output, Actors, Process Flow, Business Rules, Acceptance Criteria, Edge Cases.
    *   **Guidance**: Enforces MVP-First separating V1 (smallest working version) from V2 (automation) and V3 (advanced).
2.  **`delivery-mode/SKILL.md` (Delivery Mode Decision)**:
    *   **Purpose**: Determine optimal application architecture.
    *   **Structure**: Framework for deciding between CLI/Script, Backend Service, Frontend App, or Hybrid Systems.
    *   **Guidance**: "CLI-first" for experimental workflows; "Service" for proven backend processes; "App" for user interface requirements; "Hybrid" for heavy background workers.

---

## 2. Elite Product Skills Discovered on GitHub

Through ecosystem scouting, we have discovered three main repositories containing specialized agentic skills for product development:

### A. Production-Grade Engineering Specs (`addyosmani/agent-skills`)
Focuses on specification gates, planning, and task sizing:

*   **`spec-driven-development`**:
    *   *Concept*: Enforces writing a structured specification before coding.
    *   *Key Action*: Mandatory early listing of assumptions (`ASSUMPTIONS I'M MAKING: ... Correct me now or I'll proceed`).
    *   *Key Action*: Reframes vague requirements into concrete success criteria (e.g., reframing "make it faster" to specific LCP and payload load targets).
    *   *Workflow*: Specify → Plan → Tasks → Implement (with human gates between).
*   **`planning-and-task-breakdown`**:
    *   *Concept*: Splits work into vertical slices instead of horizontal components.
    *   *Key Action*: Orders tasks bottom-up by the dependency graph, sizing tasks using standard metrics (XS/S/M/L) and inserting checkpoints.
*   **`idea-refine`**:
    *   *Concept*: Refines raw ideas using divergent (expansion) and convergent (evaluation) thinking.
    *   *Key Action*: Outputs a structured One-Pager that includes a highly valuable "Not Doing (and Why)" list to enforce focus.

### B. Execution & Backlog Engineering (`phuryn/pm-skills` by Paweł Huryn)
Highly execution-focused, covering requirements templates and risk analysis:

*   **`create-prd`**: Generates a standard Product Requirements Document (PRD) across 8 sections (from problem statement to release strategy).
*   **`user-stories`**: Focuses on authoring INVEST-compliant user stories (Independent, Negotiable, Valuable, Estimable, Small, Testable) with a 3 C's structure (Card, Conversation, Confirmation).
*   **`wwas`**: Formulates backlog items in a highly structured "Why-What-Acceptance" format.
*   **`pre-mortem`**: Orchestrates a pre-mortem risk analysis workshop on PRDs or plans to detect blocker paths before coding.

### C. Story Mapping & Splitting (`deanpeters/Product-Manager-Skills` by Dean Peters)
Focuses on agile splitting, mapping, and experiment design:

*   **`user-story-splitting`**: Details 8 proven splitting patterns (by workflow step, by business rule, by data variation, etc.) to break down massive tasks.
*   **`epic-breakdown-advisor`**: Implements 9 patterns to split epics into independent user stories.
*   **`pol-probe-advisor`**: Recommends the right prototype type (Feasibility, Task-Focused, Narrative, Synthetic, or Vibe) for technical spikes.
*   **`opportunity-solution-tree`**: Structures opportunities and maps them directly to technical experiments.

---

## 3. Gap Analysis & Proposed Upgrades

Our local `ba-process` is highly effective but lacks:
1.  **Assumptions Gate**: High-risk assumptions are not explicitly called out and approved by the user before writing specs.
2.  **User Story Splitting Guidelines**: We lack explicit, systematic heuristics for dividing large tasks into XS/S/M/L units.
3.  **Adversarial Risk Scoping**: We don't have a formal pre-mortem check for product specs.

### Action Plan:
We should import and adapt:
*   `spec-driven-development` and `planning-and-task-breakdown` (from Addy Osmani) as canonical engineering skills to support our boot protocol.
*   `user-story-splitting` (from Dean Peters) and `pre-mortem` (from Paweł Huryn) to upgrade our local `ba-process` capability.
