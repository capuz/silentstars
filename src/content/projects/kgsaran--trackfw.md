---
repo: "kgsaran/trackfw"
name: "trackfw"
description: "  Governance CLI for AI-native software delivery and AI coding agents. Enforces traceability: ADR → REQ → ROADMAP → kanban. Native support for Codex, Claude Code, Gemini CLI, Cursor,   Copilot, Windsurf, and Amazon Q."
readmeQualityOk: true
url: "https://github.com/kgsaran/trackfw"
homepage: "https://github.com/kgsaran/trackfw"
language: "Go"
languages: ["Go", "Shell"]
languagePcts: [71, 23]
topics: ["adr", "ai-agents", "architecture-decision-records", "cli", "developer-tools", "devops", "go", "governance", "roadmap", "software-delivery"]
stars: 6
forks: 1
openIssues: 0
closedIssues: 93
watchers: 0
contributors: 3
recentReleases: 0
createdAt: "2026-06-11T16:49:16Z"
lastCommitAt: "2026-10-09T10:50:39Z"
lastReleaseAt: "2026-06-12T20:51:57Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 100
undervaluedScore: 61
maintainers: ["kgsaran", "lourivalgarciajunior"]
openGraphImageUrl: "https://opengraph.githubassets.com/a621e156ffc71f218a01ed0033240f8ca38316ab52c3d389b4463abe16596fe9/kgsaran/trackfw"
discussionCount: 1
---

# trackfw

> AI governance CLI for software delivery teams — ADR → REQ → ROADMAP → backlog / wip / blocked / done / abandoned

**trackfw** is an open-source governance CLI for AI-native software delivery. It enforces a traceable chain from architectural decision to shipped code — without SaaS, accounts, or databases. Markdown files are state.

It is designed for teams looking for an ADR / REQ / ROADMAP governance framework with native support for AI coding assistants such as Codex, Claude Code, Gemini CLI, Antigravity, Cursor, GitHub Copilot, Windsurf, Amazon Q, and Kiro.

```
ADR → REQ → ROADMAP → backlog / wip / blocked / done / abandoned
```

Every piece of work traces back to a decision. Every decision links to a requirement. Every requirement lands in a roadmap. No orphan work, no undocumented choices.

> 🚧 **Platform support: Linux and macOS are supported. Windows support is partial.**
> The CLIs install on Windows and core governance commands run. Since v9.3.0, guard
> hooks call `trackfw guard <name>` (the Go binary) instead of a POSIX shell script —
> measured blocking and allowing correctly in PowerShell 5, cmd.exe, and Git Bash on
> Windows; Claude Code and Codex CLI…
