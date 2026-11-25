---
repo: "codeliter/codeforge"
name: "codeforge"
description: "A coding agent that works like you, on the Empryo TUI."
readmeQualityOk: true
url: "https://github.com/codeliter/codeforge"
language: "Go"
languages: ["Go"]
languagePcts: [100]
stars: 5
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 10
createdAt: "2026-10-30T09:28:19Z"
lastCommitAt: "2026-11-25T13:17:34Z"
lastReleaseAt: "2026-11-02T20:54:32Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 89
undervaluedScore: 55
maintainers: ["codeliter"]
openGraphImageUrl: "https://opengraph.githubassets.com/af8323be67b10ae4698cc83984a8bcae1c9ad05acae2fe5b45cc0eaf5c00a27e/codeliter/codeforge"
---

# Codeforge

An AI helper for your code. It answers questions, makes changes, and reviews pull requests in your voice.
It runs on [Empryo](https://empryo.com).

## How it works

- **Persona:** `codeforge init` learns how you write code and text from your Git history, so its changes and reviews read like yours. [More](https://github.com/codeliter/codeforge/blob/HEAD/TECHNICAL.md#2-initialisation-personas-and-repair)
- **Model roles:** each job has its own model: one writes the code, an expert takes the hard pieces, cheap judges size reviews, and reviewers from other model families check the work. [More](https://github.com/codeliter/codeforge/blob/HEAD/TECHNICAL.md#4-effort-routing-and-model-roles)
- **Modes:** `chat`, `work`, `ticket`, `review` and `respond` each run one agent with its own instructions. Tasks start at medium effort and the agent raises it when the work needs it.
- **Guard:** every command and tool call is checked before it runs; reviews stay read-only, and the agent cannot change Codeforge's own settings.
