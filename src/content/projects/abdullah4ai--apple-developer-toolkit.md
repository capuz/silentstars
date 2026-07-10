---
repo: "Abdullah4AI/apple-developer-toolkit"
name: "apple-developer-toolkit"
description: "Apple Developer Documentation CLI skill for AI agents. Search docs, frameworks, APIs, WWDC videos 2014-2025, and sample code. Direct integration with developer.apple.com"
readmeQualityOk: true
url: "https://github.com/Abdullah4AI/apple-developer-toolkit"
language: "Go"
languages: ["Go"]
languagePcts: [99]
stars: 8
forks: 2
openIssues: 0
closedIssues: 1
watchers: 0
contributors: 3
recentReleases: 0
createdAt: "2026-02-16T17:57:59Z"
lastCommitAt: "2026-07-10T07:00:53Z"
lastReleaseAt: "2026-03-10T07:00:39Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 98
undervaluedScore: 56
maintainers: ["Abdullah4AI", "gavinlinasd"]
openGraphImageUrl: "https://opengraph.githubassets.com/deba1369e66811eff218a98953be891dab9dcbbf32694ec30c7b00270dac10a0/Abdullah4AI/apple-developer-toolkit"
---

<br>

# Apple Developer Toolkit

**Three tools, one binary. Docs, App Store, and app builder**

Search Apple docs, manage App Store Connect, and build multi-platform apps from natural language

<br>

</div>

<br>

```
$ appledev build

> A habit tracker with streak counting and weekly grid

  ✓ Analyzed: StreakGrid
  ✓ Plan ready (11 files, 3 models)
  ✓ Build complete — 11 files
  ✓ Launched on iPhone 17 Pro
```

Ships as a single unified binary `appledev` with three independent tools. Each works on its own with different credential requirements.

## Install

```bash
brew install Abdullah4AI/tap/appledev
```

<details>
<summary>Install from source</summary>

```bash
git clone https://github.com/Abdullah4AI/apple-developer-toolkit.git
cd apple-developer-toolkit
bash scripts/setup.sh
```

</details>

## Agent Skills

Add iOS and SwiftUI knowledge to any AI coding agent — Claude Code, Codex, Cursor, Windsurf, Gemini CLI, and more:

```bash
# Install both skills (recommended)
npx skills add Abdullah4AI/apple-developer-toolkit

# Install a specific skill
npx skills add Abdullah4AI/apple-developer-toolkit --skill ios-rules
npx skills add Abdullah4AI/apple-developer-toolkit --skill…
