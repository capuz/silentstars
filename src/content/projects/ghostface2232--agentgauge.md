---
repo: "ghostface2232/AgentGauge"
name: "AgentGauge"
description: "Easiest and cleanest way to check the usage of your AI agents on Windows."
readmeQualityOk: true
url: "https://github.com/ghostface2232/AgentGauge"
language: "C#"
languages: ["C#"]
languagePcts: [99]
topics: ["system-tray", "tray-app", "usage-monitor", "windows"]
stars: 6
forks: 2
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 10
createdAt: "2026-06-18T01:36:14Z"
lastCommitAt: "2026-09-10T08:19:53Z"
lastReleaseAt: "2026-07-30T11:16:32Z"
status: "thriving"
tags: ["solo_builder", "release_machine"]
healthScore: 87
undervaluedScore: 60
maintainers: ["ghostface2232", "claude"]
openGraphImageUrl: "https://opengraph.githubassets.com/aaeecbc48419776b8237bc8bd39aaea1e741cdbf51913e672b94fa0eda20b766/ghostface2232/AgentGauge"
---

# AgentGauge

AgentGauge is a Windows system-tray app that lets you check the real usage limits of Claude Code, Codex, Cursor, Antigravity, and GitHub Copilot at a glance.

## Screenshots

## Features

- Shows the usage windows each service currently reports, including Claude's separate model-scoped weekly limits such as Fable and Codex's weekly-only or 5-hour + weekly plan shapes.
- Antigravity follows the model families enabled for your current plan: Gemini quotas remain visible while withdrawn or unavailable Claude/GPT quotas disappear instead of lingering as stale rows.
- Register the services you want in settings, and remove them from their card (default: Claude Code · Codex; add Cursor, Antigravity, or GitHub Copilot from settings).
- Choose how cards display usage — horizontal **bars** or circular **gauges** — from the view-mode dropdown in settings.
- Progress bars/gauges and the tray icon turn yellow above 70% and red above 90%.
- When a provider exposes both the window duration and reset time, an unobtrusive warning appears if usage is running meaningfully ahead of an even pace.
- Refreshes usage every few minutes, and immediately when you open the app from the tray.
-…
