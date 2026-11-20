---
repo: "devicedaw/device"
name: "device"
description: "A cross-platform digital audio workstation with a real-time C++ engine and a GPU-drawn Rust interface."
readmeQualityOk: true
url: "https://github.com/devicedaw/device"
homepage: "https://devicedaw.github.io/"
language: "Rust"
languages: ["Rust", "C++"]
languagePcts: [58, 32]
topics: ["audio", "clap", "cpp", "daw", "music-production", "rust", "slint", "vst3", "wgpu"]
stars: 7
forks: 0
openIssues: 1
closedIssues: 14
watchers: 0
contributors: 1
recentReleases: 2
createdAt: "2026-11-11T05:21:49Z"
lastCommitAt: "2026-11-20T12:04:06Z"
lastReleaseAt: "2026-11-18T08:16:57Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem"]
healthScore: 97
undervaluedScore: 61
maintainers: ["chrislaupama"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1453556413/70db9f77-fe55-44a8-bbc3-58de3880e878"
---

---

## What is Device?

Device is a linear, track-based music production program. You record or import audio, write parts in the piano
roll, shape sounds with the built-in instruments and effects or your own AU, VST3 and CLAP plugins, automate anything,
and mix in the mixer. The audio engine is written in C++23 and never allocates or locks on the audio thread; the
interface is written in Rust with Slint, and the timeline, waveforms, piano roll and meters are drawn on the GPU with
wgpu.

> **Warning**
>
> **Device is pre-alpha.** The latest release, [0.2.0](https://github.com/devicedaw/device/releases/latest), is out to try, but features are missing and the project format may still
> change. macOS is the platform it's developed and tested on every day. Windows audio has been checked on one PC's
> built-in sound card; Linux audio has never run on a physical sound card (it runs real PipeWire and ALSA streams in CI). Keep copies of anything you care about.
