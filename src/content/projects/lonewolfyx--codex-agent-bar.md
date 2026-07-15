---
repo: "lonewolfyx/codex-agent-bar"
name: "codex-agent-bar"
description: "a lightweight macOS menu bar app for monitoring your Codex quota at a glance"
readmeQualityOk: true
url: "https://github.com/lonewolfyx/codex-agent-bar"
language: "Swift"
languages: ["Swift"]
languagePcts: [83]
topics: ["ai", "codex", "macos", "openai"]
stars: 6
forks: 0
openIssues: 0
closedIssues: 1
watchers: 0
contributors: 1
recentReleases: 10
createdAt: "2026-06-22T16:37:14Z"
lastCommitAt: "2026-07-15T05:54:46Z"
lastReleaseAt: "2026-07-07T09:20:51Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 99
undervaluedScore: 62
maintainers: ["lonewolfyx", "github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/29994b5edca909fa8caf068869f8ac00f590963d4ae6b79f153e66924e551d96/lonewolfyx/codex-agent-bar"
---

<h1>Codex Agent Bar</h1>
</div>
</div>

## Introduction

Codex Agent Bar is a lightweight macOS menu bar app for monitoring your Codex quota at a glance. It connects to the local `codex app-server`, reads the current account rate limit data, and displays the remaining quota directly in the system menu bar.

## Features

- Shows Codex quota in the macOS menu bar.
- Displays short-term and long-term quota windows, including the 5-hour and 1-week windows when available.
- Uses color-coded quota status to make low remaining usage easy to notice.
- Provides a compact popover with quota progress, reset times, last updated time, and a quit action.
- Refreshes quota data automatically every 30 seconds.
- Runs as a menu bar accessory app without appearing in the Dock.

[LICENSE](https://github.com/lonewolfyx/codex-agent-bar/blob/HEAD/LICENSE) &copy; [lonewolfyx](https://github.com/lonewolfyx)
