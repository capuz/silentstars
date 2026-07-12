---
repo: "Prejudice-Studio/Twilight"
name: "Twilight"
description: "A lightweight Emby/Jellyfin user management application"
originalDescription: "一个轻量Emby/Jellyfin用户管理应用"
descriptionLang: "zh"
readmeQualityOk: true
url: "https://github.com/Prejudice-Studio/Twilight"
language: "Go"
languages: ["Go", "TypeScript"]
languagePcts: [52, 47]
stars: 45
forks: 8
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 7
recentReleases: 0
createdAt: "2025-11-25T14:22:15Z"
lastCommitAt: "2026-07-12T06:11:56Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 87
undervaluedScore: 38
maintainers: ["MoYuanCN", "dependabot[bot]"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1103930089/ae8ba96d-86c2-4a2d-827e-1e8bba78973b"
---

# Twilight

A management panel for users, invitations, card codes, bots, and operations for Emby / Jellyfin.

[Documentation Center](https://github.com/Prejudice-Studio/Twilight/blob/HEAD/docs/README.md) · [Installation and Deployment](https://github.com/Prejudice-Studio/Twilight/blob/HEAD/docs/guides/install.md) · [Docker Deployment](https://github.com/Prejudice-Studio/Twilight/blob/HEAD/docs/guides/docker.md) · [Telegram Channel](https://t.me/Twilightpanel) · [Telegram Group](https://t.me/TwilightPanelChat)

## Project Positioning

Twilight is an Emby / Jellyfin user management system with a Go backend and a Next.js frontend, suitable for media server sites that require registration review, card code renewal, invitation relationships, Telegram Bot binding, device/IP review, and backend operation capabilities.

Current main architecture:

- Backend: Go, entry point is `cmd/twilight`, deployment target is Linux + systemd, also supports Docker.
- Frontend: Next.js App Router, TypeScript, Tailwind CSS, Radix/shadcn style components.
- Storage: Single state document model, supports JSON files or PostgreSQL; under PostgreSQL, business state is still in `twilight_state` single row…
