---
repo: "jiabai/FrameQ"
name: "FrameQ"
description: "影问 FrameQ - From video to transcript, from transcript to questions."
readmeQualityOk: true
url: "https://github.com/jiabai/FrameQ"
language: "TypeScript"
languages: ["TypeScript", "Rust", "Python"]
languagePcts: [45, 28, 21]
stars: 5
forks: 1
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 3
recentReleases: 10
createdAt: "2026-06-15T15:22:01Z"
lastCommitAt: "2026-11-08T10:40:46Z"
lastReleaseAt: "2026-11-07T16:40:51Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 90
undervaluedScore: 59
maintainers: ["jiabai"]
openGraphImageUrl: "https://opengraph.githubassets.com/ead5ca26bde074a5ead822312685b1cf1be3fa38634af781a4227d186eb8f7ed/jiabai/FrameQ"
---

# FrameQ

**A local-first desktop workflow for turning public or authorized video links into local media, transcripts, summaries, and insight prompts.**

---

## Overview

FrameQ is a desktop application that keeps video processing local by default. Paste a supported public or authorized video link, and FrameQ coordinates the local worker to download the video, extract audio, transcribe speech with SenseVoice Small, and export useful files. Summary and insight generation are separate, confirmed steps that use the server-managed LLM checkout and quota flow.

> [!NOTE]
> Latest stable release: **v0.4.2** (Windows x64, macOS Intel, macOS Apple Silicon). See [GitHub Releases](https://github.com/jiabai/FrameQ/releases).

```text
Supported video link
  -> yt-dlp download
  -> ffprobe media validation
  -> ffmpeg 16 kHz mono audio extraction
  -> SenseVoice Small local transcription
  -> transcript export
  -> optional confirmed summary, mindmap, and insight generation
```

> [!IMPORTANT]
> FrameQ is for public videos, videos you own, or videos you are authorized to process. It is not designed to bypass platform access controls, login walls, CAPTCHA, copyright restrictions, or privacy…
