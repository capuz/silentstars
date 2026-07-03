---
repo: "mgth/Omniphony"
name: "Omniphony"
description: "Real-time spatial / object-based audio rendering engine (VBAP + binaural) for multichannel and 3D audio — speakers or headphones."
url: "https://github.com/mgth/Omniphony"
language: "Rust"
languages: ["Rust", "JavaScript"]
languagePcts: [69, 26]
topics: ["3d-audio", "ambisonics", "binaural", "rust", "spatial-audio", "surround-sound", "vbap", "object-audio"]
stars: 19
forks: 2
openIssues: 3
closedIssues: 19
watchers: 0
contributors: 2
recentReleases: 7
createdAt: "2026-03-17T22:29:57Z"
lastCommitAt: "2026-07-03T12:40:15Z"
lastReleaseAt: "2026-07-03T07:08:49Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "funded", "release_machine"]
healthScore: 97
undervaluedScore: 51
maintainers: ["mgth"]
openGraphImageUrl: "https://opengraph.githubassets.com/5c15ed3a8c7676f9d9fd5fe2b2ed8253da0bafad2c9bf3f1f5e675fb87dbc442/mgth/Omniphony"
fundingLinks: ["GITHUB:https://github.com/mgth", "KO_FI:https://ko-fi.com/G5X022D1RW", "LIBERAPAY:https://liberapay.com/mgth"]
---

# Omniphony

**A real-time spatial / object-based audio rendering engine.** Omniphony takes
multichannel and object audio and renders it — with VBAP — to any speaker layout
or to **binaural headphones**, in real time. Open source, GPL-3.0.

- 🎧 **Hear it on headphones** — binaural output (HRTF + ITD + live head-tracking),
  no surround rig required.
- 🔊 **Render to any layout** — stereo, 5.1, 7.1, 7.1.4 and beyond, via VBAP.
- 🧩 **Pluggable decoders** — a small, stable ABI (`bridge_api`) loads decoder
  bridges at runtime; bring your own format.
- 🛰️ **Live control + 3D visualization** — Omniphony Studio supervises the engine
  over OSC.

## Hear it in 2 minutes — no media player needed

The engine ships a self-contained demo: a reference WAV decoder bridge plus a
short multichannel clip. From a fresh clone:

```sh
cd omniphony-renderer
./scripts/demo.sh            # builds the engine, then plays the demo on your headphones
```

`scripts/demo.sh` binaurally renders `assets/demo/spatial-demo.wav` — a source
sweeping around you with an overhead tone — straight to your headphones. No
external player, no proprietary decoder. Other modes:

```sh
./scripts/demo.sh speakers   # 7.1.4…
