---
repo: "zcbacxc/movie-narrator"
name: "movie-narrator"
description: "🎬 Generate narrated movie recap videos from a single prompt."
readmeQualityOk: true
url: "https://github.com/zcbacxc/movie-narrator"
language: "Python"
languages: ["Python"]
languagePcts: [92]
stars: 6
forks: 1
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 10
createdAt: "2026-07-11T17:05:54Z"
lastCommitAt: "2026-07-24T06:07:11Z"
lastReleaseAt: "2026-07-23T05:31:35Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 90
undervaluedScore: 57
maintainers: ["zcbacxc"]
openGraphImageUrl: "https://opengraph.githubassets.com/0b7efed0b989d0ae8ae331100f63a3d55bd3945c4b2608efa8ecb03adfb9debf/zcbacxc/movie-narrator"
discussionCount: 0
---

# 🎬 Movie Narrator

> One Prompt → One Narrated Movie Video

Movie Narrator is an open-source toolkit that automatically generates movie recap videos with narration, subtitles, and rendered output from a simple command.

---

## Features

- 🎬 Generate movie recap scripts with LLMs
- 🔊 Text-to-Speech narration (Edge-TTS by default)
- 💬 Automatic SRT subtitle generation
- 🌐 Multi-language subtitles (`--subtitle-lang en` translates narration cues via LLM and writes `subtitle.<lang>.srt` + `subtitle.bilingual.srt`)
- 🖥️ Web UI (`mn web` — local FastAPI + React browser app with form inputs, cooperative cancel, artifact download, and real-time progress via WebSocket)
- 🎞️ Video rendering with MoviePy and FFmpeg
- 📝 Script markdown export (`script.md`)
- 🎵 Background music integration (BGM)
- 🎬 Scene-level clip export
- 📦 Metadata export
- 🔌 Extensible pipeline architecture
- 🐍 Pure Python implementation

---

## Installation

### Requirements

- Python 3.10+
- FFmpeg

### Install FFmpeg

#### macOS

```bash
brew install ffmpeg
```

#### Ubuntu / Debian

```bash
sudo apt install ffmpeg
```

#### Windows

```bash
# Option 1: winget
winget install Gyan.FFmpeg

# Option 2:…
