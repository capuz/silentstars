---
repo: "xiaofan6ya/MiraiHub"
name: "MiraiHub"
description: "MiraiHub is a multi-platform aggregation gateway: one API Key can call models from multiple upstream platforms (WB, Trae Domestic, Trae International, Qoder Domestic/International…)."
originalDescription: "MiraiHub是一个多平台聚合网关：一个 API Key 可以调用多个上游平台 （WB、Trae 国内版、Trae 国际版 、Qoder国内/国际…）的模型。"
descriptionLang: "zh"
readmeQualityOk: true
url: "https://github.com/xiaofan6ya/MiraiHub"
language: "Python"
languages: ["Python"]
languagePcts: [72]
stars: 10
forks: 11
openIssues: 3
closedIssues: 3
watchers: 0
contributors: 3
recentReleases: 5
createdAt: "2026-10-30T01:14:34Z"
lastCommitAt: "2026-11-05T11:03:23Z"
lastReleaseAt: "2026-11-05T09:52:56Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "release_machine", "fork_magnet"]
healthScore: 80
undervaluedScore: 65
maintainers: ["xiaofan6ya", "hxzzlg"]
openGraphImageUrl: "https://opengraph.githubassets.com/aecb08337d6fad0d0e18c5f61533d5db8d3fd4111495bf48a6320083b321638b/xiaofan6ya/MiraiHub"
---

# MiraiHub

> **Aggregate multiple upstream platforms into one standard OpenAI-compatible gateway.**

One API Key, many upstreams; one protocol, covering all models.
Built-in account pool, quota billing, risk-control sentinel, and real-time monitoring. Works out of the box, no external middleware needed.

---

## What problem it solves

You have accounts and quotas on several platforms, but they:

- Use different protocols (some only accept Chat Completions, others only their own proprietary endpoints)
- Have quotas that each expire, becoming worthless if unused
- Get rate-limited easily per account, while multiple accounts require you to manage rotation yourself
- Clients only support one protocol, so switching platforms means switching tools

**MiraiHub's approach: bring them all into one gateway and expose only standard protocols.**

```
                     ┌──────────────────────────────┐
   Your client       │          MiraiHub            │      Upstream platforms
  ─────────────      │  ┌────────────────────────┐  │   ──────────────
  OpenAI SDK   ──►   │  │  /v1/chat/completions  │  │──► WorkBuddy
  Anthropic    ──►   │  │  /v1/responses         │  │──► Trae Domestic…
