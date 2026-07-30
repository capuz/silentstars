---
repo: "deivid11/tide-commander"
name: "tide-commander"
description: "Tide Commander - Visual orchestrator for multiple Claude Code, OpenCode and Codex agents"
readmeQualityOk: true
url: "https://github.com/deivid11/tide-commander"
homepage: "https://tidecommander.com/"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [81]
topics: ["ai", "claude-code", "codex", "developer-tools", "vibe-coding", "tide-commander", "orchestrator"]
stars: 71
forks: 8
openIssues: 0
closedIssues: 1
watchers: 1
contributors: 8
recentReleases: 0
createdAt: "2026-01-21T22:03:20Z"
lastCommitAt: "2026-07-30T06:06:02Z"
lastReleaseAt: "2026-01-27T00:39:43Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 93
undervaluedScore: 38
maintainers: ["ericktide", "deivid11", "mark-tide"]
openGraphImageUrl: "https://opengraph.githubassets.com/41aacb01825f1c5291450d6e4a8c6e8372c67df0d28c845305b992091518b43c/deivid11/tide-commander"
---

</p>

Tide Commander is a Claude Code, Codex, and OpenCode orchestrator and manager that lets you deploy, control, and monitor multiple AI coding agents from a single visual interface. Spawn agents, assign tasks, and watch them work in real-time on an RTS-inspired 3D battlefield — or switch to a lightweight 2D canvas or a metrics dashboard.

## 🚀 Getting Started 

Requirements:
- Node.js 18+
- At least one supported CLI provider:
  - **Claude Code** — `claude` command in PATH
  - **Codex** — `codex` command in PATH (OpenAI Codex CLI)
  - **OpenCode** — `opencode` command in PATH ([opencode CLI](https://github.com/nicholasgriffintn/opencode))
  - **Grok** — `grok` command in PATH (Grok Build CLI headless mode)

Install and run:

```bash
# Run directly without installing (recommended)
bunx tide-commander

# Or install globally
npm i -g tide-commander@latest
tide-commander start
```

Command lifecycle:

```bash
# Start in background (default)
tide-commander start

# Stop the background server
tide-commander stop

# Check whether server is running
tide-commander status

# Show the latest server logs
tide-commander logs

# Follow logs in real time
tide-commander logs --follow
```

CLI…
