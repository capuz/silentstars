---
repo: "BetaYao/seahelm"
name: "seahelm"
description: "A native macOS workspace for coding agents — every git worktree a row on one roster, one agent to a split pane. Built on Ghostty, sessions persist through zmx."
readmeQualityOk: true
url: "https://github.com/BetaYao/seahelm"
homepage: "https://www.seahelm.dev"
language: "Swift"
languages: ["Swift"]
languagePcts: [84]
topics: ["ai-agents", "appkit", "claude-code", "codex", "coding-agent", "developer-tools", "ghostty", "git-worktree", "macos", "swift"]
stars: 18
forks: 3
openIssues: 2
closedIssues: 16
watchers: 0
contributors: 5
recentReleases: 0
createdAt: "2026-06-25T03:35:23Z"
lastCommitAt: "2026-11-03T12:47:55Z"
lastReleaseAt: "2026-07-20T02:15:55Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 97
undervaluedScore: 49
maintainers: ["BetaYao"]
openGraphImageUrl: "https://opengraph.githubassets.com/894e9e4e9996f1fa3bbf7a5d52f0870df5a932c30ba88a4319d5187d093fb3e6/BetaYao/seahelm"
---

# Seahelm

A native macOS workspace for coding agents, git worktrees, and parallel development.

[中文文档](https://github.com/BetaYao/seahelm/blob/HEAD/README.zh-CN.md) · [www.seahelm.dev](https://www.seahelm.dev/)

## Demo

Full walkthrough: [YouTube](https://youtu.be/WUUcuglx_Ks)

## Why Seahelm

Several tools now run coding agents side by side on macOS. Seahelm shares the obvious
parts with them — Swift, libghostty, one git worktree per agent, hooks for status.
Three things are its own.

**It lives outside the terminal.** A multiplexer puts status inside the window you
are trying to stop watching. Seahelm's Island sits at the edge of the screen and
stays quiet until a worktree needs you, blocked agents raise real system
notifications, and you can answer one from your phone over iMessage. Claude and
Codex token and quota usage are summarised in-app, so you also see when an agent is
about to run out of budget rather than out of ideas.

**Built around the decision, not the display.** Seahelm reads the agent's final response
from the Stop hook and turns an inline next-step marker into clickable cards. First Mate
watches status transitions and either handles them or queues them for…
