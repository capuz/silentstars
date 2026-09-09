---
repo: "pumni/Sky-Auto-Player"
name: "Sky-Auto-Player"
description: "Free, open-source auto music player for Sky: Children of the Light on Windows — plays JSON, skysheet, and TXT sheets hands-free."
readmeQualityOk: true
url: "https://github.com/pumni/Sky-Auto-Player"
homepage: "https://pumni.github.io/Sky-Auto-Player/"
language: "Rust"
languages: ["Rust"]
languagePcts: [73]
topics: ["auto-player", "music-player", "sky-children-of-the-light", "sky-cotl", "sky-music", "sky-player", "automation"]
stars: 14
forks: 0
openIssues: 5
closedIssues: 24
watchers: 0
contributors: 3
recentReleases: 5
createdAt: "2026-05-28T01:07:18Z"
lastCommitAt: "2026-09-09T08:19:43Z"
lastReleaseAt: "2026-07-12T22:55:56Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "funded", "release_machine"]
healthScore: 96
undervaluedScore: 55
maintainers: ["pumni"]
openGraphImageUrl: "https://opengraph.githubassets.com/2d2e2ec459791febca968fd8063e25a162e027152ff3456a387b72ae8695d72a/pumni/Sky-Auto-Player"
fundingLinks: ["KO_FI:https://ko-fi.com/pumni"]
---

# Sky Auto Player

*Auto-plays Sky music sheets on Windows — notes, chords, and holds land on the beat with sub-millisecond native precision.*

**[🌐 Landing Page](https://pumni.github.io/Sky-Auto-Player/)** · **[FAQ](https://pumni.github.io/Sky-Auto-Player/faq/)** · **[Releases / Downloads](https://github.com/pumni/Sky-Auto-Player/releases)**

</div>

  </a>
</div>

The packaged `Sky-Auto-Player.exe` opens the canonical Tauri desktop GUI. It is the only supported
user-facing application and runs entirely on the native Rust desktop runtime.

---

**Sky Auto Player** transforms song sheets from the [specy/skyMusic](https://specy.github.io/skyMusic/) editor into clean chords, rapid arpeggios, and expressive holds played in-game with microsecond-level timing accuracy.

The application uses a **high-performance native architecture**:
- 🦀 **Native Rust Real-Time Core (`sky_player`)** — Dedicated RT worker handling timeline compilation, absolute QPC scheduling, MMCSS thread priority, sub-millisecond spin-wait, focus gating, and safe input dispatch.
- 🖥️ **Tauri 2 + React/TypeScript desktop GUI** — The canonical packaged interface for Library, Song Detail, Player Dock, Diagnostics,…
