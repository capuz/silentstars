---
repo: "rommix0/glottis-tts"
name: "glottis-tts"
description: "A fully functional formant speech synthesizer for Rust."
readmeQualityOk: true
url: "https://github.com/rommix0/glottis-tts"
language: "Rust"
languages: ["Rust"]
languagePcts: [99]
topics: ["formant", "formant-synthesis", "text-to-speech", "tts", "tts-api", "tts-engine"]
stars: 11
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 3
createdAt: "2026-08-30T12:29:52Z"
lastCommitAt: "2026-11-26T23:33:34Z"
lastReleaseAt: "2026-11-26T23:36:58Z"
status: "thriving"
tags: ["solo_builder", "funded"]
healthScore: 79
undervaluedScore: 49
maintainers: ["rommix0"]
openGraphImageUrl: "https://opengraph.githubassets.com/81c360e5bb20465a052982c330269ae130bdeaeaeec219ea6d8a178d152a8d29/rommix0/glottis-tts"
fundingLinks: ["GITHUB:https://github.com/rommix0", "CUSTOM:https://paypal.me/abartman20"]
---

# Glottis TTS

A formant text-to-speech synthesizer for English, written in Rust.

The majority of this code has been written by hand by Anthony C. Bartman, while Claude Opus 5.5 was used for assistance during the touch-up stage.

It turns plain English text into mono, signed 16-bit speech at 22050 Hz, or at 44100 Hz with the `rate-44100` feature for music hosts (the same voice, at twice the DSP work). The library is `#![no_std]` and needs only an allocator, so the same code runs on a desktop or on a microcontroller with an FPU.

```
text -> normalizer -> dictionary / suffix matching / letter-to-sound
     -> utterance -> durations and pitch -> formant synthesizer -> samples
```
