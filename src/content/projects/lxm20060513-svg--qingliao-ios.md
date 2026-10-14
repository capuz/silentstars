---
repo: "lxm20060513-svg/qingliao-ios"
name: "qingliao-ios"
description: "Qingliao iOS client: native SwiftUI (not an HTML wrapper), connects to a self-hosted backend. AI chat + smart home dashboard + NAS/Docker management + knowledge base, project generated with XcodeGen, GitHub Actions produces an unsigned IPA for SideStore sideloading."
originalDescription: "轻聊 iOS 客户端：原生 SwiftUI（非 HTML 套壳），连自部署后端。AI 对话 + 智能家居看板 + NAS/Docker 管理 + 知识库，XcodeGen 生成工程，GitHub Actions 出 unsigned IPA 供 SideStore 侧载。"
descriptionLang: "zh"
readmeQualityOk: true
url: "https://github.com/lxm20060513-svg/qingliao-ios"
language: "Swift"
languages: ["Swift"]
languagePcts: [95]
topics: ["ai-assistant", "github-actions", "home-assistant", "ios", "nas", "qingliao", "sidestore", "swift", "swiftui", "xcodegen"]
stars: 5
forks: 1
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 2
createdAt: "2026-08-09T08:43:02Z"
lastCommitAt: "2026-10-14T08:57:57Z"
lastReleaseAt: "2026-08-09T12:58:54Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 80
undervaluedScore: 56
maintainers: ["lxm20060513-svg"]
openGraphImageUrl: "https://opengraph.githubassets.com/9c5c551a9474dfe1c7dcbda032821b03e87ca113c2ebe7b4970cf71bef1b1f82/lxm20060513-svg/qingliao-ios"
---

# Qingliao 3.0 (轻聊) — Native iOS AI Assistant

An AI assistant client for home NAS, native SwiftUI (not an HTML wrapper), connecting to a self-hosted backend (Hermes + custom Python service). It provides AI chat, a smart home dashboard (Home Assistant), NAS/router status, Docker management, a knowledge base, AI memory, password management, scheduled tasks, and more. Requires iOS 17+ (tested on iOS 26/27), distributed via SideStore sideloading.

> 🔗 **Backend is open source**: The backend service paired with this app (unified API, Docker deployment) is open-sourced at [`github.com/lxm20060513-svg/qingliao-backend`](https://github.com/lxm20060513-svg/qingliao-backend) (MIT). It includes `docker-compose` + `.env.example` + full deployment docs. For deployment or upgrades, refer to that repository.

> This document is for **AI agents taking over development and releases**: after reading it, you can independently complete the full flow of "change feature → self-check → release → deliver".
>
> Note: internal handoff and operations docs (release history, ops manual, internal health-check records) are **not included in this public repo** and remain only in the deployment environment.…
