# Coding Rules

Apply these standard coding principles to all development tasks in target projects:

## Core Guidelines

- **Simplicity Over Cleverness**: Code must be straightforward and readable. Avoid advanced magic, single-use abstractions, or premature optimization.
- **Style Alignment**: Fit your code directly into the existing repository's styling and patterns. Do not introduce a new styling scheme or formatting tool without explicit instruction.
- **Maintain Comments**: Preserve all existing comments and documentation unless they are directly invalidated by your modifications.
- **Minimal Diffs**: Touch only the files and lines necessary to fulfill the request. Never perform unrelated cleanups, whitespace reformatting, or dead-code sweeps in surrounding code.
- **Type Safety**: Prefer explicit type annotations (TypeScript for frontend, Python type hints for backend) to improve editor telemetry and reduce runtime bugs.
- **Error Handling**: Implement robust but simple error handling. Always log descriptive errors rather than swallowing exceptions.
- **Modular Design & Single Responsibility**: Do not cram all business logic into a single monolithic file. If a file grows excessively (e.g., exceeding 300–400 lines or mixing concerns like UI views, database queries, and raw algorithmic processing), proactively split it into clean, modular files focused on single responsibilities (e.g., separating audio, video, OCR, template rendering, and orchestration).
- **Clean Repository Structure & Flow**: When breaking down code, structure the repository logically (e.g., placing frontend templates in `templates/`, utilities in `utils/`, and domain logic in dedicated helpers). Ensure that the main application entry point is thin, readable, and clearly acts as the conductor of these modular components, allowing developers to trace the flow of execution effortlessly.
