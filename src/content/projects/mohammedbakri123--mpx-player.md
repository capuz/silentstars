---
repo: "mohammedbakri123/MPx-player"
name: "MPx-player"
description: "a media player for android built on mpv player with nice UI"
readmeQualityOk: true
url: "https://github.com/mohammedbakri123/MPx-player"
language: "Kotlin"
languages: ["Kotlin"]
languagePcts: [100]
stars: 47
forks: 2
openIssues: 34
closedIssues: 295
watchers: 0
contributors: 1
recentReleases: 6
createdAt: "2026-02-10T17:10:11Z"
lastCommitAt: "2026-11-06T12:16:13Z"
lastReleaseAt: "2026-11-05T11:11:16Z"
status: "thriving"
tags: ["solo_builder", "release_machine", "under_pressure"]
healthScore: 98
undervaluedScore: 49
maintainers: ["mohammedbakri123"]
openGraphImageUrl: "https://opengraph.githubassets.com/8a591123d6324437cbc4cec6babae9c48668d7b851100acf775549307e669f26/mohammedbakri123/MPx-player"
---

# MPx Player — native Android (Kotlin)

A native Android rewrite of MPx Player, replacing the Flutter app
(which is preserved, untouched, on the `feat/mpx-modern-ui`
branch of the Flutter repo).

## Stack

- Kotlin, Jetpack Compose, Material 3, Navigation Compose
- Playback engine: **not wired yet**. The player screen is a
  UI shell. The planned engine is Media3 (ExoPlayer) for
  streaming-style playback, with an FFmpeg-based path to be
  decided for local HW/SW decoding and ASS subtitles — the
  same two-layer shape MX uses (own FFmpeg engine for local,
  ExoPlayer for online). No playback is faked.
- Data: **not wired yet**. Library scanning (MediaStore),
  favourites, history, playlists, and downloads need a
  repository layer (Room planned). Screens show empty /
  placeholder states until then.

## Pages (MX structure, MPx's own code)

- Local — "Media" header, shortcut chips, Folders list
- Music — Tracks / Playlists / Albums / Artists / Folders tabs
- Transfer — downloader placeholder (disabled, not built)
- Me — tools grid, App Theme, Settings, Legal, Help
- Settings — plain list: List, Player, Decoder, Audio,
  Subtitle, General, Development, App Language
- Player —…
