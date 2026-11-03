---
repo: "kipavy/spotube-plugin-lossless-sources"
name: "spotube-plugin-lossless-sources"
description: "Zero-config lossless audio source for Spotube. Routes each track to whichever public source can play it — hifi-api instances for Tidal, the Internet Archive — from a list an hourly probe keeps current."
readmeQualityOk: true
url: "https://github.com/kipavy/spotube-plugin-lossless-sources"
language: "Dart"
languages: ["Dart", "Python"]
languagePcts: [71, 24]
topics: ["spotube", "spotube-plugin", "spotube-audio-source-plugin"]
stars: 8
forks: 2
openIssues: 2
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 6
createdAt: "2026-08-03T15:55:32Z"
lastCommitAt: "2026-11-03T10:52:18Z"
lastReleaseAt: "2026-10-06T13:46:52Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 70
undervaluedScore: 48
maintainers: ["github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/b2a0e7f21bb03de925af6a53792ae579fc08cb8bf74cb8971815338fd8c8d20b/kipavy/spotube-plugin-lossless-sources"
---

# Lossless Sources — Spotube audio source plugin

An **audio source** for [Spotube](https://spotube.cc). Spotube gets your
library, playlists and metadata from somewhere else (Spotify, MusicBrainz,
whatever you use); this plugin is asked one question per track — *where can I
stream this?* — and answers it from public sources.

**It asks you for nothing.** No account, no login, no API key, no settings
screen. Install it, select it as your audio source, done.

> [!WARNING]
> **You will not hear lossless until you switch Spotube's streaming format to
> `flac`:** Settings → Playback → streaming format → **`flac`**.
>
> Spotube defaults to `mp4`, and on `mp4` every track plays from YouTube
> (shown as 320 kbps) even when FLAC is available. If nothing plays at all on
> `mp4`, that is Spotube's YouTube engine failing — switching to `flac` fixes
> it for every track a lossless source has. [Why](#install)

## What it can actually play, honestly

| Source | What is in it | State today |
|--------|---------------|-------------|
| **Monochrome** | The mainstream catalogue in FLAC, 16-bit/44.1kHz up to 24-bit/96kHz, served from Monochrome's own servers | 🟢 working |
| **hifi-api instances** |…
