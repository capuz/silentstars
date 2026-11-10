---
repo: "kjk-engine/kjk"
name: "kjk"
description: "Fan engine for KOTOR / TSL / Jedi Academy. Requires the original games. Not affiliated with Lucasfilm, Disney, BioWare, Obsidian, Raven or Aspyr."
readmeQualityOk: true
url: "https://github.com/kjk-engine/kjk"
language: "Rust"
languages: ["Rust"]
languagePcts: [100]
stars: 62
forks: 3
openIssues: 8
closedIssues: 66
watchers: 1
contributors: 2
recentReleases: 10
createdAt: "2026-10-28T07:43:20Z"
lastCommitAt: "2026-11-10T14:49:23Z"
lastReleaseAt: "2026-11-06T15:18:59Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 97
undervaluedScore: 40
maintainers: ["reclaimterrain"]
openGraphImageUrl: "https://opengraph.githubassets.com/f49cb7fb8f1063c6ef5087625a540dc60f170218900f117909b0275864f1d6d3/kjk-engine/kjk"
---

# kjk

**[Join the Discord](https://discord.gg/23bAu2wvH)**

A Rust engine (Bevy, wgpu) that plays **KOTOR** and **KOTOR II** with
**Jedi Academy**'s real-time movement, sabers and Force, plus native co-op.
KOTOR 1 comes first.

It reads the games from installs you own. **No game data is included here or
in any release.**

## How to play

1. Own and install **KOTOR 1**, **Jedi Academy** and **KOTOR II** (Steam or
   GOG copies are found automatically).
2. Download the file for your computer (macOS, Windows or Linux) from the
   [Releases](https://github.com/kjk-engine/kjk/releases) page and unzip it.
3. Open `kjk`. The first time, it finds your games and sets itself up, then
   shows the main menu.

The builds are not signed, so your computer warns you the first time:

- **macOS:** open System Settings → Privacy & Security and click "Open Anyway".
- **Windows:** click "More info", then "Run anyway".

Movies need [ffmpeg](https://ffmpeg.org/download.html) installed; the game
runs without it.

(Building from source is only needed for development; see
[Development](#development).)

## Playing together

Up to three players: the host plays the main character, friends play the…
