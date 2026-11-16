---
repo: "thivyan-studios/hark-app"
name: "hark-app"
description: "The Android hearing aid streaming & transcription app"
readmeQualityOk: true
url: "https://github.com/thivyan-studios/hark-app"
language: "Kotlin"
languages: ["Kotlin"]
languagePcts: [90]
topics: ["asha", "audio-processing", "bluetooth", "hearing-aids", "oboe", "cpp", "kotlin-android", "open-source-project", "transcription"]
stars: 41
forks: 4
openIssues: 2
closedIssues: 9
watchers: 4
contributors: 3
recentReleases: 0
createdAt: "2025-05-04T05:28:47Z"
lastCommitAt: "2026-11-16T11:52:54Z"
lastReleaseAt: "2025-11-15T14:55:02Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 82
undervaluedScore: 37
maintainers: ["thivyan-studios", "maxweber"]
openGraphImageUrl: "https://opengraph.githubassets.com/7364a0ba1d2ea928e5f547faef829f5086508db253b7b6c5cc3952e212934904/thivyan-studios/hark-app"
discussionCount: 0
---

# HARK – Hearing Aid Relay Kit


**HARK** turns your Android phone into an ultra-low-latency remote microphone and real-time offline transcription streamer. It streams enhanced, processed speech directly to your hearing aids or headsets while rendering live, privacy-first on-device captions.

Designed to replace expensive proprietary "table mic" hardware accessories, HARK makes assistive listening and clear classroom or meeting speech accessible to everyone with a single tap.

---

## Features & Highlights

- **Ultra-Low Latency Audio Relay**: Native C++ audio engine built on [Google Oboe](https://github.com/google/oboe) for minimal delay between spoken voice and hearing aids.
- **Hearing Aid & Bluetooth Support**: Built specifically for **ASHA (Audio Streaming for Hearing Aids)** devices, with optional support for A2DP, SCO, and BLE headsets.
- **Custom DSP Audio Enhancement**:
  - **Bi-quad High-Shelf Treble Boost** (+8dB @ 3kHz) to enhance consonant clarity for high-frequency hearing loss.
  - **Soft-Knee Dynamic Range Limiter & Compressor** to prevent sudden loud impulse noises from damaging ears.
  - **Hardware Noise Suppression** integration.
- **100%…
