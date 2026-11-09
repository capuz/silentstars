---
repo: "Yzm889/-Smart-video-highlights"
name: "-Smart-video-highlights"
description: "中文 一帧成片 FrameCut：本地 AI 短视频工具。传图片/视频+音乐，自动检测场景切换与动作停顿帧，匹对音乐鼓点生成强卡点短片；支持 AI 写文案、中文配音、字幕，免费开源。  English FrameCut: a local AI short-video tool. Drop images/videos + a song; it detects scene cuts & motion beats, aligns them to the music's strong beats for beat-synced edits. Supports AI captions, Chinese voice-over, subtitles. Free & open-source."
readmeQualityOk: true
url: "https://github.com/Yzm889/-Smart-video-highlights"
language: "Python"
languages: ["Python"]
languagePcts: [66]
stars: 6
forks: 0
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 2
recentReleases: 10
createdAt: "2026-08-25T17:14:36Z"
lastCommitAt: "2026-11-09T00:52:54Z"
lastReleaseAt: "2026-11-07T18:20:19Z"
status: "thriving"
tags: ["hidden_gem", "release_machine"]
healthScore: 80
undervaluedScore: 53
maintainers: ["Yzm889"]
openGraphImageUrl: "https://opengraph.githubassets.com/a90be13ccdc2c0f6741ea997ba8462148978dc588190300a043d2648a1e91da4/Yzm889/-Smart-video-highlights"
---

# 一帧成片 · FrameCut

[English version](https://github.com/Yzm889/-Smart-video-highlights/blob/HEAD/README.en.md)

## 📦 桌面版下载（推荐 · 无需装 Python）

**双击即用**：[⬇️ 下载一帧成片 v1.1.0（Windows 64 位）](https://github.com/Yzm889/-Smart-video-highlights/releases/latest)

- 解压后双击 `FrameCut.exe` —— **独立桌面窗口**，无命令行、无浏览器操作
- 首次使用点「📖 新手引导」装模型；本地文件**免上传直读**（桌面版专属）
- 本地运行：不花一分钱、不上传素材、断网也能出片
- 想用源码运行或参与开发？往下看 👇

一个**本地运行、AI 智能**的短视频创作工具。上传图片 / 视频 + 选一首音乐，自动生成**强卡点**短片——画面切换点精确匹对到音乐鼓点；并内置完整的**电影剧情解说**流水线（场景分段 → AI 写连贯解说稿 → 配音 → 字幕 → 混音出片），支持 AI 看图写文案 + 中文配音 + 字幕烧录。

> ⚡ 智能强卡点、场景/动作分析、节拍对齐全部**本地计算**，不消耗 API 余额。

## ✨ 功能

- 🎯 **智能强卡点**：分析视频的**场景切换 / 大幅动作停顿帧**，匹对音乐**大鼓点**，自动硬切 + 配乐成片（xfade 交叉淡化 / 保留原声 / 节拍对齐可调 0.5 / 1 / 2 拍）
- 🖼️ **多素材混排**：图片（自动 Ken Burns 镜头运动）+ 视频 自由组合
- 🎵 **免费踩点音乐库**：内置 CC.BY 商用曲库，在线搜索、一键使用
- 🎬 **电影解说流水线**：场景分段 → Whisper 台词 → **整稿生成连贯剧情解说**（黄金 7 秒钩子 / 画面接地 / 少升华 / 留白）→ 配音 → 字幕 → 混音出片；支持「剧情驱动剪辑」（写稿 → 按字数分配画面，成片短于原片）
- 🌐 **联网解说**：按片名搜索剧情 → 全自动解说（离线切句兜底，0 元可用）
- 💬 **指令成片**：自然语言一句话路由到对应工作流（解说 / 卡点 / 合成）
- 🎛 **人机协同微调**：方案预览面板（时间轴拖拽 / 删切点 / 改解说词 / B-roll 插入 / 单段配音重生成）+ 50 步撤销重做
- 🤖 **AI 文案 + 字幕 + 中文配音**：支持 DeepSeek（看图写话）、小米 MiMo / 通义（配音），可分别配置
- 💸 **自动选路（免费优先）**：本地模型优先 → 配了云端 Key 才用云端 →…
