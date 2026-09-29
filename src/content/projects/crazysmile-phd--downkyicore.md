---
repo: "crazysmile-PhD/downkyicore"
name: "downkyicore"
description: "DownKyi (cross-platform version) is a Bilibili video download tool that supports batch downloads, 8K, HDR, Dolby Vision, and provides a toolbox (audio/video extraction, watermark removal, etc.)."
originalDescription: "哔哩下载姬(跨平台版)downkyi，哔哩哔哩网站视频下载工具，支持批量下载，支持8K、HDR、杜比视界，提供工具箱（音视频提取、去水印等）。"
descriptionLang: "zh"
readmeQualityOk: true
url: "https://github.com/crazysmile-PhD/downkyicore"
language: "C#"
languages: ["C#"]
languagePcts: [96]
stars: 397
forks: 138
openIssues: 2
closedIssues: 67
watchers: 3
contributors: 2
recentReleases: 10
createdAt: "2026-05-11T02:34:45Z"
lastCommitAt: "2026-09-29T08:10:36Z"
lastReleaseAt: "2026-09-11T00:54:21Z"
status: "thriving"
tags: ["solo_builder", "release_machine"]
healthScore: 99
undervaluedScore: 31
maintainers: ["crazysmile-PhD"]
openGraphImageUrl: "https://opengraph.githubassets.com/9ef92e323f21e92c479d6ebba68b2ad33a1a58589c469099ee2f76d61edd10f5/crazysmile-PhD/downkyicore"
discussionCount: 1
---

# DownKyi Core

DownKyi Core is a cross-platform Bilibili video download tool based on the Windows version of DownKyi and Avalonia. The project uses .NET 10, Avalonia 12, Microsoft Generic Host, Microsoft DI, and CommunityToolkit MVVM.

## Download

- Windows: `DownKyi-*-win-x64.zip` or `DownKyi-*-win-x86.zip`
- macOS: `DownKyi-*-osx-arm64.dmg` or `DownKyi-*-osx-x64.dmg`
- Linux: AppImage / deb / rpm

Windows ZIP must be extracted completely to a new directory before running. The `aria2` and `ffmpeg` subdirectories must be retained next to `DownKyi.exe`; if the program reports missing `aria2/aria2c.exe`, please re-download the official Release and extract completely, do not place individual executable files separately.

For version changes, see [CHANGELOG.md](https://github.com/crazysmile-PhD/downkyicore/blob/HEAD/CHANGELOG.md), and installation packages are available at [GitHub Releases](https://github.com/crazysmile-PhD/downkyicore/releases).

## Features

- Parse video, collection, anime, course, favorites, history, and watch later entries.
- Download audio, video, covers, danmaku, regular subtitles, and AI subtitles.
- Support aria2 and built-in downloader, preserving the…
