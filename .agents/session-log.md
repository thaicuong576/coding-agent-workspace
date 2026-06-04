# Session Log

## 2026-06-03

- **Douyin Subtitle Removal & Translation Pipeline Optimization:**
  - **VSR Coordinate-Based ROI Subtitle Filtering:** Added coordinate overlap checks and `RapidOCROutput` dataclass checks in `remove-subtitle/backend/processor.py` to filter out non-subtitle text like watermarks and screen noise, ensuring a clean transcription output.
  - **Custom LLM Endpoint & Kimi-k2.6 Translation:** Refactored `TranslatorService` in `repurpose-videos` to automatically map the Ramclouds endpoint to `kimi-k2.6` model. Implemented streaming completion processing (`stream=True`) to collect `delta.content` chunks while ignoring reasoning thought blocks (`reasoning_content`), resolving proxy chunking issues.
  - **Flexibility Updates:** Updated `WhisperService` base URL fallback logic to default to `OPENAI_BASE_URL` when `WHISPER_BASE_URL` is omitted.
  - **End-to-End Pipeline Verification:** Executed the entire pipeline (`clean_subtitles`, `transcribe`, `translate`, `generate_tts`, `render_final`) successfully, rendering a final clean video (`final.mp4`) with burned-in translated Vietnamese subtitles and synthesized voiceover.
- **JustFactor Alternative Data Engine LLM Integration:**
  - **Kimi LLM Integration:** Tapped backend settings (`LLM_BASE_URL` and `LLM_API_KEY`) to query Kimi model (`kimi-k2.6`) on the RamClouds proxy for alternative data assessments.
  - **Brace-Free Prompt Design**: Discovered and resolved a 400 Bad Request error by removing curly braces `{}` in the prompt (describing the JSON schema in plain text instead). This prevents upstream Jinja2/format template compilation conflicts.
  - **Scrape & Fallback Optimization**: Removed the traditional registration KYC lookup (`masothue.com`) to keep the Alternative Data Engine focused strictly on digital footprint alternative signals. Configured a 90-second timeout to support deep website crawling, alongside a robust fallback to local rule-based evaluations in case of timeouts.
  - **Chatbot Fix & Server Process Reload**: Resolved a 500 Internal Server Error in the Chatbot endpoint caused by a Windows `UnicodeEncodeError` (when printing Vietnamese text to standard output) by applying safe encoding filters. Optimized the LLM payload format (removing `system` roles and `temperature` fields) to match the RamClouds proxy requirements. Terminated the stale server process (PID 7784) and restarted uvicorn on port 8000 to apply all changes.



## 2026-05-30

- **Universal Assets Webhook API Migration (`NWNN1c55YVgMRQbl`):**
  - Transformed the Daily AI News Video Generator workflow in n8n into a decoupled on-demand assets scout Webhook API (`/webhook/assets-scout`).
  - Permanently removed all 5 hardcoded video compilation nodes to establish a clean boundary where compilation is managed solely by the client agent.
  - Configured `responseMode: lastNode` with a strict `webhookId` definition to enable n8n to synchronously wait for crawling, clean-ups, and downloads to finish before returning.
  - Implemented dynamic try-catch expression protections in the Javascript cleanup blocks to safeguard against node evaluation exceptions on branch changes.
  - Successfully verified end-to-end webhook execution on a live TechCrunch AI story in under 15 seconds, returning a fully detailed resolved kit path JSON payload.

## 2026-05-29

- Added workspace rule: "When editing an existing file, never delete and recreate it; always perform edits in-place within the current file." This ensures maximum safety, preservation of Git history, and protection of concurrent local configurations.
- Implemented and verified the **Split Scout Scope (GitHub Repos vs. AI News)**:
  - Engineered a zero-Playwright, self-healing news crawler routine in `scout.js` that uses pure HTTP calls to retrieve article content.
  - Resolved bot protection walls (like DataDome/Cloudflare) by automatically searching DuckDuckGo HTML for identical syndicated copies on unprotected hosts (verified on a live protected Reuters article).
  - Relaxed verification constraints in `verify_repo_video_kit.py` and `verify_asset_annotations.py` within `eddie-team` to skip screenshot/annotation checks if `"type": "news"`.
  - Configured `build.js` in `eddie-video-producer` to bypass copy pipelines and compile clean, news-tailored `ENGINE_HANDOFF.json` specs for direct live compilation.
- **Inherited High-Signal Discovery Tools from Hermes Trend Researcher:**
  - Researched Hermes' discovery strategy and extracted its key tech/AI discovery sources (Hacker News Algolia search API, TechCrunch RSS, and BBC Technology RSS).
  - Re-engineered `discover.js` in `eddie-researcher` to query these high-signal, paywall-free discovery feeds in parallel to retrieve direct publisher URLs instantly.
  - Bypassed the unstable and heavily obfuscated Google News JavaScript/RPC redirect layer completely.
  - Tested and verified the updated crawler on a live, trending Hacker News article (*"Airfoil" by Bartosz Ciechanowski*), successfully extracting its body, title, description, and primary CDN image via direct pure HTTP, and achieving a 100% green pass on `verify_repo_video_kit.py` and `verify_asset_annotations.py` under 5 seconds!

## 2026-05-28

- Clarified the architecture split: coding-agent workspace is home; project repos are targets.
- Preserved `D:\eddie-projects\eddie-team` by committing and pushing `5b52fd8 Add video producer workflow and repo guide`.
- Created this workspace at `D:\eddie-agents\coding-agent-workspace`.

