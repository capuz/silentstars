---
repo: "2017YANR02/cuberoot.me"
name: "cuberoot.me"
description: "Modern speedcubing — Rubik's cube solvers, trainers, WCA stats. All in the browser."
readmeQualityOk: true
url: "https://github.com/2017YANR02/cuberoot.me"
homepage: "https://cuberoot.me/"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [70]
topics: ["react", "rubiks-cube", "speedcubing", "typescript", "vite", "wca"]
stars: 23
forks: 6
openIssues: 6
closedIssues: 65
watchers: 0
contributors: 4
recentReleases: 0
createdAt: "2025-12-13T12:18:16Z"
lastCommitAt: "2026-09-19T02:47:30Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 78
undervaluedScore: 58
maintainers: ["2017YANR02", "huizhiLLL", "github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/b82eb98cec8dc77843776ca707a9051720498519e75a4c5351a8499e4ceb47b4/2017YANR02/cuberoot.me"
---

# CubeRoot

### Solve · Train · Analyze

Solvers, trainers, analytics, and statistics for the Rubik's Cube — all in the browser.

[cuberoot.me](https://cuberoot.me/)

</div>

---

## Architecture

```
cuberoot.me/
├── core/                  pnpm + Turbo monorepo — active apps, shared packages, and offline jobs
│   ├── apps/
│   │   ├── api/           Hono + PostgreSQL 13 — WCA OAuth, reconstructions, algorithm library
│   │   ├── mobile/        React + Capacitor — native mobile application
│   │   ├── miniprogram/   WeChat Mini Program — independent native runtime
│   │   └── fmc-solver/    Rust FMC solver service — independent Cargo workspace and deployment
│   ├── packages/
│   │   ├── client/        React 19 + Next.js 16 (App Router) — current Web application
│   │   ├── platform/      Retired read-only archive; its product surfaces now live under client /platform
│   │   └── ...            Reusable libraries with public package boundaries
│   └── jobs/
│       ├── alg-build/     Offline algorithm data and SQL generators
│       ├── scramble-stats-build/ Offline scramble analysis generators
│       ├── stats-build/   Offline WCA statistics and database-load pipeline
│       └──…
