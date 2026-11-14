---
repo: "mgrebler/coding-harness"
name: "coding-harness"
description: "A coding harness built around the speckit workflow"
readmeQualityOk: true
url: "https://github.com/mgrebler/coding-harness"
language: "Python"
languages: ["Python"]
languagePcts: [86]
stars: 7
forks: 1
openIssues: 1
closedIssues: 5
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2026-06-25T02:24:42Z"
lastCommitAt: "2026-11-14T22:03:34Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 95
undervaluedScore: 51
maintainers: ["mgrebler"]
openGraphImageUrl: "https://opengraph.githubassets.com/2abb76e15079839ba0d25835b8802fd49793e79626ffb67e520faa469c8a7286/mgrebler/coding-harness"
---

# coding-harness

coding-harness builds on [GitHub's SpecKit](https://github.com/github/spec-kit) spec-driven flow — specify → plan → tasks → implement — and adds autonomous agents that drive each stage, plus a strict test-first split between writing tests and writing implementation code, and a final stage that keeps a persistent user/maintainer documentation set current: `specify → ch-1-plan-auto → ch-2-tasks-auto → ch-3-test-auto → ch-4-implement-auto → ch-5-docs-auto`, optionally followed by `ch-6-validate-auto`, which validates the feature on a deployed preview and records evidence for the PR reviewer.

**Why this matters:** agentic development is fast, but code that "looks right" can quietly drift from your architecture, skip tests, or break conventions. coding-harness keeps agents fast *and* maintainable by gating every stage behind critic agents grounded in documents your team owns — `constitution.md`, `architecture.md`, `test-principles.md`, and more. A plan must pass an architecture review before tasks are generated; tests and implementation must pass a quality review before they're considered done. Humans remain the only ones who can merge to `main`.

---

## Setup…