## 2026-05-28 - Conversation Handoff Memory

Eddie and the coding agent clarified a major architecture mistake Eddie had been feeling for months: `eddie-team` should not be the universal coding-agent home. It is a project repo: the agent-office project for Edide Branding Company. The coding agents need a separate home workspace that can point to many project repos.

Current intended structure:

```text
D:\eddie-agents\coding-agent-workspace
  Coding-agent home, memory, state, project pointers, global rules.

D:\eddie-projects\eddie-team
  Agent-office project repo: company truth, teams, agents, workflows, Hive controller, tools.

D:\eddie-projects\tools\hyperframes-video-engine
  Video render engine repo used by Video Producer.
```

The working mental model is:

```text
coding-agent-workspace = home/cockpit
project repos = target work sites
```

Important emotional/context note: Eddie felt relief when this clicked. He joked that he had been "working wrongly for 3 months." The right response is not to overcorrect or shame the old setup. Treat it as a good evolution: the old setup helped reveal the better architecture.

`eddie-team` was pushed to GitHub before creating this workspace:

```text
Repo: D:\eddie-projects\eddie-team
Remote: https://github.com/thaicuong576/eddie-team.git
Branch: main
Commit: 5b52fd8 Add video producer workflow and repo guide
```

What was committed there:

- Multi-team `hive.py` prompt/controller support.
- Content team remains intact.
- Video team added with one `producer` agent.
- Researcher + Video Producer repo explainer workflow.
- GitHub repo video workflow docs.
- Video QA/verification tools.
- Project-local `AGENTS.md` cleaned and added.
- Runtime/generated files, `.hermes`, `.agents`, env files, video outputs, and local artifacts were ignored.

New coding-agent workspace was initialized locally only:

```text
Repo: D:\eddie-agents\coding-agent-workspace
Commit: 97af423 Initialize coding agent workspace
Remote: none
```

No GitHub repo exists for this workspace yet.

How future coding-agent sessions should start:

1. Open from `D:\eddie-agents\coding-agent-workspace`.
2. Read `AGENTS.md`.
3. Read `.agents/state.json`.
4. Read `.agents/projects/<target>.json`.
5. Then `cd` into the target repo and read its local `AGENTS.md`.

If Eddie asks to work on `eddie-team`, use:

```text
D:\eddie-projects\eddie-team
```

If Eddie asks to work on video rendering or Hyperframes preview, use:

```text
D:\eddie-projects\tools\hyperframes-video-engine
```

Current highest-level next move: keep this workspace as the long-lived coding-agent memory layer, then gradually move any cross-project state out of `eddie-team` and into this workspace. Do not restructure everything immediately unless Eddie asks.

## 2026-05-28 - Shared Agent Identity Correction

Eddie clarified that this workspace is not just for Codex. It should give every coding agent and every coding-agent brain the same shared identity and continuity.

Correct framing:

```text
Eddie coding agent = any coding brain operating from this workspace
Codex = one possible implementation/session of that shared role
Claude/Gemini/local agents = also inherit this workspace identity when opened here
```

Future agents should not read the memory as "be Codex." They should read it as "be Eddie's coding agent, with the shared house style, rules, project pointers, and continuity."

## 2026-05-28 - Workspace Skills/Plugins Structure

Eddie clarified that the point is not just Codex. Other agents will not load `C:\Users\ASUS\.codex\...`, so shared behavior must live in the workspace.

Implemented structure:

```text
.agents/skills/      Canonical shared skills
.agents/plugins/     Canonical shared plugin source
.agents/commands/    Canonical command recipes
.agents/agents/      Canonical subagent profiles
.agents/adapters/    Notes for adapting shared source into runtimes
.codex/              Codex adapter
.claude/             Claude Code adapter
CLAUDE.md            Claude-friendly entrypoint pointing back to AGENTS.md
```

Rule: `.agents/` is source of truth. `.codex/` and `.claude/` are runtime adapter roots. Shared adapter subfolders should be junctions back into `.agents` instead of copied content.

## 2026-05-28 - Superpowers Plugin Migration

Migrated Superpowers from the Codex global cache into workspace-owned plugin source:

```text
Source copied from:
C:\Users\ASUS\.codex\plugins\cache\openai-curated\superpowers\719ed655

Canonical workspace copy:
D:\eddie-agents\coding-agent-workspace\.agents\plugins\superpowers

Runtime adapters:
D:\eddie-agents\coding-agent-workspace\.codex\plugins\superpowers
D:\eddie-agents\coding-agent-workspace\.claude\plugins\superpowers
```

The `.codex` and `.claude` shared adapter subfolders are Windows junctions pointing back into `.agents`, so `.agents` remains the single workspace-owned source:

```text
.codex\commands  -> .agents\commands
.codex\plugins   -> .agents\plugins
.codex\skills    -> .agents\skills

.claude\agents   -> .agents\agents
.claude\commands -> .agents\commands
.claude\plugins  -> .agents\plugins
.claude\skills   -> .agents\skills
```

Copied version: Superpowers `5.1.0`.

Follow-up for runtime activation: uninstall or disable the global Codex Superpowers plugin through Codex plugin management if needed, then reinstall from:

```text
D:\eddie-agents\coding-agent-workspace\.agents\plugins\superpowers
```
