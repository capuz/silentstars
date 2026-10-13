---
repo: "mgth/Omniphony"
name: "Omniphony"
description: "Real-time spatial / object-based audio rendering engine (VBAP + binaural) for multichannel and 3D audio — speakers or headphones."
readmeQualityOk: true
url: "https://github.com/mgth/Omniphony"
language: "Rust"
languages: ["Rust"]
languagePcts: [96]
topics: ["3d-audio", "ambisonics", "binaural", "rust", "spatial-audio", "surround-sound", "vbap", "object-audio"]
stars: 101
forks: 9
openIssues: 5
closedIssues: 61
watchers: 2
contributors: 4
recentReleases: 4
createdAt: "2026-03-17T22:29:57Z"
lastCommitAt: "2026-10-13T10:57:39Z"
lastReleaseAt: "2026-07-24T23:52:52Z"
status: "thriving"
tags: ["solo_builder", "funded"]
healthScore: 98
undervaluedScore: 39
maintainers: ["mgth", "github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/be1b78913017ac6daddc37ceee58b90dcb21ff74c0267dc2c0d4ce6a105c39b2/mgth/Omniphony"
fundingLinks: ["GITHUB:https://github.com/mgth", "KO_FI:https://ko-fi.com/G5X022D1RW", "LIBERAPAY:https://liberapay.com/mgth"]
---

# Omniphony

**A real-time spatial / object-based audio rendering engine.** Omniphony takes
multichannel and object audio and renders it — with VBAP — to any speaker layout
or to **binaural headphones**, in real time. Open source, GPL-3.0.

**Play a film through Omniphony, step by step:**
[Linux](https://github.com/mgth/Omniphony/blob/HEAD/docs/install/linux.md) · [Windows](https://github.com/mgth/Omniphony/blob/HEAD/docs/install/windows.md) · [macOS](https://github.com/mgth/Omniphony/blob/HEAD/docs/install/macos.md)
— what to download, where each file goes, how to check each step, and the usual
failures.

- 🎧 **Hear it on headphones** — binaural output (HRTF + ITD + live head-tracking),
  no surround rig required.
- 🔊 **Render to any layout** — stereo, 5.1, 7.1, 7.1.4 and beyond, via VBAP.
- 🧩 **Pluggable decoders** — a small, versioned ABI (`bridge_api`) loads decoder
  bridges at runtime; bring your own format.
- 🛰️ **Live control + 3D visualization** — Omniphony Studio supervises the engine
  over OSC.

## Hear it in 2 minutes — no media player needed

The engine ships a self-contained demo: a reference WAV decoder bridge plus a
short multichannel clip. From a fresh clone,…
