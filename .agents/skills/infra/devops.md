# DevOps & Environment Config Skill

Use this skill when containerizing applications, setting up environments, managing build chains, or configuring infrastructure.

## Configuration Guidelines

- **Containerization (Docker)**:
  - Use official, lightweight base images (e.g., `python:3.11-slim`, `node:20-alpine`).
  - Use multi-stage builds to separate compile dependencies from runtime layers, keeping final image sizes small.
  - Never run containers as `root` in production; create a dedicated user (`USER node` or equivalent).
  - Expose correct port configurations and define `HEALTHCHECK` instructions.
- **Docker Compose**:
  - Keep services decoupled (separate app, db, worker, redis).
  - Use named volumes for persistent data folders (e.g. database directories).
  - Bind environment parameters to system environment variables, preventing hardcoded secrets.
- **Environment Management**:
  - Always verify that a template config file (`.env.example`) exists in target repos.
  - Document all required environment keys, default values, and description text in the example files.
  - Do not commit `.env` files to git. Include them in `.gitignore`.
- **Hosting & CI/CD**:
  - Keep deployment manifests (Vercel config, Fly.io `fly.toml`, Railway configurations) in the target repo's root directory.
  - Keep deployment processes declarative and automatable.
