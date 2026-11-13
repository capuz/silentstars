---
repo: "RobbsLuo/Coding2API"
name: "Coding2API"
description: "Wraps ten upstream channels (CodeBuddy mainland China site and international version, TRAE SOLO, OpenCode Zen, Kilo Gateway, Qoder, CodeArts, OfficeAce, 小浣熊 (SenseTime Raccoon), and WPS 灵犀 (Lingxi)) as OpenAI / Responses / Anthropic compatible APIs, with a shared credential pool, health-based scheduling and session stickiness, model lists loaded per channel credential, quota probing and daily check-in, growth center automation, and per-user usage statistics. Reverse-engineered interfaces, for study and research only."
originalDescription: "把 CodeBuddy（国内站 + 国际版）、TRAE SOLO、OpenCode Zen、Kilo Gateway、Qoder、CodeArts、OfficeAce、小浣熊（SenseTime Raccoon）、WPS 灵犀（Lingxi）十个上游渠道封装为 OpenAI / Responses / Anthropic 兼容 API：公共凭证池、健康度调度与会话粘性、模型列表按渠道凭证加载、额度探测与每日签到、成长中心自动化、按人用量统计。逆向接口，仅供学习研究。"
descriptionLang: "zh"
readmeQualityOk: true
url: "https://github.com/RobbsLuo/Coding2API"
homepage: "https://github.com/RobbsLuo/Coding2API/pkgs/container/coding2api"
language: "HTML"
languages: ["HTML", "Python"]
languagePcts: [45, 43]
topics: ["api-gateway", "codebuddy", "fastapi", "llm", "openai-api", "sqlite", "trae", "opencode-zen", "coding-agent", "codearts"]
stars: 42
forks: 11
openIssues: 3
closedIssues: 22
watchers: 0
contributors: 2
recentReleases: 10
createdAt: "2026-09-11T00:16:09Z"
lastCommitAt: "2026-11-13T18:35:46Z"
lastReleaseAt: "2026-10-22T04:13:09Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 96
undervaluedScore: 48
maintainers: ["RobbsLuo", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/50ba3d11ebbe8e4bd10e8fbffd539dce9f46c9cc3d83f5aeac4a4c99818c8a01/RobbsLuo/Coding2API"
---

# Coding2API

Ten channels, namely **CodeBuddy** (mainland China and international, as two separate channels), **TRAE SOLO**, **OpenCode Zen**, **Kilo**, **Qoder**, **CodeArts**, **OfficeAce**, **小浣熊**, and **灵犀**, are wrapped into an OpenAI-compatible API with a shared credential pool, unified model names and scheduling, and per-user usage statistics.

> [!WARNING]
> Reverse-engineered interfaces, for study and research only, with no security audit performed. Public deployment requires a reverse proxy, authentication, and an IP allowlist.

## Features

- **OpenAI-compatible endpoints**: `/v1/chat/completions` (streaming / non-streaming), `/v1/responses` (Codex CLI), `/v1/messages` (Claude Code), `/v1/models` (including single-model lookup), `/v1/user/balance`.
- **Unified scheduling**: flat names pick credentials by health; `model@channel` forces a specific channel. Priority: free channels, then fewest in-flight requests, then quota expiring soonest, then health plus tiered cooldown, then highest balance. Admins can set a **weight** on a credential (`-1000..1000`). It only reorders within the same health tier (positive values preferred, negative values as backup) and never pushes…
