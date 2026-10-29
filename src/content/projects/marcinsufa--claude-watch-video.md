---
repo: "MarcinSufa/claude-watch-video"
name: "claude-watch-video"
description: "Make Claude watch any video. Local file, public URL (yt-dlp), or Jira attachment (fully automated). Frames + Whisper transcription + paste-ready report.md evidence bundle."
readmeQualityOk: true
url: "https://github.com/MarcinSufa/claude-watch-video"
language: "Python"
languages: ["Python"]
languagePcts: [100]
stars: 7
forks: 0
openIssues: 1
closedIssues: 2
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2026-05-14T16:53:41Z"
lastCommitAt: "2026-10-29T12:25:19Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 83
undervaluedScore: 25
maintainers: ["MarcinSufa"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1238996573/44595f44-60e7-4eae-9b13-230e83722c0d"
---

# claude-watch-video

> **Give Claude eyes and ears for any video** — local files, public URLs (YouTube, Loom, Vimeo, TikTok…), or Jira attachments. Pipeline runs locally on your machine; produces a paste-ready Markdown evidence bundle.

Turn *"watch PROJ-1234 and tell me what broke"* into a single command. The skill downloads the video, extracts keyframes with ffmpeg, transcribes audio with local or hosted Whisper, deduplicates near-identical frames while preserving narrated moments, optionally OCRs on-screen text, and writes a paste-ready `report.md`. Costs **$0 to a few cents** per video. See [what it costs](#what-it-costs) for the breakdown.

---

## What it produces

A 5:30 FOMC press conference distilled to one moment, picked by Claude against the prompt *"summarize the rate decision, inflation outlook, and rate-path forecast"*:

> **00:22 — the rate decision**
>
> <img src="docs/images/fomc/00-22-rate-decision.jpg" width="420" alt="Powell at 00:22 announcing the rate hold">
>
> *"Today, the FOMC decided to leave our policy rate unchanged. We see the current stance of monetary policy as appropriate to promote progress toward our maximum employment..."* Committee judges…
