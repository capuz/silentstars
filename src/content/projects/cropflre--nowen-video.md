---
repo: "cropflre/nowen-video"
name: "nowen-video"
description: "🎬 Lightweight home media server | Go + React + SQLite | Automatic scraping of TMDb/Douban | HLS transcoding + hardware acceleration | Episode recognition | One-click Docker deployment | Alternative to Emby/Jellyfin"
originalDescription: "🎬 轻量级家庭媒体服务器 | Go + React + SQLite | 自动刮削 TMDb/豆瓣 | HLS 转码 + 硬件加速 | 剧集识别 | Docker 一键部署 | 类 Emby/Jellyfin 替代方案"
descriptionLang: "zh"
readmeQualityOk: true
url: "https://github.com/cropflre/nowen-video"
homepage: "http://video.nowen.cn/"
language: "Go"
languages: ["Go", "TypeScript"]
languagePcts: [45, 39]
topics: ["emby", "jellyfin", "nasa", "plex", "ffmpeg", "golang", "hardware-acceleration", "hls", "home-media-server", "media-library"]
stars: 137
forks: 20
openIssues: 2
closedIssues: 10
watchers: 1
contributors: 3
recentReleases: 3
createdAt: "2026-03-23T09:13:47Z"
lastCommitAt: "2026-07-12T06:17:14Z"
lastReleaseAt: "2026-05-29T10:33:59Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 94
undervaluedScore: 37
maintainers: ["cropflre", "xiaotianhu", "github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/508e90d63fd4c8c7f642108431774a3a8f04fb477ac8a1a6d2802a704283574d/cropflre/nowen-video"
---

<h1>🎬 nowen-video</h1>

<p><b>Your private home media center — lightweight, self-hosted, designed for NAS.</b></p>

<p>
</p>

<p>
</p>

</div>

---

Based on **Go + React**, this lightweight home media server is similar to Jellyfin / Emby and optimized for NAS deployment.
**Single binary + SQLite**, one-click start with Docker, ready to use with zero configuration.

> 🖥️ **PC desktop client** is now online, supporting **MKV / HEVC / HDR / Dolby Vision / DTS / Atmos zero-transcoding playback** → See [desktop/README.md](https://github.com/cropflre/nowen-video/blob/HEAD/desktop/README.md)

## 📸 Feature Screenshots

## ✨ Core Features

- 🎬 **Media Library** — Automatic scanning (MKV/MP4/AVI/MOV/WebM/TS/RMVB, etc.), FFprobe metadata extraction, external subtitles, NFO compatibility (Kodi/Emby/Jellyfin), fsnotify real-time monitoring
- 📺 **Smart Playback** — Direct playback of browser-compatible formats, HLS transcoding on demand for incompatible formats, ABR adaptive bitrate, keyboard shortcuts, picture-in-picture, bookmarks
- ⚡ **Hardware Acceleration** — Automatic detection of Intel QSV / VAAPI / NVIDIA NVENC, software fallback, transcoding cache reuse
- 🎨 **Multi-source…
