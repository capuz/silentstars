---
repo: "tanh-lab/tanh-lib"
name: "tanh-lib"
description: " https://tanh-lab.github.io/tanh-lib/"
readmeQualityOk: true
url: "https://github.com/tanh-lab/tanh-lib"
language: "C++"
languages: ["C++"]
languagePcts: [93]
stars: 6
forks: 1
openIssues: 5
closedIssues: 2
watchers: 0
contributors: 6
recentReleases: 0
createdAt: "2025-08-22T15:45:04Z"
lastCommitAt: "2026-11-23T13:08:47Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 84
undervaluedScore: 70
maintainers: ["vackva", "faressc", "rodrigodzf"]
openGraphImageUrl: "https://opengraph.githubassets.com/6171a54713235f2bb50d248f1333f31d1fa6f27116fe50903b3d76dd5e03aded/tanh-lab/tanh-lib"
---

# tanh-lib

Modular, real-time-safe C++20 audio library. Seven independently buildable
components, all in namespace `thl`:

- **tanh::Core** -- Dispatcher, Logger (with a real-time path), RCU, lock-free
  queue, generic buffers, header-only WAV decoder
- **tanh::State** -- hierarchical parameter storage with RCU lock-free reads and
  JSON serialization
- **tanh::DSP** -- processors, effects, filters, sample player / looper, slicing,
  pitch banks, granular engine, Rings resonator model (also available alone as
  `tanh::Resonator`)
- **tanh::Modulation** -- modulation matrix with change-point sub-blocking
- **tanh::AudioIO** -- audio device I/O over miniaudio (desktop, iOS, Android)
- **tanh::Net** -- verified HTTPS asset delivery (off by default)
- **tanh::Midi** -- MIDI 1.0 and MIDI 2.0 as Universal MIDI Packets, device
  input (macOS, iOS, Android) and a lock-free queue to the audio thread
- **tanh::Link** -- Ableton Link session and Link Audio (off by default)

Platforms: macOS 12+, iOS 14+, Android, Linux, Windows, WebAssembly.
