---
repo: "jia070310/lemonTV"
name: "lemonTV"
description: "柠檬IPTV直播播放器 内置最新直播源"
url: "https://github.com/jia070310/lemonTV"
language: "Kotlin"
languages: ["Kotlin"]
languagePcts: [92]
stars: 44
forks: 10
openIssues: 5
closedIssues: 0
watchers: 1
contributors: 2
recentReleases: 0
createdAt: "2026-01-30T11:39:42Z"
lastCommitAt: "2026-07-03T12:22:57Z"
lastReleaseAt: "2026-02-06T05:51:57Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 70
undervaluedScore: 28
maintainers: ["actions-user"]
openGraphImageUrl: "https://opengraph.githubassets.com/2cc46470bcdf5322c6ccc5ff9e55340fdd5456479ab6df101acf28bfbf3d3983/jia070310/lemonTV"
---

# 🍋 柠檬IPTV直播

**4K直播源单独开了一个仓库**
[4K直播源仓库](https://github.com/jia070310/4K-IPTV-M3U)

**一款专为 Android TV / 电视盒子 打造的 IPTV 直播应用**

</div>

---

## ✨ 功能特色

- 📺 **专为电视端优化** — 遥控器完整操控，横向布局，大屏体验极佳
- 📡 **M3U/TvBox 双格式支持** — 兼容主流直播源格式
- 📅 **智能节目单（EPG）** — 自动降级多备用地址，支持 `.xml` / `.xml.gz` 格式
- 🔄 **直播源 UA 智能识别** — 从 M3U 的 `#EXT-X-APP` 参数自动提取 User-Agent 用于 EPG 请求
- ⭐ **频道收藏** — 收藏常用频道，快速切换
- 🔢 **数字选台** — 遥控器直接输入频道号
- 🌐 **局域网推送** — 扫码打开网页端，远程推送直播源地址
- 🔔 **应用内更新** — 自动检测新版本，黄色高亮提醒
- 🖥️ **多界面风格** — 经典面板 / 现代面板自由切换
- 🎬 **硬件解码加速** — 基于 Media3/ExoPlayer，支持 FFmpeg 扩展解码

---

## 📥 下载安装

前往 [Releases](https://github.com/jia070310/lemonTV/releases/latest) 页面下载最新版 APK 安装包。

| 文件名 | 说明 |
|--------|------|
| `LemonIPTV-v1.1.9-release.apk` | 正式发布版（推荐） |
| `LemonIPTV*.apk` | GitHub Actions 自动构建时的产物命名（以 [Releases](https://github.com/jia070310/lemonTV/releases) 页面附件为准） |

> 安装时如提示"未知来源"，请在系统设置中允许安装即可。

---

## 📝 更新日志

### v1.1.9（2026-03-22）

- **修复**：对齐 AndroidX **Media3 1.5.1** 与 **Jellyfin FFmpeg 扩展**（`media3-ffmpeg-decoder`），解决部分设备启动后因 `RendererCapabilities` / `NoSuchMethodError` 导致的闪退。
- **构建**：`compileSdk` / `targetSdk` 提升至 **35**，Android Gradle Plugin **8.6.1**。
- **依赖**：FFmpeg 软解改为 Maven…
