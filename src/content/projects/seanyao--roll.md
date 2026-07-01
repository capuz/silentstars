---
repo: "seanyao/roll"
name: "roll"
description: "Autonomous software delivery with AI agents — your BACKLOG runs itself, guided by encoded engineering discipline. No sprints, no hand-holding."
url: "https://github.com/seanyao/roll"
homepage: "https://seanyao.github.io/roll/"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [90]
topics: ["ai", "ai-agents", "claude-code", "cli", "conventions", "developer-tools", "engineering-workflow", "ai-coding", "claudecode", "codex-cli"]
stars: 13
forks: 1
openIssues: 1
closedIssues: 7
watchers: 0
contributors: 5
recentReleases: 10
createdAt: "2026-04-02T17:48:01Z"
lastCommitAt: "2026-07-01T07:05:48Z"
lastReleaseAt: "2026-05-09T17:23:20Z"
status: "thriving"
tags: ["hidden_gem", "release_machine"]
healthScore: 97
undervaluedScore: 58
maintainers: ["seanyao"]
openGraphImageUrl: "https://opengraph.githubassets.com/18712df63874ae8424494950119b054546cf6dd750157bc8ef860ab8fdf29f30/seanyao/roll"
---

```
 ██████╗  ██████╗ ██╗     ██╗     
 ██╔══██╗██╔═══██╗██║     ██║     
 ██████╔╝██║   ██║██║     ██║     
 ██╔══██╗██║   ██║██║     ██║     
 ██║  ██║╚██████╔╝███████╗███████╗
 ╚═╝  ╚═╝ ╚═════╝ ╚══════╝╚══════╝
```

**[中文版 README](README_CN.md)**

Roll — a Prime Agent-led CLI harness that routes AI agents through story-scoped planning, building, evaluation, git, CI, and acceptance evidence. Works with Claude, Cursor, Codex, Kimi, Pi, Reasonix, and other local rigs when they are available.

## Install

```bash
curl -fsSL https://seanyao.github.io/roll/install | bash
```

```bash
npm install -g @seanyao/roll
```

Requirements: Node.js ≥ 22. Roll is a self-contained TypeScript CLI — no runtime engine beyond node.

## Use

```bash
cd your-project
roll init           # set up Roll here (interactive confirmation)
roll next           # continue with design, apply, repair, migrate, loop, or status
roll loop on        # let AI work through the backlog (optional)
```

`roll init` first diagnoses the current directory. Complete Roll projects get
`Already initialized` and `Next: roll status`; partial Roll projects get
`roll init --repair`, while pre-2.0 layouts get migration guidance…
