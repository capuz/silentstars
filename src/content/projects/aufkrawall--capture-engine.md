---
repo: "aufkrawall/capture-engine"
name: "capture-engine"
description: "Windows game capture, recording, overlays, graphics overrides, and frame pacing."
readmeQualityOk: true
url: "https://github.com/aufkrawall/capture-engine"
language: "C++"
languages: ["C++"]
languagePcts: [92]
topics: ["audio-capture", "directx", "ffmpeg", "frame-pacing", "game-capture", "hdr", "screen-recording", "video-capture", "vulkan", "windows"]
stars: 8
forks: 2
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 10
createdAt: "2026-08-07T23:16:08Z"
lastCommitAt: "2026-10-26T18:02:17Z"
lastReleaseAt: "2026-10-02T12:30:08Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 80
undervaluedScore: 56
maintainers: ["aufkrawall"]
openGraphImageUrl: "https://opengraph.githubassets.com/2b754f589f7a9d3317089b39cd1497caa5e853309ed97905741ace6b88fe1d2b/aufkrawall/capture-engine"
---

# Capture Engine

Game capture, recording, overlays, graphics overrides, and frame pacing for Windows.

CaptureEngine records game video and multiple audio sources to Matroska files, streams to YouTube, Twitch, or any
RTMP/RTMPS service, and captures in-game benchmark runs as interactive HTML reports. It records without injection
through Windows Graphics Capture (WGC) or DXGI Desktop Duplication, or through an injected, API-aware capture path
that also enables its in-game overlay, FPS limiter, and graphics overrides.

The capture, overlay, synchronization, and pacing code is developed in this repository; FFmpeg provides codec and
container support. The overlay and its frame-time graph are rendered entirely by first-party code, with no Dear ImGui
or similar library.

**[Download](https://github.com/aufkrawall/capture-engine/releases)** ·
[Technical overview](https://github.com/aufkrawall/capture-engine/blob/HEAD/docs/technical-overview.md) · [Changelog](https://github.com/aufkrawall/capture-engine/blob/HEAD/CHANGELOG.md) · [Security policy](https://github.com/aufkrawall/capture-engine/blob/HEAD/SECURITY.md)

## Support

Support through GitHub Sponsors or Buy Me a Coffee helps with…
