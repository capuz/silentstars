---
repo: "hanjungwoo3/portfolio-web"
name: "portfolio-web"
description: "Portfolio v3 — Web PWA (Vite + React + Cloudflare Worker)"
originalDescription: "포트폴리오 v3 — 웹 PWA (Vite + React + Cloudflare Worker)"
descriptionLang: "ko"
readmeQualityOk: true
url: "https://github.com/hanjungwoo3/portfolio-web"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [97]
stars: 8
forks: 10
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 10
createdAt: "2026-04-28T15:56:57Z"
lastCommitAt: "2026-10-23T09:31:03Z"
lastReleaseAt: "2026-10-21T03:04:59Z"
status: "thriving"
tags: ["solo_builder", "release_machine", "fork_magnet"]
healthScore: 80
undervaluedScore: 68
maintainers: ["hanjungwoo3"]
openGraphImageUrl: "https://opengraph.githubassets.com/49e17cb85026d0a11899ef98ba42834bd2726122501af48650e2993389923496/hanjungwoo3/portfolio-web"
discussionCount: 0
---

# Portfolio (Portfolio Web)

A PWA that gives an at-a-glance view of Korean and US stocks. It integrates Toss, Yahoo, and Naver data to show, in a single card, holdings profit/loss, after-hours prices, regular-session closing prices, supply and demand, consensus, and expected/target/stop-loss prices.

> Site: https://hanjungwoo3.github.io/portfolio-web/

- Static hosting: GitHub Pages (free)
- CORS proxy: automatic 4-way round-robin failover — Cloudflare · Vercel · Deno · Render
- User data: browser IndexedDB (per-user local, optional Google Drive sync)

## Architecture

```
Browser (PWA)
  ├─ React + TypeScript + Vite + Tailwind
  ├─ TanStack Query (auto polling & caching)
  ├─ Dexie (IndexedDB) — holdings / peaks / memos
  └─ fetch ─→ CORS proxy (Cloudflare/Vercel/Deno/Render round-robin)
                     ↓
            Toss · Yahoo Finance · Naver · DART
```

## Folders

| Path | Description |
|------|------|
| `src/` | React app (Vite) |
| `workers/proxy/` | Cloudflare Worker — primary proxy |
| `workers/vercel-proxy/` | Vercel Edge Function |
| `workers/deno-proxy/` | Deno Deploy |
| `workers/render-proxy/` | Render |

## Local development

```bash
npm install
npm run dev…
