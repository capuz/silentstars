---
repo: "Practice019/multi2api"
name: "multi2api"
description: "An OpenAI-compatible reverse proxy for Tencent CodeBuddy / WorkBuddy | Multi-account pool · Circuit breaking · Session affinity · Local management console"
originalDescription: "Tencent CodeBuddy / WorkBuddy 的 OpenAI 兼容反向代理 | 多账号池 · 熔断 · 会话粘性 · 本地管理控制台"
descriptionLang: "zh"
readmeQualityOk: true
url: "https://github.com/Practice019/multi2api"
language: "Go"
languages: ["Go"]
languagePcts: [77]
topics: ["api-gateway", "chat-completions", "codebuddy", "go", "openai-api", "openai-compatible", "reverse-proxy", "self-hosted", "sse-streaming", "tencent"]
stars: 11
forks: 0
openIssues: 0
closedIssues: 1
watchers: 0
contributors: 1
recentReleases: 10
createdAt: "2026-09-10T22:34:21Z"
lastCommitAt: "2026-10-06T10:42:11Z"
lastReleaseAt: "2026-09-15T11:41:17Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 89
undervaluedScore: 57
maintainers: ["Practice019"]
openGraphImageUrl: "https://opengraph.githubassets.com/a3ff486bd5fb1b2651d95a5a3093edcad435612975174cd7d7cc1e807a8b2faf/Practice019/multi2api"
discussionCount: 0
---

Unified authentication · Account pool rotation · Circuit breaking and cooldown · Session affinity · Scheduled check-in and renewal · Management console

## What is this

**multi2api is a multi-upstream aggregation reverse proxy gateway**: it combines multiple upstream accounts into a single OpenAI-compatible `base_url` + `api_key`. Your application only needs to understand the OpenAI protocol, and the gateway handles account selection, quotas, check-ins, renewals, cooldown, and troubleshooting behind the scenes.

```
Your application ──► multi2api ──┬──► WorkBuddy          Tencent CodeBuddy Desktop (default upstream)
                         ├──► WorkBuddy AI       Overseas version (www.workbuddy.ai)
                         ├──► CodeArts           Huawei Cloud CodeArts
                         ├──► Loomy              iFLYTEK Loomy Desktop
                         ├──► Cline              Cline Desktop
                         ├──► TRAE               ByteDance TRAE
                         ├──► Raccoon Work       SenseTime Xiaohuan
                         ├──► LobsterAI          Youdao Lobster
                         ├──► Qoder              Alibaba Qoder…
