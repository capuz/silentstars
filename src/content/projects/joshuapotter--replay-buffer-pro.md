---
repo: "JoshuaPotter/replay-buffer-pro"
name: "replay-buffer-pro"
description: "An OBS Studio plugin that extends the built-in Replay Buffer. Save recent footage at different lengths (e.g., 30 seconds, 5 minutes), automatically trimming the replay buffer without re-encoding."
readmeQualityOk: true
url: "https://github.com/JoshuaPotter/replay-buffer-pro"
homepage: "https://joshuapotter.github.io/replay-buffer-pro/"
language: "C++"
languages: ["C++", "CMake"]
languagePcts: [67, 33]
topics: ["obs-studio", "obs-studio-plugin", "replay-buffer", "c-plus-plus", "ffmpeg", "game-capture", "live-streaming", "screen-capture", "twitch-tv", "video-recording"]
stars: 19
forks: 1
openIssues: 2
closedIssues: 10
watchers: 2
contributors: 2
recentReleases: 1
createdAt: "2025-02-27T07:08:44Z"
lastCommitAt: "2026-07-23T06:15:34Z"
lastReleaseAt: "2026-06-28T03:54:37Z"
status: "thriving"
tags: ["solo_builder", "needs_contributors", "hidden_gem"]
healthScore: 89
undervaluedScore: 56
maintainers: ["JoshuaPotter"]
openGraphImageUrl: "https://opengraph.githubassets.com/f13716851552dd506f4112ca913eaa104f694feac3883d892334fa2d1729abe4/JoshuaPotter/replay-buffer-pro"
---

# Replay Buffer Pro

](https://github.com/JoshuaPotter/replay-buffer-pro/releases/latest/download/replay-buffer-pro-windows-x64.zip)

This OBS Studio plugin expands upon the built-in Replay Buffer, allowing users to save recent footage at different lengths with customizable save buttons, similar to how PlayStation/Xbox's "Save Recent Gameplay" functionality.

**Note:** Windows builds are 64-bit only, as OBS Studio 29.0.0+ dropped 32-bit support. macOS builds are universal binaries (arm64 + x86_64).

## How It Works
OBS keeps a rolling buffer of the last few seconds or minutes of footage in memory using the built-in replay buffer. The length of this footage is defined in settings. If the amount of footage exceeds the length in settings, old footage is overwritten as new footage is recorded.

Unlike the default Replay Buffer, which saves a fixed duration, this OBS Studio plugin allows users to save different lengths on demand. Set the replay buffer length, then clip custom lengths of footage automatically. Example: Set your replay buffer to 10 minutes. Save the last 30 seconds, 2 minutes, or 5 minutes instantly with UI buttons or hotkeys.

The project website is currently hosted via…
