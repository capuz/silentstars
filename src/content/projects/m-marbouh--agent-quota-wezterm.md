---
repo: "M-Marbouh/agent-quota.wezterm"
name: "agent-quota.wezterm"
description: "WezTerm status bar plugin for Claude and Codex quota usage"
readmeQualityOk: true
url: "https://github.com/M-Marbouh/agent-quota.wezterm"
language: "Python"
languages: ["Python", "Lua"]
languagePcts: [80, 20]
topics: ["ai", "claude", "codex", "lua", "wezterm", "wezterm-plugin"]
stars: 6
forks: 3
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2026-03-21T09:21:05Z"
lastCommitAt: "2026-11-23T13:32:47Z"
lastReleaseAt: "2026-05-11T13:27:29Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 80
undervaluedScore: 42
maintainers: ["M-Marbouh", "NoelisTired"]
openGraphImageUrl: "https://opengraph.githubassets.com/e599d4c4fd448510d69f0e3ab531d2bf44cbcd5b8aaf8ff42bfd904d485a126b/M-Marbouh/agent-quota.wezterm"
---

# Agent Quota for WezTerm

[Listed on Awesome WezTerm](https://github.com/michaelbrusegard/awesome-wezterm#ai)

A WezTerm plugin that shows Claude and Codex quota usage directly in the status bar, with opt-in OpenCode Go and Command Code usage on Unix hosts.
An optional standalone tmux status command provides the same account view on the machine running tmux, including remote and headless tmux servers.

**Works with [CCB](https://github.com/M-Marbouh/claude_code_bridge).** See the [optional CCB setup](#ccb-integration) for the required status-bar configuration.

It displays live usage windows returned by each provider, reset countdowns, process-aware `not running` states, compact percentage bars, and a shared cache so multiple WezTerm windows do not all refresh the same data independently.
