---
repo: "xcgtb/StrimKeep"
name: "StrimKeep"
description: "A STRM dual-library film and TV management and governance panel for NAS: 115 transfer / offline download / channel monitoring → TMDB identification and quality upgrades → generate STRM → Emby ingestion. Library mapping finds missing episodes and quality gaps. Dual-library governance generates a plan first, then verifies each file before cleanup."
originalDescription: "面向 NAS 的 STRM 双库影视管理与治理面板：115 转存 / 离线 / 频道监控 → TMDB 识别洗版 → 生成 STRM → Emby 收录；片库映射查缺集与画质，双库治理先生成计划、逐文件核验后再清理。"
descriptionLang: "zh"
readmeQualityOk: true
url: "https://github.com/xcgtb/StrimKeep"
language: "Python"
languages: ["Python"]
languagePcts: [83]
stars: 27
forks: 1
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 10
createdAt: "2026-10-09T15:18:15Z"
lastCommitAt: "2026-11-17T13:49:03Z"
lastReleaseAt: "2026-11-13T06:38:29Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 90
undervaluedScore: 42
maintainers: ["xcgtb"]
openGraphImageUrl: "https://opengraph.githubassets.com/46f67084c90747803c6cb0b636574c6b8582dc03c763e3496880a7df42c821db/xcgtb/StrimKeep"
---

# 🎬 StrimKeep 3.6.48

---

## 🌟 Project Highlights

### ✨ Core Features

- 🔗 **115 Share Transfer** - Paste share links (supports `?password=` extraction codes) and batch-transfer them to a specified directory
- ⚡ **Offline Download** - Submit magnet / ED2K / direct links; track progress and outputs
- 📡 **Telegram Channel Monitoring** - Public channel preview pages or private channels (via user session, read-only messages); after keyword filtering, messages are routed and saved to disk
- 🎬 **Film & TV Organizing and Quality Upgrades** - TMDB identification → standardized directory `Title (Year) {tmdb-id}/Season N/`; 7-dimension quality comparison to pick the best version; subtitles, NFO, and posters saved alongside the video
- 🔗 **STRM Generation and Sync** - Outputs STRM files with 302 playback URLs; **identity is written inside the file**, so renaming or moving between libraries requires no sync registry
- 🧹 **Invalid Cleanup** - Checks each entry to confirm the cloud drive file still exists before deleting; three layers of protection; event logging included
- 🖼️ **Library Mapping** - Organized by Emby media library, with 7 statuses (Complete / Missing Episodes /…
