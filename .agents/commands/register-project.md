# Command: Register Project

This command registers a new target repository, folder, or codebase as a first-class project in the workspace registry.

---

## Purpose

Used whenever a user points to a new repository, folder, local path, GitHub URL, or requests to "work on this project", "point to this repo", or "open this codebase". This ensures every target project has a registered configuration pointer, structured handoffs, and session logs.

---

## Workflow

### Step 1: Identify Project Name & Slug
1. Extract the name of the project from the path or repository URL.
2. Derive a URL-safe lowercase slug (e.g. `/my-cool-project` ➔ `my-cool-project`).

### Step 2: Check Existing Registration
1. Verify if `projects/<project-slug>/config.json` already exists.
2. If it exists, verify if the path matches the registered value. If it matches, set it as the active project in `.agents/state.json` and skip to Step 5.

### Step 3: Initialize from Template
1. If the project configuration is missing, copy `.agents/projects/_template.json` to `.agents/projects/<project-slug>/config.json` (creating the folder `.agents/projects/<project-slug>/` first).
2. Populate the metadata fields:
   - `name`: Human-readable name.
   - `slug`: The derived project slug.
   - `path`: The absolute path to the local repository.
   - `repo_url`: The repository origin remote URL (if git repository).
   - `status`: Set to `"active"`.

### Step 4: Inspect Target Repo
Shift context (or run read/search operations) to inspect the target repository's files:
1. **Framework & Stack detection**: Read `package.json`, `requirements.txt`, `Cargo.toml`, `go.mod`, etc. to identify languages and frameworks.
2. **Commands**: Detect setup instructions (e.g. `npm install`, `pip install -r requirements.txt`). Identify how to run tests, dev servers, and build files.
3. **Env files**: Check for `.env.example` or template config files.
4. **Database**: Detect DB drivers, schemas, or container setups.
5. Populate the matching properties under `stack`, `commands`, and `env` in the JSON descriptor. Update `last_updated` to the current date.

### Step 5: Initialize Folder Structure & Session Log
Create the dedicated project-scoped directories and initial status documents:
1. **Handoffs Folder**: `.agents/projects/<project-slug>/handoffs/`
2. **Sessions Folder**: `.agents/projects/<project-slug>/sessions/`
3. **`latest.md` Handoff**: If `.agents/projects/<project-slug>/latest.md` is missing, write an initial status document:
   ```markdown
   # Latest Status: <project-name>

   ## Current Status
   - Project successfully registered in the cockpit workspace.

   ## Active Task
   - Initial onboarding and repository audit.

   ## Next Steps
   - Inspect code structure and run baseline compilation tests.
   ```
4. **Initial Session File**: Always create the first session trace log file under `.agents/projects/<project-slug>/sessions/YYYY-MM-DD-HHMM.md` (e.g. `.agents/projects/bds/sessions/2026-06-05-0158.md`). Ensure it contains the following structure:
   ```markdown
   # Session: <project-slug> — YYYY-MM-DD HH:MM

   ## Trigger
   Why this session started (e.g., User pointed to target directory / Register Project workflow started).

   ## Actions Taken
   * Created project pointer config.json
   * Updated state.json
   * Created handoffs and sessions folders
   * Created latest.md
   * Inspected repo stack
   * Detected commands

   ## Files Created / Modified
   * `.agents/projects/<slug>/config.json`
   * `.agents/projects/<slug>/latest.md`
   * `.agents/projects/<slug>/sessions/YYYY-MM-DD-HHMM.md`
   * `.agents/state.json`

   ## Current Status
   Short summary.

   ## Next Actions
   Concrete next steps.
   ```
   Do not stop at creating the sessions directory. Register Project must always create a first session file.

### Step 6: Set Active Project
1. Update `.agents/state.json` to set the `"active_project"` field to the registered `<project-slug>`.
2. Add the slug to the `"known_projects"` array if not already present.

### Step 7: Confirm Registration
Confirm to the user that the project has been registered successfully, providing a summary of the detected stack and commands.
