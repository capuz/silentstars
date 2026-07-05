---
repo: "raymondchins/tokengratis-id"
name: "tokengratis-id"
description: "Directory free AI credits & free tier, Indonesia-first, auto-aggregated dari sumber komunitas. Aggregator transparan (bukan verifier), anti-halusinasi, maintenance nyaris nol."
readmeQualityOk: true
url: "https://github.com/raymondchins/tokengratis-id"
homepage: "https://tokengratis.id"
language: "JavaScript"
languages: ["JavaScript", "TypeScript"]
languagePcts: [59, 40]
stars: 6
forks: 0
openIssues: 1
closedIssues: 3
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2026-06-01T10:04:41Z"
lastCommitAt: "2026-07-05T20:17:06Z"
status: "newborn"
tags: ["hidden_gem"]
healthScore: 94
undervaluedScore: 54
maintainers: ["raymondchins", "github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/9045216223e7869a4c861bccf2bc3ac9104fad303d6cb82d49aae2ddf9e87346/raymondchins/tokengratis-id"
---

# tokengratis.id

Direktori **free tier & free credits API LLM**, di-aggregate otomatis dari sumber komunitas. Audience Indonesia (antarmuka Bahasa Indonesia). Aggregator transparan — **bukan verifier**.

> Live: **https://tokengratis.id** · Spec: [`docs/PRD.md`](https://github.com/raymondchins/tokengratis-id/blob/HEAD/docs/PRD.md) · State terkini: [`docs/STATE.md`](https://github.com/raymondchins/tokengratis-id/blob/HEAD/docs/STATE.md)

Tiap data nampilin **dari mana** + **di-sync kapan** + link ke sumber aslinya. Ga ada klaim "verified" — trust dari transparansi, bukan klaim.

## Stack

Next.js 16 (App Router, Turbopack) + TypeScript strict + Tailwind v4 · static/SSG · **no DB, no auth, no backend** · data = file JSON di repo, regenerate tiap malam via pipeline aggregator (nightly cron → Vercel rebuild).

## Dev

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
npm test         # pipeline self-tests (jalan offline, no creds)
```

Env vars semuanya **opsional** — situs build & jalan tanpa satu pun di-set. Copy [`.env.example`](https://github.com/raymondchins/tokengratis-id/blob/HEAD/.env.example) → `.env` kalau mau ngaktifin LLM…
