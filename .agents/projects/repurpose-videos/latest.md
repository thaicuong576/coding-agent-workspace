# Latest Status: repurpose-videos

**Last Updated**: 2026-06-09 10:55 +07:00

## Current Status: Local Docker Service Active, V3 Completed

The `repurpose-videos` project is active at:

```text
D:\eddie-projects\personal-projects\repurpose-videos
```

The service is currently running inside a Docker container on port `8000`.

## Current Layout

```text
app.py                    FastAPI dashboard, auth, health, job API
repurpose.py              CLI entry point and pipeline orchestrator
requirements.txt          Python dependencies
pipeline/audio.py         Audio extraction, Demucs separation, Siren TTS, TTS mixing
pipeline/subtitles.py     Whisper ASR, LLM translation, SRT parsing/wrapping
pipeline/video.py         OCR detection, subtitle inpainting, FFmpeg render/mux
templates/dashboard.html  Browser dashboard
docs/VPS_DEPLOY.md        VPS deployment guide
docs/PROJECT_STATE.md     Current architecture/state snapshot
tools/dev/                Manual diagnostics and one-off probes
data/                     Runtime job metadata, ignored
uploads/                  Runtime upload staging, ignored
outputs/                  Runtime rendered videos, ignored
temp*/                    Runtime scratch folders, ignored
```

## Deployment Readiness Added

- Added `pipeline/` package and moved processors into:
  - `pipeline/audio.py`
  - `pipeline/subtitles.py`
  - `pipeline/video.py`
- Updated imports in `repurpose.py` and dev probes.
- Added `/health` endpoint.
- Added optional API-key auth with `SERVICE_API_KEY`.
  - Supports `X-API-Key`.
  - Supports `Authorization: Bearer <key>`.
  - Supports `?api_key=` for download links from the dashboard.
- Dashboard now prompts for the service API key and stores it in browser localStorage.
- Added configurable CORS and trusted hosts:
  - `ALLOWED_ORIGINS`
  - `ALLOWED_HOSTS`
- Added upload and remote download limits:
  - `MAX_UPLOAD_MB`
  - `MAX_REMOTE_DOWNLOAD_MB`
- Added persistent job metadata in `data/jobs.json`.
- Added configurable runtime paths:
  - `REPURPOSE_DATA_DIR`
  - `REPURPOSE_UPLOAD_DIR`
  - `REPURPOSE_OUTPUT_DIR`
- Added `.dockerignore`.
- Updated Dockerfile:
  - non-root `appuser`
  - healthcheck
  - Python runtime env flags
  - app/cache/runtime directories owned by app user
  - **Fixed dependencies**: Swapped deprecated `libgl1-mesa-glx` for `libgl1` to support Debian trixie bases.
- Updated Docker Compose:
  - env-driven service port
  - persistent `data`, `uploads`, and `outputs` mounts

## Current Git State in Target Repo

Branch:

```text
v3...origin/v3
```

Modified tracked files:

```text
.env.example
.gitignore
Dockerfile
README.md
app.py
docker-compose.yml
repurpose.py
requirements.txt
```

Untracked intended files:

```text
.dockerignore
docs/PROJECT_STATE.md
docs/VPS_DEPLOY.md
docs/refactoring_plan.md
docs/siren_talks_documentation.md
pipeline/
templates/
tools/
```

Ignored runtime/local files:

```text
.env
.venv/
```

## Verification Run

From `D:\eddie-projects\personal-projects\repurpose-videos`:

```powershell
$files = rg --files -g '*.py'
.venv\Scripts\python.exe -m py_compile @($files)
```

Result: passed with no output.

```powershell
.venv\Scripts\python.exe repurpose.py --help
```

Result: passed; CLI options printed successfully.

FastAPI TestClient auth smoke:

```text
health 200
jobs_no_key 401
jobs_x_key 200
jobs_bearer 200
```

Docker Compose validation & Local Container Boot:

```powershell
docker compose up --build -d
```

Result: Passed. Successfully built and running `repurpose-service` container.

Live container HTTP smoke on `127.0.0.1:8000`:

```text
health=200 (status: ok, service: Douyin Repurpose Service, auth_enabled: false)
```

Stale old processor imports check:

```powershell
rg "audio_processor|subtitle_processor|video_processor" -n .
```

Result: no matches outside historical docs after docs were updated.

A full end-to-end sample video run was successfully executed by the user on 'video test 2_repurposed.mp4' and verified via frame extraction.

## Remaining Open Items

- [x] Run a fresh end-to-end sample through CLI and dashboard.
- [x] Launch and run the microservice inside a Docker container.
- [ ] Connect and test from n8n workflows.
- [ ] Review and commit the intended V3/deploy-readiness files.
- [ ] Decide whether `tools/dev/` should stay in the production repository long-term.
- [ ] Add GPU-specific deployment notes if deploying Whisper/EasyOCR/Demucs with NVIDIA acceleration.
- [ ] Address TTS duration mismatch for long subtitle cues.
- [ ] Add static region removal for top/corner watermarks.
- [ ] Improve temporal consistency for inpainting on motion-heavy footage.
