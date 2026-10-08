---
repo: "DevinoSolutions/anotifier-for-claude-codex-cursor"
name: "anotifier-for-claude-codex-cursor"
description: "Desktop & phone notifications for AI coding agents (Claude Code, Codex, Gemini CLI, Cursor). Native VS Code support. Toast + ntfy push. Zero dependencies."
readmeQualityOk: true
url: "https://github.com/DevinoSolutions/anotifier-for-claude-codex-cursor"
homepage: "https://anotifier.io"
language: "JavaScript"
languages: ["JavaScript", "TypeScript"]
languagePcts: [61, 35]
topics: ["ai-agent", "ai-coding", "claude-code", "cli", "codex", "coding-agent", "cross-platform", "cursor", "desktop-notifications", "developer-tools"]
stars: 30
forks: 2
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 3
recentReleases: 7
createdAt: "2026-05-14T21:36:46Z"
lastCommitAt: "2026-10-08T10:52:42Z"
lastReleaseAt: "2026-10-06T20:19:55Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 86
undervaluedScore: 44
maintainers: ["AminDhouib", "BSalaeddin"]
openGraphImageUrl: "https://opengraph.githubassets.com/fd1106797738b997b1ec98c78666a61932049534b2ff8a26cef05bf9468ee029/DevinoSolutions/anotifier-for-claude-codex-cursor"
---

One tool. One config. Every agent. Never miss when your AI finishes or needs input.

  &nbsp;·&nbsp;
  &nbsp;·&nbsp;

---

## Demo

https://github.com/user-attachments/assets/5714b528-7e04-478e-abfd-2a3d05db562c

[Watch with sound on YouTube](https://www.youtube.com/watch?v=QVVOIIud4-I)

## Quick Start

```bash
npx anotifier@latest setup
```

That's it. The setup wizard detects your platform and installed AI tools, wires the hooks, and optionally configures phone push notifications. Restart your AI tools to activate.

## Features

- **Desktop toast notifications** -- Windows (BurntToast), macOS (Notification Center), Linux (libnotify)
- **WSL toast routing** -- toasts from inside WSL are routed to Windows over PowerShell interop instead of a Linux notification daemon (see the proof boundary below)
- **Phone push notifications** -- Android & iOS via [ntfy](https://ntfy.sh) (free, no account required)
- **Webhook notifications** -- Slack, Discord, Telegram, or any HTTP endpoint, with an optional auth header
- **Rich notification content** -- Claude Code toasts and webhooks show what the agent actually said or asked, not a generic line
- **Terminal bell** -- audible ding in the…
