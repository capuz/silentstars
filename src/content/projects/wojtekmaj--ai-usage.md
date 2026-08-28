---
repo: "wojtekmaj/ai-usage"
name: "ai-usage"
description: "Native macOS menu bar and Windows 11 system-tray apps for tracking remaining Claude, Codex, and GitHub Copilot usage."
readmeQualityOk: true
url: "https://github.com/wojtekmaj/ai-usage"
language: "Swift"
languages: ["Swift", "C#"]
languagePcts: [50, 28]
stars: 18
forks: 3
openIssues: 1
closedIssues: 4
watchers: 1
contributors: 4
recentReleases: 2
createdAt: "2026-04-08T21:30:30Z"
lastCommitAt: "2026-08-28T12:23:11Z"
lastReleaseAt: "2026-06-18T08:07:41Z"
status: "thriving"
tags: ["solo_builder", "funded"]
healthScore: 92
undervaluedScore: 44
maintainers: ["wojtekmaj", "udondan", "trueberryless"]
openGraphImageUrl: "https://opengraph.githubassets.com/3dd98cf46f34bf2805943900e6719101ed60b4f9882e631e7e18b449bd5dfd31/wojtekmaj/ai-usage"
fundingLinks: ["GITHUB:https://github.com/wojtekmaj"]
---

# AI Usage App

Native macOS menu bar and Windows 11 system-tray apps for tracking remaining Claude, Codex, and GitHub Copilot usage.

## Features

- Native platform experiences:
  - A macOS menu bar item and Windows 11 provider icons in the system tray.
  - Left click opens a compact transient usage panel; right click exposes quick actions.
  - A separate settings window for Accounts, Appearance, Notifications, Logs, and About.
- Usage tracking:
  - Separate Claude, Codex, and GitHub Copilot providers behind a shared provider abstraction.
  - Codex tracking for 5-hour and weekly usage, GPT-5.3-Codex-Spark limits, credits, and available limit resets.
  - Claude tracking for 5-hour usage and 7-day usage.
  - GitHub Copilot monthly quota tracking.
- Customization and alerts:
  - Configurable refresh cadence, panel background and bar colors, menu bar/system-tray providers, usage panel providers, language, and displayed Claude and Codex percentages.
  - Local notifications for ahead-of-schedule usage, behind-schedule usage, and early or scheduled Codex and Claude resets.
  - Codex reset notifications include a **Preheat** action that sends an ephemeral, tool-free ping through the…
