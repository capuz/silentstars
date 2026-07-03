---
repo: "lidge-jun/jawcode"
name: "jawcode"
description: "Jawcode (jwc) — coding-agent runner with IPABCD workflow. 46 providers, 3,600+ models, Bun-native."
url: "https://github.com/lidge-jun/jawcode"
homepage: "https://lidge-jun.github.io/jawcode/"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [84]
topics: ["ai-agent", "autonomous-agent", "bun", "cli", "code-generation", "coding-agent", "developer-tools", "llm", "rust", "typescript"]
stars: 6
forks: 2
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 17
recentReleases: 0
createdAt: "2026-06-13T18:18:09Z"
lastCommitAt: "2026-07-03T12:23:13Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem"]
healthScore: 90
undervaluedScore: 55
maintainers: ["lidge-jun"]
openGraphImageUrl: "https://opengraph.githubassets.com/c8af19a02ab884282254b55a9515473e339113e94978dd0d2a9eaa9407272efb/lidge-jun/jawcode"
---

</p>

<h1 align="center">Jawcode</h1>

  <strong>Encode intention. Decode software.</strong><br />
  46 providers &middot; 3,600+ models &middot; IPABCD workflow &middot; 40+ tools &middot; 5 role agents<br />
  <sub>Bun-native. Plans before it builds. Audits before it ships. Verifies before it reports done.</sub>
</p>

</p>

</p>

> Jawcode (`jwc`) is an experimental, beta-stage project. Expect rough edges and verify outputs before relying on it for important work.

## What is Jawcode?

Jawcode (`jwc`) is a standalone coding-agent harness. 46 providers, 3,600+ models, Bun-native. It runs from any repository or worktree and gives the agent a structured workflow — plan before build, audit before ship, verify before done.

## Install

```sh
bun install -g jawcode
jwc --version
```

<details>
<summary>npm (alternative)</summary>

```sh
npm install -g jawcode
jwc --version
```

</details>

<details>
<summary>Don't have bun or npm? Install bun first</summary>

**macOS / Linux**
```sh
curl -fsSL https://bun.sh/install | bash
```

**Windows (PowerShell)**
```powershell
irm bun.sh/install.ps1 | iex
```

**Windows (WSL recommended for full support)**
```sh
# 1. Install WSL if you haven't…
