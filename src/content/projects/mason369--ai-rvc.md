---
repo: "mason369/AI-RVC"
name: "AI-RVC"
description: "一键 AI 翻唱 (One-click AI Cover Generation)：AI 检索式声音转换工具 - AI Retrieval-based Voice Conversion (RVC) toolkit with efficient training and inference pipelines"
url: "https://github.com/mason369/AI-RVC"
homepage: "https://telknet.cc/"
language: "Python"
languages: ["Python"]
languagePcts: [99]
topics: ["ai-cover", "ai-music", "colab", "gradio", "python", "retrieval-based-voice-conversion", "rvc", "singing-voice-conversion", "source-separation", "vocal-separation"]
stars: 7
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 1
createdAt: "2026-01-27T06:58:42Z"
lastCommitAt: "2026-06-26T06:45:56Z"
lastReleaseAt: "2026-05-17T07:51:13Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 85
undervaluedScore: 33
maintainers: ["mason369"]
openGraphImageUrl: "https://opengraph.githubassets.com/d3d62c2fafd4dbd2d18194f4c676f107cc1e83bb1d49f7a9463bde205d7ed7a4/mason369/AI-RVC"
---

# AI-RVC 一键 AI 翻唱 / RVC Voice Conversion WebUI

AI-RVC 是一个面向普通用户和创作者的 **RVC v2 AI 翻唱与声音转换工具**。上传一首歌，它会自动分离人声和伴奏，用角色 RVC 模型转换主唱音色，再把转换后的人声、伴奏和混响重新混成完整作品。

不用先手动拆音轨，也不用在一堆脚本里来回切。打开 Gradio WebUI，选歌、选角色、点开始，一首 AI cover 就能从原曲一路跑到成品。

> 在线体验：[https://telknet.cc/](https://telknet.cc/)

**平台支持：Windows / Linux / WSL2 / Google Colab / Hugging Face Spaces**

## 项目定位与搜索关键词

如果你在找 **AI 翻唱、RVC 翻唱、AI cover generator、RVC voice conversion、角色声线转换、人声分离、伴奏分离、HuBERT、RMVPE、FAISS、Gradio WebUI、Colab AI 翻唱** 这类工具，AI-RVC 的目标就是把这些零散步骤串成一条更省心的工作流。

适合放在 GitHub About 的仓库简介：

> 一键 AI 翻唱与 RVC v2 声音转换 WebUI：自动人声分离、HuBERT + RMVPE + FAISS 音色转换、角色模型下载、混音预设，并支持 Windows、Linux、WSL2、Google Colab 和 Hugging Face Spaces。

推荐 GitHub Topics：

`rvc`, `rvc-v2`, `voice-conversion`, `ai-cover`, `song-cover`, `singing-voice-conversion`, `voice-changer`, `voice-cloning`, `vocal-separation`, `audio-separation`, `rmvpe`, `hubert`, `faiss`, `gradio`, `pytorch`, `colab`, `uvr`, `demucs`, `roformer`, `ai-music`

## 功能特点

- **AI 歌曲翻唱**：上传 MP3/WAV/FLAC，自动完成人声分离、RVC 音色转换、伴奏混合和结果导出，一首歌从原曲跑到 AI cover 成品。
- **人声分离**：默认使用 `audio-separator` 0.44.1 ensemble 预设（`ensemble:vocal_rvc`）；可选卡拉OK预设、UVR5、Demucs，适配不同歌曲素材。
- **音色转换**：RVC v2 架构 + 官方 VC…
