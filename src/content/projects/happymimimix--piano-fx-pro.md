---
repo: "happymimimix/Piano-FX-Pro"
name: "Piano-FX-Pro"
description: "This will take Black MIDI to the next level! "
readmeQualityOk: true
url: "https://github.com/happymimimix/Piano-FX-Pro"
language: "C++"
languages: ["C++"]
languagePcts: [100]
topics: ["black-midi", "blackmidi", "ce", "cheat-engine", "effects", "midi", "midi-player", "particles", "player", "pitchbend"]
stars: 29
forks: 5
openIssues: 3
closedIssues: 9
watchers: 0
contributors: 4
recentReleases: 0
createdAt: "2024-09-28T03:11:06Z"
lastCommitAt: "2026-10-06T10:41:58Z"
lastReleaseAt: "2024-11-05T13:31:03Z"
status: "thriving"
tags: []
healthScore: 79
undervaluedScore: 59
maintainers: ["happymimimix"]
openGraphImageUrl: "https://opengraph.githubassets.com/0a8544e641cd4fbf11e32ab8b49a3cd58057e210084951c4f620d583478558a7/happymimimix/Piano-FX-Pro"
---

# Piano-FX Pro

A high-performance Black MIDI player built on DirectX 11, forked from Brian Pantano's [Piano From Above](https://github.com/brian-pantano/PianoFromAbove) and extensively rewritten for extreme-scale MIDI playback.

Developed by **happy_mimimix**, with major architectural contributions from **Khangaroo** (note vertex shader, DirectX renderer, MIDI parser redesign).

## Features

### Black MIDI Performance

Piano-FX Pro is purpose-built for Black MIDI — files with millions to billions of notes. The rendering pipeline uses custom HLSL shaders with GPU-side note expansion: each note is a 12-byte struct uploaded to a structured buffer, expanded into quads by the vertex shader, with per-track colors resolved entirely on the GPU. No CPU-side geometry generation, no per-note draw calls.

The MIDI parser uses a pool allocator with 32-byte cache-line-aligned events, a tournament tree for O(log T) track merging, and LZMA decompression for compressed MIDI files. A `LimitedColor` build configuration caps track colors at 256 for even faster rendering on extreme files.

### Pitch Bend Visualization with RPN 0 Support

Piano-FX Pro doesn't just visualize pitch bends — it correctly…
