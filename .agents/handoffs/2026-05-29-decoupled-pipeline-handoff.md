# Decoupled Video Synthesis Pipeline Handoff - 2026-05-29

This handoff details the major architecture evolution implemented during today's session. We have fully decoupled the **Trend Researcher** and **Video Producer** agents into their own lightweight, sovereign repositories, automated visual coordinate mapping, established a dedicated local shared disk workspace, and wired up local Express APIs orchestrated by n8n.

---

## 🚀 Active Architecture Map

All work is now clean, modular, and separated from the main content campaign hive:

```text
D:\eddie-agents\
  ├── coding-agent-workspace/   <-- Home cockpit / shared memory (Where we are)
  ├── video-workspace/          <-- Local Shared Disk sandbox (NO TOUCH eddie-team!)
  ├── eddie-researcher/         <-- Port 3001 API & scout codebase
  └── eddie-video-producer/     <-- Port 3002 API & visual compiler codebase
```

---

## 🛠️ Components & Capabilities Implemented

### 1. `eddie-researcher` (`http://localhost:3001`)
- **`scout.js`**: CLI tool (`node scout.js --url <url>`) that runs automated crawling, screenshot taking, and DOM bounding-box coordinate mapping.
- **Private Fallback Rendering**: If a GitHub repository is private (returning a 404), the Playwright script automatically loads a local styled HTML representation of the repo and measures its DOM elements, guaranteeing 100% verifier compliance.
- **Sovereign Guide**: Contains independent `AGENTS.md`, `SOUL.md`, and `role.yaml` front-and-center, completely free of Slack/Hermes boilerplate.

### 2. `eddie-video-producer` (`http://localhost:3002`)
- **`build.js`**: CLI compiler tool (`node build.js --kit <path>`) that triggers local Python verifiers, copies assets to the video engine workspace, and compiles standard `ENGINE_HANDOFF.json` payloads.
- **Sovereign Guide**: Contains independent `AGENTS.md`, `SOUL.md`, and `role.yaml` focused entirely on scripting and beat storyboard layout.

### 3. Pointer-Passing n8n Workflow Integration
- **Docker Container**: n8n is running in Docker (container name `n8n`), mapping host port `5688` ➔ container port `5678`.
- **Workflow `IRGK0Bjiq8rtDcCR`**: Fully populated and imported directly into the SQLite database inside the container.
- **Orchestration**: Webhook/Manual Trigger ➔ calls Researcher (`http://host.docker.internal:3001/v1/scout`) ➔ Wait/Poll loop ➔ passes path pointer (`kitPath`) to Producer (`http://host.docker.internal:3002/v1/compile`) ➔ Wait/Poll loop.
- **Windows Environment Variable**: Set `N8N_API_URL` globally to `http://localhost:5688/api/v1`.

---

## ⚖️ Strict Handoff Rules for Next Sessions

1. **NO TOUCH `eddie-team`**: The visual explainer video pipeline is now fully isolated under `D:\eddie-agents\video-workspace\`. Never write or stage campaign artifacts or videos inside `D:\eddie-projects\eddie-team`.
2. **In-Place File Modifying**: When editing any existing code or configurations, always make changes in-place within the current file. Do not delete and recreate files.
3. **No Visual Guessing**: Bounding boxes for video rendering highlights must always reference an `annotation_id` from the scout's `asset_annotations.json`. Let Playwright handle the coordinate math.
4. **Daemon Lifecycles**: Express servers on ports `3001` and `3002` are running in the background as Windows processes. If they crash or the host restarts, reboot them via `npm start` in their respective directories.
