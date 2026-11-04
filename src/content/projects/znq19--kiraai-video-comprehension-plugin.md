---
repo: "znq19/KiraAI_video_comprehension_plugin"
name: "KiraAI_video_comprehension_plugin"
description: "Let your Bot watch videos too. QQ, Bilibili, and local videos can be sent to the matching model for analysis, either in native multimodal mode or frame-extraction mode, for detailed understanding. Includes Bilibili video download."
originalDescription: "让你的Bot也能看视频。QQ/B站/本地视频可原生多模态或抽帧模式发送相应模型分析并可详细理解。附带B站视频下载功能。"
descriptionLang: "zh"
readmeQualityOk: true
url: "https://github.com/znq19/KiraAI_video_comprehension_plugin"
language: "Python"
languages: ["Python"]
languagePcts: [100]
stars: 5
forks: 1
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2026-09-13T01:56:51Z"
lastCommitAt: "2026-11-04T11:28:28Z"
status: "newborn"
tags: ["hidden_gem"]
healthScore: 87
undervaluedScore: 50
maintainers: ["znq19", "AinaLife-ai"]
openGraphImageUrl: "https://opengraph.githubassets.com/fbafda6b8682a99007365b95cfca30c07bf86d0a1b576575f134a381a0732b1e/znq19/KiraAI_video_comprehension_plugin"
---

# Video Comprehension Plugin

KiraAI video comprehension plugin: automatically detects QQ video messages, compresses them, extracts frames at three levels, and analyzes them as a collage; **speech transcription** (Bilibili official subtitles take priority, and it can be skipped when the model has built-in audio and video understanding); supports Bilibili link download, sending, search, AI summary, and **html5 direct-link passthrough**; 4 independently configured model groups (native video / frame extraction / built-in audio and video understanding); supports local videos and time-range analysis.

## Core Capabilities

1. **Automatic video message detection**: recursively scans the message chain (**including quotes `Reply.chain` and merged forwards `Forward.chains`, with multi-level nesting supported**) → `raw_message` → **proactively calls `get_msg` by message ID**, as a three-level fallback
2. **Automatic caching of received videos**: downloads a video locally as soon as it is detected, and tells the bot the path in the next conversation turn (`auto_cache_video`, enabled by default; the caching scope is controlled by `cache_scope`, which defaults to caching only videos that were…
