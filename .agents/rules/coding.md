# Coding Rules

Apply these standard coding principles to all development tasks in target projects:

## Core Guidelines

- **Simplicity Over Cleverness**: Code must be straightforward and readable. Avoid advanced magic, single-use abstractions, or premature optimization.
- **Style Alignment**: Fit your code directly into the existing repository's styling and patterns. Do not introduce a new styling scheme or formatting tool without explicit instruction.
- **Maintain Comments**: Preserve all existing comments and documentation unless they are directly invalidated by your modifications.
- **Minimal Diffs**: Touch only the files and lines necessary to fulfill the request. Never perform unrelated cleanups, whitespace reformatting, or dead-code sweeps in surrounding code.
- **Type Safety**: Prefer explicit type annotations (TypeScript for frontend, Python type hints for backend) to improve editor telemetry and reduce runtime bugs.
- **Error Handling**: Implement robust but simple error handling. Always log descriptive errors rather than swallowing exceptions.
