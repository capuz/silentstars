---
repo: "seanyao/roll"
name: "roll"
description: "Autonomous software delivery with AI agents — your BACKLOG runs itself, guided by encoded engineering discipline. No sprints, no hand-holding."
url: "https://github.com/seanyao/roll"
homepage: "https://seanyao.github.io/roll/"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [89]
topics: ["ai", "ai-agents", "claude-code", "cli", "conventions", "developer-tools", "engineering-workflow", "ai-coding", "claudecode", "codex-cli"]
stars: 13
forks: 1
openIssues: 1
closedIssues: 7
watchers: 0
contributors: 5
recentReleases: 10
createdAt: "2026-04-02T17:48:01Z"
lastCommitAt: "2026-06-26T23:41:29Z"
lastReleaseAt: "2026-05-09T17:23:20Z"
status: "thriving"
tags: ["hidden_gem", "release_machine"]
healthScore: 97
undervaluedScore: 58
maintainers: ["seanyao"]
openGraphImageUrl: "https://opengraph.githubassets.com/3efe91c3aaa0350325d6e650edba7fe4407d5de7bbd77c12bcd13ce503f1b52c/seanyao/roll"
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

Roll — a CLI that lets AI agents pick up backlog items and ship them through your normal git + CI workflow. Works with Claude, Cursor, Codex, Kimi, and others.

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
roll loop on        # let AI work through the backlog (optional)
```

`roll init` first diagnoses the current directory. Complete Roll projects get
`Already initialized` and `Next: roll status`; partial Roll projects get
`roll init --repair`, while pre-2.0 layouts get migration guidance without writing files. Existing codebases route to
`$roll-onboard`. PRD/docs-only workspaces are treated as new projects: Roll writes
`.roll/brief.md` from the detected…
