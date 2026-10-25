---
repo: "mollykitten/waveform"
name: "waveform"
description: "a keyboard-first soundcloud client for desktop. flutter, macos / windows / linux"
readmeQualityOk: true
url: "https://github.com/mollykitten/waveform"
language: "Dart"
languages: ["Dart"]
languagePcts: [88]
topics: ["dart", "desktop-app", "flutter", "macos", "music-player", "riverpod", "soundcloud"]
stars: 5
forks: 1
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2026-05-27T23:08:21Z"
lastCommitAt: "2026-10-25T02:47:31Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 82
undervaluedScore: 50
maintainers: ["mollykitten", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/a85a45f3a07beeee5a5b4141b2a9e93be52d07b48f817a977f7771f764ffb35d/mollykitten/waveform"
---

web soundcloud is fine, tabs are not

desktop clients for it either don't exist or they're electron wrapped around the website. so i made a real native one, closer to canonical soundcloud than other unofficial clients but darker and quieter, and you can run it for hours without touching the trackpad

> **v0.3.0:** likes and reposts finally stick
>
> soundcloud's datadome anti-bot was 403-ing every write because a plain http client doesn't look like a browser. writes now go through the app's own invisible webview with a real browser fingerprint lol
>
> also full soundcloud-web keyboard parity (press `H` in the app) and crossfade fixes, no more silent or non-overlapping transitions. daily-driver loop works on macos, windows and linux build too but i test them less. the api is unofficial so rough edges stay. everything else in [`CHANGELOG.md`](https://github.com/mollykitten/waveform/blob/HEAD/CHANGELOG.md)

## what you get

- **keyboard first.** space plays, ⌘K finds anything, arrows seek, ⇧ + arrows skip. enter on a track page plays it
- **gapless + crossfade 0-6 s.** the next track preloads on a second engine and swaps in on the last sample
- **media keys.** control center on…
