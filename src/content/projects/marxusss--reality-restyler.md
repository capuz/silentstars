---
repo: "marxusss/reality-restyler"
name: "reality-restyler"
description: "Live camera restyling with AI that runs on your PC."
readmeQualityOk: true
url: "https://github.com/marxusss/reality-restyler"
language: "Python"
languages: ["Python", "JavaScript", "PowerShell"]
languagePcts: [38, 28, 22]
stars: 8
forks: 2
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 9
createdAt: "2026-11-15T07:07:18Z"
lastCommitAt: "2026-11-24T01:24:06Z"
lastReleaseAt: "2026-11-24T01:27:07Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 87
undervaluedScore: 56
maintainers: ["marxusss", "marcus"]
openGraphImageUrl: "https://opengraph.githubassets.com/8a447bbe1cc01498acdaf57dc7635db61adcc54cb143e37d9a1051c393d9adcf/marxusss/reality-restyler"
---

&nbsp;·&nbsp;
  &nbsp;·&nbsp;
  &nbsp;·&nbsp;

## Features

- **Live Restyling** — Apply AI styles as you move.
- **Custom Styles** — Save your own prompts and thumbnails.
- **Phone Connection** — Use your phone camera over Tailscale.
- **Style Combiner** — Blend up to five styles.
- **Photo & Video** — Save restyled captures to your device.

## Setup

1. On Windows 11, run `RealityRestylingSetup.exe` and select your model folder or download the files.
2. In **Reality Restyling**, select **Start server**, then **Open app** (or opt to start it when installation finishes).
3. Press **Start** and choose a style.

### Phone

With Tailscale connected on both devices, open the phone link from the Windows launcher in Safari, then tap **Share → Add to Home Screen** to connect from the new icon whenever the PC server is running.

[Phone setup and troubleshooting](https://github.com/marxusss/reality-restyler/blob/HEAD/docs/setup.md)

## Development

On Windows, run `.\tools\dev.ps1` in a checkout to serve **that checkout** at [localhost:8782](http://127.0.0.1:8782/). It reuses local or installed dependencies; restart after editing. Installed versions continue updating from GitHub releases.
