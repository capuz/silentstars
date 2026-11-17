---
repo: "AbdulrahmanMasoud/comprende"
name: "comprende"
description: "AI writes the code. Comprende makes sure you understand it "
readmeQualityOk: true
url: "https://github.com/AbdulrahmanMasoud/comprende"
language: "JavaScript"
languages: ["JavaScript", "TypeScript"]
languagePcts: [67, 33]
topics: ["ai", "claude", "claude-code", "claude-code-plugin", "claude-skills", "vibe-coding", "vibecoding"]
stars: 65
forks: 3
openIssues: 6
closedIssues: 15
watchers: 0
contributors: 1
recentReleases: 10
createdAt: "2026-10-22T12:35:23Z"
lastCommitAt: "2026-11-17T12:18:21Z"
lastReleaseAt: "2026-11-17T12:21:55Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 93
undervaluedScore: 37
maintainers: ["AbdulrahmanMasoud", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/503170fbbaada6ad573ded0faee8bdc2539580fd15f6b8de08b2f9e7dda645b2/AbdulrahmanMasoud/comprende"
---

Comprende is a plugin for Claude Code, Cursor, Codex and Antigravity. It does two things:

1. **The agent explains the code it writes**, briefly and in your language, but only the parts worth explaining: new APIs, non-obvious logic, risks. This works in every project.
2. **The ownership check** (optional, per repo). Before your code is pushed, the agent asks you a few questions about it, and you write the PR summary. Without that, the push and the merge are blocked.

## Install

You need [Node.js](https://nodejs.org) 20+. Install it in each tool you use, except Cursor next to Claude Code: Cursor already runs your Claude Code plugins.

### Claude Code

Run these two commands in your terminal:

```bash
claude plugin marketplace add AbdulrahmanMasoud/comprende
claude plugin install comprende@comprende
```

Then restart Claude Code. To check it worked, type `/mcp` in Claude: **comprende** should be in the list.

This turns it on for **all your projects**. If you install from inside Claude with `/plugin` instead, pick the **user** scope: the project scope turns it on for one repo only.

### Cursor

Clone it into Cursor's folder for local plugins:

```bash
git clone…
