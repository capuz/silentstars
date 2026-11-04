---
repo: "wycto/dsh-dock"
name: "dsh-dock"
description: "dsh-dock · DeepSeek Harness feature dock plugin: a single panel uniformly registers and toggles all small features, including usage accounting (custom unit prices and time-of-use pricing), model settings and balance, 19 task animations, task notifications (DingTalk/Feishu), running status, an image understanding proxy, account-password remote access, and 10 mini games. Each feature is an independent module that can be toggled, has error isolation, and is plug-and-play."
originalDescription: "dsh-dock · DeepSeek Harness 功能坞插件：一张面板统一注册/开关所有小功能——用量记账（自定义单价·分时价）、模型设置与余额、19 种任务动画、任务通知（钉钉/飞书）、运行状态、图片理解代理、账号密码远程访问、10 款小游戏。每个功能独立模块，可开关、错误隔离、即插即用。"
descriptionLang: "zh"
readmeQualityOk: true
url: "https://github.com/wycto/dsh-dock"
homepage: "https://www.npmjs.com/package/dsh-dock"
language: "JavaScript"
languages: ["JavaScript"]
languagePcts: [100]
topics: ["cordis", "dsh", "ai-agents", "dsh-plugin", "agent", "deepseek-harness", "llm", "plugin"]
stars: 15
forks: 0
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 1
recentReleases: 3
createdAt: "2026-08-21T16:31:45Z"
lastCommitAt: "2026-11-04T11:10:03Z"
lastReleaseAt: "2026-11-04T11:27:33Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 78
undervaluedScore: 49
maintainers: ["wycto"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1342016095/9373842e-124a-483f-b990-4011dd33eaed"
---

# dsh-dock · Feature Dock

**DeepSeek Harness feature dock plugin**: register and toggle all small features uniformly from one management panel.

Small features such as model balance, usage records, model settings, and the image understanding proxy are all gathered into one 'Feature Dock'.
Each feature is an independent module with a registry, a toggle, and error isolation. New features are added as new modules, and existing features are unaffected.

---

## Feature Overview

| Feature | Description |
|---|---|
| **Usage Records** | Records all LLM API calls: second-level time filtering, token and cost statistics (**configurable unit prices per model, persistently saved and billed by the user-entered prices**, supports multi-segment time-of-use prices and weekend/holiday off-peak prices, built-in peak/valley pricing plus automatic sync of official price lists as a fallback), grouped summaries, detail search, and CSV export |
| **Model Settings** | Edit the model catalog of each provider: input types (text/image with annotations) and thinking intensity levels. Image capability can be declared manually by you. After adding a new provider, the page automatically rereads the catalog…
