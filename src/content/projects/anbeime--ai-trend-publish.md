---
repo: "anbeime/ai-trend-publish"
name: "ai-trend-publish"
description: "A full-stack AI content creation platform combining a WeChat Mini Program, a FastAPI backend, and a React frontend. It supports trending topic collection, AI content generation (articles/videos/digital humans), and automated multi-platform publishing."
originalDescription: "一个集微信小程序 + FastAPI 后端 + React 前端的 AI 内容创作全栈平台，支持热点采集、AI 内容生成（文章/视频/数字人）、多平台自动发布。"
descriptionLang: "zh"
readmeQualityOk: true
url: "https://github.com/anbeime/ai-trend-publish"
homepage: "https://ai-trend-publish.vercel.app"
language: "JavaScript"
languages: ["JavaScript", "TypeScript"]
languagePcts: [57, 31]
topics: ["ai-agent", "auto-publish", "content-creation", "fastapi", "miyucaicai", "multi-platform-publish", "react", "wechat-miniprogram", "ai-content-platform", "hot-trends"]
stars: 26
forks: 9
openIssues: 1
closedIssues: 0
watchers: 0
contributors: 7
recentReleases: 0
createdAt: "2025-12-28T04:37:28Z"
lastCommitAt: "2026-11-12T05:35:43Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 70
undervaluedScore: 48
maintainers: ["github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/c7ced4647a87c48020ce99a3f7675005a6ebe61957d8028f0f167b95515108d2/anbeime/ai-trend-publish"
discussionCount: 1
---

# AI Trending Topic Auto-Publishing System & Content Creation Platform

A full-stack **AI content creation platform** combining a WeChat Mini Program, a FastAPI backend, and a React frontend. It supports trending topic collection, AI content generation (articles/videos/digital humans), and automated multi-platform publishing.

> This project was created by merging and refactoring [ai-trend-publish-main](https://github.com/anbeime/ai-trend-publish), [tiktok-gen-main](https://github.com/anbeime/tiktok-gen), [cobalt](https://github.com/imputnet/cobalt), and [Agent-Reach](https://github.com/anbeime/Agent-Reach).

---

## Architecture Overview

```
┌─────────────────────────────────────────────────────────────┐
│                   WeChat Mini Program                        │
│  pages/ · cloudfunctions/ · components/ · config/            │
├─────────────────────────────────────────────────────────────┤
│              React Frontend (Vite + TypeScript)               │
│  Dashboard · QuickCreate · AssetsStudio · Settings            │
├─────────────────────────────────────────────────────────────┤
│              FastAPI Backend (Python 3.11+)                    │
│…
