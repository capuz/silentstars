---
repo: "jia070310/lemon-muisc"
name: "lemon-muisc"
description: "柠檬音乐：飞牛 NAS 原生音乐工具（搜索/试听/全屏播放/下载/标签）。不依赖 Docker，依赖 Node.js v22；兼容落雪音源，支持多选批量下载。适配 x86 / ARM。"
readmeQualityOk: true
url: "https://github.com/jia070310/lemon-muisc"
language: "JavaScript"
languages: ["JavaScript", "Vue"]
languagePcts: [47, 45]
stars: 16
forks: 2
openIssues: 1
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 10
createdAt: "2026-08-20T03:59:12Z"
lastCommitAt: "2026-08-29T10:20:59Z"
lastReleaseAt: "2026-08-23T12:00:07Z"
status: "newborn"
tags: ["hidden_gem", "release_machine"]
healthScore: 70
undervaluedScore: 41
maintainers: ["jia070310"]
openGraphImageUrl: "https://opengraph.githubassets.com/5e05c368d324c0dce655b47bdd31bf2a4425d619c8047b3250071ee79ecab93f/jia070310/lemon-muisc"
---

# 柠檬音乐下载 · Lemon Music

面向飞牛 NAS 与自托管环境的 **Web 音乐工具**：多平台搜索、歌单发现、在线试听、批量下载、本地标签管理。兼容落雪音乐（LX Music）自定义音源脚本，在浏览器中即可完成「找歌 → 试听 → 下载 → 整理」全流程。

当前版本：**v1.2.3** · 开源协议：**[MIT](https://github.com/jia070310/lemon-muisc/blob/HEAD/LICENSE)**  
飞牛应用中心显示名：**柠檬音乐**（浏览器标题仍为「柠檬音乐下载」）  
仓库：[https://github.com/jia070310/lemon-muisc](https://github.com/jia070310/lemon-muisc)

飞牛 FPK 为**独立原生应用**，不再依赖 Docker。运行时使用应用中心 **Node.js v22**。

---

## 界面预览

### 搜索 · 试听 · 下载（桌面端）

多平台关键词检索，结果列表支持单曲试听、加入试听队列、按音质下载；底栏播放器常驻，频谱动效实时跳动。

### 全屏播放 · 频谱可视化 · 滚动歌词（桌面端）

点击封面进入全屏模式，蓝绿渐变频谱铺满底部，歌词实时滚动高亮，支持进度、音量、播放控制。

### 移动端自适应

手机访问自动切换紧凑布局：全屏播放横竖屏均可用，歌词清晰大字显示。

| 全屏播放 | 搜索页 |
|----------|--------|
|  |  |

> 请仅用于个人已合法授权的音乐资源管理。请遵守当地法律法规及各平台服务条款，不要将本项目用于侵权或商业用途。

---

## 功能概览

### 搜索

- 支持 **酷我、酷狗、QQ 音乐、网易云、咪咕** 等平台（通过激活的音源脚本检索）
- 按关键词分页搜索，展示歌名、歌手、专辑、时长与可用音质
- 单曲 **试听**、**加入试听列表**、**选择音质下载**
- 批量「播放全部」「全部加入列表」
- **可同时激活多个音源**
- **多选批量下载**：勾选后统一选音质入队；某首没有该音质时自动降到可用档位再加入队列

### 发现（歌单）

- 粘贴歌单链接或 ID，解析并展示歌单信息与完整歌曲列表
- **推荐歌单**：按平台切换，支持「最热 / 最新」排序
- 歌单内歌曲支持试听、加入队列、按音质下载

### 试听与播放

- 底栏 **播放器**：播放 / 暂停、上一首 / 下一首、进度条、音量精确调节
- **音频可视化**：播放栏背景蓝绿渐变频谱动效
- **全屏播放页**：大封面、实时滚动歌词、底部沉浸式频谱
- **桌面端 / 手机端** 自适应布局
-…
