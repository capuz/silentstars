---
repo: "barjakuzu/claude-rc-launcher"
name: "claude-rc-launcher"
description: "A lightweight web UI to launch and manage Claude Code remote-control sessions from any browser"
readmeQualityOk: true
url: "https://github.com/barjakuzu/claude-rc-launcher"
language: "TypeScript"
languages: ["TypeScript", "Python"]
languagePcts: [46, 26]
stars: 7
forks: 1
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2026-03-04T11:25:45Z"
lastCommitAt: "2026-07-06T07:04:45Z"
lastReleaseAt: "2026-04-05T05:59:44Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 75
undervaluedScore: 47
maintainers: ["barjakuzu", "github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/e1b632f4eab41ed9642d750d7d9d6dd3dce6f040f25c26457e3385fd1486e900/barjakuzu/claude-rc-launcher"
---

# Claude RC Launcher

Launch and manage [Claude Code](https://docs.anthropic.com/en/docs/claude-code) remote-control sessions from anywhere — your phone, another laptop, wherever you are.

</p>

## Features

- **Session management** — Launch, stop, restart Claude Code sessions via web UI
- **Remote access** — Built-in Cloudflare Tunnel for public HTTPS URLs
- **Scheduled tasks** — Cron-based scheduler to run Claude sessions on autopilot
- **Browser automation** — Use [`playwright-cli`](https://www.npmjs.com/package/@playwright/cli) for headless browser control in scheduled tasks
- **Resume sessions** — Pick up where you left off with session resume
- **Multi-project** — Browse to any directory or configure project shortcuts

## Install

**Requirements:** Python 3.8+, tmux, Claude CLI (`claude login` first)

```bash
curl -fsSL https://raw.githubusercontent.com/barjakuzu/claude-rc-launcher/main/install.sh | bash
```

The installer will:
1. Install cloudflared (for remote access)
2. Set up auth credentials (required)
3. Auto-detect your Claude CLI path
4. Start the service automatically
5. Give you a public URL you can open from anywhere

After install, open **http://localhost:8200**…
