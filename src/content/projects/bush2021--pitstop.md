---
repo: "Bush2021/pitstop"
name: "pitstop"
description: "Set up, update and configure portable Chrome on Windows."
readmeQualityOk: true
url: "https://github.com/Bush2021/pitstop"
language: "Go"
languages: ["Go"]
languagePcts: [99]
topics: ["chrome", "chrome-plus", "configuration", "golang", "mygo", "portable", "updater", "windows"]
stars: 7
forks: 2
openIssues: 0
closedIssues: 1
watchers: 0
contributors: 1
recentReleases: 1
createdAt: "2026-10-31T03:41:45Z"
lastCommitAt: "2026-11-05T08:05:04Z"
lastReleaseAt: "2026-11-02T06:35:00Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem"]
healthScore: 90
undervaluedScore: 36
maintainers: ["Bush2021"]
openGraphImageUrl: "https://opengraph.githubassets.com/04fb8259945a8050983214dff4aa9a4c31f62c11b1b68f5c00d26d5c25f1560f/Bush2021/pitstop"
---

Set up, update and configure portable Chrome on Windows.

Pitstop sets up portable Google Chrome for use with [Chrome++ Next](https://github.com/Bush2021/chrome_plus), keeps both up to date, and configures `chrome++.ini` interactively. Its native UI is written with [MyGo](https://github.com/egoist/mygo) and keeps memory and CPU use low. It comes in English and Simplified Chinese, with light and dark themes.

## Features

### Setup and updates

- Sets up Chrome and Chrome++ Next for several architectures.
- Takes over an existing portable Chrome when placed next to its `App` folder.
- Updates Chrome and Chrome++ Next manually or automatically in the background.
- Can keep earlier versions and their data.
- Supports differential Chrome updates.
- Gets small xz packages for Chrome over Omaha protocol 4, decoding them as they download and resuming interrupted downloads.

### Configuration

- Edits Chrome++ Next's options interactively.
- Searches settings by English or Chinese name, or by key.
- Records shortcuts as you press them.
- Picks common Chrome commands and command-line switches from built-in lists.
- Moves the profile folder together with its data.
- Shows the changed lines…
