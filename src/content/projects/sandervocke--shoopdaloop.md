---
repo: "SanderVocke/shoopdaloop"
name: "shoopdaloop"
description: "A (live) looping application with DAW elements."
readmeQualityOk: true
url: "https://github.com/SanderVocke/shoopdaloop"
homepage: "https://www.shoopdaloop.com"
language: "Rust"
languages: ["Rust"]
languagePcts: [96]
topics: ["daw", "looping", "midi", "music"]
stars: 57
forks: 1
openIssues: 26
closedIssues: 229
watchers: 3
contributors: 2
recentReleases: 1
createdAt: "2023-06-25T19:30:15Z"
lastCommitAt: "2026-08-12T05:15:05Z"
lastReleaseAt: "2026-08-11T14:43:35Z"
status: "thriving"
tags: ["hidden_gem", "funded", "under_pressure"]
healthScore: 98
undervaluedScore: 55
maintainers: ["SanderVocke", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/9d71c133e13ded9d69b5287eccd89841a7dfdc6a7629b783cf1198d3c0f97137/SanderVocke/shoopdaloop"
fundingLinks: ["BUY_ME_A_COFFEE:https://buymeacoffee.com/sandervocke"]
discussionCount: 5
---

# ShoopDaLoop — Limitless Looping

ShoopDaLoop is a playful cross-platform (including web) live-looping application for audio and MIDI. It organizes loops into a track grid and supports free-form jamming, controller-driven workflows, and prepared performances.

The application is feature-complete for its current design. Releases before 1.0 remain development releases: test them thoroughly before relying on them in a performance.

[User and developer documentation](https://sandervocke.github.io/shoopdaloop/) is published from this repository.

## Current features

- Audio and MIDI loops in aligned track columns.
- A sync loop, synchronized or immediate transitions, fixed-cycle recording, selection, targeting, solo behavior, and retroactive grab recording.
- Regular tracks and dry/wet tracks with independent audio/MIDI topology.
- External FX/synth processing, built-in Tiny Synth/FX, and native Carla Rack/Patchbay hosting when native FX support is enabled.
- JACK, CPAL+midir, and dummy/offline drivers on desktop.
- Web Audio/AudioWorklet and permission-gated Web MIDI in supported browsers.
- Connection management for application and host audio/MIDI ports.
- Session load/save plus…
