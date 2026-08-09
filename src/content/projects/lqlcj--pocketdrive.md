---
repo: "lqlcj/PocketDrive"
name: "PocketDrive"
description: "自托管个人网盘,专为小内存 VPS设计。前端 React,后端 Go ,数据库SQLite 。"
readmeQualityOk: true
url: "https://github.com/lqlcj/PocketDrive"
language: "TypeScript"
languages: ["TypeScript", "Go"]
languagePcts: [51, 46]
stars: 12
forks: 1
openIssues: 1
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2026-08-03T17:37:59Z"
lastCommitAt: "2026-08-09T04:47:46Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem"]
healthScore: 70
undervaluedScore: 24
maintainers: ["lqlcj"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1322076265/3af6a044-6e54-4b24-9265-293c1d6b580e"
---

# PocketDrive — 口袋网盘

自托管个人网盘,专为小内存 VPS设计。前端 React,后端 Go ,SQLite 存储。

---

你的 512MB、1GB 内存的小鸡，是不是只够装个探针然后吃灰？送的存储不用又浪费？

市面上优秀网盘很多，可惜大多太重了——要装数据库、要装缓存、还带一堆插件，咱们小鸡根本扛不住。于是就有了这款轻量网盘。

虽然轻量，但功能不减。存储采用 SQLite，支持 WebDAV，内置 aria2 离线下载，还能自动更新 Tracker。文件预览直接调用浏览器能力，不堆插件。

也不打算做多用户和多客户端，一切目标都是轻量，让小鸡也能用，不能让它只配装探针。响应式已做好，移动端添加到桌面用 PWA 体验也很好。

---
夜间模式:
日间模式:

## 资源占用情况

| 组件 | 常驻内存 |
|---|---|
| PocketDrive(Go,含前端) | ~40-80MB |
| aria2 | ~30-100MB |

两个进程常驻内存还没100M,RN,CC的小鸡再也不用吃灰了,线路鸡也可以利用起来了.

上传下载全程流式,视频/音频播放走浏览器,不占内存;Office/PDF 预览在浏览器端渲染,
服务器零额外开销。
**视频只直连播放浏览器支持的格式**(mp4/webm 等);mkv/rmvb 在线预览不支持因为小内存装不下实时转码,这是刻意取舍。

## 功能

| 功能 |  |  |
|---|---|---|
| 文件管理 | WebDAV | 离线下载 |
| 断点续传 | 在线压缩/解压 | 整盘导出/导入 |
| 全局搜索 | 在线预览 | Markdown 笔记 |
| 分享 | 黑夜模式 | 移动端响应式 |

### 方式一:VPS 一键安装(推荐)

```bash
curl -fsSL https://raw.githubusercontent.com/lqlcj/PocketDrive/main/scripts/install.sh | sudo bash
```

脚本会自动:装 docker(如果没有)→ 建 `/opt/pocketdrive` → 生成随机密码和 aria2 RPC 密钥 →
拉起 pocketdrive 和 aria2 容器。装完直接打印访问地址和密码。
重跑同一条命令即为升级(数据、密码不动)。

开箱即用，`http://IP:16688` 就能访问

### 方式二:编排安装

以1panel为例:

1. 1Panel 后台 → **容器** → **编排** → **创建编排**
2. 名称随意(如 `pocketdrive`),把下面的内容贴进去:

```yaml
services:
    pocketdrive:…
