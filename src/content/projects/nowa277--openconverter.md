---
repo: "nowa277/OpenConverter"
name: "OpenConverter"
description: "A lightweight format conversion and decoding tool for audio workflows, supporting format decryption."
originalDescription: "面向音频工作流的轻量级格式转换与解码工具，支持格式解密"
descriptionLang: "zh"
readmeQualityOk: true
url: "https://github.com/nowa277/OpenConverter"
language: "Kotlin"
languages: ["Kotlin", "JavaScript"]
languagePcts: [50, 43]
topics: ["android-app", "audio-converter", "cross-platform", "desktop-app", "electron", "ffmpeg", "jetpack-compose", "kotlin", "kgm-decrypt", "music-decrypter"]
stars: 59
forks: 8
openIssues: 3
closedIssues: 3
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2026-06-15T13:53:59Z"
lastCommitAt: "2026-11-11T11:18:58Z"
lastReleaseAt: "2026-06-24T03:24:06Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 85
undervaluedScore: 31
maintainers: ["nowa277", "inailong"]
openGraphImageUrl: "https://opengraph.githubassets.com/a61d106c2d055acae47974b11a2ed2a02878e43ce8be5ffca386c5235bbf1946/nowa277/OpenConverter"
---

### Cross-platform lightweight audio format conversion and local decoding toolchain

[English](https://github.com/nowa277/OpenConverter/blob/HEAD/README_EN.md) | Simplified Chinese

A lightweight format conversion and decryption tool for audio workflows.<br/>

---

## Project Introduction

* **Privacy first**: Decryption and transcoding are done locally. NetEase Cloud Music lyrics are requested by song ID by default (can be disabled in settings). Audio is not uploaded.
* **Real transcoding**: Built-in FFmpeg / FFmpegKit. Desktop outputs MP3 / FLAC / WAV / M4A / OGG; mobile outputs MP3 / FLAC / WAV / M4A.

### Desktop 0.3.11
* Bilingual lyrics are interleaved, aligned, and merged in chronological order by millisecond timestamps, eliminating playback disorder caused by translations being appended as a whole; fully supports HTML character entity decoding and filters out placeholder lyrics for instrumental tracks.
* Explicitly blocks and diagnoses KGG crypto version 7; provides targeted retry guidance for key mismatches.
* The sidebar is the brand wordmark. Format and quality settings are on the conversion page; swipe left to delete queue items.
* Conversion tasks cancel immediately,…
