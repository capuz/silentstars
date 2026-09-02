---
repo: "none0enon/math-reader-boox"
name: "math-reader-boox"
description: "Math PDF reader and handwriting study workspace for PWA/Android, with classroom recording, AI-assisted study tools, R2 sync, and low-latency BOOX pen input."
readmeQualityOk: true
url: "https://github.com/none0enon/math-reader-boox"
language: "HTML"
languages: ["HTML"]
languagePcts: [91]
stars: 14
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 1
createdAt: "2026-07-16T20:42:01Z"
lastCommitAt: "2026-09-02T08:05:15Z"
lastReleaseAt: "2026-07-22T04:05:51Z"
status: "thriving"
tags: []
healthScore: 87
undervaluedScore: 42
maintainers: ["none0enon", "claude", "github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/467eb6503bec67616317e7b7d2fa23f1de6ff3cc6b300867a73818629b361f53/none0enon/math-reader-boox"
---

# Math Reader

Math Reader 是一个面向数学学习的本地优先工作台：把资料阅读、课堂记录、AI 讲义、手写笔记、间隔复习和习题训练放在同一个应用中。

This repository ships the current Math Reader web app as an Android APK. BOOX/E Ink support is an additional platform adaptation: on supported BOOX devices, handwriting is connected to the Onyx pen SDK for lower latency, while the main product remains Math Reader itself.

[中文使用说明](#中文使用说明) · [English User Guide](#english-user-guide) · [Releases](https://github.com/none0enon/math-reader-boox/releases) · [Issues](https://github.com/none0enon/math-reader-boox/issues)

## 当前功能

| 模块 | 用途 |
|---|---|
| 课堂 | 按课程/讲座整理课堂，录音、拍照或上传资料，并生成带来源引用的 AI 笔记 |
| 书架与阅读 | 管理书籍/论文，阅读和批注 PDF，搜索/OCR、套索问 AI、按文档保存对话 |
| 讲义 | 为 PDF 书籍生成大纲和分章节讲义，为论文生成摘要 |
| 笔记 | 模板化手写笔记本、PDF/图片/音频插入、搜索、PDF 导出 |
| 复习 | 从指定笔记页生成 Quiz，按间隔复习计划自动推进并由 AI 评分 |
| 习题 | 从图片/PDF 识别题目，手写作答、计时、AI 批改、重做与归档 |
| 数据 | 本地持久化、完整 ZIP 备份，以及可选的 Cloudflare R2 多设备同步 |

> AI 生成、OCR、转写、识题和批改会把相应文本、页面截图、文档片段或录音发送给你配置的服务商。普通阅读、手写和本地数据管理不要求配置 AI。

## 中文使用说明

### 1. 安装、更新与首次启动

1. 安装项目发布的正式签名 APK。Android 需要允许浏览器或文件管理器“安装未知应用”；最低支持 Android 8.0（API 26）。
2. 第一次安装默认显示 English，可在 **Settings → Language Settings → Interface Language → 中文** 切换。
3. 后续更新直接覆盖安装正式签名…
