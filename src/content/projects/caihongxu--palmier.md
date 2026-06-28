---
repo: "caihongxu/palmier"
name: "palmier"
description: "Run AI agents on your computer and dispatch tasks from anywhere, approve actions on the go, and let agents tap into phone capabilities like notifications, SMS, contacts, and calendar."
url: "https://github.com/caihongxu/palmier"
homepage: "https://www.palmier.me"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [99]
topics: ["ai-agents", "claude-code", "cli", "codex", "gemini-cli", "nodejs", "pwa", "remote-access", "self-hosted", "task-scheduler"]
stars: 10
forks: 1
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 10
createdAt: "2026-03-16T04:42:35Z"
lastCommitAt: "2026-06-28T01:35:04Z"
lastReleaseAt: "2026-04-02T14:46:47Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 68
undervaluedScore: 55
maintainers: ["caihongxu"]
openGraphImageUrl: "https://opengraph.githubassets.com/e3b9ba5788193aef6860bfc520c8ffd5e8d3f203be90f088597856b42d005401/caihongxu/palmier"
---

# Palmier

**Website:** [palmier.me](https://www.palmier.me) | **Web App:** [app.palmier.me](https://app.palmier.me) | **Android App:** [caihongxu/palmier-android](https://github.com/caihongxu/palmier-android)

Palmier installs, manages, and runs AI agent CLIs (Claude Code, Codex, GitHub Copilot, etc.) on your machine using your existing AI subscriptions, and exposes them to your phone through a mobile-friendly PWA and an Android app. It runs as a background daemon and is agent-agnostic — adding support for a new CLI is a config change, not a code change.

The control surface is bidirectional:

* **Phone → agents:** start ad-hoc sessions, register schedule- or event-triggered tasks, inspect session output, and respond to agent input/confirmation requests.
* **Agents → phone:** agents can read device state (location, calendar, contacts, notifications, SMS, battery) and trigger actions (push notifications, full-screen alarms, SMS, email, contact/calendar writes, ringer mode).

Capability access is opt-in per device: each capability is gated behind an Android permission and a per-host toggle. An optional yolo mode auto-approves agent input/confirmation requests.

## Quick Start

1.…
