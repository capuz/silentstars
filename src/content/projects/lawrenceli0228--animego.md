---
repo: "lawrenceli0228/animego"
name: "animego"
description: "Full-stack anime discovery, tracking & local playback with danmaku — Next.js 16 (RSC) + Go + PostgreSQL. Self-hostable, AGPL-3.0."
readmeQualityOk: true
url: "https://github.com/lawrenceli0228/animego"
homepage: "https://animegoclub.com/about"
language: "Go"
languages: ["Go", "TypeScript"]
languagePcts: [43, 43]
topics: ["agpl-3-0", "anime", "anime-tracker", "danmaku", "golang", "nextjs", "postgresql", "self-hosted", "typescript"]
stars: 13
forks: 0
openIssues: 6
closedIssues: 4
watchers: 0
contributors: 2
recentReleases: 1
createdAt: "2026-03-07T07:28:12Z"
lastCommitAt: "2026-08-28T12:23:47Z"
lastReleaseAt: "2026-05-31T17:39:25Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 84
undervaluedScore: 45
maintainers: ["lawrenceli0228", "github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/035bacc6ec62067a9b22c43cebae77ae36dd1d894fcbdcc3b76e59459778b08d/lawrenceli0228/animego"
discussionCount: 1
---

**English** | [中文](https://github.com/lawrenceli0228/animego/blob/HEAD/README.zh.md)

# AnimeGo

A full-stack anime discovery, tracking, and local playback platform. Browse seasonal anime, manage your watchlist, play local video files with matched danmaku (bullet comments), and connect with other fans.

**Live:** [animegoclub.com](https://animegoclub.com)

---

## Project Status

> **The Go + Next.js stack is the canonical production branch.**
> `main` is the stable/production branch — only tested, reviewed code lands here; production deploys from `main`. `feat/go-backend` is the active development branch where new work is staged before merging into `main`.
> The legacy Express + MongoDB + Vite SPA stack was fully retired on 2026-06-01. There is no longer a `client/` or `server/` directory in this repository.

**Status:** Live in production (cut over 2026-05-31; legacy retired 2026-06-01)
**Migration started:** 2026-05-10 (from v2.0.0 baseline)
**Production stack:** Next.js 16 + Bun + Go 1.26 (chi + pgx + sqlc) + PostgreSQL 16 + Node ws-server (Socket.IO)
**Built with:** Claude Code (AI-assisted; product direction, decisions, and deployment by the author)

### Branch model

|…
