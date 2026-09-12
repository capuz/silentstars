---
repo: "qdTXTbp/FuFumidi"
name: "FuFumidi"
description: "Offline MIDI workstation: transcription, piano roll editing, visualization, analysis, score, film scoring. 离线 MIDI 工作站：转录、编辑、可视化、分析、乐谱、影视配乐。"
readmeQualityOk: true
url: "https://github.com/qdTXTbp/FuFumidi"
homepage: "https://qdtxtbp.github.io/FuFumidi/"
language: "Vue"
languages: ["Vue", "JavaScript"]
languagePcts: [37, 31]
topics: ["audio-to-midi", "basic-pitch", "demucs", "desktop-app", "electron", "midi", "midi-editor", "music-transcription", "offline", "piano-transcription"]
stars: 23
forks: 1
openIssues: 0
closedIssues: 2
watchers: 1
contributors: 2
recentReleases: 10
createdAt: "2026-08-13T13:53:17Z"
lastCommitAt: "2026-09-12T07:41:49Z"
lastReleaseAt: "2026-08-26T20:29:20Z"
status: "thriving"
tags: ["solo_builder", "release_machine"]
healthScore: 100
undervaluedScore: 53
maintainers: ["monologue82", "qdTXTbp"]
openGraphImageUrl: "https://opengraph.githubassets.com/b4a21a83ae6fb32c4b6a84d173d1d435ad2686d7badbcf75658edf03bc76d63d/qdTXTbp/FuFumidi"
---

# FuFumidi

</p>

[About](#about) | [Features](#features) | [Transcriber](#transcriber) | [Editor](#editor) | [Playback](#playback-and-visualization) | [Analysis](#analysis) | [Score](#score) | [Conversion](#conversion-and-video-export) | [Film Scoring](#film-scoring) | [Offline Runtime](#offline-runtime) | [Architecture](#architecture) | [Layout](#repository-layout) | [Getting Started](#getting-started) | [Building](#building-and-packaging) | [Testing](#testing) | [Plugins](#plugins) | [CI](#continuous-integration) | [Credits](#credits) | [License](#license)

---

## About

FuFumidi is a fully offline desktop workstation for MIDI. It targets musicians, arrangers, transcriptionists and film composers who need a single tool that can go from raw audio to a clean, editable, publishable MIDI/score asset without ever leaving the machine.

The application is packaged as a classic Electron desktop app with a modern Vue 3 + TypeScript renderer, a bundled Python transcriber/runtime, and an optional Rust core. All audio, model weights and inference execute locally; transcription and editing never upload anything. Only when you opt in to cloud sync does your playlist and MIDI library get…
