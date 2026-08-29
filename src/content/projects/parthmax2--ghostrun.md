---
repo: "parthmax2/ghostrun"
name: "ghostrun"
description: "pytest for LLM apps: record API calls once, replay them forever, and test meaning without flaky live runs."
readmeQualityOk: true
url: "https://github.com/parthmax2/ghostrun"
homepage: "https://ghostrun.parthmax.tech"
language: "Python"
languages: ["Python", "HTML"]
languagePcts: [64, 29]
topics: ["ai-evals", "gena", "llm", "llm-testing", "parthmax", "pytest", "ghostrun", "llm-evaluation", "python"]
stars: 26
forks: 5
openIssues: 2
closedIssues: 0
watchers: 0
contributors: 3
recentReleases: 5
createdAt: "2026-07-27T18:08:33Z"
lastCommitAt: "2026-08-29T10:20:09Z"
lastReleaseAt: "2026-08-28T19:25:50Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 76
undervaluedScore: 33
maintainers: ["parthmax2"]
openGraphImageUrl: "https://opengraph.githubassets.com/e10ccf7ea13ac99db3904b6c511182841d1d3806e943f3003f21079bfa6aa3cf/parthmax2/ghostrun"
---

</p>

<h3 align="center">pytest for LLMs — Write fast, zero-cost tests for your AI prompts, and optimize them automatically when they fail.</h3>

</p>

<h4 align="center">
</h4>

</p>

---

> [!TIP]
> **TDD for LLMs (Test-Driven Prompts):** Instead of guessing prompts in a notebook, write your test and criteria first (using `ghostrun.expect`), then let the optimizer (`ghostrun craft`) automatically tune the prompt instructions and few-shots to pass the test.

### The Problem: Why LLM testing is frustrating

Building an AI application usually leaves you with three painful problems:
1. **Slow & Expensive Tests:** Every time you run `pytest`, your test suite calls OpenAI/Anthropic APIs, costing you money and taking forever to finish.
2. **Brittle Exact Assertions:** LLM outputs change slightly on every run. Writing `assert reply == "expected"` fails randomly because the LLM used a different word.
3. **The Prompt Guessing Game:** When you edit a prompt to fix one edge case, you have no easy way to know if you silently broke another output somewhere else.

### How ghostrun fixes it

`ghostrun` solves all three issues by bringing standard software testing workflows to AI:

*   **Fast &…
