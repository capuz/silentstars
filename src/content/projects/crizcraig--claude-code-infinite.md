---
repo: "crizCraig/claude-code-infinite"
name: "claude-code-infinite"
description: "Maximize Claude's intelligence with MemTree, an advanced context-management engine"
readmeQualityOk: true
url: "https://github.com/crizCraig/claude-code-infinite"
homepage: "https://memtree.dev"
language: "JavaScript"
languages: ["JavaScript", "TypeScript"]
languagePcts: [55, 44]
stars: 55
forks: 13
openIssues: 0
closedIssues: 0
watchers: 3
contributors: 3
recentReleases: 10
createdAt: "2025-12-21T19:06:53Z"
lastCommitAt: "2026-11-14T21:49:17Z"
lastReleaseAt: "2026-10-31T00:29:28Z"
status: "thriving"
tags: ["release_machine"]
healthScore: 89
undervaluedScore: 52
maintainers: ["crizCraig", "github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/0245e6c0d02ad0cc5755f79556e8971d9c011604a3cd53f69845ea964f10269f/crizCraig/claude-code-infinite"
discussionCount: 1
---

# Claude Code Infinite

on a ~800k-token Claude Code session. It also matched full context on this test (69 vs 69).

Infinite context for Claude Code: memory for long-running agents. Claude Code Infinite indexes your Claude Code sessions with
[MemTree](https://memtree.dev) so their history can be easily searched, navigated, and understood,
by you and by Claude, within a session and across all of them.

## Requirements

* **[Claude Code in your terminal](https://code.claude.com/docs/en/quickstart), signed in
  with Claude Pro or Max**
* [node.js 20.3 or newer](https://nodejs.org/en/download/)

## Setup

1. Install Claude Code Infinite (Node ≥ 20.3; no git needed)
  ```bash
  npm install -g claude-code-infinite
  ```
2. Run it from your project folder
  ```bash
  ccc
  ```

This will guide you through setting up your PolyChat key which you can also get [here](https://polychat.co/auth?memtree=true).

Needs [Claude Code in your terminal](https://code.claude.com/docs/en/quickstart), signed in with
Claude Pro or Max.

```powershell
# Windows PowerShell
irm https://claude.ai/install.ps1 | iex
```
```bash
# macOS / Linux
curl -fsSL https://claude.ai/install.sh | bash
```

Or just run…
