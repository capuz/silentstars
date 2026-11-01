---
repo: "draenger/whisperio"
name: "whisperio"
description: "Global dictation app for Windows, macOS, and Linux. Press a hotkey, speak, auto-paste. Cloud or fully offline with local Whisper models."
readmeQualityOk: true
url: "https://github.com/draenger/whisperio"
language: "Swift"
languages: ["Swift", "TypeScript"]
languagePcts: [38, 34]
topics: ["cross-platform", "dictation", "electron", "offline", "open-source", "openai", "productivity", "self-hosted", "speech-to-text", "transcription"]
stars: 6
forks: 0
openIssues: 0
closedIssues: 1
watchers: 0
contributors: 4
recentReleases: 2
createdAt: "2025-08-03T08:08:55Z"
lastCommitAt: "2026-11-01T10:45:50Z"
lastReleaseAt: "2026-10-20T07:05:24Z"
status: "thriving"
tags: ["solo_builder", "funded"]
healthScore: 85
undervaluedScore: 84
maintainers: ["draenger", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/839efc0c89b0e1a0d01c3ef8874fd97bcc1b9cbb157728123335a152cf629317/draenger/whisperio"
fundingLinks: ["GITHUB:https://github.com/draenger"]
---

Global dictation for Windows, macOS, Linux — and iPhone/Apple Watch. Press a hotkey, speak, and your words are transcribed and pasted into any app.

---

## Repository structure

This is a monorepo with two apps and a website:

```
whisperio/
├── desktop/     Electron app for Windows, macOS, Linux (the main app)
├── mobile/      iOS + Apple Watch app (Swift) and the WhisperioKit package
├── docs/        Project website (GitHub Pages → whisperio.danielkasprzyk.com)
├── tests/       (desktop unit tests live in desktop/tests)
├── LICENSE.md   PolyForm Noncommercial 1.0.0
└── TRADEMARKS.md  Name & logo policy
```

## How it works

1. Press a global hotkey (works from any application)
2. Speak into your microphone — a minimal overlay shows recording status
3. Press the hotkey again to stop
4. Your speech is transcribed and instantly pasted into the focused app

No browser tabs, no copy-paste — just talk and it types.

## Features

- **Global hotkey** — works system-wide, even when Whisperio is in the background
- **Auto-paste** — transcription is placed directly into the focused text field
- **Dictate & Send** — optional mode that presses Enter after pasting (great for chat apps)
-…
