---
repo: "ahmedmedhat107201/video_subtitle_generator"
name: "video_subtitle_generator"
description: "desktop app that generates srt subtitles from videos using OpenAI Whisper."
readmeQualityOk: true
url: "https://github.com/ahmedmedhat107201/video_subtitle_generator"
language: "Python"
languages: ["Python"]
languagePcts: [100]
stars: 14
forks: 0
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 1
recentReleases: 0
createdAt: "2025-11-09T08:18:31Z"
lastCommitAt: "2026-10-15T08:32:23Z"
status: "thriving"
tags: []
healthScore: 80
undervaluedScore: 24
maintainers: ["ahmedmedhat107201"]
openGraphImageUrl: "https://opengraph.githubassets.com/bc119f8f97b0fc60990708594509d632872c35db4387358755c12c35903700e7/ahmedmedhat107201/video_subtitle_generator"
---

# 🎬 Video Subtitle Generator

A professional desktop application for generating accurate English subtitles from video files using **faster-whisper** with **Voice Activity Detection (VAD)**.

## ✨ Features

- **🎯 100% Accurate Timestamps**: VAD ensures subtitles sync perfectly, even during music/action scenes
- **🚀 GPU Acceleration**: Automatic CUDA detection for faster processing
- **🎨 Modern GUI**: Beautiful dark-themed interface using CustomTkinter
- **📂 Batch Queue**: Add several videos and process them one after another, each with its own progress bar
- **📹 Format Support**: MP4, AVI, MOV, MKV, WMV, FLV, WebM
- **💪 Production Ready**: Clean modular architecture with proper separation of concerns

## 🔧 How It Works

1. **Add Videos**: Add one or more video files to the queue
2. **Generate**: App extracts audio, detects speech with VAD, and transcribes each file in turn
3. **Done**: Subtitles saved as `<video name>_subtitles.srt` next to each video, with a summary of how many succeeded or failed

### Why VAD Matters

Traditional Whisper can generate "phantom" subtitles during music, sound effects, or silence. **VAD (Voice Activity Detection)** solves this by:
-…
