---
repo: "RobbsLuo/Coding2API"
name: "Coding2API"
description: "Wraps ten upstream channels (CodeBuddy domestic site and international edition, TRAE SOLO, OpenCode Zen, Kilo Gateway, Qoder, CodeArts, OfficeAce, 小浣熊 (SenseTime Raccoon), WPS 灵犀 (Lingxi)) as OpenAI / Responses / Anthropic-compatible APIs. Features a shared credential pool, health-based scheduling with session stickiness, model lists loaded per channel credential, quota probing and daily check-ins, growth center automation, and per-user usage statistics. Reverse-engineered interfaces, for study and research only."
originalDescription: "把 CodeBuddy（国内站 + 国际版）、TRAE SOLO、OpenCode Zen、Kilo Gateway、Qoder、CodeArts、OfficeAce、小浣熊（SenseTime Raccoon）、WPS 灵犀（Lingxi）十个上游渠道封装为 OpenAI / Responses / Anthropic 兼容 API：公共凭证池、健康度调度与会话粘性、模型列表按渠道凭证加载、额度探测与每日签到、成长中心自动化、按人用量统计。逆向接口，仅供学习研究。"
descriptionLang: "zh"
readmeQualityOk: true
url: "https://github.com/RobbsLuo/Coding2API"
homepage: "https://github.com/RobbsLuo/Coding2API/pkgs/container/coding2api"
language: "Python"
languages: ["Python", "HTML"]
languagePcts: [47, 41]
topics: ["api-gateway", "codebuddy", "fastapi", "llm", "openai-api", "sqlite", "trae", "opencode-zen", "coding-agent", "codearts"]
stars: 48
forks: 15
openIssues: 0
closedIssues: 25
watchers: 0
contributors: 2
recentReleases: 3
createdAt: "2026-09-11T00:16:09Z"
lastCommitAt: "2026-11-23T13:29:49Z"
lastReleaseAt: "2026-11-23T02:36:18Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 100
undervaluedScore: 49
maintainers: ["RobbsLuo", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/19118953ca3ad55ff283c0039a72c9fd1dfffae47bdf4dfeb4b49276ad0ba041/RobbsLuo/Coding2API"
---

# Coding2API

Wraps eleven channels (**CodeBuddy** domestic and international, as two separate channels, **TRAE SOLO**, **OpenCode Zen**, **Kilo**, **Qoder**, **CodeArts**, **OfficeAce**, **小浣熊**, **灵犀**, **超级麦吉**), plus an optional **generic OpenAI-compatible upstream**, into a single OpenAI-compatible API: a shared credential pool, unified model names and scheduling, and per-user usage statistics.

> **Warning**
>
> Reverse-engineered interfaces, for study and research only. No security audit has been performed. Public deployment requires a reverse proxy, authentication, and an IP allowlist.
