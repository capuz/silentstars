---
repo: "dagonet/panoscribe"
name: "panoscribe"
description: "Extract complete video transcripts — speech AND on-screen text — from TikTok, YouTube, Instagram and more."
readmeQualityOk: true
url: "https://github.com/dagonet/panoscribe"
language: "Python"
languages: ["Python"]
languagePcts: [85]
topics: ["asr", "cli", "gpu", "instagram", "local-first", "ocr", "paddleocr", "python", "speech-to-text", "tiktok"]
stars: 15
forks: 1
openIssues: 2
closedIssues: 14
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2026-04-09T08:03:04Z"
lastCommitAt: "2026-11-07T16:11:55Z"
lastReleaseAt: "2026-07-13T21:22:45Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 94
undervaluedScore: 48
maintainers: ["dagonet"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1205713612/a52fb976-42f8-41fe-80c9-dc9300e3c758"
discussionCount: 0
---

# panoscribe

**Extract complete transcripts from any video — speech AND on-screen text, combined.**

Existing transcription tools only capture what's *spoken*. But video creators — on TikTok, YouTube, Instagram, and beyond — pack critical information into **on-screen text overlays**: instructions, captions, labels, commentary that never appears in audio-only transcripts. panoscribe combines **speech recognition (ASR)** with **on-screen text extraction (OCR)** to produce a unified, timestamped transcript that captures *everything*.

## How It Works

```
Video URL (TikTok, YouTube, Reels, Shorts, ...) or local file
        │
        ├──▶ Audio ──▶ faster-whisper (large-v3-turbo) ──▶ Speech transcript
        │
        └──▶ Frames ──▶ RapidOCR (GPU via ONNXRuntime) ──▶ On-screen text
                                                    │
                              ┌──────────────────────┘
                              ▼
                    Merge + Deduplicate
                              │
                              ▼
                   Unified Transcript
              [SPEECH] + [ON-SCREEN] + [BOTH]
```

## Quick Start

```bash
# Install
uv pip install panoscribe

#…
