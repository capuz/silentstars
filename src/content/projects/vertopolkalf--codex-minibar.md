---
repo: "vertopolkaLF/codex-minibar"
name: "codex-minibar"
description: "Windows tray companion for monitoring ChatGPT Work/Codex usage limits without having to login."
readmeQualityOk: true
url: "https://github.com/vertopolkaLF/codex-minibar"
homepage: "https://vertopolkalf.ru/codex-minibar/"
language: "Rust"
languages: ["Rust"]
languagePcts: [76]
topics: ["ai", "codex", "codexbar", "chatgpt", "codexbar-windows", "windows", "win-codexbar"]
stars: 13
forks: 6
openIssues: 6
closedIssues: 7
watchers: 1
contributors: 7
recentReleases: 9
createdAt: "2026-07-10T04:53:48Z"
lastCommitAt: "2026-10-11T10:14:15Z"
lastReleaseAt: "2026-07-18T13:05:28Z"
status: "thriving"
tags: ["solo_builder", "needs_contributors", "hidden_gem", "funded", "release_machine"]
healthScore: 90
undervaluedScore: 58
maintainers: ["vertopolkaLF", "cursoragent"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1296063605/33733941-2ce2-4eac-bb83-73e29cae17af"
fundingLinks: ["CUSTOM:https://boosty.to/vertopolkalf"]
---

|
  |

---

## Overview

Codex Minibar reads quota data from locally authenticated provider sessions and keeps subscription limits and reset times visible in the notification area. It is a native Windows application written in Rust, with the tray popup and Settings both rendered by GPUI.

> Codex Minibar is an independent project. It is not affiliated with, endorsed by, or sponsored by OpenAI.

## Features

- Show five-hour and weekly usage in one or more configurable tray icons.
- Choose numbers, bars, rings, reset times, or reset countdowns; show remaining or used
  percentage as appropriate.
- Track Kiro's monthly included credits and reset date in its provider card and tray widget.
- Open a compact native popup for the current plan, credits, limit windows, and local token
  statistics (today, the configured history window, and a compact activity bar chart).
- Receive Windows notifications when a limit resets, usage becomes low, Codex cannot be
  reached, or an update is available.
- Receive announced Codex forced-reset countdowns from the public GitHub feed. The feed
  contract and bot update rules live in…
