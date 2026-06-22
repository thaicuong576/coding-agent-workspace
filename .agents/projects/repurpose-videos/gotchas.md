# Gotchas & Lessons Learned: repurpose-videos

_Append project-specific lessons here as they are discovered._

---

## 2026-06-08 — Chinese Subtitle Drop-Shadow Leaves Smear

Single bright-threshold mask (`>180`) misses the thick black drop-shadow/outline around Chinese characters. Left behind as a black smear under new subtitle burn.

**Fix**: Dual-threshold mask — bright mask (`>175`) for white strokes + dark outline mask via `subtract(blurred, gray) > 18`. Merge and dilate with 15×15 ellipse kernel, 2 iterations.

---

## 2026-06-08 — TTS Audio Stream Reuse in FFmpeg

FFmpeg `[2:a]` used twice in filter_complex (for `sidechaincompress` and `amix`) causes silent audio output.

**Fix**: `asplit=2[tts1][tts2]` to split the TTS stream before reuse.

---

## 2026-06-08 — `load_dotenv()` Required in `app.py`

When running via uvicorn, environment variables from `.env` are not loaded unless `load_dotenv()` is explicitly called at the top of `app.py`. Siren API key will silently fail without it.

---

## 2026-06-08 — `iter_bytes()` vs `aiter_bytes()` in async context

`httpx.Response.iter_bytes()` is synchronous. Using it inside `async for` raises `'async for' requires __aiter__ method, got generator`.

**Fix**: Use `response.aiter_bytes(chunk_size=8192)` with `httpx.AsyncClient`.

---

## 2026-06-08 — Kimi-k2.6 Timeout on Subtitle Translation

`kimi-k2.6` (reasoning model) averages 31s for subtitle translation vs 3–6s for non-reasoning models. Under load it exceeds 120s timeout.

**Fix**: Use `MiniMax-M3` or similar non-reasoning model for subtitle translation. Set `LLM_MODEL=MiniMax-M3` in `.env`.

---

## 2026-06-10 — URL Whitespace/Quote Stripping

Client payloads sometimes include leading/trailing spaces or enclosing `'"` quotes around URLs. FastAPI does NOT strip these automatically, causing `400: Only HTTP and HTTPS video URLs are supported`.

**Fix**: Strip `video_url.strip().strip("'\"")` in both `create_repurpose_job` and `download_file`.

---

## 2026-06-10 — Docker Hot-Reload Without Full Rebuild

Rebuilding Docker image from scratch pulls >1.5GB of PyTorch/CUDA layers. For code-only changes, mount source files as volumes.

**Pattern**: Add `app.py`, `repurpose.py`, `pipeline/` as volume mounts in `docker-compose.yml`, then `docker compose down; docker compose up -d`.

---

## 2026-06-20 — Mandatory User Prompts Before Initiating Pipeline Tests

To prevent accidental and costly pipeline executions on CPU (e.g. rendering full videos, running Demucs, or calling LLMs unnecessarily), the agent must prompt the user and confirm parameters before running any test.

When the user asks you to "test", "verify", or "run" the code/pipeline, you **MUST** ask the user to clarify:
1. **Scope of Test**: Do they want to test a specific step (using `--rebuild-step <step>` combined with cache) or run the full pipeline?
2. **Video Orientation**: Are they testing Landscape (16:9) or Portrait (9:16) formats?
3. **External Services**: Do they want to activate the Siren TTS voiceover/Demucs separation or bypass them using empty credentials (`--siren-key="" --siren-voice=""`)?
4. **Use of Cache**: Confirm if they want to reuse `--ref-dir` and `--cache-dir` to save execution time.

Do not run the pipeline until the user confirms these choices. Refer to `d:\eddie-projects\personal-projects\repurpose-videos\docs\testing_and_debugging.md` for standard CLI commands.
