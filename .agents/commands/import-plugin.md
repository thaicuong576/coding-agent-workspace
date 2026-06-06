# Command: import plugin component

Use this command to selectively move an audited component (a skill, command, tool, or config) from an untrusted plugin source to the canonical, trusted workspace folders.

## Action Steps

### 1. Load Context
- Load workspace constraints and coding rules:
  - [.agents/rules/repo-boundaries.md](file:///d:/eddie-agents/coding-agent-workspace/.agents/rules/repo-boundaries.md)
  - [.agents/rules/coding.md](file:///d:/eddie-agents/coding-agent-workspace/.agents/rules/coding.md)
- Verify that the target component has been recommended for import in `.agents/plugins/<plugin-name>/notes.md`.

### 2. Copy and Rewrite
- **Copy**: Copy the source file from `.agents/plugins/<plugin-name>/source/...` to the appropriate workspace location:
  - Skills -> `.agents/skills/<category>/<skill-name>.md`
  - Commands -> `.agents/commands/<command-name>.md`
- **Rewrite**: Rewrite the file contents to fit the workspace style:
  - Strip out any plugin-specific rules, metadata, or conflicting terminology.
  - Conform to standard workspace markdown conventions.
  - Remove all telemetry, credentials, or custom execution wrapper engines.
  - Align text styles with existing workspace docs.

### 3. Log
- Update `.agents/plugins/<plugin-name>/notes.md`:
  - Mark the component as "Approved & Imported" with the import timestamp.
  - Update any details on custom changes made during the rewrite.

## Boundaries & Warnings
- **Workspace Ownership**: Once imported, the workspace version is the sole canonical source. Future plugin updates must **never** automatically overwrite workspace files.
- **Selective Only**: Never import entire plugins at once. Import strictly on a per-component basis.
