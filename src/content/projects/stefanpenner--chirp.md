---
repo: "stefanpenner/chirp"
name: "chirp"
description: "Free, Fast, Offline voice-to-text for macOS"
readmeQualityOk: true
url: "https://github.com/stefanpenner/chirp"
language: "Swift"
languages: ["Swift"]
languagePcts: [72]
stars: 13
forks: 3
openIssues: 1
closedIssues: 15
watchers: 0
contributors: 3
recentReleases: 0
createdAt: "2026-02-14T08:09:54Z"
lastCommitAt: "2026-07-12T06:17:52Z"
lastReleaseAt: "2026-02-15T21:13:46Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 99
undervaluedScore: 50
maintainers: ["stefanpenner", "github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/0d65bac436ba2f6288048be38666bebf9ebfdec4823638444ce3b4641b76566a/stefanpenner/chirp"
---

# Chirp

**Free, fast, offline voice-to-text for macOS.**

Hold `fn`, speak, release — text appears at your cursor. Works fully offline by default with no accounts, no servers, and no data leaving your machine. Optionally connect cloud providers for higher-accuracy transcription and AI post-processing.

## Install

### Download

Grab the latest DMG from [GitHub Releases](https://github.com/stefanpenner/chirp/releases), open it, and drag Chirp to Applications.

### Homebrew

```
brew install --cask stefanpenner/chirp/chirp
```

### Build from source

```
brew install bazelisk
bazel run //:Chirp
```

## Features

- **Hold-to-talk** — Press `fn` (configurable) to record, release to transcribe
- **Works everywhere** — Text is typed at your cursor in any app
- **Speculative preview** — See partial transcription as you speak
- **Fast** — Parakeet TDT 0.6b v3 with Silero VAD, all on-device
- **AI Modes** — Pipeline presets switchable from the menu bar. Ships with "Offline" and "Offline + Fixup" (on-device T5 grammar correction); create your own with cloud STT, LLM post-processing, or any combination
- **Cloud providers** — Optional OpenAI, Anthropic, and Google APIs (plus any…
