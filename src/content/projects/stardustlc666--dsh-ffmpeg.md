---
repo: "STARDUSTLC666/dsh-ffmpeg"
name: "dsh-ffmpeg"
description: "DSH audio/video processing: local FFmpeg trimming, transcoding, subtitles, audio tracks, GIFs, frame extraction, and video storyboards. Issues and PRs are welcome."
originalDescription: "DSH 音视频处理：本机 FFmpeg 裁切、转码、字幕、音轨、GIF、抽帧与视频总览图。欢迎提交 issues 和 PR。"
descriptionLang: "zh"
readmeQualityOk: true
url: "https://github.com/STARDUSTLC666/dsh-ffmpeg"
language: "JavaScript"
languages: ["JavaScript", "TypeScript"]
languagePcts: [67, 33]
topics: ["deepseek-harness", "dsh-plugin", "ffmpeg", "video"]
stars: 14
forks: 2
openIssues: 0
closedIssues: 6
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2026-08-14T19:34:03Z"
lastCommitAt: "2026-11-13T18:33:38Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 98
undervaluedScore: 49
maintainers: ["STARDUSTLC666", "Mchsd"]
openGraphImageUrl: "https://opengraph.githubassets.com/d85413288c2cb3e83157d952d022165879f90854493d9cf46c9920d9d272279a/STARDUSTLC666/dsh-ffmpeg"
---

**Simplified Chinese** · [English](https://github.com/STARDUSTLC666/dsh-ffmpeg/blob/HEAD/README.en.md)

# FFmpeg

**Turn existing audio and video into the finished products you need.**

**[Installation](#安装) · [Usage workflow](#开始使用) · [Full documentation](https://github.com/STARDUSTLC666/dsh-ffmpeg/blob/master/docs/REFERENCE.zh.md)**

## Features

- View media parameters, and browse a storyboard (overview thumbnails) by sampling time.
- Trim, concatenate, transcode, add subtitles, or extract frames.
- Keep source files, and deliver outputs only after actually playing them back.

## Installation

Install `dsh-ffmpeg` from the 'Plugins' panel of the DSH desktop app. It can also be used from the command line if the command line is already configured:

```bash
dsh plugin --profile desktop add dsh-ffmpeg
```

For the web version, change `desktop` to `web`. After installation, restart the corresponding DSH. The host's requirement is determined by the package declaring `>=0.2.2-rc.3`.

## Getting started

1. Install FFmpeg/ffprobe, and run ffmpeg_health in DSH to check the executables.
2. Place the input files in the current workspace or provide accurate local paths, and describe the…
