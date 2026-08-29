---
repo: "cyanseek/dsh-landscape"
name: "dsh-landscape"
description: "Agent-first DeepSeek Harness plugin intelligence: verify existing plugins, identify missing capabilities, and generate build-ready briefs."
readmeQualityOk: true
url: "https://github.com/cyanseek/dsh-landscape"
language: "JavaScript"
languages: ["JavaScript"]
languagePcts: [92]
topics: ["agent-skills", "codex", "deepseek-harness", "dsh-plugin", "ecosystem", "gap-analysis", "plugin-discovery"]
stars: 7
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 0
createdAt: "2026-08-13T18:22:38Z"
lastCommitAt: "2026-08-29T17:27:08Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem"]
healthScore: 80
undervaluedScore: 45
maintainers: ["github-actions[bot]", "cyanseek"]
openGraphImageUrl: "https://opengraph.githubassets.com/6ebbc41fc4dca23160b81c791682c06c37bc19fdfaa5e0f7a7d91a8e12c79d01/cyanseek/dsh-landscape"
---

# DSH Landscape

[简体中文](https://github.com/cyanseek/dsh-landscape/blob/HEAD/README.zh-CN.md) · [Website](https://cyanseek.github.io/dsh-landscape/) · [Roadmap](https://github.com/cyanseek/dsh-landscape/blob/HEAD/ROADMAP.md) · [Contributing](https://github.com/cyanseek/dsh-landscape/blob/HEAD/CONTRIBUTING.md)

> **Adding or building something for DeepSeek Harness? Run Landscape first.**

DSH Landscape is a read-only capability preflight: describe one change in natural language and get an evidence-backed decision before you install, replace, upgrade, compose, or build.

Try needs like:

- “Should I install browser automation, or is it already covered?”
- “Compare the GitHub integrations that could fit this DSH setup.”
- “Can I replace my current search plugin without losing capabilities?”
- “Before we build a Linear integration, show what not to duplicate.”

No Landscape account. No API key. No initialization. No required configuration. If runtime inspection or live discovery is unavailable, Landscape still uses its bundled snapshot and states what it could not verify.

## Quick start

Install the pinned, reproducible DSH bundle into an existing profile:

```bash
dsh plugin…
