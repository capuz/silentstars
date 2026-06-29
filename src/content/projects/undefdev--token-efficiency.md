---
repo: "undefdev/token-efficiency"
name: "token-efficiency"
description: "Skill that teaches coding agents to minimize token waste in tool use and data processing"
url: "https://github.com/undefdev/token-efficiency"
language: "Shell"
languages: ["Shell", "Batchfile", "JavaScript"]
languagePcts: [42, 32, 26]
stars: 22
forks: 3
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2026-03-18T20:53:15Z"
lastCommitAt: "2026-03-30T07:42:02Z"
status: "quiet"
tags: ["solo_builder"]
healthScore: 42
undervaluedScore: 8
maintainers: ["undefdev"]
openGraphImageUrl: "https://opengraph.githubassets.com/ba769bba09911ab9e266293e63ea0c19b6e8e4a0ed4d654867c1cd899831a6a8/undefdev/token-efficiency"
---

# Token Efficiency

A skill that teaches coding agents to minimize token waste in all tool use, file reading, and data processing operations.

Every byte of tool output is money and context window spent. This skill instills the habit of filtering, projecting, and truncating at the source — not dumping raw output and hoping for the best.

> **Sunset notice:** This skill exists because current coding agents haven't yet internalized efficient tool use. As models improve and these practices become default behavior, this skill will be discontinued.

## What it covers

- Structured query tools (`jq`, `yq`, `awk`) over dump-and-read
- Precision search (`ast-grep`, `rg`) over broad text search
- Git summary-first workflows (`--stat`, `--name-only`)
- Output noise suppression (quiet flags, `NO_COLOR`, selective reads)
- Hash-based change detection over re-reading files
- Coreutils over Python for simple transforms

## Installation

### Claude Code

First, add the marketplace:
```
/plugin marketplace add undefdev/token-efficiency
```

Then install:
```
/plugin install token-efficiency@undefdev-token-efficiency
```

### Cursor

Not yet available on the Cursor Marketplace. For now, clone the…
