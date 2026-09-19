---
repo: "SofusA/qobine"
name: "qobine"
description: "Tui, web and rfid player for Qobuz"
readmeQualityOk: true
url: "https://github.com/SofusA/qobine"
language: "Rust"
languages: ["Rust"]
languagePcts: [90]
topics: ["music", "qobuz", "rfid", "rust", "tui"]
stars: 263
forks: 30
openIssues: 3
closedIssues: 142
watchers: 8
contributors: 19
recentReleases: 0
createdAt: "2025-01-12T14:21:38Z"
lastCommitAt: "2026-09-19T08:14:18Z"
lastReleaseAt: "2025-02-16T18:07:16Z"
status: "thriving"
tags: []
healthScore: 98
undervaluedScore: 40
maintainers: ["SofusA", "dependabot[bot]", "ciaens"]
openGraphImageUrl: "https://opengraph.githubassets.com/a98600d3c2944a6c5dd34d90eab58871ff34ba9a7cbbb55aa927a06e0f8cccdf/SofusA/qobine"
discussionCount: 17
---

# qobine

## High resolution audio player backed by Qobuz

Powered by [Qobuz](https://www.qobuz.com). Requires a paid subscription. This does not allow you to listen for free.

This is a mono repo for multiple third party apps for Qobuz.

This includes a terminal app, a web server and web-ui, a RFID player, and a minimal Qobuz Connect player. 

The web interface is ideal for a setup with a single board computer, e.g. Raspberry Pi, connected to the speaker system and controlled with a smartphone or tablet.

### Terminal UI

[More info](https://github.com/SofusA/qobine/blob/HEAD/tui-module)

### GNOME player

[More info](https://github.com/SofusA/qobine/blob/HEAD/tui-module)

### Web UI
[More info](https://github.com/SofusA/qobine/blob/HEAD/web-module)

### RFID player

[More info](https://github.com/SofusA/qobine/blob/HEAD/rfid-module)

## Connect
### Qobuz Connect
Qobuz Connect is supported in the web, tui and rfid players, and in a standalone minimal connect player: qobine shows up as a playback device in the Qobuz apps, and the tui can switch playback between devices.
This can be enabled with the `--connect` flag and the `connect` cargo feature. It is still experimental; the…
