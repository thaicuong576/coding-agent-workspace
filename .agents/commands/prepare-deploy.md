# Command: prepare deploy

Use this command when building production packages, assembling container structures, or configuring environment targets.

## Action Steps

### 1. Load Context
- Load core skills:
  - [.agents/skills/infra/devops.md](file:///d:/eddie-agents/coding-agent-workspace/.agents/skills/infra/devops.md)
  - [.agents/rules/safety.md](file:///d:/eddie-agents/coding-agent-workspace/.agents/rules/safety.md)

### 2. Inspect
- Shift context to the target project.
- Inspect production configuration manifests (`Dockerfile`, `docker-compose.yml`, Vercel config, etc.).
- Validate `.env.example` lists all production variables.

### 3. Output
- Verify the build package compiles without errors (`npm run build`, Docker container compiles locally).
- Present a list of required production env variables.
- Detail the deployment steps or commands for the operator (Eddie) to execute.

## Boundaries & Warnings
- **Do not** execute live deploys unless explicitly requested and approved.
- **Do not** write credentials to deployment configurations.
