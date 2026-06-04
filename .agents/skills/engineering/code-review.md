# Code Review Skill

Use this skill when auditing existing codebase branches, review requests, or self-checking your changes before final completion.

## Peer & Self-Review Checklist

Ensure all contributions align with the following metrics:

### 1. Functionality & Logic
- Does the code solve the specific problem described?
- Are edge cases handled correctly (null inputs, database timeouts, network failures)?
- Is there any dead code, unused import, or abandoned print/debug statement?

### 2. Design & Architecture
- Is the architecture simple and aligned with the repository's established code patterns?
- Are functions single-purpose and reasonably sized?
- Is there any code duplication that could be easily refactored?

### 3. Styling & Conventions
- Does the code adhere to the language formatting standard (PEP8 for Python, Prettier/ESLint for TS/JS)?
- Are variable, function, and class names clear and descriptive?

### 4. Security & Safety
- Are there any exposed secrets or hardcoded passwords?
- Are external payloads validated and parsed correctly?
- Are database calls secured against injection attacks?

### 5. Tests & Verification
- Are there tests covering the new functionality or fixed bug?
- Did all verification commands (unit tests, compilation checks, builds) finish successfully?
- Is the verification proof output clearly documented in the report?
