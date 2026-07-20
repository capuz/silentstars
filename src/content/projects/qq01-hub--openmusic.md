---
repo: "qq01-hub/openmusic"
name: "openmusic"
description: "A real-time online karaoke system for multiple users. Supports song search across three platforms, synchronized playback queue, progress, and lyrics in the room."
originalDescription: "多人实时在线点歌系统。支持  三平台搜索点歌，房间内播放队列、进度、歌词多端同步"
descriptionLang: "zh"
readmeQualityOk: true
url: "https://github.com/qq01-hub/openmusic"
homepage: "https://qqovo.top"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [77]
stars: 94
forks: 22
openIssues: 0
closedIssues: 4
watchers: 0
contributors: 5
recentReleases: 10
createdAt: "2026-06-17T02:04:36Z"
lastCommitAt: "2026-07-20T06:32:15Z"
lastReleaseAt: "2026-06-25T04:18:05Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 100
undervaluedScore: 42
maintainers: ["qq01-hub", "cuijianzhuang", "instpe"]
openGraphImageUrl: "https://opengraph.githubassets.com/ccacd2caa6dad8d5606dadbb01130e24a0bfc2075961a134fe76c901ff86ec13/qq01-hub/openmusic"
---

# 🎵 OpenMusic

  <strong>Real-time online karaoke for multiple users</strong><br/>
  Multi-source search · Synchronized listening · Chat interaction · 3D visual / immersive mode
</p>

</p>

</p>

---

## 📸 Project Screenshots

| Room Lobby | Room Karaoke | Lyrics Playback | Management Backend |
|:---:|:---:|:---:|:---:|
|  |  |  |  |

---

## 🚀 Quick Start

> Requirements: Node.js ≥ 18 + a Redis (required)

### 1. Prepare the audio source (Meting-API)

```bash
docker run -d --name meting -p 3000:3000 w3126197382/meting-api:latest
```

The container comes with a management page `http://localhost:3000/admin` (default `admin` / `admin123`), log in and configure the red dot channel Cookie.

### 2. Start OpenMusic

```bash
git clone https://github.com/wqqqqqq200/openmusic.git
cd openmusic
npm run install:all
npm run build
npm start                            # http://0.0.0.0:4000
```

After opening the browser, it will automatically enter the **deployment wizard**, where you can fill in the Redis connection, Meting audio source address, and site address. The wizard will automatically generate a session key, random management entry, and **random admin account password**, and write…
