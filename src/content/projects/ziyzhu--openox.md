---
repo: "ziyzhu/openox"
name: "openox"
description: "Moo moo"
readmeQualityOk: true
url: "https://github.com/ziyzhu/openox"
homepage: "https://openox.ai"
language: "Swift"
languages: ["Swift"]
languagePcts: [65]
topics: ["agent", "ios", "self-evolving"]
stars: 13
forks: 0
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 3
recentReleases: 0
createdAt: "2026-08-22T21:53:45Z"
lastCommitAt: "2026-10-20T08:48:11Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem"]
healthScore: 90
undervaluedScore: 43
maintainers: ["ziyzhu"]
openGraphImageUrl: "https://opengraph.githubassets.com/1b0775dc90c7bd96d1ceb21b71f451ac310907aaf50f43da2d9ad222239a9679/ziyzhu/openox"
---

A self-evolving agent that runs on your phone.

[Website](https://openox.ai) · [App Store](https://apps.apple.com/us/app/ox-self-evolving-agent/id6802224502) · [Discord](https://discord.gg/55eS3kEEX)

---

## Features

1. **Connect anything** — Ox works across AI assistants, apps, and websites to get things done for you.
2. **Local first** — Ox runs on your device, keeping your conversations, credentials, and memory stored locally.
3. **Yours** — Open source and malleable, Ox evolves with you and uses the models you choose.

## Usage

- **Clients:** [iOS app](https://github.com/ziyzhu/openox/blob/HEAD/apps/ios) and [CLI](https://github.com/ziyzhu/openox/blob/HEAD/apps/cli) for macOS and Linux.
- **Hosts:** built-in iOS Host and standalone [macOS Host](https://github.com/ziyzhu/openox/blob/HEAD/apps/macos) (WIP).

The iOS app uses its built-in Host. The CLI can connect to either Host.

```mermaid
flowchart LR
    iOS["iOS app"] --> iOSHost["iOS Host · on your phone"]
    CLI["CLI · macOS / Linux"] --> iOSHost
    CLI --> MacHost["macOS Host · WIP"]
```

**Use Ox on iPhone**

1. Install [Ox from the App Store](https://apps.apple.com/us/app/ox-self-evolving-agent/id6802224502).
2.…
