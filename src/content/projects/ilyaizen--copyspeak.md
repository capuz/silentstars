---
repo: "ilyaizen/CopySpeak"
name: "CopySpeak"
description: "🔊 CopySpeak TTS – A lightweight tool for quick AI text-to-speech"
readmeQualityOk: true
url: "https://github.com/ilyaizen/CopySpeak"
homepage: "https://copyspeak.vercel.app"
language: "Rust"
languages: ["Rust", "Svelte"]
languagePcts: [50, 24]
topics: ["shadcn-ui", "svelte", "tauri", "tts", "windows", "kitten-tts", "kokoro-tts"]
stars: 8
forks: 1
openIssues: 0
closedIssues: 1
watchers: 0
contributors: 2
recentReleases: 4
createdAt: "2026-03-20T13:31:56Z"
lastCommitAt: "2026-07-05T20:17:54Z"
lastReleaseAt: "2026-05-20T00:15:51Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 91
undervaluedScore: 57
maintainers: ["ilyaizen"]
openGraphImageUrl: "https://opengraph.githubassets.com/ec1b868335d594fcf0f3668cd95176e191de25156de3f9dc2729809d5a25440e/ilyaizen/CopySpeak"
---

# CopySpeak

A modern Windows desktop app that reads clipboard text aloud using AI Text-to-Speech engines. Trigger speech by quickly copying the same text twice in a row.

## [Download Latest](https://github.com/ilyaizen/CopySpeak/releases)

## Quick Start

```bash
bun install
bun run tauri dev
```

## Features

### Core

- **Multiple trigger modes**: Double-copy (1.5s window), hotkey, or manual paste/play
- **11 TTS engines**:
  - **Local CLI** — Piper, Kokoro, Kitten, Chatterbox, or any CLI TTS tool via local subprocess
  - **Edge TTS** — Free Microsoft Edge Read Aloud backend (default)
  - **OpenAI TTS** — Cloud API with 9 voices
  - **ElevenLabs TTS** — Cloud API with voice library support
  - **Cartesia TTS** — Sonic 3.5 cloud API
  - **Google TTS** — Cloud API
  - **Microsoft TTS** — Azure Cognitive Services
  - **HTTP TTS** — Generic HTTP endpoint backend
- **HUD overlay** — Floating heads-up display with real-time waveform visualization
- **History** — Persistent TTS generation history with playback and batch management
- **Voice profiles** — Create, edit, and switch between named voice profiles with engine, voice, speed, pitch, and effects settings
- **Audio effects** —…
