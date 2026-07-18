---
repo: "qq01-hub/openmusic"
name: "openmusic"
description: "A real-time online karaoke system for multiple users. Supports song search across three platforms, with synchronized playback queue, progress, and lyrics in the room."
originalDescription: "多人实时在线点歌系统。支持  三平台搜索点歌，房间内播放队列、进度、歌词多端同步"
descriptionLang: "zh"
readmeQualityOk: true
url: "https://github.com/qq01-hub/openmusic"
homepage: "https://qqovo.top"
language: "TypeScript"
languages: ["TypeScript", "HTML"]
languagePcts: [49, 39]
stars: 89
forks: 21
openIssues: 1
closedIssues: 3
watchers: 0
contributors: 3
recentReleases: 10
createdAt: "2026-06-17T02:04:36Z"
lastCommitAt: "2026-07-18T05:48:27Z"
lastReleaseAt: "2026-06-25T04:18:05Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 95
undervaluedScore: 40
maintainers: ["qq01-hub", "instpe"]
openGraphImageUrl: "https://opengraph.githubassets.com/bd9a2a60f201d1f8312ccb8fde02aaad5fc7282efada1ef7c03aa0c5387f9614/qq01-hub/openmusic"
---

# 🎵 OpenMusic

  <strong>Real-time online karaoke for multiple users</strong><br/>
  🎧 Multi-source search · 🔄 Synchronized listening · 💬 Chat interaction · ✨ 3D visuals / Immersive mode
</p>

</p>

</p>

---

## 📸 Project Screenshots

| 🏠 Room Lobby | 🎤 Room Karaoke | 🎶 Lyrics Playback |
|:---:|:---:|:---:|
|  |  |  |

---

## 🚀 Quick Start

> 💡 **Requirements**: Node.js ≥ 18

### 1️⃣ Start Meting-API (Audio Source)

```bash
docker pull w3126197382/meting-api:latest
docker run -d --name meting -p 3000:3000 w3126197382/meting-api:latest
```

The management backend is available at `http://localhost:3000/admin` (`admin` / `admin123`), it is recommended to configure the 🔴 red dot channel Cookie.

### 2️⃣ Start OpenMusic

```bash
git clone https://github.com/wqqqqqq200/openmusic.git
cd openmusic

npm run install:all
cp server/.env.example server/.env   # ✏️ Edit required items
npm run build
npm start                            # 🌐 http://0.0.0.0:4000
```

🔧 Development mode (hot updates for front and back end):

```bash
npm run dev
```

| Service | Address |
|------|------|
| 🖥️ Frontend Vite | http://localhost:5173 |
| ⚡ Backend API / WS | http://localhost:4000 |

> ⚠️…
