---
repo: "aklkbqx/agy-swap"
name: "agy-swap"
description: "Switch Google Antigravity accounts across the CLI and IDE, monitor Gemini, Claude/GPT, and Argon quotas, and auto-rotate sessions from your terminal."
readmeQualityOk: true
url: "https://github.com/aklkbqx/agy-swap"
homepage: "https://agy-swap.aklkbqx.com"
language: "Go"
languages: ["Go"]
languagePcts: [95]
topics: ["account-switcher", "cli", "developer-tools", "gemini-cli", "google-antigravity", "tui", "agy", "agy-cli", "antigravity", "antigravity-cli"]
stars: 22
forks: 8
openIssues: 1
closedIssues: 60
watchers: 0
contributors: 1
recentReleases: 0
createdAt: "2026-07-09T11:47:57Z"
lastCommitAt: "2026-11-14T22:03:44Z"
lastReleaseAt: "2026-08-14T22:36:17Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 99
undervaluedScore: 51
maintainers: ["aklkbqx"]
openGraphImageUrl: "https://opengraph.githubassets.com/303adbc59ddcc685252aba4a8b689c61b1c004678b592a675ee71c01585a9b22/aklkbqx/agy-swap"
---

# agy-swap

### Switch Google Antigravity accounts in the CLI and the IDE from one terminal

agy-swap manages multiple Google Antigravity accounts on one machine, displays live 5-hour and weekly quota across Gemini, Claude/GPT, and Gemini 4 Argon pools with local reset times, and switches both the `agy` CLI and the Antigravity IDE (on macOS and Linux) from one terminal without signing out or opening a browser. Everything runs locally on your machine. Saved tokens stay in `vault.json` (`0600`), which is not encrypted, or in your OS credential store when you set `AGY_SWAP_VAULT=keychain`.

## Why agy-swap

| Problem with multiple Antigravity accounts | How agy-swap solves it |
| :--- | :--- |
| Signing out and re-authenticating in a browser when a pool runs out | Save every Google account once with `agy-swap add`, then switch the `agy` CLI and, on macOS and Linux, the Antigravity IDE in place with `Enter` or `agy-swap switch` |
| Guessing which account still has Gemini, Claude/GPT, or Argon quota left | Live 5-hour and weekly quota gauges, local reset countdowns, and `READY` / `LOW` / `GEMINI ONLY` / `CLAUDE/GPT ONLY` / `LIMITED` / `VERIFY` badges |
| Hitting rate limits mid-task…
