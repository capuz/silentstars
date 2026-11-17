---
repo: "jikekei/Server_Qchat"
name: "Server_Qchat"
description: "A modern web operations control panel and cluster management system built specifically for SCPSL. It fully replaces the official LocalAdmin, supports multi-server hosting, real-time monitoring, and a mobile-exclusive UI, and integrates QQ bot linkage for group server management."
originalDescription: "专为 SCPSL 打造的现代化 Web 运维控制面板与集群管理系统。全面取代官方 LocalAdmin，支持多服托管、实时监控与手机端专属 UI，并集成 QQ 机器人群服联动。"
descriptionLang: "zh"
readmeQualityOk: true
url: "https://github.com/jikekei/Server_Qchat"
language: "C#"
languages: ["C#", "JavaScript"]
languagePcts: [73, 21]
topics: ["exiled-plugin", "exiled-scpsl", "labapi", "labapi-plugin", "localadmin", "qq-bot", "scpsl-exiled", "scpsl-labapi", "scpsl-plugins", "scpsl-server"]
stars: 20
forks: 1
openIssues: 0
closedIssues: 1
watchers: 1
contributors: 2
recentReleases: 1
createdAt: "2024-11-02T17:45:33Z"
lastCommitAt: "2026-11-17T14:41:59Z"
lastReleaseAt: "2026-09-20T11:18:40Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 86
undervaluedScore: 67
maintainers: ["jikekei", "dependabot[bot]", "DNTOF"]
openGraphImageUrl: "https://opengraph.githubassets.com/46f5ed54b04db8d5d80c85e4284144cf60ff422dd29a4948bc7f76ff4ecbb68c/jikekei/Server_Qchat"
---

[English](https://github.com/jikekei/Server_Qchat/blob/HEAD/README.md) · [简体中文](https://github.com/jikekei/Server_Qchat/blob/HEAD/docs/zh-CN/README.md)

[English documentation](https://github.com/jikekei/Server_Qchat/blob/HEAD/docs/README.md) · [中文文档](https://github.com/jikekei/Server_Qchat/blob/HEAD/docs/README.zh-CN.md) · [Latest release](https://github.com/jikekei/Server_Qchat/releases/latest) · [Report an issue](https://github.com/jikekei/Server_Qchat/issues)

---

Server_Qcha, also known as Qridge, connects SCP: Secret Laboratory game servers to a browser-based operations panel and QQ communities. The project combines a standalone server supervisor, a dual-engine QQ bot, a mobile-friendly web console, and plugins for EXILED and LabAPI.

## Key features

- **Standalone LocalAdmin supervisor (`Server_Qcha.Daemon`)**: Separates game-server lifecycle management from the panel and bot. Restarting, updating, or crashing the bot does not terminate game servers managed by the daemon. The bot can automatically start the daemon.
- **Live daemon monitoring and control**: View daemon status, PID, working-set and private memory, uptime, thread count, and managed-server load. Start, stop…
