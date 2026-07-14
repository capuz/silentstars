---
repo: "Vivojay/mariana-music-player"
name: "mariana-music-player"
description: "Best Music Player Ever - CLI"
readmeQualityOk: true
url: "https://github.com/Vivojay/mariana-music-player"
language: "Python"
languages: ["Python"]
languagePcts: [94]
stars: 6
forks: 4
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 1
recentReleases: 2
createdAt: "2021-10-26T11:59:07Z"
lastCommitAt: "2026-07-14T05:52:46Z"
lastReleaseAt: "2026-07-13T05:59:36Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 78
undervaluedScore: 85
maintainers: ["Vivojay"]
openGraphImageUrl: "https://opengraph.githubassets.com/2278c97859a40613bd72cd3677c5f4708704a4de9978a3f615a4f87c80890c08/Vivojay/mariana-music-player"
---

# Mariana Music Player

Mariana is a local-first command-line and Electron terminal media player for
64-bit Windows, macOS, and Linux. The 0.7 development platform decodes audio
with FFmpeg into a bounded PCM pipeline,
plays it through `sounddevice`, and uses FFplay only as an external diagnostic
or video fallback. The working version is `0.7.0-dev.4`; the stable release remains 0.6.2 until every
release gate—including manual speaker and soak acceptance—has passed.

Supported sources include local audio, YouTube, podcasts, custom HTTP media,
HLS/PLS/M3U streams, and internet radio. Queue, identity, lyrics, radio health,
interaction history, and recommendation models are persisted in SQLite.

The desktop UI is not a command reimplementation. React renders an xterm.js
terminal connected to the real Mariana process through a native PTY, so ANSI
output, nested prompts, Ctrl+C, resizing, and every CLI command remain intact.

## Supported environment

- Windows 10 or 11 x64
- macOS x64 or Apple Silicon
- Linux x64 with PortAudio/PipeWire or PulseAudio output
- CPython 3.12 x64
- FFmpeg, FFprobe, and FFplay from the same x64 build
- Deno or Node.js 22+ for reliable yt-dlp extraction
-…
