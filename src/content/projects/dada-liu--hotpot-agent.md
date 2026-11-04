---
repo: "Dada-liu/hotpot-agent"
name: "hotpot-agent"
description: "a helpful code agent"
originalDescription: "a helpful code agent"
descriptionLang: "zh"
readmeQualityOk: true
url: "https://github.com/Dada-liu/hotpot-agent"
homepage: "https://dada-liu.github.io/hotpot-agent/"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [99]
topics: ["agent"]
stars: 6
forks: 1
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 0
createdAt: "2026-10-08T09:54:55Z"
lastCommitAt: "2026-11-04T02:57:39Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem"]
healthScore: 80
undervaluedScore: 53
maintainers: ["Dada-liu"]
openGraphImageUrl: "https://opengraph.githubassets.com/60d635fb697a27318789b139814c7283334057ce00aed3314d68f70d58bf1e0e/Dada-liu/hotpot-agent"
---

Chinese | <a href="README.en.md">English</a>

hotpot-agent is an open-source code agent based on Node.js and TypeScript. It completes software development tasks through three-layer agent orchestration, plan approval, and tool calls, with the goal of lower cost and better results. It offers both CLI and Web usage modes, and supports session persistence, multiple workspaces, parallel tasks, permission control, and SWE-bench evaluation.

## Installation and Usage

```bash
# Install
npm install -g hotpot-agent
```

The npm package name is `hotpot-agent`, and the command after installation is `hotpot`. Requires Node >= 22.

```bash
# Usage
hotpot web
```

## Architecture

```
┌───────────────────────────────────────────────────────────────────────────┐
│ [Access Layer]                                                            │
│   packages/web    React SPA three-column UI (session list / conversation  │
│                   stream / agent status panel)                            │
│   packages/cli    Line-based interactive entry point                      │
├───────────────────────────────────────────────────────────────────────────┤
│ [Service Layer]…
