---
repo: "pumni/Sky-Auto-Player"
name: "Sky-Auto-Player"
description: "Free, open-source auto music player for Sky: Children of the Light on Windows — plays JSON, skysheet, and TXT sheets hands-free."
readmeQualityOk: true
url: "https://github.com/pumni/Sky-Auto-Player"
homepage: "https://pumni.github.io/Sky-Auto-Player/"
language: "Rust"
languages: ["Rust", "Python"]
languagePcts: [49, 44]
topics: ["auto-player", "music-player", "sky-children-of-the-light", "sky-cotl", "sky-music", "sky-player", "automation"]
stars: 12
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 3
recentReleases: 10
createdAt: "2026-05-28T01:07:18Z"
lastCommitAt: "2026-08-22T04:07:49Z"
lastReleaseAt: "2026-07-12T22:55:56Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "funded", "release_machine"]
healthScore: 88
undervaluedScore: 52
maintainers: ["pumni", "github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/9f2ebefcad5c918252a6bc5b0c44e3592076c4d2502808fc67a1ded862c293e1/pumni/Sky-Auto-Player"
fundingLinks: ["KO_FI:https://ko-fi.com/pumni"]
---

# 🎵 Sky Auto Player

*Auto-plays Sky music sheets on Windows — notes, chords and holds land on the beat, not just on keypress.*

**[🌐 Landing page](https://pumni.github.io/Sky-Auto-Player/)** · **[FAQ](https://pumni.github.io/Sky-Auto-Player/faq/)** · **[Download](https://github.com/pumni/Sky-Auto-Player/releases/latest)**

</div>

  </a>
</div>

---

Sky Auto Player turns song sheets from the [specy/skyMusic](https://specy.github.io/skyMusic/)
editor into clean chords, fast arpeggios, and long holds played in-game, automatically. It
sends standard keystrokes through the public Windows `SendInput` API — the same channel any
keyboard macro uses — and never reads game memory, injects code, hooks the process, attaches a
debugger, or touches game files.

## Why it sounds right

Sky Auto Player doesn't replay a fixed macro. It schedules every note like a small performance:

- **Contiguous chord batches** — chord notes are submitted in one `SendInput` batch to reduce sender-side skew; when the game observes them still depends on Windows and the game's sampling loop.
- **Learns your machine's latency** — adaptive lead reduces sender-side completion error from measurements on the…
