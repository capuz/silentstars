---
repo: "gabe565/nightscout-menu-bar"
name: "nightscout-menu-bar"
description: "Display live blood sugar data from Nightscout in your system menu bar."
readmeQualityOk: true
url: "https://github.com/gabe565/nightscout-menu-bar"
language: "Go"
languages: ["Go"]
languagePcts: [92]
topics: ["dexcom", "diabetes", "macos", "menubar", "nightscout", "freestyle-libre", "cgm-remote-monitor", "blood-sugar"]
stars: 32
forks: 6
openIssues: 3
closedIssues: 6
watchers: 1
contributors: 1
recentReleases: 0
createdAt: "2022-09-28T06:09:59Z"
lastCommitAt: "2026-09-10T08:19:32Z"
lastReleaseAt: "2025-02-12T00:35:36Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 69
undervaluedScore: 51
maintainers: ["renovate[bot]", "gabe565", "dependabot[bot]"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/542434671/b68e8e7a-550a-463b-8557-17ed4344c78a"
---

# Nightscout Menu Bar

A small application that displays live blood sugar data from Nightscout on your menu bar.

Works on Windows, MacOS, and Linux.

<picture>
  <source media="(prefers-color-scheme: light)" srcset="https://github.com/gabe565/nightscout-menu-bar/assets/7717888/2e9e673a-d69f-43b8-9e82-d7168ffa5766">
</picture>

## Install

### Brew (macOS)

```shell
brew install gabe565/tap/nightscout-menu-bar --no-quarantine
```

### Binary

Automated builds are uploaded during the release process. See the [latest release](https://github.com/gabe565/nightscout-menu-bar/releases/latest) for download links.

## Usage

After launching Nightscout Menu Bar, you will need to open its tray menu, then hover over "Preferences" to configure the integration.

The preferences menu contains the following options:
- Nightscout URL (required)
- API Token
- Units: mg/dL or mmol/L
- Start on login
- Write to a local file (see [`contrib/powerlevel10k`](https://github.com/gabe565/nightscout-menu-bar/blob/HEAD/contrib/powerlevel10k))

Additional configuration is available in a configuration file, which can be found in the following locations:
- **Windows:**…
