---
repo: "Lazizdeveloper/Safaarsave"
name: "Safaarsave"
description: "Safaar platformasi uchun boshqaruv va bron tizimi"
readmeQualityOk: true
url: "https://github.com/Lazizdeveloper/Safaarsave"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [95]
topics: ["api", "fullstack", "nextjs", "typescript"]
stars: 6
forks: 1
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 5
recentReleases: 0
createdAt: "2026-07-28T12:39:09Z"
lastCommitAt: "2026-10-29T21:23:53Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 70
undervaluedScore: 48
maintainers: ["Lazizdeveloper"]
openGraphImageUrl: "https://opengraph.githubassets.com/228cba010916b051844b8fab891c4ba47f2ea6e7ef619151fc77ca81789fa33d/Lazizdeveloper/Safaarsave"
---

# SAFAAR.uz — Monorepo

> **Bron qil, yo'lga chiq!** — O'zbekiston milliy turar joy va bron platformasi.

| | |
|---|---|
| 🏨 Mehmonxona | 🏡 Dacha |
| 🛖 Gostinka | 🏥 Sanatoriy |
| ⛰️ Tog' oromgohlari | 🚌 Avtobus chiptalari |

## Arxitektura

```
apps/
├── backend/      NestJS API                  → :4000
├── web-user/     Mijozlar sayti — safaar.uz   → :3000
├── web-partner/  Hamkor kabineti              → :3001
└── web-admin/    Super Admin dashboard        → :3002
packages/
└── types/        Umumiy TypeScript turlari (API shartnomasi)
```

## Texnologiyalar

| Qatlam | Texnologiya |
|---|---|
| Frontend | Next.js 16, React 19, Tailwind CSS v4, TypeScript (strict) |
| Backend | NestJS, PostgreSQL (Neon), Redis |
| Auth | JWT + Refresh Token, SMS OTP |
| To'lov | Click, Payme, Uzcard, Humo |

## Boshlash

```bash
npm install
npm run build:types         # types paketini build qilish (birinchi)
npm run dev:user            # web-user → localhost:3000
npm run dev:backend         # backend  → localhost:4000
```

## Buyruqlar

```bash
npm run dev:user            # web-user
npm run dev:partner         # web-partner
npm run dev:admin           # web-admin
npm run dev:backend…
