---
repo: "swy2018/Aurora-Audio-Studio"
name: "Aurora-Audio-Studio"
description: "Windows 本地 AI 音频工作台 / Local AI audio workstation for music, voice cloning, stem separation, transcription, MIDI and subtitles."
readmeQualityOk: true
url: "https://github.com/swy2018/Aurora-Audio-Studio"
homepage: "https://swy2018.github.io/Aurora-Audio-Studio/"
language: "C#"
languages: ["C#"]
languagePcts: [81]
topics: ["ai-audio", "local-ai", "music-generation", "subtitles", "voice-cloning", "windows", "audio", "csharp", "desktop-app", "midi-transcription"]
stars: 10
forks: 2
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 2
recentReleases: 4
createdAt: "2026-07-21T18:33:09Z"
lastCommitAt: "2026-09-01T08:41:32Z"
lastReleaseAt: "2026-09-01T08:48:53Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem"]
healthScore: 76
undervaluedScore: 36
maintainers: ["swy2018"]
openGraphImageUrl: "https://opengraph.githubassets.com/8f69e35a7629ab197e5248548eb2ffe97926ac44ad05df4d78a63425495d55de/swy2018/Aurora-Audio-Studio"
---

<h1>Aurora Audio Studio</h1>
  <p><strong>让声音创作，回到创作本身。</strong></p>
  <p>面向 Windows 的本地 AI 音频创作工作台</p>
  <p>
  </p>
</div>

Aurora 把音乐生成、AI 配音、声音克隆、歌声转换、音轨分离、MIDI 扒谱和视频字幕集中到同一个本地入口。六个功能互相独立，可直接开始当前任务，不再需要手动管理多个启动器、端口和结果目录。

## 1.5.0 带来了什么

### 更新不再只告诉你“有新版”

- 检查完成后，有新版的模型或组件会直接显示“更新”，并在页首提供带数量的“更新全部”。
- 批量更新按顺序处理，成功项立即变为最新；失败项保留为可更新状态，可关闭占用程序后直接重试。
- Aurora 会在替换文件前检测仍在运行的组件，不会强制关闭 Subtitle Edit 等工具，避免未保存内容丢失。

### 模型中心更容易看懂

- 每个模型改为分层卡片，名称、用途、功能、语言、版本、许可、状态、本地路径和操作区不再挤在同一行。
- 本地路径过长时会省略显示，但鼠标悬停仍可查看完整位置。
- 更新、回退和卸载动作保持四语言，并补充屏幕阅读器名称与状态说明。
## 工作流

| 工作流 | 默认引擎 | 可选引擎 | 主要输出 |
|---|---|---|---|
| 音乐创作 | ACE-Step 1.5 XL Turbo | MiniMax-Music3 | 完整歌曲、纯音乐与草稿 |
| AI 配音与声音克隆 | Qwen3-TTS 1.7B | Qwen3-TTS 0.6B、F5-TTS | 配音与克隆音频 |
| 歌声克隆 | Seed-VC 44.1k | 按模型中心扩展 | 歌声与音色转换 |
| 去人声 / AI 分轨 | BS-RoFormer-SW 6-Stem | Demucs 4 | 独立 WAV 音轨 |
| AI 扒谱 | TransKun V2 | YourMT3+、ByteDance Piano、Basic Pitch | 标准 MIDI |
| 视频 AI 字幕 | Faster-Whisper XXL | Small、Large v3 Turbo、Large v3 | SRT 与转写数据 |

模型与第三方工具保留各自上游许可。模型大小、显存建议、语言能力和来源会在模型中心逐项显示。

## 安装

### 系统要求

- Windows 10 或 Windows 11 x64
- 建议使用 NVIDIA RTX 显卡
- 模型根据实际工作流单独下载
- 大型模型安装前请预留模型中心建议的磁盘空间

### 标准安装

1. 打开…
