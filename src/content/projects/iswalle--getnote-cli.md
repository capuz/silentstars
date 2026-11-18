---
repo: "iswalle/getnote-cli"
name: "getnote-cli"
description: "Get笔记 CLI — Let both humans and AI Agents operate Get笔记 from the terminal"
originalDescription: "Get笔记 CLI — 让人类和 AI Agent 都能在终端操作 Get笔记"
descriptionLang: "zh"
readmeQualityOk: true
url: "https://github.com/iswalle/getnote-cli"
language: "Go"
languages: ["Go"]
languagePcts: [97]
topics: ["cli", "getnote", "note-taking"]
stars: 181
forks: 11
openIssues: 0
closedIssues: 12
watchers: 1
contributors: 5
recentReleases: 0
createdAt: "2026-03-28T07:50:30Z"
lastCommitAt: "2026-11-18T12:03:39Z"
lastReleaseAt: "2026-04-02T08:55:16Z"
status: "thriving"
tags: []
healthScore: 97
undervaluedScore: 32
maintainers: ["iswalle", "k8scat", "guoqunabc"]
openGraphImageUrl: "https://opengraph.githubassets.com/aecc4bfcdfd91d94f602a021b1299b07a8c61cc5d2dc5df44476637da2cd98cf/iswalle/getnote-cli"
---

# 得到大脑（Get笔记） CLI

Command-line tool for 得到大脑（Get笔记）, letting you manage notes and knowledge bases directly from the terminal and AI Agents.

Save links, write text, search notes, and manage knowledge bases with one command. Supports scripts and AI Agent invocation.

---

## Installation

### Let your local AI install it automatically (recommended)

For OpenClaw（小龙虾）, QClaw, Claude Code, Codex, GitHub Copilot, Cursor, Gemini CLI, Windsurf, OpenCode, Cline, and WorkBuddy:

```bash
npm install -g @getnote/cli@latest && getnote setup
```

This command installs the CLI to a stable global path, automatically detects the local platform, installs five Skills, and guides you through one 得到大脑 authorization. During installation, the prominent `SKILLS` header is kept. The final output only shows whether each platform was installed successfully, plus the single next step the user needs to complete. It no longer shows internal installation details such as `universal`, `symlink`, or `overwrites`. After installing WorkBuddy, you need to restart it. Skills for OpenClaw（小龙虾） and QClaw are managed by the platform, and the command provides the corresponding ClawHub confirmation entry point.
