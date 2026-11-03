---
repo: "gvergnaud/bise"
name: "bise"
description: "a multi-agent harness, made for humans :* meet your team lead. you stay in flow, i run the agents."
readmeQualityOk: true
url: "https://github.com/gvergnaud/bise"
homepage: "https://bise.dev"
language: "Rust"
languages: ["Rust", "TypeScript"]
languagePcts: [42, 37]
topics: ["ai-agents", "coding-agents", "developer-tools", "terminal", "tui"]
stars: 48
forks: 8
openIssues: 1
closedIssues: 13
watchers: 0
contributors: 5
recentReleases: 10
createdAt: "2026-09-25T15:07:25Z"
lastCommitAt: "2026-11-03T10:51:43Z"
lastReleaseAt: "2026-10-02T08:57:23Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 85
undervaluedScore: 46
maintainers: ["gvergnaud", "SBoudrias"]
openGraphImageUrl: "https://opengraph.githubassets.com/d7bdd1cf7d0fe5227b1705caff53b3d99890ac2feabc290152a9191b62366460/gvergnaud/bise"
---

1. a quick kiss on the cheek :*<br>
  2. a brisk north wind<br>
  3. a team lead for your coding agents, in a Mac app or in your terminal

bise runs several coding agents for you behind one lead agent.

you talk to one agent, the lead (`main`). it splits what you ask into tasks, does the small ones itself, and starts an agent per task when one is needed. the agents work in parallel, tell each other before they touch the same files, and get their own git worktree when they need a separate copy. what needs your decision (an approval, a choice between options, a review) waits in an inbox; the rest doesn't interrupt you.

one lead, one agent per task, one inbox. there is no workflow to configure.

## two front ends, one engine

|  | bise desktop | bise terminal |
|---|---|---|
| what | a macOS app: every project in one window, an inbox, notifications, hold fn to talk from any app | a terminal UI: one thread per repo, keyboard first, works over SSH |
| runs on | macOS 14 or later, Apple silicon | macOS (Apple silicon and Intel), Linux x86_64 and arm64 (glibc 2.34+) |
| install | [download on bise.dev](https://bise.dev) | `curl -fsSL bise.dev/install \| sh` |

both are clients of the…
