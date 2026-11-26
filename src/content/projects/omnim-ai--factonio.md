---
repo: "omnim-ai/factonio"
name: "factonio"
description: "Pure-Hermes, phase-based software factory plugin for any GitHub repository"
readmeQualityOk: true
url: "https://github.com/omnim-ai/factonio"
language: "Python"
languages: ["Python"]
languagePcts: [90]
topics: ["ai-agents", "automation", "github", "hermes-agent", "hermes-plugin", "python", "software-factory"]
stars: 6
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 1
createdAt: "2026-11-24T13:56:05Z"
lastCommitAt: "2026-11-26T23:32:27Z"
lastReleaseAt: "2026-11-26T08:56:35Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem"]
healthScore: 88
undervaluedScore: 45
maintainers: ["tozes", "dependabot[bot]"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1470240941/41467a26-cdbd-47f4-b919-0c02d1551336"
---

Definition, optional UI Design, parallel git-worktree Implementation, and mutually isolated Diff + Black-Box Verification — using only <a href="https://github.com/NousResearch/hermes-agent">Hermes Agent</a>, <code>git</code>, and <code>gh</code>.

## Choose your starting point

| Run Factonio on your repos | Tune cross-model verification | Develop or contribute |
|---|---|---|
| [Quick Start](#quick-start) | [Configure phase models](#3-configure-phase-models) | [Development guide](https://github.com/omnim-ai/factonio/blob/HEAD/docs/development.md) |
| Install the plugin, initialize the headless `factonio` worker profile, and register a GitHub repo. | Assign distinct models to `factonio_implement` and `factonio_verify` in Hermes Auxiliary Models. | Run all 90 clean-room tests locally, inspect the Desktop UI harness, and read [CONTRIBUTING.md](https://github.com/omnim-ai/factonio/blob/HEAD/CONTRIBUTING.md). |

## How it works

Factonio runs autonomous software delivery on a dedicated headless `factonio` worker profile across four explicit phases, with a strict **Information Barrier** during verification to prevent confirmation bias and test overfitting:
