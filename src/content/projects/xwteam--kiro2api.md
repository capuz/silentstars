---
repo: "xwteam/kiro2api"
name: "kiro2api"
description: "Self-hosted multi-protocol Kiro relay: Anthropic / OpenAI / OpenAI-Responses / Gemini four protocols · Rust/axum · MIT"
originalDescription: "自托管多协议 Kiro 中转:Anthropic / OpenAI / OpenAI-Responses / Gemini 四协议 · Rust/axum · MIT"
descriptionLang: "zh"
readmeQualityOk: true
url: "https://github.com/xwteam/kiro2api"
language: "Rust"
languages: ["Rust"]
languagePcts: [80]
stars: 15
forks: 4
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 0
createdAt: "2026-07-20T01:46:10Z"
lastCommitAt: "2026-11-15T08:25:30Z"
lastReleaseAt: "2026-07-28T03:00:02Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 73
undervaluedScore: 19
maintainers: ["xwteam"]
openGraphImageUrl: "https://opengraph.githubassets.com/a2bc06582e14efc6ea1de640a224d2de89d590eaf98a1b1f2b80a6aacb877102/xwteam/kiro2api"
---

📖 Documentation languages: <a href="docs/zh-CN/README.md">Simplified Chinese</a> | <a href="docs/zh-TW/README.md">Traditional Chinese</a> | <a href="docs/en/README.md">English</a> | <a href="docs/ja/README.md">Japanese</a> | <a href="docs/ko/README.md">Korean</a>

---

> [!NOTE]
> This project is for research and study purposes only. Please use it responsibly and do not use it for any commercial purpose.

> [!IMPORTANT]
> When `apiKey`/`API_KEY` is empty **and no API-KEY has been created yet**, the protocol endpoints are **open to access** (a warning is logged at startup); once the first API-KEY is issued from the admin panel, the protocol gate closes. Be sure to set it for external deployments. The management interface `/api/admin/*` is only protected after `adminApiKey` is configured (falling back to `apiKey` by default) — **if neither key is configured, the management interface and panel are open, and anyone can add or remove credentials and change authentication keys**; the `/admin` and `/user` panels themselves are never authenticated. For public internet deployments, you must set `ADMIN_API_KEY`. The container image already has `HOST=0.0.0.0` built in; for bare-metal…
