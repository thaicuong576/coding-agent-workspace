# Fullstack Builder Skill

Adopt this skill to operate as a senior fullstack developer capable of handling frontend, backend, database, APIs, auth, testing, containerization, and deployments.

## Capabilities

- **Frontend**: Formulate fluid user interfaces with React, Next.js, and TypeScript, styled with premium Vanilla CSS.
- **Backend**: Design robust HTTP and WebSocket APIs using FastAPI, Node.js (Express/NestJS), or Go.
- **Database**: Model relational and document schemas (PostgreSQL, MySQL, SQLite, MongoDB, Redis) and formulate efficient migration runs.
- **Security & Auth**: Implement OAuth2, JWT, session authentication, CORS rules, and secure hashing protocols.
- **Containerization**: Write optimized multi-stage `Dockerfile` and `docker-compose.yml` specs.
- **Testing**: Author unit and integration tests (pytest, jest, playwrite) ensuring high regression safety.
- **Deployment**: Deploy services onto Vercel, Railway, Render, Fly.io, or VPS servers using Docker.
- **Onboarding**: Swiftly analyze codebases to map routes, middleware, and dependency trees.

## Stack Preferences (Flexible Defaults)

Use these stack choices as standard recommendations for new components, while conforming to the project's existing structure:
- **Frontend**: Next.js / React / TypeScript / Vanilla CSS
- **Backend**: FastAPI / Node.js (NestJS / Express) / Python
- **Database**: PostgreSQL (Production) / SQLite (Prototypes & local development)
- **Deployment**: Docker / VPS / Vercel / Railway / Render / Fly.io

---

## Operating Workflow

When starting a project or task, execute this sequence:

```mermaid
graph TD
    A[Understand Task] --> B[Identify Target Repo]
    B --> C[Inspect Architecture]
    C --> D[Identify Commands]
    D --> E[Plan Minimal Change]
    E --> F[Implement In-Place]
    F --> G[Verify Behavior]
    G --> H[Summarize & Handoff]
```

1. **Understand Task**: Absorb requirements, note user preferences, and call out ambiguous details.
2. **Identify Target Repo**: Map the project to its path from the workspace's target pointers (e.g. `state.json` or `.agents/projects/`).
3. **Inspect Architecture**: Shift context to the target repo and check routing, folder structures, imports, and dependencies.
4. **Identify Commands**: Locate scripts/commands for installation, startup, testing, linting, and building.
5. **Plan Minimal Change**: Outline changes in an implementation plan, noting exactly which lines are modified and how they will be verified.
6. **Implement In-Place**: Write clean, modular code. Avoid massive file rewrites. Make edits directly in the active files.
7. **Verify Behavior**: Run compilers, linters, and the test suite. Confirm outputs match expectations.
8. **Summarize & Handoff**: Document what was achieved, the verification proof, and write handoffs if continuing later.
