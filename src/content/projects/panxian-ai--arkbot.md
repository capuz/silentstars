---
repo: "panxian-AI/ArkBot"
name: "ArkBot"
description: "ArkBot - anti-ban QQ bot framework with pluggable adapters (OneBot 11 + official QQ API), seamless dual-channel failover"
originalDescription: "ArkBot - anti-ban QQ bot framework with pluggable adapters (OneBot 11 + official QQ API), seamless dual-channel failover"
descriptionLang: "zh"
readmeQualityOk: true
url: "https://github.com/panxian-AI/ArkBot"
language: "Python"
languages: ["Python"]
languagePcts: [100]
stars: 9
forks: 0
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 1
recentReleases: 0
createdAt: "2026-11-10T06:22:33Z"
lastCommitAt: "2026-11-17T14:35:50Z"
status: "newborn"
tags: ["hidden_gem"]
healthScore: 79
undervaluedScore: 23
maintainers: ["panxian-AI"]
openGraphImageUrl: "https://opengraph.githubassets.com/ed4b04cbe8c22231f44f482672d960a0758ca2d2e5a1d6c995a12c01708f013e/panxian-AI/ArkBot"
discussionCount: 0
---

# ArkBot（方舟）🚀

> When the bridge gets banned, switch to Ark: an anti-ban QQ bot framework with pluggable adapters.

> **Sister repository**: [ArkLink](https://github.com/panxian-AI/ArkLink) is the protocol add-on layer. This repository covers “what the bot does,” and ArkLink covers “how to connect to QQ.” Plugins are written here, and the channels (Milky / Satori / ntqq-hook / direct client sending) are provided by ArkLink. The two have a one-way dependency, independent versioning, and can each be installed separately.

## Why ArkBot

The reality of the QQ bot ecosystem: protocol implementations (the OneBot family: NapCat, Lagrange, LLOneBot, go-cqhttp……) can stop working at any time due to official risk control or project abandonment. If business logic is tied to “how it connects to QQ,” every ban means rewriting the bot.

ArkBot's answer is **heterogeneous multi-channel + seamless takeover**:

```
┌───────────────────────────────────────────────┐
│  Upper compatibility  compat/   ★ presents as a OneBot implementation externally ★ │  NoneBot2 / Koishi / AstrBot
├───────────────────────────────────────────────┤
│  Plugin layer  plugins/   business logic, never modified      │…
