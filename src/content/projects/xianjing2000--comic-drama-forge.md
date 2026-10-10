---
repo: "xianjing2000/comic-drama-forge"
name: "comic-drama-forge"
description: "Local AI comic drama automated generation system: cloud LLM script → ComfyUI three-stage asset pipeline (QwenImage2.1 + Qwen-Edit multi-view) → MiniMax H3 dynamic video + FlashVSR 4x super-resolution → FFmpeg final video. Supports a style-consistency feedback loop, pre-generation prompt pre-check, resumable runs, and JianYing (CapCut) draft export."
originalDescription: "本地漫剧自动化生成系统：云端 LLM 剧本 → ComfyUI 三阶段资产管线（QwenImage2.1 + Qwen-Edit 多视角）→ MiniMax H3 动态视频 + FlashVSR 4x 超分 → FFmpeg 成片。支持风格一致性闭环、生成前提示词预检、断点续跑与剪映草稿导出。"
descriptionLang: "zh"
readmeQualityOk: true
url: "https://github.com/xianjing2000/comic-drama-forge"
language: "Python"
languages: ["Python"]
languagePcts: [86]
stars: 5
forks: 1
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 5
createdAt: "2026-09-29T06:56:51Z"
lastCommitAt: "2026-10-10T10:06:23Z"
lastReleaseAt: "2026-10-09T18:22:08Z"
status: "thriving"
tags: ["solo_builder", "release_machine"]
healthScore: 80
undervaluedScore: 59
maintainers: ["xianjing2000"]
openGraphImageUrl: "https://opengraph.githubassets.com/dfee787dde84987a57cc35eddb6f9f5dd633719bdd795b56c4e65bbd4fbe450b/xianjing2000/comic-drama-forge"
---

# Local Comic Drama Automated Generation System

A complete AI comic drama generation pipeline based on **cloud LLM + ComfyUI (QwenImage2.1 + Qwen-Edit multi-view + MiniMax H3 + FlashVSR)**

## 🎯 System Architecture

```
┌────────────────────────────────────────────────────────────────────┐
│                    Cloud LLM (OpenAI-compatible · any vendor)       │
│   Input: story theme → Output: structured JSON script               │
│   (characters / items / scenes / shot storyboard + various generation prompts) │
└────────────────────────────────┬───────────────────────────────────┘
                                 ↓
┌────────────────────────────────────────────────────────────────────┐
│                     ComfyUI local execution (three-stage asset pipeline) │
│                                                                    │
│  ┌───────────────────────── Image assets (three types) ─────────────┐  │
│  │                                                              │  │
│  │  Characters                         Items                    │  │
│  │  ┌──────────────┐  ┌─────────────┐  ┌──────────────┐         │  │
│  │  │QwenImage2.1  │→ │Qwen-Edit    │  │QwenImage2.1  │…
