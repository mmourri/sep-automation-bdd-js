---
name: empty-playwright-test
agent: agent
description: Generate a minimal Playwright test skeleton with the page fixture.
---

Purpose

- Produce a minimal, professional Playwright test function for use in automated test scaffolding.

Requirements

- Use ES Module imports.
- Import the test function from "@playwright/test".
- The test description must be an empty string ("").
- The test function must include the page fixture in the callback argument list: async ({ page }) => {}.
- The test body must be empty (no statements or comments).
- The assistant's response must contain only a single code snippet with the import and the empty test function—no additional text.

Example of required output format

- A single code block containing:
  - ES Module import for test from "@playwright/test"
  - One empty test() function with an empty string description and the page fixture parameter

Notes

- Keep the output strictly limited to the specified code snippet so it can be injected automatically into test files.
