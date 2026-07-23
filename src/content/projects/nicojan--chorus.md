---
repo: "nicojan/Chorus"
name: "Chorus"
description: "Native macOS app that unifies web services into a single window with sandboxed sessions per account. WebKit-based Rambox/Franz alternative."
readmeQualityOk: true
url: "https://github.com/nicojan/Chorus"
language: "Swift"
languages: ["Swift", "JavaScript"]
languagePcts: [64, 35]
stars: 24
forks: 1
openIssues: 0
closedIssues: 2
watchers: 0
contributors: 3
recentReleases: 10
createdAt: "2026-04-12T04:27:29Z"
lastCommitAt: "2026-07-23T06:15:51Z"
lastReleaseAt: "2026-07-13T16:54:08Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 98
undervaluedScore: 50
maintainers: ["nicojan", "marcioviniciusspiridigliozzi-dot"]
openGraphImageUrl: "https://opengraph.githubassets.com/2da45235da19425d052402e5a3ffa7251f3d478dc9b4f994f9bcf3c4bb18b1c1/nicojan/Chorus"
---

# Chorus

A native macOS app that unifies your web services (Gmail, Slack, Discord,
Notion, ChatGPT, and more) into one window, each with its own fully isolated
session. A lightweight, WebKit-based alternative to Chromium apps like Rambox
and Franz, built for Apple Silicon.

**[Download the latest release](https://github.com/nicojan/Chorus/releases/latest)** (macOS 14 or later). The build is signed, notarized, and updates itself via Sparkle.

> Status: 1.5.11 is the current release. See [CHANGELOG.md](https://github.com/nicojan/Chorus/blob/HEAD/CHANGELOG.md) for
> what changed.

## Features

- **Isolated sessions per service.** Each service gets its own
  `WKWebsiteDataStore`, so you can stay signed into two Gmail accounts (or a
  personal and work Slack) side by side with no cookie leakage.
- **Spaces.** Group services into spaces (e.g. 🏠 Personal, 💼 Work). A service
  can live in more than one space; sessions stay isolated per instance.
- **Badges & notifications.** Unread counts surface on the dock and per-space
  chips via title/DOM polling and intercepted web `Notification`s, and appear
  immediately on launch and after sign-in. Per-service control over badges and
  macOS…
