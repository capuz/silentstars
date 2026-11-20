---
repo: "ciskonc/ClashOmega"
name: "ClashOmega"
description: "A Chrome browser extension developed based on Clash Verge Rev for managing Clash proxy rules. Tribute to SwitchyOmega / ZeroOmega. Supports three-mode proxy switching, domain rule match detection, one-click adding of domains to proxy groups, and YAML rule add/delete with hot reload."
originalDescription: "Chrome 浏览器扩展，基于 Clash Verge Rev 开发，用于管理 Clash 代理规则。致敬 SwitchyOmega / ZeroOmega。支持三模式代理切换、域名规则匹配检测、一键添加域名到代理组、YAML 规则增删热重载。"
descriptionLang: "zh"
readmeQualityOk: true
url: "https://github.com/ciskonc/ClashOmega"
language: "JavaScript"
languages: ["JavaScript", "PowerShell"]
languagePcts: [59, 20]
stars: 30
forks: 2
openIssues: 0
closedIssues: 1
watchers: 0
contributors: 2
recentReleases: 1
createdAt: "2026-06-20T17:27:38Z"
lastCommitAt: "2026-11-20T12:02:14Z"
lastReleaseAt: "2026-11-20T12:03:55Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 90
undervaluedScore: 16
maintainers: ["MagicalYuYu", "ciskonc"]
openGraphImageUrl: "https://opengraph.githubassets.com/9d93b031e5938012710577c4eb955dbf443ba1f5f86f4bdc32009b887c9e971b/ciskonc/ClashOmega"
---

# ClashOmega

> Chrome browser extension for managing Clash proxy rules. Tribute to SwitchyOmega / ZeroOmega.

[🌐 Website](https://magicalyuyu.github.io/ClashOmega/) · [Chinese](https://github.com/ciskonc/ClashOmega/blob/HEAD/README.md) · [English](https://github.com/ciskonc/ClashOmega/blob/HEAD/README_EN.md) · [Changelog](https://github.com/ciskonc/ClashOmega/blob/HEAD/CHANGELOG.md)

---

## Interface Preview

## Features

### Core Features

| Feature | Description |
|------|------|
| Three-mode switching | System proxy → Direct → Clash proxy, one-click switching, icon color changes in real time |
| Domain match detection | Detects the Clash rules matching the current domain, showing the matched group and policy (supports RULE-SET fallback via `/connections` API query) |
| Quick rule addition | Adds the current domain to a proxy group (dynamically fetches the Clash proxy group list) |
| Smart domain grouping | Detects all domains on the page and suggests automatic grouping (e.g., `i1.art.com`, `i2.art.com` → `*.art.com`) |
