---
repo: "Teknesyum/VidShrink"
name: "VidShrink"
description: "Shrink video file size to a target MB with minimal quality loss - free offline ffmpeg-based video compressor for Windows, with optional AI-assisted encoding settings."
readmeQualityOk: true
url: "https://github.com/Teknesyum/VidShrink"
language: "C#"
languages: ["C#"]
languagePcts: [89]
topics: ["dotnet", "ffmpeg", "h265", "offline-tool", "video-compression", "video-compressor", "video-encoding", "windows", "wpf", "reduce-video-size"]
stars: 5
forks: 1
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 3
recentReleases: 8
createdAt: "2026-08-16T17:29:42Z"
lastCommitAt: "2026-09-03T08:13:18Z"
lastReleaseAt: "2026-08-30T18:04:24Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 80
undervaluedScore: 57
maintainers: ["Teknesyum", "srknzl"]
openGraphImageUrl: "https://opengraph.githubassets.com/b625c3a257331d0fae57ca7c216de0d912c0870c2619ab69fbface14452ec917/Teknesyum/VidShrink"
---

# VidShrink

Free, offline desktop app for Windows, macOS and Linux that shrinks a video to a target file size — and loses the least of what a person can actually see while doing it.

Give it a file and a ceiling in megabytes. It never returns a file larger than you asked for, and it tells you the expected size before you press start.

The interface starts in Turkish and switches to English instantly with the `TR` / `EN` buttons.

### Measured compression flow

## One-command installation

### Windows

Open PowerShell and run:

```powershell
irm https://raw.githubusercontent.com/Teknesyum/VidShrink/main/Install-VidShrink.ps1 | iex
```

The installer needs no administrator rights and no .NET SDK. It asks GitHub for the latest release, downloads the `win-x64` archive and the launcher beside it, checks both against the release's own SHA-256 list and refuses to continue if either digest differs. What lands on your machine is the same binary the release pipeline tested — nothing is compiled here. It installs under `%LOCALAPPDATA%\Programs\VidShrink`, fetches FFmpeg and FFprobe from WinGet, creates Desktop and Start Menu shortcuts pointing at the launcher, and adds the right-click menu…
