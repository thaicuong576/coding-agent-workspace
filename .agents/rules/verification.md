# Verification Rules

Never claim a task is completed based on "vibes." You must verify your implementation using standard tools:

## Pre-Completion Checklist

1. **Compilation Check**:
   - Python: Run `python -m py_compile <changed-files>` to ensure zero syntax errors.
   - TypeScript/JavaScript: Run `npm run build` or the corresponding compiler script to verify build success.

2. **Test Suite Execution**:
   - Run the relevant unit tests or integration tests.
   - For Python: Run `pytest <test-file>` or `python -m pytest`.
   - For Node: Run `npm test` or `npm run test`.
   - Focus tests on the affected files/functions to minimize runtime.

3. **Lint & Formatting**:
   - Run project linter checks (`npm run lint` or `flake8` or `black --check`) if they are standard in the target repository.

4. **Visual & Behavior Audit**:
   - If the task updates user interface components, capture screenshots, view them, or inspect the DOM elements to confirm layouts.
   - Verify both success paths and error fallback cases.

5. **Exhaustive Reports**:
   - Report precisely which tests were run and include the CLI output for the checks.
   - State any residual risk or unverified edge cases.
