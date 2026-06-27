---
repo: "illianoaoi/Wiim-Dashboard"
name: "Wiim-Dashboard"
description: "Self-hosted dark dashboard to monitor & control WiiM / LinkPlay audio devices — now-playing, EQ, sub-out, sources/outputs, presets, temperature. Next.js 15 + Docker."
url: "https://github.com/illianoaoi/Wiim-Dashboard"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [97]
topics: ["audio", "dashboard", "docker", "hifi", "linkplay", "nextjs", "self-hosted", "smart-home", "typescript", "wiim"]
stars: 10
forks: 4
openIssues: 0
closedIssues: 1
watchers: 0
contributors: 4
recentReleases: 10
createdAt: "2026-06-14T04:27:54Z"
lastCommitAt: "2026-06-27T06:22:43Z"
lastReleaseAt: "2026-06-27T06:10:49Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "funded", "release_machine"]
healthScore: 89
undervaluedScore: 57
maintainers: ["illiano"]
openGraphImageUrl: "https://opengraph.githubassets.com/b7dcad1e255f6895d47226bcbf77061cf65e0bad50c6601f791b6f90217bb516/illianoaoi/Wiim-Dashboard"
fundingLinks: ["GITHUB:https://github.com/illianoaoi"]
discussionCount: 1
---

# 🎵 Wiim Dashboard

**A self-hosted, dark-themed web dashboard to monitor and control your [WiiM](https://www.wiimhome.com/) (LinkPlay) audio devices.**

Now-playing & transport · EQ · sub-out · source/output switching · presets with artwork · amp temperature — built for phone, tablet and desktop, packaged as a single Docker container, and hardened to sit safely behind your own reverse proxy.

<br/>

<br/>
<br/>

</div>

---

> [!IMPORTANT]
> The WiiM device HTTP API has **no authentication** and uses a self-signed certificate. This app **never exposes the device** — a server-side proxy is the only thing that talks to it, behind login + CSRF + optional Cloudflare Turnstile, and SSRF-guarded so it can only reach LAN hosts.

## Table of contents

- [Features](#features)
- [Supported devices](#supported-devices)
- [How it works](#how-it-works)
- [Tech stack](#tech-stack)
- [Quick start (Docker)](#quick-start-docker)
- [First run](#first-run)
- [Adding devices](#adding-devices)
- [Configuration](#configuration)
- [Public access / reverse proxy](#public-access--reverse-proxy)
- [Cloudflare Turnstile](#cloudflare-turnstile)
- [Last.fm scrobbling](#lastfm-scrobbling)
- [Security…
