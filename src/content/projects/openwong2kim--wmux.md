---
repo: "openwong2kim/wmux"
name: "wmux"
description: "Run Claude Code, Codex & Gemini in parallel on Windows & macOS — git worktree fan-out with atomic hunk adoption, approval gates, reboot-surviving sessions"
readmeQualityOk: true
url: "https://github.com/openwong2kim/wmux"
homepage: "https://www.wmux.app"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [93]
topics: ["ai-agents", "ai-coding", "browser-automation", "claude-code", "developer-tools", "electron", "mcp-server", "multi-agent", "powershell", "terminal-multiplexer"]
stars: 400
forks: 67
openIssues: 15
closedIssues: 338
watchers: 2
contributors: 23
recentReleases: 0
createdAt: "2026-03-20T02:54:57Z"
lastCommitAt: "2026-09-28T10:06:15Z"
lastReleaseAt: "2026-03-24T10:21:05Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 99
undervaluedScore: 28
maintainers: ["openwong2kim", "p-poppe"]
openGraphImageUrl: "https://opengraph.githubassets.com/ed27007015f099db31efdaa62c85b6b2033704f0b0503aa2fb06808c9e7aa810/openwong2kim/wmux"
discussionCount: 8
---

# wmux

### The workspace for AI agents.

Run Claude Code, Codex, Gemini, or any CLI agent side by side — native on **Windows and macOS** — and answer them from your **iPhone**.

[**Download**](https://github.com/openwong2kim/wmux/releases/latest) · [**Website**](https://www.wmux.app) · [**Docs**](https://github.com/openwong2kim/wmux/blob/HEAD/docs/README.md) · [**iOS app**](https://apps.apple.com/app/wmux-workspace-for-ai-agents/id6797904556)

<sub>One prompt, three agents in three git worktrees — and the one question that came up, answered from a phone.</sub>

</div>

> **What's a *workspace multiplexer*?** tmux splits a terminal. wmux multiplexes whole **workspaces** — terminals, agents, git worktrees, a browser, and the channels they coordinate over — all owned by a daemon that keeps them running across quits, crashes, and full reboots.

## Install

**Windows** — a package manager skips the SmartScreen prompt:

```powershell
winget install openwong2kim.wmux    # or: choco install wmux
```

<sub>Offline? [Download Setup.exe](https://github.com/openwong2kim/wmux/releases/latest). It is signed with a SignPath *test* certificate for now, so SmartScreen shows an unknown publisher…
