# Debugging & Diagnostics Skill

Use this skill when investigating bugs, diagnosing errors, or analyzing logs to fix issues.

## Diagnostic Workflow

When a bug or crash is reported:

1. **Information Gathering**:
   - Inspect error traces, server log entries, browser console output, and network payloads.
   - Trace inputs from client entry points through backend controllers, services, database layers, and back.

2. **Isolate the Fault**:
   - Classify the issue: Frontend presentation error, API/networking failure, backend server logic crash, database query error, or environment mismatch.
   - Create a simplified reproduction scenario or test case.

3. **Log Tracing**:
   - Add structured logging to print payload content, variable states, and control flow paths.
   - Avoid plain "reached here" prints; log descriptive details (`[debug] user_id: 123, status: active`).

4. **Verify the Fix**:
   - Apply the fix in-place.
   - Run the reproduction test/case to verify it succeeds.
   - Test adjacent functions to ensure no regression was introduced.
   - Clean up temporary debugging prints and trace logs before committing.
