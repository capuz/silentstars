---
repo: "ventianima-lab/codexpro-automation"
name: "codexpro-automation"
description: "Safe ChatGPT web automation for Codex·CodexPro app·Multi-GPT automation"
originalDescription: "Codex용 안전한 ChatGPT 웹 작업·CodexPro 앱·Multi-GPT 자동화"
descriptionLang: "ko"
readmeQualityOk: true
url: "https://github.com/ventianima-lab/codexpro-automation"
language: "Python"
languages: ["Python"]
languagePcts: [96]
topics: ["agbrowse", "browser-automation", "chatgpt", "codex", "multi-agent"]
stars: 5
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 0
createdAt: "2026-07-20T05:06:28Z"
lastCommitAt: "2026-07-23T06:18:59Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem"]
healthScore: 80
undervaluedScore: 38
maintainers: ["ventianima-lab"]
openGraphImageUrl: "https://opengraph.githubassets.com/3c8a5f44793140581b31ed2423bd1152f86cb4a68d9552407d2082b1ea738b1a/ventianima-lab/codexpro-automation"
---

# CodexPro Automation

This is an automation layer for Windows to safely utilize web ChatGPT as a **real worker, reviewer, and research team, not just a response tool**.

It does not create a new browser automation engine. It uses the public package `agbrowse` as is, and this repository only adds the following features on top of it.

- General GPT, planning, reviewing, editing, directing, summarizing, web multi GPT, in-depth research, Pro mode routing
- CodexPro app registration, connection, and permission verification
- Prevention of duplicate questions in the same project and parallel execution of different projects
- Accurate task recovery after interruption, browser restart, or response delay
- Automatic cleanup of only finished tabs while protecting other tabs
- Distinction of prompts, responses, and execution targets by hash and URL

> The current public version is based on **Windows + Codex app + ChatGPT web login environment**. Additional adjustments may be needed depending on changes to the ChatGPT UI or external packages.

> **Important:** All modes of the app must have ChatGPT's **Developer Mode** turned on. Please enable it in ChatGPT web under `Settings → Apps →…
