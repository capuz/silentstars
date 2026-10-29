---
repo: "SamuelLHuber/pi-time-tracker"
name: "pi-time-tracker"
description: "Session timing extension for pi-coding-agent"
readmeQualityOk: true
url: "https://github.com/SamuelLHuber/pi-time-tracker"
language: "TypeScript"
languages: ["TypeScript", "JavaScript"]
languagePcts: [54, 46]
stars: 5
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 1
createdAt: "2026-02-15T19:28:28Z"
lastCommitAt: "2026-10-29T10:36:19Z"
lastReleaseAt: "2026-10-03T16:24:09Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 67
undervaluedScore: 23
maintainers: ["SamuelLHuber", "devin-ai-integration[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/c7a40b7ee1c331a12902833a8f6ca00b1116bb4e81b0d1a4a756d22a8da8ac2b/SamuelLHuber/pi-time-tracker"
---

# pi-time-tracker

A [Pi](https://pi.dev) extension that displays session timing in a below-editor widget, preserving Pi 1.0's native model/cost footer.

## Features

Shows in the timing widget:
- **Session time**: Total time since session start (HH:MM:SS)
- **Start time**: When the session began (HH:MM:SS)
- **Working time**: Cumulative time the agent was actively processing
- **Idle time**: Time spent waiting for user input
- **TPS**: Tokens per second (throughput during working time)

## Installation

```bash
pi install git:github.com/SamuelLHuber/pi-time-tracker
```

Or for local development:

```bash
pi -e /path/to/pi-time-tracker
```

## Usage

The extension activates automatically in TUI mode. Timing appears below the editor; Pi retains its native footer, including routed models, cost and other extension statuses. Both regular and fullscreen modes use the same width-bounded widget.

## Format

```
/path/to/project (main) • Session Name
↑12k ↓5k R3k W1k $0.050 45%/200k (auto) anthropic/claude-sonnet-4
⏱ 00:15:23 (started 14:32:01)  ⚙ 00:08:45  💤 00:06:38  🚀 53.5 tok/s
```

Icons:
- ⏱ Session time + start time
- ⚙ Working time (agent processing)
- 💤 Idle time (waiting for…
