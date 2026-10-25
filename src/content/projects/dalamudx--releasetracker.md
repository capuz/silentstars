---
repo: "dalamudx/ReleaseTracker"
name: "ReleaseTracker"
description: "A lightweight, configurable release tracking and update orchestration tool. A lightweight, configurable container version tracking and management software."
originalDescription: "A lightweight, configurable release tracking and update orchestration tool. 一款轻量级、可配置的容器版本追踪和管理软件 。"
descriptionLang: "zh"
readmeQualityOk: true
url: "https://github.com/dalamudx/ReleaseTracker"
homepage: "https://dalamudx.github.io/ReleaseTracker/"
language: "Python"
languages: ["Python", "TypeScript"]
languagePcts: [70, 29]
topics: ["docker", "docker-compose", "helm", "kubernetes", "podman", "podman-compose"]
stars: 11
forks: 0
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 1
recentReleases: 0
createdAt: "2026-01-30T08:23:10Z"
lastCommitAt: "2026-10-25T02:47:18Z"
lastReleaseAt: "2026-05-13T21:11:32Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 88
undervaluedScore: 54
maintainers: ["dalamudx"]
openGraphImageUrl: "https://opengraph.githubassets.com/f5c952266b32a28cd06a2a2d782b97f9026bc72632f37943069bc6cd76160b73/dalamudx/ReleaseTracker"
---

# ReleaseTracker

[Chinese](https://github.com/dalamudx/ReleaseTracker/blob/HEAD/README.md) | [English](https://github.com/dalamudx/ReleaseTracker/blob/HEAD/README.en.md) · [Wiki](https://dalamudx.github.io/ReleaseTracker/)

A lightweight release tracking and update orchestration tool: it tracks versions from GitHub, GitLab, Gitea, Helm Charts, and OCI images, and applies selected versions to supported Docker, Podman, Portainer, Kubernetes, Helm, and SSH Compose targets.

## Features

- Aggregates multiple version sources, filters versions by release channels and rules, and keeps version history and release notes; supports repository webhooks to trigger pulls immediately.
- Binds runtime targets and updates them by manual, immediate, or maintenance-window policies; deployment plans require manual confirmation for configuration drift, first-time adoption, and exceeding version limits.
- Configuration snapshots before updates, persistent readiness observation, and manual rollback.
- Generic Webhook, WeCom, Feishu, DingTalk, Discord, Slack, and Telegram notifications, with custom Jinja message templates.
- Online instance backup and page restore, Prometheus metrics, single…
