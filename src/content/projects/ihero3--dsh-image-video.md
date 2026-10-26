---
repo: "ihero3/dsh-image-video"
name: "dsh-image-video"
description: "DeepSeek Harness plugin: text-to-image and text-to-video tool with provider switching between minimax-h3, wan3.0-video, and Seedance2.5, async polling, and cloning of viral videos"
originalDescription: "DeepSeek Harness 插件：文生图与文生视频工具，支持 minimax-h3 、 wan3.0-video、Seedance2.5 服务商切换、异步轮询、克隆爆款视频"
descriptionLang: "zh"
readmeQualityOk: true
url: "https://github.com/ihero3/dsh-image-video"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [98]
stars: 7
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 1
createdAt: "2026-08-20T07:28:22Z"
lastCommitAt: "2026-10-26T09:17:57Z"
lastReleaseAt: "2026-08-20T07:29:02Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 80
undervaluedScore: 47
maintainers: ["ihero3", "976905690"]
openGraphImageUrl: "https://opengraph.githubassets.com/f063f5aeb5d23946240bb41e8fc84ef553255bae874942ae6c5e5a6c052ac844/ihero3/dsh-image-video"
---

# 🎨 dsh-image-video — AI Text-to-Image / Text-to-Video Plugin for DeepSeek Harness

**Registers the `generate_image` and `generate_video` tools for the DeepSeek Harness chat model. The model decides autonomously within the conversation when to call them, and generated results are automatically downloaded to the local `outputs/` directory. Images are rendered inline through the attachment service, so creation happens in the conversation with no need to leave the terminal.**

> The DSH ecosystem has a rich set of tool plugins but lacks a lightweight, install-and-go entry point for text-to-image and text-to-video. dsh-image-video fills that gap: two tools, four providers, zero external dependencies, hot-pluggable and ready to use.

## Core Features

- **Single image submission and idempotent recovery** — `imageTransport: auto` prefers async tasks. On submission timeout or 5xx, it only looks up the original task by `request_id`. By default it does not blindly resubmit, switch models, or generate candidates. When the async endpoint is not enabled, it safely falls back to a single synchronous submission.
- **Unified brand watermark post-processing** — images have a configurable…
