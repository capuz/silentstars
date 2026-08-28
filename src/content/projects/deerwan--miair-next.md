---
repo: "deerwan/miair-next"
name: "miair-next"
description: "让小米小爱音箱化身DLNA渲染器和AirPlay接收器，并附带一个现代化的Web管理后台"
readmeQualityOk: true
url: "https://github.com/deerwan/miair-next"
language: "Python"
languages: ["Python"]
languagePcts: [93]
stars: 34
forks: 2
openIssues: 3
closedIssues: 3
watchers: 0
contributors: 1
recentReleases: 10
createdAt: "2026-07-28T12:02:42Z"
lastCommitAt: "2026-08-28T14:30:54Z"
lastReleaseAt: "2026-08-21T08:32:50Z"
status: "thriving"
tags: ["solo_builder", "release_machine"]
healthScore: 88
undervaluedScore: 29
maintainers: ["deerwan"]
openGraphImageUrl: "https://opengraph.githubassets.com/6e9e149f72de596e487557c448d7d990bf3a8d757f287d8f1bb25aac0d298c5d/deerwan/miair-next"
---

# MiAir Next

让小米小爱音箱化身 **DLNA 渲染器** 与 **AirPlay 接收器**，并附带一个现代化的 Web 管理后台。

本项目在 [MiAir](https://github.com/KiriChen-Wind/MiAir) 协议层的基础上重构：后端改用 **FastAPI**，前端使用 **Vue 3 + Vite + Naive UI** 自建轻量管理后台，通过 GitHub Actions 云端构建多架构 Docker 镜像，一条命令即可部署。

---

## ✨ 功能

- **DLNA (UPnP AV)**：把小爱音箱注册为可投送的媒体渲染器，支持网易云音乐、QQ 音乐等 App 投送。
- **AirPlay**：作为 AirPlay 接收器，支持 iPhone / Mac 音频投送（FairPlay / HAP 配对）。
- **小米云控制**：通过小米账号 API 控制音箱播放、音量、状态查询。
- **触屏封面定制**：在「触屏显示」设置中通过下拉选择小米云封面（audioID），带屏/触屏音箱走小米云播放时显示对应封面与歌词，保存后重新投送即可生效。
- **Web 管理后台**：登录鉴权（含登录失败限速、登录日志）、总览面板（WebSocket 实时推送）、设备管理、播放控制、账号配置、系统设置、运行日志（可下载完整日志文件）。
- **通知推送**：登录过期等事件通过飞书 / WxPusher 推送提醒。
- **主题与更新**：亮色 / 暗色 / 跟随系统三态主题（默认跟随系统），面板内检查 GitHub 最新版本。
- **热重启子服务**：保存配置后热重启 DLNA/AirPlay，无需重启整个进程。

---

## 🚀 快速开始（Docker，推荐）

> ⚠️ **必须使用 host 网络**：DLNA/AirPlay 依赖组播发现，仅支持 **Linux 宿主机**。详见[部署文档](https://github.com/deerwan/miair-next/blob/HEAD/docs/deployment.md)。

一键安装：

```bash
curl -fsSL https://raw.githubusercontent.com/deerwan/miair-next/main/install.sh | bash
```

或 docker run：

```bash
docker run -d \
  --name miair-next \
  --network host \
  --restart unless-stopped \
  -e MIAIR_WEB_PORT=8300 \
  -v $(pwd)/data:/app/data \…
