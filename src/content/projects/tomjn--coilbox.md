---
repo: "tomjn/coilbox"
name: "coilbox"
description: "A desktop app for playing and building games on the Recoil and Spring RTS engines."
readmeQualityOk: true
url: "https://github.com/tomjn/coilbox"
homepage: "https://tomjn.github.io/coilbox/"
language: "TypeScript"
languages: ["TypeScript", "Rust"]
languagePcts: [66, 26]
stars: 5
forks: 2
openIssues: 175
closedIssues: 2579
watchers: 1
contributors: 3
recentReleases: 0
createdAt: "2026-06-23T21:49:26Z"
lastCommitAt: "2026-11-26T23:30:33Z"
lastReleaseAt: "2026-06-30T19:59:53Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 99
undervaluedScore: 64
maintainers: ["tomjn"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1278518576/d1254314-e913-4edd-a511-b9fbdbe72d45"
---

A desktop app for playing and building games on the

- Get games, maps and engines from the rapid repositories and springfiles, through a
  bundled `pr-downloader` sidecar, including curated map packs in one click.
- Play: a lobby client with chat channels, battle rooms, self-hosting and moderation
  tools, plus singleplayer skirmish, campaigns, roguelite runs and galactic conquest.
- Make: scenarios and missions, battle presets, base blueprints, unit tweaks, a unit
  builder, and map compiling and decompiling.
- Share what you make through the hub, and import anyone else's in one click.
- Reskin and narrow the app for your own game with a distribution profile, or run it
  portable from a folder.

Coilbox is a [Tauri](https://tauri.app) v2 app that composes
[picoframe](https://github.com/tomjn/picoframe) plugins.

## Install

Download the build for your OS from [Releases](https://github.com/tomjn/coilbox/releases).

**macOS:** the app is ad-hoc signed but **not notarized** (no Apple Developer
account), so Gatekeeper blocks it on first launch. After copying Coilbox to
Applications, clear the download quarantine:

```sh
xattr -dr com.apple.quarantine /Applications/Coilbox.app
```
