---
repo: "Thurbeen/thurbox"
name: "thurbox"
description: "TUI for agentic code orchestration"
readmeQualityOk: true
url: "https://github.com/Thurbeen/thurbox"
homepage: "https://thurbox.thurbeen.eu/"
language: "Rust"
languages: ["Rust"]
languagePcts: [86]
topics: ["thurbox"]
stars: 115
forks: 16
openIssues: 15
closedIssues: 135
watchers: 1
contributors: 10
recentReleases: 0
createdAt: "2026-02-12T15:47:33Z"
lastCommitAt: "2026-11-01T22:59:08Z"
lastReleaseAt: "2026-02-17T11:32:42Z"
status: "thriving"
tags: []
healthScore: 98
undervaluedScore: 39
maintainers: ["LeTuR", "renovate[bot]", "TMSCH"]
openGraphImageUrl: "https://opengraph.githubassets.com/7c08eef73b8a12b08a80c8b7b68d74a535146d195dceafc98b19e9102b1bc970/Thurbeen/thurbox"
---

# Thurbox

- **Several coding agents at once**, side by side in one terminal — Claude Code, Codex,
  Antigravity, opencode, aider, or any CLI you describe yourself.
- **A persistent multiplexer session behind every agent** — they survive crashes, restarts
  and reboots, so quit thurbox and every agent keeps working.
- **Agents on other machines too** — sessions on a remote host over SSH, or in a WSL
  distro, sit in the same list under their own host, beside the ones running here.
- **One session, several repos** — put any of them on its own git worktree of a shared branch,
  so agents never fight over your checkout.
- **Agent-neutral** — thurbox launches the vendor CLI unmodified and knows nothing about its
  model, prompts or tools, so new agent features arrive the day that CLI ships them.
- **An interface that is not compiled in** — every pane, the session list included, is a Lua
  file in a directory you own; move it, turn it off, rewrite it, or install one somebody else
  wrote.

## Installation

**Linux / macOS:**

```bash
curl -fsSL https://raw.githubusercontent.com/Thurbeen/thurbox/main/scripts/install.sh | sh
```

**Windows (PowerShell):**

```powershell
irm…
