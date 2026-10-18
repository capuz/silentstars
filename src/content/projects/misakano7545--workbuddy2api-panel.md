---
repo: "misakano7545/workbuddy2api-panel"
name: "workbuddy2api-panel"
description: "Turn Tencent WorkBuddy accounts into a multi-account gateway with an OpenAI-compatible API, automatically complete all tasks in the task center, and include a web admin panel (account pool visualization / points tasks / hot-reload configuration). An enhanced fork based on Sliverkiss/workbuddy2api."
originalDescription: "把腾讯WorkBuddy账号变成 OpenAI 兼容 API 的多账号网关，同时自动完成任务中心全部任务，附 Web 管理面板（账号池可视化 / 积分任务 / 配置热更新）。基于 Sliverkiss/workbuddy2api 的增强分支"
descriptionLang: "zh"
readmeQualityOk: true
url: "https://github.com/misakano7545/workbuddy2api-panel"
language: "Go"
languages: ["Go"]
languagePcts: [89]
stars: 54
forks: 11
openIssues: 4
closedIssues: 3
watchers: 0
contributors: 16
recentReleases: 10
createdAt: "2026-09-23T15:30:16Z"
lastCommitAt: "2026-10-18T08:15:41Z"
lastReleaseAt: "2026-09-27T06:58:02Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 85
undervaluedScore: 37
maintainers: ["misakano7545", "SunshineR04", "github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/ed1e0ad32eca85caa383ee0f858c2476c5d80343af1904624f0ebd2b63eef68f/misakano7545/workbuddy2api-panel"
---

Web panel · OAuth browser login · account pool rotation · circuit breaking and cooldown · session stickiness · **web search** · scheduled check-in / activity / travel / keep-alive · <b>one-click completion of growth tasks (17/18)</b> · streaming / non-streaming

---

> **This project is an enhanced fork of [Sliverkiss/workbuddy2api](https://github.com/Sliverkiss/workbuddy2api)** (fork).
> It refactors the visual operations layer on top of upstream and syncs all upstream feature updates.
> For an overview of the differences, see [Differences from upstream](#-与上游的差异). The clever parts of the upstream design (account pool scheduling, error classification, prompt system) are kept as-is; see below and the upstream README.
>
> Thanks to [linguo2625469/workbuddy2api-panel](https://github.com/linguo2625469/workbuddy2api-panel/), and to [HanawaBanana/workbuddy2api](https://github.com/HanawaBanana/workbuddy2api), which continues the original repository after it was deleted.

## Project overview

WorkBuddy2API is a self-hosted **OpenAI-compatible reverse proxy gateway** that wraps Tencent CodeBuddy (`copilot.tencent.com`) accounts into a unified service. Inbound, it supports…
