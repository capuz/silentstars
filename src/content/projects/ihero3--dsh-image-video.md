---
repo: "ihero3/dsh-image-video"
name: "dsh-image-video"
description: "DeepSeek Harness plugin: text-to-image and text-to-video tool, supports switching between the minimax-h3, wan3.0-video, and Seedance2.5 providers, async polling, and cloning viral videos"
originalDescription: "DeepSeek Harness 插件：文生图与文生视频工具，支持 minimax-h3 、 wan3.0-video、Seedance2.5 服务商切换、异步轮询、克隆爆款视频"
descriptionLang: "zh"
readmeQualityOk: true
url: "https://github.com/ihero3/dsh-image-video"
language: "TypeScript"
languages: ["TypeScript", "JavaScript"]
languagePcts: [60, 39]
stars: 7
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 1
createdAt: "2026-08-20T07:28:22Z"
lastCommitAt: "2026-10-25T08:40:28Z"
lastReleaseAt: "2026-08-20T07:29:02Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 80
undervaluedScore: 47
maintainers: ["ihero3", "976905690"]
openGraphImageUrl: "https://opengraph.githubassets.com/80f8c948b078f99969dc9559c6edcb3e554c596b19734fb6fe36df99e68641c4/ihero3/dsh-image-video"
---

# 🎨 dsh-image-video — AI Text-to-Image / Text-to-Video plugin for DeepSeek Harness

**Registers two tools, `generate_image` and `generate_video`, for the DeepSeek Harness chat model. The model decides autonomously during conversation when to call them. Generated results are automatically downloaded to the local `outputs/` directory, and images are embedded and rendered through the attachment service. Create directly in the conversation without leaving the terminal.**

> The DSH ecosystem has plenty of tool plugins, but lacks a lightweight, install-and-use entry point for text-to-image and text-to-video. dsh-image-video fills that gap: two tools, four providers, zero external dependencies, hot-pluggable and ready to use.

## Core Features

- **Single image submission with idempotent recovery**: `imageTransport: auto` prefers async tasks. On submission timeout or 5xx, it only looks up the original task by `request_id`. By default it does not blindly resubmit, switch models, or generate candidates. When the async endpoint is not enabled, it safely falls back to a single synchronous submission.
- **Unified branded watermark post-processing**: Images have a configurable watermark…
