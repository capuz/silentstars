---
repo: "shimoverse/openvoiceflow"
name: "openvoiceflow"
description: "Free, open-source voice dictation for macOS. On-device WhisperKit transcription + optional LLM cleanup. The $0 alternative to Wispr Flow ($144/yr)."
readmeQualityOk: true
url: "https://github.com/shimoverse/openvoiceflow"
homepage: "https://openvoiceflow.com"
language: "Swift"
languages: ["Swift"]
languagePcts: [77]
topics: ["dictation", "local-first", "macos", "menu-bar-app", "on-device", "open-source", "privacy", "push-to-talk", "speech-to-text", "swift"]
stars: 24
forks: 0
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 3
recentReleases: 10
createdAt: "2026-02-23T04:11:26Z"
lastCommitAt: "2026-09-06T08:04:45Z"
lastReleaseAt: "2026-07-21T04:44:29Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 88
undervaluedScore: 47
maintainers: ["shimoverse"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1164425035/45313905-b85b-440d-ae28-d0afa978073d"
discussionCount: 0
---

# OpenVoiceFlow

**Free, open-source voice dictation for macOS. Hold a key, talk, release — polished text lands in whatever app you're in. Your audio never leaves your Mac.**

People speak at roughly 150 words a minute and type at roughly 40. OpenVoiceFlow exists because closing that gap shouldn't cost $144 a year or require streaming your voice to someone's cloud. We think voice input should eventually be a default feature of every operating system; until it is, this is our contribution — and contributions are welcome.

## Install

**[Download the DMG](https://openvoiceflow.com/download.html)** — one universal build for Apple Silicon and Intel, Developer-ID signed and Apple-notarized. Drag it to Applications, open it, and a one-minute setup walks you through permissions and a speech-engine choice.

Requires macOS 14 (Sonoma) or newer. On macOS 12–13, the download page offers a retained legacy build.

## What it does

- **Push-to-talk dictation** — hold your chosen key (default: `fn`), speak, release. Text pastes at your cursor in any app.
- **On-device transcription** — [WhisperKit](https://github.com/argmaxinc/WhisperKit) runs Whisper locally, from `tiny` (39 MB) to…
