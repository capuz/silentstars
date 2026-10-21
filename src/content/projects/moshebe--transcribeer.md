---
repo: "moshebe/transcribeer"
name: "transcribeer"
description: "Local-first meeting transcription and summarization for macOS 🍺"
readmeQualityOk: true
url: "https://github.com/moshebe/transcribeer"
homepage: "https://github.com/moshebe/transcribeer"
language: "Swift"
languages: ["Swift"]
languagePcts: [93]
stars: 6
forks: 4
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 6
recentReleases: 0
createdAt: "2026-04-02T17:46:58Z"
lastCommitAt: "2026-10-21T08:48:31Z"
lastReleaseAt: "2026-07-04T17:14:55Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 81
undervaluedScore: 32
maintainers: ["moshebe", "kostyay", "Or-Priesender"]
openGraphImageUrl: "https://opengraph.githubassets.com/e9d35c1aa4a328b6e408a8c8208390e81ce053946cfbee6873944712b2daef73/moshebe/transcribeer"
---

---

Transcribeer captures both sides of any call, transcribes with speaker labels, and optionally summarizes with an LLM — all running locally on your Mac. No cloud required. Zero Python dependencies.

## Features

- **Dual-source audio capture** — records microphone and system audio separately via Core Audio process tap + AVAudioEngine, then mixes to a single timeline
- **On-device transcription** — [WhisperKit](https://github.com/argmaxinc/WhisperKit) (CoreML, Apple Silicon optimized), Hebrew and multilingual
- **Speaker diarization** — who said what, via [SpeakerKit](https://github.com/argmaxinc/WhisperKit) (Pyannote, on-device)
- **LLM summarization** — Ollama (local), OpenAI, Anthropic, or Gemini (via Google Cloud ADC)
- **Streaming summaries** — live markdown preview as the LLM generates output
- **Custom summary profiles** — swap in a different prompt per session without touching config
- **Native SwiftUI menubar app** — start/stop recording from the menu bar, session browser, settings UI
- **CLI** — scriptable pipeline (`record`, `transcribe`, `summarize`, `run`)
- **Obsidian plugin** — auto-imports sessions into your vault as notes

## Tech Stack

| Layer | Technology |…
