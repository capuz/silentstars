---
repo: "pro-vi/wezterm-attention"
name: "wezterm-attention"
description: "WezTerm plugin: file-based attention markers turn tabs into a notification surface for AI agents, builds, and scripts"
readmeQualityOk: true
url: "https://github.com/pro-vi/wezterm-attention"
language: "Rust"
languages: ["Rust", "Lua"]
languagePcts: [71, 23]
stars: 27
forks: 4
openIssues: 1
closedIssues: 0
watchers: 1
contributors: 3
recentReleases: 1
createdAt: "2026-03-19T18:48:13Z"
lastCommitAt: "2026-11-08T10:41:22Z"
lastReleaseAt: "2026-08-25T02:34:23Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 79
undervaluedScore: 37
maintainers: ["pro-vi"]
openGraphImageUrl: "https://opengraph.githubassets.com/12db1d2845dbe0b1b05c4c356ae42e56fa78b48477e071c6d08ca660554c34d3/pro-vi/wezterm-attention"
---

# wezterm-attention

Your WezTerm tab bar shows what the AI agent in each tab is doing: working, finished, or waiting for you. It works with Claude Code, Codex and Pi, and any script can set its tab the same way: a build, a test run, a long job.

## What it looks like

| Tab shows | Tint | Meaning |
|-----------|------|---------|
| A robot, blinking | Violet | The agent is working |
| A check | Mint | The agent finished; check the result |
| An exclamation mark in a circle | Rose | The agent needs you, for example at a permission prompt |
| A bookmark | Gold | You flagged the tab for review with `Alt+B` |
| A bell with a slash | None | You muted the tab with `Alt+M` |
| A check, then +2 | Mint | The agent finished, and two of its sub-agents are still running |

A tab lights up while you are on another tab. Focusing the pane clears a check and, in most cases, an exclamation mark. When a tab's panes differ, by default the exclamation mark wins over the check, the check over the bookmark, and the bookmark over the robot. The marks come from the Nerd Font symbols that WezTerm ships with, so they need no font of your own. [The tab…
