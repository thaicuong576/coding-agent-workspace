# Skills (What I Know)

This folder houses the technical knowledge bases and guidelines (skills) available to coding agents.

## Definition

- **Skill = What I know**: A skill defines technical domain knowledge, styling rules, deployment routines, and diagnostic workflows. Unlike a Persona (which defines identity), a Skill provides specific architectural standards or domain knowledge for a specific domain.

---

## Capability Hierarchy

Skills are organized into subcategories matching our engineering disciplines:

### 1. [Design (skills/design/)](file:///d:/eddie-agents/coding-agent-workspace/.agents/skills/design/)
Contains design, branding, and visual-taste guidelines:
- **`design-taste-frontend/`**: The core anti-slop visual guidance for premium layouts and styling.
- **`brandkit/`**: Logo and brand identity guidelines.
- **`image-to-code-skill/`**: Copying visual layout screenshots into CSS/HTML.
- **`imagegen-frontend-web/` & `imagegen-frontend-mobile/`**: Generating design reference mockups.
- **Taste Variants**: `brutalist-skill`, `gpt-tasteskill`, `minimalist-skill`, `redesign-skill`, `soft-skill`, `stitch-skill`, `taste-skill`.

### 2. [Frontend (skills/frontend/)](file:///d:/eddie-agents/coding-agent-workspace/.agents/skills/frontend/)
- **[frontend.md](file:///d:/eddie-agents/coding-agent-workspace/.agents/skills/frontend/frontend.md)**: Coding conventions for React, Next.js, TypeScript, and premium Vanilla CSS styling.

### 3. [Backend (skills/backend/)](file:///d:/eddie-agents/coding-agent-workspace/.agents/skills/backend/)
- **[backend.md](file:///d:/eddie-agents/coding-agent-workspace/.agents/skills/backend/backend.md)**: Guidelines for FastAPI/Node.js validation patterns, RESTful API design, database ORMs, and authorization.

### 4. [Infra (skills/infra/)](file:///d:/eddie-agents/coding-agent-workspace/.agents/skills/infra/)
- **[devops.md](file:///d:/eddie-agents/coding-agent-workspace/.agents/skills/infra/devops.md)**: DevOps rules, multi-stage Docker build files, and docker-compose configurations.
- **`service-packaging/`**: Converting a script, repository, workflow, or tool into a deployable backend service.

### 5. [Engineering (skills/engineering/)](file:///d:/eddie-agents/coding-agent-workspace/.agents/skills/engineering/)
- **[engineering-judgment.md](file:///d:/eddie-agents/coding-agent-workspace/.agents/skills/engineering/engineering-judgment.md)**: Minimalist code decisions and karpathy-style coding discipline.
- **[debugging.md](file:///d:/eddie-agents/coding-agent-workspace/.agents/skills/engineering/debugging.md)**: Diagnostic logs and fault isolation steps.
- **[code-review.md](file:///d:/eddie-agents/coding-agent-workspace/.agents/skills/engineering/code-review.md)**: Code review checklists prior to committing code.
- **`output-skill/`**: Enforcing complete, non-truncated code outputs.

### 6. [Data (skills/data/)](file:///d:/eddie-agents/coding-agent-workspace/.agents/skills/data/)
- **[scraping.md](file:///d:/eddie-agents/coding-agent-workspace/.agents/skills/data/scraping.md)**: Web scraping, crawling, and browser automation using Playwright, Crawlee, Firecrawl, Browser Use, and Stagehand in Python or Node.js.

### 7. [Product (skills/product/)](file:///d:/eddie-agents/coding-agent-workspace/.agents/skills/product/)
- **`ba-process/`**: Business Analysis (BA) and product analysis skill defining standard frameworks (goals, inputs/outputs, actors, steps, dependencies, acceptance criteria, and edge cases) for scoping features or projects.
- **`delivery-mode/`**: Deciding whether a project should be built as a CLI/Script, Backend Service, Frontend App, or Hybrid System.

### 8. [Research (skills/research/)](file:///d:/eddie-agents/coding-agent-workspace/.agents/skills/research/)
Tools and procedures that govern how the workspace discovers, evaluates, and imports new technical skills safely:
- **`knowledge-gap-analysis.md`**: Classifies capability deficiencies.
- **`github-repo-discovery.md`**: Plans searches, generates queries, prioritizes sources, and collects candidates.
- **`repository-evaluation.md`**: Vets reference repositories and plugins.
- **`knowledge-import.md`**: Safely ingests knowledge into canonical skills.

