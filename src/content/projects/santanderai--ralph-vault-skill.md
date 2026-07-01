---
repo: "SantanderAI/ralph-vault-skill"
name: "ralph-vault-skill"
description: "Skill to generate the knowledge vault for projects using the Ralph loop"
url: "https://github.com/SantanderAI/ralph-vault-skill"
homepage: "https://github.com/SantanderAI"
language: "Python"
languages: ["Python"]
languagePcts: [95]
topics: ["ai", "developer-tools", "llm", "ai-agents", "cli", "deepwiki", "documentation", "documentation-generator", "knowledge-base", "llm-agents"]
stars: 61
forks: 20
openIssues: 1
closedIssues: 0
watchers: 1
contributors: 6
recentReleases: 1
createdAt: "2026-06-15T12:42:43Z"
lastCommitAt: "2026-07-01T07:04:29Z"
lastReleaseAt: "2026-06-16T18:22:24Z"
status: "newborn"
tags: ["hidden_gem"]
healthScore: 79
undervaluedScore: 20
maintainers: ["opensource-SantanderAI", "dependabot[bot]", "sachasimov"]
openGraphImageUrl: "https://opengraph.githubassets.com/1d26fda02581a433e5118c770527102c8d7edba5670db309320e5ffede3ba5b2/SantanderAI/ralph-vault-skill"
---

# ralph-vault

> **Open source by Santander AI Lab.** A Python **CLI tool / library** to create and maintain a
> progressive-disclosure knowledge vault (a tiered "deepwiki") for one or many code repositories —
> the knowledge source for **LLM / AI agent** loops (ralph-style).

Part of [**Santander AI Open Source**](https://github.com/SantanderAI) — open source AI projects from Banco Santander ([santander.com](https://santander.com)).

---

A skill + CLI to **create and maintain a progressive-disclosure knowledge vault** (a tiered "deepwiki") for one or many code repositories, designed to be the knowledge source for [ralph](https://ghuntley.com/ralph/)-style agent loops. Project-agnostic: documented repos live in a per-vault config registry, nothing is hardcoded.

## What it does

- **init** the tiered vault structure (`index`, `repos`, `components`, `infrastructure`, `technologies`, `relations`, … `meta`) + config.
- **add** / **delete** a repo or subdirectory to document.
- **update** repos that are new, incomplete, or stale (LLM work via FIXED prompts).
- **relations** / **dependencies** / **components** — graph tiers: typed edges between repos, external infra + providers…
