---
repo: "intentic/intentic"
name: "intentic"
description: "An open-source workspace for coding agents, running on your own machine. More work. Less AI waste. Same subscriptions."
readmeQualityOk: true
url: "https://github.com/intentic/intentic"
homepage: "https://intentic.dev"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [77]
topics: ["agent-infrastructure", "ai-agents", "claude-code", "coding-agent", "developer-tools", "sandbox", "self-hosted", "tauri", "typescript", "agent-sandbox"]
stars: 93
forks: 16
openIssues: 0
closedIssues: 3
watchers: 0
contributors: 1
recentReleases: 0
createdAt: "2026-08-04T13:00:52Z"
lastCommitAt: "2026-11-14T21:10:30Z"
lastReleaseAt: "2026-08-06T21:52:33Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 100
undervaluedScore: 36
maintainers: ["github-actions[bot]", "radarsu"]
openGraphImageUrl: "https://opengraph.githubassets.com/2edfabbf900bf33171672c88e8805bf0d3c18a9211986068b9f2223300613e1f/intentic/intentic"
---

Run Claude Code, Codex, Cursor and Gemini side by side, each on its own git worktree.<br>
They keep working when you close the browser. Nothing lands until you read the diff.</p>

## How it works

You hand out tasks, agents plan and work in parallel, and you review the result. All of it runs in a sandbox on a machine you control.

## Get started

1. **[Sign in](https://app.intentic.dev)** with Google, or with a code mailed to any email address. No card, no password.
2. **Paste one command** on the laptop, desktop or server that will host your sandbox. The setup page shows it with your code filled in, and the command offers to install Docker if it is missing.

   ```sh
   curl -fsSL https://intentic.dev/connect | sh -s -- <SETUP_CODE>
   ```

   On Windows, use PowerShell or the [desktop app](https://intentic.dev/download) for Windows and Linux. The tunnel dials out, so no ports need opening.
3. **Connect an AI account** and give an agent its first task.

To try it before installing anything, open the **[live demo](https://intentic.dev/demo/)**: the real app on a recorded workspace. The [quickstart](https://intentic.dev/docs/quickstart/) covers the desktop app, Docker Compose and…
