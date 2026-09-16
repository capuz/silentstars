---
repo: "DarienBrito/EssentiaTD"
name: "EssentiaTD"
description: "TouchDesigner CHOP plugins powered by Essentia for real-time audio analysis"
readmeQualityOk: true
url: "https://github.com/DarienBrito/EssentiaTD"
language: "C++"
languages: ["C++"]
languagePcts: [84]
stars: 137
forks: 1
openIssues: 2
closedIssues: 8
watchers: 8
contributors: 1
recentReleases: 8
createdAt: "2026-03-04T07:50:38Z"
lastCommitAt: "2026-09-16T08:47:58Z"
lastReleaseAt: "2026-07-22T08:41:05Z"
status: "thriving"
tags: ["release_machine"]
healthScore: 89
undervaluedScore: 30
maintainers: ["DarienBrito"]
openGraphImageUrl: "https://opengraph.githubassets.com/4879f0d63d02ec512c6b4b20898da3d8dd20cdffe57e518e1b89292107118dfa/DarienBrito/EssentiaTD"
---

# Essentia CHOP Suite
## Windows (x64) & macOS (Apple Silicon)

Real-time and offline audio analysis for [TouchDesigner](https://derivative.ca/) powered by [Essentia](https://essentia.upf.edu/). Five C++ CHOP plugins expose spectrum analysis, mel bands, MFCCs, pitch detection, key estimation, onset/BPM tracking, and EBU R128 loudness metering, with both real-time (per-frame) and batch (full-file) analysis modes running natively inside TD.

**v2.0: connect audio, get analysis.** Every analyzer takes raw audio directly in both modes and runs its own FFT internally. No intermediate Spectrum CHOP, no per-network FFT bookkeeping. This is a breaking change from v1.x; see [Migrating from v1.x](#migrating-from-v1x).

### **[Interactive Guide — Parameters, Use Cases & Examples](https://darienbrito.github.io/EssentiaTD/)**

</div>

# Overview

*Click to watch on Vimeo.*

# Install

There are three ways to install the library. The installer (a) is the simplest. Use the zip (b) if you prefer to copy files yourself, or build from source (c) if you are a developer.

### a) Installer (recommended)

These links always point to the latest release. Older versions are on the…
