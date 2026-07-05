---
repo: "kushiemoon-dev/OpenDrop-VJ"
name: "OpenDrop-VJ"
description: "Real-time 2-deck Milkdrop VJ app — web + Electron, audio-reactive, MIDI, video loops, output window for OBS / second monitor"
readmeQualityOk: true
url: "https://github.com/kushiemoon-dev/OpenDrop-VJ"
homepage: "https://opendrop.kushie.dev"
language: "Svelte"
languages: ["Svelte", "TypeScript"]
languagePcts: [47, 42]
topics: ["audio-visualizer", "linux", "midi", "milkdrop", "obs-studio", "real-time", "vj-software", "windows", "crossfader", "pipewire"]
stars: 9
forks: 0
openIssues: 2
closedIssues: 1
watchers: 0
contributors: 2
recentReleases: 2
createdAt: "2026-01-09T10:58:06Z"
lastCommitAt: "2026-07-05T19:38:17Z"
lastReleaseAt: "2026-06-15T16:24:04Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 86
undervaluedScore: 50
maintainers: ["kushiemoon-dev"]
openGraphImageUrl: "https://opengraph.githubassets.com/e99af521190ffc7aa20db6de68c533043ed576b483327a2df0f13c3c03251a7a/kushiemoon-dev/OpenDrop-VJ"
---

# OpenDrop VJ

### Real-time 2-deck Milkdrop visualizer — web-first, Electron-ready

Open-source VJ tool powered by [Butterchurn](https://github.com/jberg/butterchurn) (WebGL Milkdrop).
Two independent decks, live crossfader, MIDI control, video loops, and a dedicated output window for
second monitors or OBS — no C++ or native toolchain required.

---

## Features

- **2 decks A/B** — independent Butterchurn (Milkdrop WebGL) instances
- **Live crossfader** — real-time opacity blend A↔B; output window follows the fader continuously
- **Playlists** — per-deck auto-cycle (sequential / shuffle), 2–120 s interval, prev / next
- **Beat-sync / BPM** — bass-energy beat detector drives preset transitions on the beat
- **MIDI mapping** — CC/note → crossfader, playlist controls *(Chromium / Electron only)*
- **Preset browser** — search, favorites ★, 1 754 built-in presets (lazy-loaded)
- **Video loops** — overlay MP4/WebM clips with opacity, beat-reactive cut/flash/hue/warp
- **Overlays** — composited SVG/text layers synced to the output
- **Output window** — detached fullscreen canvas for a second monitor or OBS Browser Source;
  crossfader, presets, overlays, and video loops sync live from…
