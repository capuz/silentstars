---
repo: "gegd19/AnimeMan"
name: "AnimeMan"
description: "🎌 AI-powered fully automatic anime media library organizer · Designed for NAS and anime collectors"
originalDescription: "🎌 AI 驱动的动漫媒体库全自动整理工具 · 专为 NAS 与二次元收藏家设计"
descriptionLang: "zh"
readmeQualityOk: true
url: "https://github.com/gegd19/AnimeMan"
language: "Python"
languages: ["Python", "JavaScript"]
languagePcts: [63, 26]
topics: ["ai", "anime", "docker-compose", "emby", "flask", "nas", "python"]
stars: 14
forks: 1
openIssues: 0
closedIssues: 1
watchers: 0
contributors: 2
recentReleases: 4
createdAt: "2026-04-19T13:49:00Z"
lastCommitAt: "2026-11-17T12:16:56Z"
lastReleaseAt: "2026-11-17T12:14:18Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 87
undervaluedScore: 59
maintainers: ["gegd19", "claude"]
openGraphImageUrl: "https://opengraph.githubassets.com/0d9a0eb79d0c390c2a5a2fc6aaabae13518d3bd1d801cc337050adafde2cd389/gegd19/AnimeMan"
---

**Organize messy-named anime in your download folder into a media library that Emby / Jellyfin / Plex recognize directly.**<br>
Source files keep seeding in place, and the media library uses hard links. Anything that can't be identified confidently isn't guessed; it's left for you to confirm with one click.

[Quick Start](#快速开始) · [Recognition Rules](#认不准的不硬猜) · [Interface](#界面) · [Configuration](#配置) · [FAQ](#常见问题)

## Download folder in, media library out

Your download folder:

```text
/downloads/anime/[VCB-Studio] Toaru Kagaku no Railgun [Ma10p_1080p]/
├── [VCB-Studio] Toaru Kagaku no Railgun [01][Ma10p_1080p][x265_flac].mkv
├── [VCB-Studio] Toaru Kagaku no Railgun [02][Ma10p_1080p][x265_flac].mkv
├── [VCB-Studio] Toaru Kagaku no Railgun S [01][Ma10p_1080p][x265_flac].mkv
├── [VCB-Studio] Toaru Kagaku no Railgun [OVA][Ma10p_1080p][x265_flac].mkv
└── [VCB-Studio] Toaru Kagaku no Railgun [NCED][Ma10p_1080p][x265_flac].mkv
```

Click "Start Processing", and the media server sees:

```text
/media/TV Shows/某科学的超电磁炮 (2009)/
├── tvshow.nfo · poster.jpg · fanart.jpg
├── Season 01/
│   ├── 某科学的超电磁炮 (2009) - S01E01 - 电击使.mkv     ← hard link, takes no extra space
│   └── 某科学的超电磁炮 (2009)…
