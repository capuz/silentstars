---
repo: "maifeipin/lite_agent"
name: "lite_agent"
description: "Lite Agent engine with Feishu WebSocket, DeepSeek V4 Pro support, and billing skills"
originalDescription: "Lite Agent engine with Feishu WebSocket, DeepSeek V4 Pro support, and billing skills"
descriptionLang: "zh"
readmeQualityOk: true
url: "https://github.com/maifeipin/lite_agent"
language: "Python"
languages: ["Python"]
languagePcts: [94]
stars: 14
forks: 2
openIssues: 4
closedIssues: 0
watchers: 0
contributors: 3
recentReleases: 0
createdAt: "2026-05-30T18:24:00Z"
lastCommitAt: "2026-07-13T06:38:07Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem"]
healthScore: 79
undervaluedScore: 35
maintainers: ["maifeipin", "chenli118"]
openGraphImageUrl: "https://opengraph.githubassets.com/1d8d037b67429d1a228a45a6f9b4c04f3b8e4e0b2bf1040eb432d2199988bc97/maifeipin/lite_agent"
---

# Lite Agent

🚀 **Lite Agent** is a lightweight, zero external dependency (only relies on the official SDK), privatized AI intelligent assistant engine that supports deep thinking large models. It connects to the three major domestic IMs: **Feishu, DingTalk, and WeChat Work** through WebSocket / HTTP callbacks, and automatically schedules local server operations, billing, RSS selection, and other skills through natural language.

## 🌟 Core Features

- **Seamless Multi-Channel Access**: A single codebase supports Feishu (WebSocket), Telegram (Long Polling/Webhook), DingTalk, and WeChat Work.
- **Fully Automatic Multi-Modal Vision (OCR)**: No extra instructions! Directly send images to the bot, automatically invoke external large language vision models (via `OCR_ENDPOINT` proxy), and parse and return exquisitely formatted Markdown with formula rendering in seconds.
- **Dynamic Skills Engine (Skills)**: Easily extend new capabilities for the Agent (such as sending emails, querying data) with simple Python scripts.
- **Built-in Task Orchestration**: Supports breaking down complex tasks into multi-step DAG execution.
- **Built-in Scheduled Tasks (Cron)**: Easily configure the Agent…
