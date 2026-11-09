---
repo: "hoowhoami/EchoMusicNext"
name: "EchoMusicNext"
description: "🎉 下一代EchoMusic"
readmeQualityOk: true
url: "https://github.com/hoowhoami/EchoMusicNext"
language: "C++"
languages: ["C++"]
languagePcts: [63]
topics: ["echomusic", "kugou", "music", "player"]
stars: 35
forks: 10
openIssues: 1
closedIssues: 16
watchers: 0
contributors: 4
recentReleases: 1
createdAt: "2026-05-11T02:51:12Z"
lastCommitAt: "2026-11-09T04:34:42Z"
lastReleaseAt: "2026-11-05T06:06:32Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 98
undervaluedScore: 44
maintainers: ["hoowhoami", "oneday5799", "NovaOPCJ"]
openGraphImageUrl: "https://opengraph.githubassets.com/e77b445c1e1239b5c96e5fc208f206d0a4981357f42fafbf11812b81d48f0e5b/hoowhoami/EchoMusicNext"
discussionCount: 1
---

# EchoMusicNext

> 当前主程序版本见根目录 [VERSION](https://github.com/hoowhoami/EchoMusicNext/blob/HEAD/VERSION)，项目仍在开发中。功能、平台适配和发布部署持续完善。

---

## ✨ 核心特性

- **桌面体验**：支持深浅色模式、主题色、界面缩放，以及侧栏快捷入口和播放栏布局调整。
- **音乐推荐**：浏览首页、每日推荐、排行榜、免费听及刷歌，发现更多音乐。
- **多维搜索**：支持歌曲、歌词、歌手、专辑、歌单和 MV 搜索。
- **个人音乐库**：管理自建与收藏歌单、喜欢的歌曲、关注的歌手、收藏的专辑与视频。
- **歌单管理**：支持歌曲添加与移除、歌单封面设置和顺序调整。
- **进阶播放**：提供队列管理、播放模式、音质选择、音量、进度、倍速和定时关闭。
- **私人 FM**：按偏好收听个性化推荐，通过播放与反馈继续发现音乐。
- **音乐云盘**：浏览和管理云盘歌曲，上传本地音频文件。
- **歌曲与 MV**：查看歌曲、歌手和专辑资料，播放 MV，浏览评论与回复。
- **歌词显示**：提供 Apple Music 风格原生动效歌词。
- **音频增强**：提供均衡器、响度调整、音效文件管理及兼容音效引擎接入。
- **频谱扩展**：为插件提供实时播放频谱，支持在播放栏、Mini 和歌词界面呈现可视化效果。
- **系统集成**：支持系统托盘、媒体控制、快捷键及窗口管理。
- **账号与历史**：支持账号登录与切换，查看播放历史和听歌统计。
- **插件扩展**：支持插件源浏览、本地插件包与开发目录加载，扩展页面、设置和播放器操作。

## 🛠️ 技术栈

- **应用框架**：Qt 6.12.0 / Qt Quick / QML。
- **应用服务**：C++20。
- **原生模块**：Rust 1.99.0。
- **音频引擎**：FFmpeg 解码、SoundTouch 变速处理及原生音频输出。
- **本地存储**：Qt SQL / SQLite。
- **构建工具**：CMake、Cargo、Ninja。
- **开发辅助**：Python 3.12+ 用于 SDK 准备、构建启动封装和工具测试；Node.js / npm 用于开发格式工具。

播放器运行时由 Qt/C++ 与 Rust 组成。开发脚本及格式工具不随应用运行时部署。

## 🚀 快速开始

### 前置要求

- Qt **6.12.0** SDK。
- Rust **1.99.0**，版本由 `rust-toolchain.toml` 固定。
- CMake **3.28+**、Ninja 和 C++20 编译器。
- 使用仓库辅助脚本或 MSVC /…
