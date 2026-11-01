---
repo: "crmne/omarchy-lyrics"
name: "omarchy-lyrics"
description: "Lyrics for whatever is playing on the Omarchy bar, highlighted in time with the song"
readmeQualityOk: true
url: "https://github.com/crmne/omarchy-lyrics"
homepage: "https://plugins.omarchy.org/plugin.html?id=crmne.lyrics"
language: "Python"
languages: ["Python", "QML", "JavaScript"]
languagePcts: [48, 31, 21]
topics: ["hyprland", "karaoke", "lrclib", "lyrics", "mpris", "omarchy", "omarchy-plugin", "quickshell", "synced-lyrics"]
stars: 6
forks: 3
openIssues: 1
closedIssues: 2
watchers: 1
contributors: 2
recentReleases: 4
createdAt: "2026-08-20T10:21:38Z"
lastCommitAt: "2026-11-01T22:59:45Z"
lastReleaseAt: "2026-10-28T10:13:50Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "funded"]
healthScore: 90
undervaluedScore: 68
maintainers: ["crmne", "renovate[bot]"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1340567003/9f5f6d78-ce26-4474-bbbe-f918568ffbdd"
fundingLinks: ["GITHUB:https://github.com/crmne", "PATREON:https://patreon.com/crmne"]
discussionCount: 0
---

# Lyrics Synced with Music

The words to whatever is already playing, in time with the song.

The widget picks up whatever you are playing and looks it up on
[LRCLIB](https://lrclib.net) — so there is nothing to search for, and no
account to make. When the track has synced lyrics, the line being sung is
highlighted and the panel follows along; click any line to jump the player
there.

The preview shows the actual reader with an invented song (artist, words and
cover made up for it) in an isolated capture host, not a live player: the
compact reader, large, following the sung line, over Omarchy's Ristretto wallpaper.
`tools/capture/capture.py` rebuilds it, with `tools/capture/preview.py`
composing the card; the copied service reads no player and looks nothing up.

`microphone icon` · `follows the song` · `click a line to seek` · `timing nudge` · `text size`

## Install

```bash
omarchy plugin add https://github.com/crmne/omarchy-lyrics.git --enable --yes
omarchy bar move crmne.lyrics --section right --before omarchy.tray
```

## Requirements

- Omarchy Quattro with its Quickshell-based shell.
- Any media player that tells the desktop what it is playing (the standard
  MPRIS…
