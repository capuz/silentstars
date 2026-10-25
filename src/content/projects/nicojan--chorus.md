---
repo: "nicojan/Chorus"
name: "Chorus"
description: "Native macOS app that unifies web services into a single window with sandboxed sessions per account. WebKit-based Rambox/Franz alternative."
readmeQualityOk: true
url: "https://github.com/nicojan/Chorus"
language: "Swift"
languages: ["Swift"]
languagePcts: [82]
stars: 34
forks: 2
openIssues: 0
closedIssues: 8
watchers: 0
contributors: 4
recentReleases: 0
createdAt: "2026-04-12T04:27:29Z"
lastCommitAt: "2026-10-25T22:10:46Z"
lastReleaseAt: "2026-07-13T16:54:08Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 99
undervaluedScore: 42
maintainers: ["nicojan"]
openGraphImageUrl: "https://opengraph.githubassets.com/63741c09a9dbc30be7b4255644c2232b307fb0fddee2925a824b97cb21e40062/nicojan/Chorus"
---

# Chorus

A native macOS app that unifies your web services (Gmail, Slack, Discord,
Notion, ChatGPT, and more) into one window, each with its own fully isolated
session. A lightweight, WebKit-based alternative to Chromium apps like Rambox
and Franz, built for Apple Silicon.

**[Download the latest release](https://github.com/nicojan/Chorus/releases/latest)** (macOS 14 or later), or install it with Homebrew:

```sh
brew install --cask nicojan/tap/chorus
```

The build is signed, notarized, and updates itself via Sparkle. Homebrew installs
from my own tap rather than the main homebrew/cask tap, which takes only projects
with more stars than Chorus has so far.

> Status: 1.5.17 is the current release. See [CHANGELOG.md](https://github.com/nicojan/Chorus/blob/HEAD/CHANGELOG.md) for
> what changed.

## Features

- **Isolated sessions per service.** Each service gets its own
  `WKWebsiteDataStore`, so you can stay signed into two Gmail accounts (or a
  personal and work Slack) side by side with no cookie leakage.
- **Spaces.** Group services into spaces (e.g. 🏠 Personal, 💼 Work). A service
  can live in more than one space; sessions stay isolated per instance.
- **Badges &…
