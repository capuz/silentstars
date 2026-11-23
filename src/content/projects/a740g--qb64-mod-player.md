---
repo: "a740g/QB64-MOD-Player"
name: "QB64-MOD-Player"
description: "A MOD player & library for QB64-PE"
readmeQualityOk: true
url: "https://github.com/a740g/QB64-MOD-Player"
homepage: "https://qb64phoenix.com/forum/showthread.php?tid=1045"
language: "QuickBASIC"
languages: ["QuickBASIC"]
languagePcts: [100]
topics: ["basic", "basic-programming", "music", "music-library", "music-player", "qb64", "retro", "protracker", "tracker-music", "fasttracker"]
stars: 15
forks: 3
openIssues: 0
closedIssues: 0
watchers: 2
contributors: 1
recentReleases: 0
createdAt: "2022-05-03T10:58:37Z"
lastCommitAt: "2026-11-23T10:21:44Z"
lastReleaseAt: "2024-09-12T23:45:31Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 80
undervaluedScore: 66
maintainers: ["a740g"]
openGraphImageUrl: "https://opengraph.githubassets.com/afc8b813273ad9deedd6ebdacbeba68eb3b262e7add001f0b465f8681cdaa773/a740g/QB64-MOD-Player"
---

# QB64 MOD Player

A high-performance tracker music player and library written in [QB64-PE](https://www.qb64phoenix.com/).

Supports classic module formats:

- **MOD**: ProTracker, SoundTracker, StarTrekker (1 to 99 channels, AM synth)
- **S3M**: Scream Tracker 3 (digital audio + Yamaha OPL2/OPL3 AdLib FM)
- **MTM**: MultiTracker
- **669**: Composer 669
- **FAR**: Farandole Composer
- **STM**: Scream Tracker 2
- **RAD**: Reality Adlib Tracker (OPL2 FM)
- **ULT**: UltraTracker
- **MDL**: Digitrakker
- **AMF**: Advanced Music Format

---

## Features

- 100% pure BASIC code compiled without external DLLs or runtime dependencies (Windows, Linux, macOS).
- Multi-channel software mixing, volume/pan attenuation, frequency control, and Yamaha OPL2/OPL3 FM emulation.
- Real-time Radix-2 FFT spectral analysis, oscilloscope, VU meters, pattern display, and animated backgrounds.
- Multi-Instance API that supports independent playback instances concurrently without crosstalk.
- Independent core replayer engine with dedicated format loaders for each tracker standard.
