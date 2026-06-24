---
repo: "bocan/bocan-music"
name: "bocan-music"
description: "A native macOS music and podcast player and library built with Swift 6 and SwiftUI. Features gapless playback, AcoustID fingerprinting, smart playlists, lyrics, visualizers, scrobbling, and a DSP/EQ engine powered by FFmpeg"
url: "https://github.com/bocan/bocan-music"
homepage: "https://bocan.app/"
language: "Swift"
languages: ["Swift"]
languagePcts: [96]
topics: ["acoustid", "airplay", "audio", "equalizer", "ffmpeg", "gapless-playback", "grdb", "last-fm", "macos", "music-player"]
stars: 14
forks: 2
openIssues: 1
closedIssues: 290
watchers: 0
contributors: 2
recentReleases: 10
createdAt: "2026-04-18T16:34:58Z"
lastCommitAt: "2026-06-24T06:38:59Z"
lastReleaseAt: "2026-05-10T02:02:13Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "funded", "release_machine"]
healthScore: 99
undervaluedScore: 60
maintainers: ["bocan", "github-actions[bot]", "dependabot[bot]"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1214485150/d7720be2-9af4-48b4-b9d6-71c9342c8767"
fundingLinks: ["BUY_ME_A_COFFEE:https://buymeacoffee.com/bocan"]
discussionCount: 0
---

# Bòcan Music

![macOS 15+](https://img.shields.io/badge/macOS-15%2B-blue)
![Xcode 26](https://img.shields.io/badge/Xcode-26-1575F9)

**The music player macOS deserves.** No Electron. No Catalyst. No subscription. No cloud. Just your music, played beautifully.

---

## Why Bòcan?

Most Mac music players are either abandoned, Electron-wrapped, or stripped-down streaming clients that barely tolerate local files. Bòcan is the answer to all three: a **native Swift 6 app** built entirely around owning and enjoying your own library, the way iTunes used to before it became a content storefront.

### 🔊 It sounds better

- **True gapless playback** with nanosecond `AVAudioTime` anchoring. Classical transitions, live albums, and DJ mixes play as the artist intended, with zero silence and zero clicks.
- **10-band graphic EQ**, bass boost, stereo expander, binaural crossfeed, and a **peak limiter**, a full DSP chain between your files and your ears.
- **ReplayGain** applied at playback time; analyses missing tags in the background using EBU R128 loudness.
- **Configurable crossfade** (0–12 s), **playback speed** (0.5×–2.0×) with pitch correction, and a **sleep timer** that fades gracefully…
