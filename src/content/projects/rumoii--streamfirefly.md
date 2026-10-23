---
repo: "rumoii/streamfirefly"
name: "streamfirefly"
description: "Web media detection and download tool with a browser extension and a Windows native helper."
originalDescription: "网页媒体嗅探与下载工具，包含浏览器扩展和 Windows 本地助手。Web media detection and download tool with a browser extension and a Windows native helper."
descriptionLang: "zh"
readmeQualityOk: true
url: "https://github.com/rumoii/streamfirefly"
language: "JavaScript"
languages: ["JavaScript", "TypeScript"]
languagePcts: [42, 21]
topics: ["browser-extension", "chrome-extension", "dash", "edge-extension", "ffmpeg", "firefox-addon", "hls", "m3u8", "media-downloader", "media-sniffer"]
stars: 325
forks: 20
openIssues: 1
closedIssues: 8
watchers: 1
contributors: 3
recentReleases: 8
createdAt: "2026-10-05T04:26:14Z"
lastCommitAt: "2026-10-23T12:04:36Z"
lastReleaseAt: "2026-10-13T08:06:25Z"
status: "newborn"
tags: ["solo_builder", "release_machine"]
healthScore: 97
undervaluedScore: 29
maintainers: ["rumoii", "GmdsSeikai", "43aquarius"]
openGraphImageUrl: "https://opengraph.githubassets.com/a0605459b12cffa27f2f142e70caea017c10e9f97f859060ec1abf1947b90cc6/rumoii/streamfirefly"
---

# 流萤 StreamFirefly

Local-first web media discovery and download tool

**[Download](https://github.com/rumoii/streamfirefly/releases/latest)** · [Installation Guide](https://github.com/rumoii/streamfirefly/blob/HEAD/INSTALL.md) · [Usage](#使用) · [Privacy Policy](https://github.com/rumoii/streamfirefly/blob/HEAD/PRIVACY.md) · [English](https://github.com/rumoii/streamfirefly/blob/HEAD/README.en.md)

StreamFirefly consists of two parts: a browser extension and a Windows native helper. The extension detects videos, audio, images, and HLS/DASH manifests on web pages. The native helper, written in Rust, handles downloading, queuing, resumable downloads, and FFmpeg merging. Tasks and settings are stored only on the local machine.

The current version is 1.0.9. StreamFirefly does not bypass DRM. Please only download content that you own the copyright to or are authorized to download.

StreamFirefly ships in two distributions built from the same source code:

- **General edition**: No website restrictions. Distributed via GitHub Releases. Includes the Chrome/Edge extension, the signed Firefox extension, and the Windows native helper. Whether content can be detected and downloaded still…
