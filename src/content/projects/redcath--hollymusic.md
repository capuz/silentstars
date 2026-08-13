---
repo: "redcatH/HollyMusic"
name: "HollyMusic"
description: "🎧 个人与家庭的私有音乐云——自部署聚合全网音源，家人各自独立收藏与歌单，兼容 Subsonic 客户端，Docker 一键部署，数据完全自持。"
readmeQualityOk: true
url: "https://github.com/redcatH/HollyMusic"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [81]
topics: ["music-player", "music-players", "music-streaming", "music-streaming-website"]
stars: 6
forks: 2
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 3
recentReleases: 0
createdAt: "2025-11-20T07:35:06Z"
lastCommitAt: "2026-08-13T05:18:17Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 90
undervaluedScore: 61
maintainers: ["redcatH"]
openGraphImageUrl: "https://opengraph.githubassets.com/824bba046fd27760f8c510fca7bf21a165332635015a43ad4792bf758d4e4590/redcatH/HollyMusic"
discussionCount: 0
---

# 🎵 Holly Music

> **直接兼容洛雪（LX Music）自定义音源** · 多源聚合 · 自部署 · PWA

**聚合网络上的一切公开资源，让好音乐触手可及。**

Holly Music 是一个纯自部署的在线音乐聚合播放器。内置 `lx-env-simulator` 兼容层，**可直接加载洛雪音乐（LX Music Desktop）的自定义音源脚本**——你手头已有的洛雪音源 `.js` 丢进来就能用，无需改造。同时聚合 QQ / 网易 / 酷我 / 酷狗 / 咪咕等平台，一个搜索框同时检索，质量自动回退（`flac24bit → flac → 320k → 128k`），提供搜索、播放、收藏、歌单、歌词、下载的一站式体验。

**🎯 项目初衷**

需求其实很简单：找个能听歌、能随手分享给家人朋友的地方。Holly Music 就是为这件事做的：

- **支持洛雪音源**——洛雪（LX Music）社区有海量现成音源脚本，直接拿来用，不必重新造轮子
- **尽可能不存储**——只做聚合与流式代理，不囤积音频源文件；服务端只保留收藏 / 歌单 / 历史这些必要数据
- **分享给家人朋友**——一次部署，多人共用，账号各自隔离，互不干扰
- **浏览器打开就能听**——不装客户端、不挑系统，有网就有歌

仅此而已。没有广告、没有社交、不锁设备——把听歌的选择权还给你自己。

**为什么选 Holly Music？**

- 🧩 **洛雪音源生态即插即用**——兼容 LX Music 自定义源 API 2.0.0，社区海量音源脚本直接复用，admin 后台拖拽上传、热重载生效
- 🚀 **服务端磁盘缓存 + 边下边播**——音频落盘支持 HTTP Range，seek / 暂停 / 恢复丝滑，多用户共享缓存，LRU 自动清理
- 📱 **PWA + 锁屏控制**——安装到主屏像原生 App，断网仍能打开 App Shell，锁屏 / 通知栏 / 耳机线控显示封面与播放控制
- 🔐 **多用户隔离 + 自托管**——收藏、歌单、播放历史按用户隔离，数据在你自己的服务器，签名 Cookie 鉴权
- 🤖 **AI 加持**——管理员可批量跑 AI 推荐任务，用户侧可用自然语言描述需求让 AI 协助建歌单
- 🔌 **Subsonic 协议兼容**——可作为 Subsonic 服务端被 DSub / Ultrasonic 等外部客户端接入

> 💡 **架构一瞥**：前端为 **Vite + React Router** 构建的 SPA（`frontend/`），后端为 **Next.js (App Router)** 仅提供 API（`app/api/`、`app/rest/`）。前端通过 `@/*` 别名复用根目录的…
