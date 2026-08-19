---
repo: "Shaf2665/HallOfWisdom"
name: "HallOfWisdom"
description: "Hall of Wisdom — An open-source Agent OS for orchestrating AI agents, tools, and autonomous workflows from one place. 🏛️🤖"
readmeQualityOk: true
url: "https://github.com/Shaf2665/HallOfWisdom"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [95]
stars: 5
forks: 0
openIssues: 2
closedIssues: 4
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2026-08-02T09:02:44Z"
lastCommitAt: "2026-08-19T04:07:39Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 93
undervaluedScore: 50
maintainers: ["Shaf2665"]
openGraphImageUrl: "https://opengraph.githubassets.com/f9600d8fe5db45666a4a272f63d14a3b70a3b40d962aacdda3d4d2beb1c13057/Shaf2665/HallOfWisdom"
---

# Hall of Wisdom

Hall of Wisdom is a local, cross-platform Agent OS for coordinating coding agents against your own
projects. The current alpha supports **Claude Code**, **Codex**, and **Hermes Router** through one
task, routing, event, and recovery workflow.

Claude Code and Codex use their locally installed CLIs and their own local authentication. Hermes
uses a local Hermes Coding Runtime connected to a Hermes Router endpoint. Hall does not provide
upstream OpenRouter or model-provider credentials to the router; Hermes uses a separate proxy/client
key saved locally by Hall or supplied through an advanced environment override.

The normal path on Windows, Linux, and macOS is: clone, install, start, configure a provider, and run
a task. Contributor commands and architecture details are under [For Developers](#for-developers).

## Getting Started

### 1. Requirements

- [Node.js](https://nodejs.org/) `>=22.13.0 <23 || >=24.11.0 <25` (Node 22 or 24 LTS)
- [pnpm](https://pnpm.io/installation) `>=10.0.0 <11` (`packageManager` pins 10.33.0 for deterministic installs)
- [Git](https://git-scm.com/downloads) — recent enough to support
  `git worktree list --porcelain -z` (confirmed…
