---
repo: "thith/teleport"
name: "teleport"
description: "Telegram bridge for AI coding agents (Claude Code, Codex, Gemini) — short reports out, short instructions back, no chat mirroring"
readmeQualityOk: true
url: "https://github.com/thith/teleport"
language: "JavaScript"
languages: ["JavaScript"]
languagePcts: [100]
stars: 32
forks: 16
openIssues: 0
closedIssues: 1
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2026-05-15T18:06:23Z"
lastCommitAt: "2026-11-06T02:44:20Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 99
undervaluedScore: 46
maintainers: ["thith"]
openGraphImageUrl: "https://opengraph.githubassets.com/a4c80345720aafca5208e15d42bcd3c4583854d8f521e800df982bf8acf57114/thith/teleport"
---

# Teleport — Telegram bridge for AI coding agents

A small tool that lets AI agents (Claude Code, Codex, Gemini, …) send short progress reports to your Telegram and take short instructions back, while you are away from the desk.

Short reports, short replies — not a full session mirror.

Extracted from internal tooling built for **[trumviahe.com](https://trumviahe.com)**.

## Quick start

### 1. Clone next to your projects

```bash
cd ~/Projects   # any parent folder works (e.g. ~/work, ~/code, D:\dev)
git clone https://github.com/thith/teleport.git
cd teleport
cp .env.example .env
```

`teleport/` must sit as a sibling of every project that uses it:

```
<your-parent-folder>/   # e.g. ~/Projects, ~/work, D:\dev
├── teleport/
├── ProjectA/
└── ProjectB/
```

The parent folder name doesn't matter — what matters is that `teleport/` is a **sibling** of your projects.

### 2. Get a bot token and a forum-group chat ID

teleport posts every conversation in its own **forum topic**, so the chat **must be a forum supergroup** — a private DM (personal chat ID) or a plain group will fail the forum check and sends will error.

- **Bot token:** open [@BotFather](https://t.me/BotFather) on…
