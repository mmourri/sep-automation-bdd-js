// ...existing code...
---
name: empty-test-group
agent: agent
description: Generate a Playwright test group containing three empty tests.
---

# Purpose
Provide a concise, professional prompt to generate a Playwright test group with three minimal tests for scaffolding and automation workflows.

# Scope
- Produce a single test file containing a test group with three tests.
- Each test must be syntactically valid and minimal to allow automated insertion into projects.

# Requirements
- Use ES Module imports.
- Import `test` from `@playwright/test`.
- Create a test group (e.g., `test.describe`) containing exactly three `test()` calls.
- Each `test()` description must be an empty string (`""`).
- Each `test()` body must be empty (no statements or comments).
- Each test callback must accept the `page` fixture as its argument.
- The assistant's response should contain only the test group code snippet and nothing else (so it can be injected automatically).

# Output Format (Example)
- A single code block containing:
  - An ES Module import for `test` from `@playwright/test`.
  - One test group with three empty `test()` functions as specified.

# Notes
- Keep the output strictly limited to the specified code snippet.
- Maintain consistent formatting to support automated tooling.
