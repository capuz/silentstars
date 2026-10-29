---
repo: "jiabai/FrameQ"
name: "FrameQ"
description: "影问 FrameQ - From video to transcript, from transcript to questions."
readmeQualityOk: true
url: "https://github.com/jiabai/FrameQ"
language: "TypeScript"
languages: ["TypeScript", "Python", "Rust"]
languagePcts: [49, 27, 20]
stars: 5
forks: 1
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 3
recentReleases: 8
createdAt: "2026-06-15T15:22:01Z"
lastCommitAt: "2026-10-29T10:15:09Z"
lastReleaseAt: "2026-10-23T06:01:42Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 89
undervaluedScore: 59
maintainers: ["jiabai"]
openGraphImageUrl: "https://opengraph.githubassets.com/8fdeb42b33d11bd89cb3035246320220af866f6dd1757c6f099603886f474884/jiabai/FrameQ"
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
