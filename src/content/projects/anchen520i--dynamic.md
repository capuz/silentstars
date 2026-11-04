---
repo: "Anchen520i/Dynamic"
name: "Dynamic"
description: "Surge Profiles, Rules, Scripts, Sgmodules, Rewrites and so on;"
originalDescription: "Surge Profiles、 Rules、Scripts、Sgmodules、Rewrites and so on；"
descriptionLang: "zh"
readmeQualityOk: true
url: "https://github.com/Anchen520i/Dynamic"
language: "JavaScript"
languages: ["JavaScript"]
languagePcts: [100]
stars: 22
forks: 2
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 1
recentReleases: 0
createdAt: "2023-04-02T06:19:24Z"
lastCommitAt: "2026-11-04T08:03:36Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 80
undervaluedScore: 57
maintainers: ["Anchen520i"]
openGraphImageUrl: "https://opengraph.githubassets.com/7dd3a2a6e33e9d65389cb931a8466f7785da815600ad8932e937eb30064adea8/Anchen520i/Dynamic"
---

# Surge Pro

**Personalized traffic-routing configuration for Surge users**

Choose exit by app · Smart routing by region · Encrypted DNS · LAN compatibility

Independent, clear, and adjustable network exits for everyday browsing, developer tools, and streaming.

[Quick Start](#快速开始) · [Policy Design](#策略设计) · [Daily Use](#日常使用) · [Troubleshooting](#故障排查)

---

> [!IMPORTANT]
> This configuration requires you to provide your own Surge-compatible node subscription and configure accessible rule resources.
> The `http://hisuio/...` and `http://acher/...` addresses in the original configuration are custom resource addresses and cannot be assumed to be available on other devices.
> This document describes the behavior of the main configuration file. Additionally enabled modules, temporary rules, and runtime policy selections may change the final result.

## Configuration Overview

| Capability | Current implementation |
| :--- | :--- |
| Node source | Import external subscriptions via `policy-path` |
| Regional groups | Japan, Taiwan, United States, Hong Kong, Singapore |
| Auto-selection | Regional groups use `smart`, selecting nodes based on actual connection quality |
| App routing…
