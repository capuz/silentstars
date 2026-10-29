---
repo: "LuYingYiLong/godot-fmodplayer"
name: "godot-fmodplayer"
description: "Providing professional FMOD audio middleware support for the Godot engine"
readmeQualityOk: true
url: "https://github.com/LuYingYiLong/godot-fmodplayer"
homepage: "https://godot-fmodplayerdocs.readthedocs.io/en/latest/"
language: "C++"
languages: ["C++"]
languagePcts: [73]
topics: ["fmod", "fmod-core-api", "gdextension", "godot-addon", "godot-plugin", "godot", "godot4"]
stars: 26
forks: 3
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 4
recentReleases: 1
createdAt: "2026-02-10T06:32:34Z"
lastCommitAt: "2026-10-29T10:36:29Z"
lastReleaseAt: "2026-10-26T14:52:17Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 80
undervaluedScore: 36
maintainers: ["LuYingYiLong", "IndexZeroCN"]
openGraphImageUrl: "https://opengraph.githubassets.com/004546531936dcf3582eead1cc71d8b90ca9476a387771c8d570c479b8203c8e/LuYingYiLong/godot-fmodplayer"
---

## Features

- Playback nodes: `FmodAudioStreamPlayer`, `FmodAudioStreamPlayer2D`, and `FmodAudioStreamPlayer3D`.
- Audio import and inspector preview, with streaming and sample loading from files, memory, and Godot PCK resources.
- Bus synchronization with Godot's `AudioServer`, named bus routing, and channel group controls.
- DSP effects: gain, filter, EQ6/10/21, chorus, delay, distortion, phaser, pitch shift, reverb, compressor, limiter, stereo enhancement, and panning.
- Spectrum analysis, sample capture, and bus recording with waveform snapshots.
- 3D audio with camera-based listeners, distance attenuation, geometry occlusion, and reverb zones.
- Editor gizmos, geometry tools, project settings, performance monitors, and Android export setup.

## Quick Start

1. Install from the [Godot Asset Library](https://godotengine.org/asset-library/asset/4905) or copy `addons/fmod_player` from a [GitHub release](https://github.com/LuYingYiLong/Godot-FmodPlayer/releases) into your project.
2. On Windows, copy `api/core/lib/x64/fmod.dll` from the matching FMOD 2.04 [Core SDK](https://www.fmod.com/download) into `addons/fmod_player/bin`.
3. Enable **FMOD Player** under **Project > Project…
