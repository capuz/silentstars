---
repo: "MuLiuSaMa/MeowCode"
name: "MeowCode"
description: "MeowCode - An Agent with a freely editable architecture"
originalDescription: "MeowCode-可自由编辑架构的Agent"
descriptionLang: "zh"
readmeQualityOk: true
url: "https://github.com/MuLiuSaMa/MeowCode"
homepage: "https://meowcode.cn"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [86]
topics: ["agent", "agents", "ai", "ai-agents", "meowcode", "vibecoding"]
stars: 28
forks: 2
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 1
recentReleases: 5
createdAt: "2026-10-24T05:01:10Z"
lastCommitAt: "2026-11-14T10:48:10Z"
lastReleaseAt: "2026-11-13T17:16:38Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 78
undervaluedScore: 34
maintainers: ["MuLiuSaMa"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1431830876/d46bb4d5-ccec-4733-b471-30f37cbbd5db"
---

A local programming Agent desktop app whose **architecture can be changed as you like**.

Electron + React handle the UI. The Agent core runs in a local HTTP/SSE service, and the UI and core communicate only through an event stream, so the core can run alone, be swapped alone, or be rewritten alone without affecting the UI.

## Highlights

-   **Core and UI fully decoupled**: `pnpm dev:server` runs the core standalone without Electron; any HTTP client can connect.
-   **Not a black box**: tool calls, approvals, compression, and caching policies are all plain TypeScript in `src/agent/`. Changes take effect immediately, with no packaging magic.
-   **Taking tokens seriously**: server-side native compression + local summarization + three-layer governance of tool output + output budget pre-checks, so long sessions are less likely to crash.
-   **The desktop is not just a shell**: terminal, browser, email, file preview, Git, diff review, and the floating island all live in the same window, so you don't have to switch back and forth between editor and terminal.
-   **Local first**: sessions, keys, and logs stay on your machine. Once a key enters memory, it is erased from environment…
