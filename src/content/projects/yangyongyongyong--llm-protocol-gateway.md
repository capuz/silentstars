---
repo: "yangyongyongyong/llm-protocol-gateway"
name: "llm-protocol-gateway"
description: "LLM protocol conversion gateway with Cloudflare public access and provider OAuth"
originalDescription: "LLM protocol conversion gateway with Cloudflare public access and provider OAuth"
descriptionLang: "zh"
readmeQualityOk: true
url: "https://github.com/yangyongyongyong/llm-protocol-gateway"
homepage: "https://yangyongyongyong.github.io/llm-protocol-gateway/"
language: "Go"
languages: ["Go", "TypeScript"]
languagePcts: [63, 23]
stars: 14
forks: 3
openIssues: 0
closedIssues: 2
watchers: 0
contributors: 6
recentReleases: 3
createdAt: "2026-07-09T13:04:42Z"
lastCommitAt: "2026-11-26T12:57:44Z"
lastReleaseAt: "2026-10-29T09:45:14Z"
status: "thriving"
tags: []
healthScore: 100
undervaluedScore: 61
maintainers: ["yyyy9527", "yangyongyongyong"]
openGraphImageUrl: "https://opengraph.githubassets.com/7f0a1f8ca7a0f3be82755ed8b5ec8f2f7341d59db044a5c80fcef0d544f2eb7d/yangyongyongyong/llm-protocol-gateway"
discussionCount: 0
---

A gateway that unifies the four protocols <b>OpenAI Chat / OpenAI Responses / Claude / Gemini</b>, API Keys, official subscriptions, and third-party relays into a single <b>controllable, observable, and disaster-tolerant</b> gateway.

---

## What problems it solves

- **Protocol mismatch**: Clients only speak OpenAI Chat, while upstreams only offer Claude / Gemini / Responses. The gateway does point-to-point direct conversion without going through a lossy intermediate layer.
- **Scattered accounts**: Official API Keys, Claude/ChatGPT/Cursor subscriptions, Qoder/Trae/ZCode/WorkBuddy accounts, and others are unified under the same Provider and key system.
- **Manual switching is always needed**: When one upstream is rate-limited, banned, or goes offline, the whole chain breaks. The gateway includes fallback chains, cooldowns, failback probing, and session stickiness.
- **Unclear spending**: Pricing tables are configured per model, each request is billed down to the micro-dollar, and combined with per-key quotas and usage analytics, costs and quotas are laid out openly.
