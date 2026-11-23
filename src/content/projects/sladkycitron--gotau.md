---
repo: "SladkyCitron/gotau"
name: "gotau"
description: "Work-in-progress UTAU-compatible singing voice synthesizer, written in Go"
readmeQualityOk: true
url: "https://github.com/SladkyCitron/gotau"
language: "Go"
languages: ["Go"]
languagePcts: [100]
topics: ["go", "go-audio", "go-dsp", "golang", "openutau", "singing-synthesis", "singing-voice-synthesis", "utau", "vocaloid", "voice-synthesis"]
stars: 11
forks: 0
openIssues: 6
closedIssues: 2
watchers: 1
contributors: 1
recentReleases: 0
createdAt: "2025-05-05T06:13:17Z"
lastCommitAt: "2026-11-23T13:28:28Z"
status: "thriving"
tags: ["solo_builder", "needs_contributors", "hidden_gem"]
healthScore: 80
undervaluedScore: 60
maintainers: ["SladkyCitron", "Copilot"]
openGraphImageUrl: "https://opengraph.githubassets.com/cb548252a9e3ec0742126001fea1071f889c6b8d125ad7b455e9303e0dd41dec/SladkyCitron/gotau"
---

**GoTAU** is a work-in-progress modern UTAU-compatible singing voice synthesizer written in Go.
It's designed to be fast, modern, modular, and easy to use, while staying backwards compatible with the existing UTAU ecosystem.

Built with ❤️ for the vocal synth community.

## 🚧 Project Status

GoTAU is currently in early development.

Core systems are still being implemented, and many features are incomplete.
Expect bugs and breaking changes.

## ✨ Features

- Fast and efficient synthesis engine
- Cross-platform support
- Backwards compatibility with existing UST files and UTAU voicebanks
- Modular architecture for easy extension

### Planned Features

- Built-in resampler / concatenator
- Plugin support
- GUI

## ⚠️ Known Limitations

- No built-in resampler yet, users have to use an external one for now (I recommend [straycat-rs](https://github.com/UtaUtaUtau/straycat-rs))
- Only supports CV and VCV voicebanks for now
