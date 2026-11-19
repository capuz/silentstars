---
repo: "yuyukj888/shcap"
name: "shcap"
description: "A continuation of napcat"
originalDescription: "napcat的延续版"
descriptionLang: "zh"
readmeQualityOk: true
url: "https://github.com/yuyukj888/shcap"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [98]
stars: 20
forks: 0
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 1
recentReleases: 4
createdAt: "2026-11-17T03:34:56Z"
lastCommitAt: "2026-11-19T05:04:39Z"
lastReleaseAt: "2026-11-19T02:58:45Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem"]
healthScore: 80
undervaluedScore: 35
maintainers: ["yuyukj888"]
openGraphImageUrl: "https://opengraph.githubassets.com/ac4cfe3724c31949a5308465e28189d24924bfe91b0d0a67ff9b4896787ed87a/yuyukj888/shcap"
---

# SHCAP

**The continuation of NapCat · A modernized OneBot 11 protocol endpoint for QQ bots**

[Quick Start](#一快速开始) · [Email Alerts](#四邮件告警) · [FAQ](#六常见问题) · [Contact & Sponsorship](#八联系与赞助)

---

## What is this

SHCAP is a continuation of [NapCat](https://github.com/NapNeko/NapCatQQ) (independently maintained, based on NapCat 4.18.42). It turns 'QQ bot + OneBot 11' into a finished product that **works right after installation**:

- Compatible with **OneBot 11**: supports HTTP / WebSocket forward (server) and reverse (client) modes
- Keeps the **NapCat plugin ecosystem**: `.napcat-plugin` and `plugins/` directories work out of the box
- Built-in **WebUI**: token login, real-time logs, online config editing, plugin management, version management
- Built-in **HTML email alerts**: disconnects, recoveries, login failures, and verification requests all send emails that are easy to read on both phones and computers
- **Fast login without re-verification after restart**: fixed hostname + graceful shutdown, so rebuilding a container no longer repeatedly requires new device verification
- Independent branding and a blue theme (SH identity), no longer dependent on the upstream…
