---
repo: "Moyf/moys-asr-workflow"
name: "moys-asr-workflow"
description: "Moy 的 ASR 字幕生成工作流及编辑器，简称 MAW"
readmeQualityOk: true
url: "https://github.com/Moyf/moys-asr-workflow"
language: "JavaScript"
languages: ["JavaScript", "Python", "HTML"]
languagePcts: [35, 31, 29]
stars: 260
forks: 32
openIssues: 4
closedIssues: 15
watchers: 0
contributors: 8
recentReleases: 10
createdAt: "2026-07-26T15:11:49Z"
lastCommitAt: "2026-08-29T10:21:43Z"
lastReleaseAt: "2026-08-06T16:01:31Z"
status: "newborn"
tags: ["solo_builder", "release_machine"]
healthScore: 94
undervaluedScore: 30
maintainers: ["Moyf", "drunkenQCat", "a328153009-droid"]
openGraphImageUrl: "https://opengraph.githubassets.com/ecc3fead0747b0b580161e6a11b0d3e648a53880b94dbc95ffd6abf199240502/Moyf/moys-asr-workflow"
discussionCount: 0
---

# Moy's ASR Workflow（MAW）

> 本地媒体 → AI 转写 → SRT + `.mosp` 工程 → MAWE 编辑 → 导出。

官网：[MAW 官网](https://moyf.github.io/moys-asr-workflow/) · [在线编辑器](https://moyf.github.io/moys-asr-workflow/editor/)

MAW 是一个以 API 转写为主的字幕生成与编辑工作流。它提供 Windows/macOS 图形版、公开 CLI 和本机 Server 编辑器；字幕编辑与工程保存都在本机完成。

## 快速开始

1. [下载最新版](https://github.com/Moyf/moys-asr-workflow/releases/latest)。默认下载带 FFmpeg 的 `MAW-Windows-x64-v*.zip`；如果已安装 `ffmpeg` / `ffprobe`，也可以选择体积更小的 `MAW-lite-Windows-x64-v*.zip`，macOS 下载对应的 `MAW.app` 或 `MAW-lite.app`。
2. 解压并启动 `MAW.exe` 或 `MAW.app`。
3. 在 Launcher 配置转写服务的 API Key，选择媒体并点击生成。
4. 在 MAWE 中检查、编辑字幕，导出 SRT 或其他格式。

第一次使用、API 配置、编辑和排错：请从[完整工作流](https://github.com/Moyf/moys-asr-workflow/blob/HEAD/docs/WORKFLOW.md)开始。

## 核心能力

- 使用 Qwen / Fun-ASR / Soniox / 腾讯云录音文件识别转写，生成 SRT 与 `.mosp` 工程。
- MAWE Server 编辑器支持波形定位、拆分合并、静音空隙处理、画面预览和多种导出格式。
- MAWE 支持可选的多重字幕：拖入第二条字幕作为副轨，支持主副字幕交换、绑定/解绑、联动编辑、跨轨道吸附，以及 `G` / `Shift+G` / `H` / `B` 快捷操作。
- 公开 CLI 可用于批处理和 AI 自动化，详见[命令行文档](https://github.com/Moyf/moys-asr-workflow/blob/HEAD/docs/CLI.md)。
- [本地 Qwen3-ASR / FunASR / Faster-Whisper](https://github.com/Moyf/moys-asr-workflow/blob/HEAD/docs/LOCAL_ASR.md) 和免 Key 的必剪 ASR 均属于实验性入口，仅适合体验。

## 文档

-…
