---
repo: "CrypticSignal/av-converter"
name: "av-converter"
description: "A web app to convert an audio/video file to another format. Client side conversion means your file does not get sent to a server."
readmeQualityOk: true
url: "https://github.com/CrypticSignal/av-converter"
homepage: "https://av-converter.com"
language: "TypeScript"
languages: ["TypeScript", "Python"]
languagePcts: [67, 25]
topics: ["audio", "video", "converter", "mp3", "mp4", "wav", "flac", "aac", "ac3", "dts"]
stars: 187
forks: 8
openIssues: 0
closedIssues: 3
watchers: 9
contributors: 5
recentReleases: 0
createdAt: "2020-02-27T16:43:35Z"
lastCommitAt: "2026-11-05T14:05:10Z"
status: "thriving"
tags: ["legacy_hero"]
healthScore: 84
undervaluedScore: 44
maintainers: ["claude", "CrypticSignal", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/aef8ebfc5ca1f4b55becff7dc778acfb32ecdad316883bd0f287de55a9e6d8b3/CrypticSignal/av-converter"
discussionCount: 0
---

# Audio/video converter

  

# Table of contents

- [Audio/Video Converter](#audiovideo-converter)
- [Video Downloader](#video-downloader)
- [Run locally](#run-locally)
  - [With Docker](#with-docker)
  - [Without Docker](#without-docker)
- [YouTube cookies](#youtube-cookies)
- [Downloader limits](#downloader-limits)
- [Tests](#tests)
- [Code layout](#code-layout)

## Audio/Video Converter

Convert audio files or the audio tracks in a video using FFmpeg in your browser. Supports AAC, AC3, ALAC, DTS, FLAC, MP3, Opus, Vorbis, and WAV.

## Video Downloader

Click on Video Downloader in the navigation bar (or visit /download). This is essentially a [yt-dlp](https://github.com/yt-dlp/yt-dlp) wrapper.
## Run locally

#### With Docker

```sh
docker compose -f docker/dev/docker-compose.yml up --build --watch
```

Open http://localhost:3000. Watch mode syncs frontend changes and restarts or rebuilds services when needed. Downloader rebuilds interrupt active downloads and recordings. Restart the command after changing the Compose configuration.

#### Without Docker

Install Python 3.12+, Node.js 26+, Yarn, and FFmpeg, with the executables on your PATH. Start the backend:

```sh
python -m…
