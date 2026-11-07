---
repo: "Fooftilly/kokoro-extension"
name: "kokoro-extension"
description: " Send text from browser to Kokoro-FastAPI for TTS generation "
readmeQualityOk: true
url: "https://github.com/Fooftilly/kokoro-extension"
language: "JavaScript"
languages: ["JavaScript"]
languagePcts: [91]
topics: ["extension", "kokoro-fastapi", "kokoro-tts", "tts"]
stars: 6
forks: 6
openIssues: 9
closedIssues: 7
watchers: 2
contributors: 2
recentReleases: 0
createdAt: "2025-12-12T16:19:06Z"
lastCommitAt: "2026-11-07T10:38:09Z"
status: "thriving"
tags: ["hidden_gem", "fork_magnet"]
healthScore: 80
undervaluedScore: 59
maintainers: ["dependabot[bot]", "Fooftilly"]
openGraphImageUrl: "https://opengraph.githubassets.com/14aefecddf40888a5143d93fdd2ba9954a8cc56dc6b11804221d15b1c2a60c1e/Fooftilly/kokoro-extension"
---

# Kokoro TTS Extension

Browser extension (**Chrome** & **Firefox**) that sends selected text or full articles to a [Kokoro-FastAPI](https://github.com/remsky/Kokoro-FastAPI) endpoint for high-quality text-to-speech. Supports streaming playback in the page overlay or downloading the generated audio file, plus an EPUB reader mode.

## Showcase

### Settings & voice mixer

Configure the API endpoint, mix voices with weights, and control speed/volume from the popup.

### Overlay experience

Read highlighted text or a whole article with an in-page overlay and playback controls. The compact floating player can be **dragged** and **collapsed** without stopping playback.

  &nbsp;

## Features

Verified against the current source (not aspirational):

- **Kokoro-FastAPI TTS** — speech generation via the OpenAI-compatible `/v1/audio/speech` API on a **user-configured** endpoint (default `http://127.0.0.1:8880/v1/`; localhost, LAN, or remote).
- **Chrome & Firefox (MV3)** — separate builds under `dist/chrome` and `dist/firefox`.
- **Selection or whole article** — context menus “Send to Kokoro TTS” (selection) and “Read Article with Kokoro TTS” (Readability-based article extract).
- **Stream…
