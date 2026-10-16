---
repo: "gustaferiksson/amped"
name: "amped"
description: "A tiny native macOS menu bar app that keeps your Mac awake — even with the lid closed."
readmeQualityOk: true
url: "https://github.com/gustaferiksson/amped"
language: "Swift"
languages: ["Swift"]
languagePcts: [89]
stars: 6
forks: 1
openIssues: 0
closedIssues: 1
watchers: 0
contributors: 2
recentReleases: 10
createdAt: "2026-06-17T15:10:01Z"
lastCommitAt: "2026-10-16T08:26:53Z"
lastReleaseAt: "2026-10-08T19:38:22Z"
status: "thriving"
tags: ["hidden_gem", "release_machine"]
healthScore: 88
undervaluedScore: 49
maintainers: ["gustaferiksson"]
openGraphImageUrl: "https://opengraph.githubassets.com/b136393bd1e809ac9e8c82944d031604385d322d1530b782f39def648fc98c68/gustaferiksson/amped"
---

# Amped ⚊

A tiny, completely native macOS menu bar app that keeps your Mac awake — an
Amphetamine-style alternative whose party trick is keeping the Mac awake **with
the lid closed**, using `pmset disablesleep` rather than `caffeinate` alone.

No window, no settings sheet, no Dock icon. Just a pill in your menu bar and a
handful of switches.

## Install

```sh
brew install --cask gustaferiksson/tap/amped
```

Or grab the notarized `Amped.app` from the [latest release](https://github.com/gustaferiksson/amped/releases/latest)
and drop it in `/Applications`. macOS 26 (Tahoe) or newer.

## The menu

Click the pill in the menu bar:

| Toggle | What it does |
| --- | --- |
| **Keep Awake** | Prevents idle sleep while the lid is open. Uses an IOKit power assertion (same mechanism as `caffeinate`). No password needed. |
| **Keep Running While Locked** | Keeps the Mac and everything on it running with the lid **closed** (clamshell). When you close the lid without an external display connected, Amped locks the screen and turns off the display, so the Mac stays behind your password. It works on its own, without *Keep Awake*. With the lid open the display still sleeps and locks as usual;…
