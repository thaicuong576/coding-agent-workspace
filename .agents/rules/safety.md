# Safety Rules

Ensure security and environment protection by adhering to these safety guidelines:

## Core Boundaries

- **Zero Secret Commits**: Never write or commit secrets, API keys, passwords, bearer tokens, or personal access tokens to the repository or configuration files.
- **Environment Configuration**: Always use environment variables loaded via `.env` or system variables. Copy `.env.example` to create `.env` and instruct the user on missing keys.
- **Safe Command Execution**: 
  - Never execute command strings that contain destructive parameters (e.g., `rm -rf /`, `git reset --hard` on uncommitted files, database drops) without explicit authorization and manual verification of impact.
  - Set `SafeToAutoRun` to `false` for any commands containing operations that alter external infrastructure, deploy code, or modify branch state.
- **Idempotence**: Write scripts, database migrations, and build commands so they are idempotent (safe to run multiple times without corrupting state).
- **In-Place Edits**: When modifying existing code, always edit in-place to avoid deleting files and breaking revision histories.
