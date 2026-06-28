---
repo: "CoachEmilio/zarpazo"
name: "zarpazo"
description: "Marca de remeras con diseños únicos y humor para comunidades específicas. Drops limitados."
url: "https://github.com/CoachEmilio/zarpazo"
homepage: "https://zarpazo.art"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [96]
topics: ["developer", "ecommerce", "frontend", "nextjs", "tshirts", "typescript"]
stars: 6
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 0
createdAt: "2026-05-22T06:23:33Z"
lastCommitAt: "2026-06-28T03:07:46Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem"]
healthScore: 79
undervaluedScore: 50
maintainers: ["CoachEmilio"]
openGraphImageUrl: "https://opengraph.githubassets.com/24923be52042496dbf520257a3a25c2be12ae4d04cdf8046d7385da505ecca68/CoachEmilio/zarpazo"
---

# Zarpazo

Frontend de [zarpazo.art](https://zarpazo.art) — marca argentina de remeras estampadas bajo demanda.

## Arquitectura

```
zarpazo.art (este repo — Vercel)
    ↓ fetch ISR revalidate: 3600s
api.zarpazo.art (zarpazo-backend — Fly.io)
    ↓ imágenes
Vercel Blob CDN
```

## Stack

| Capa | Tecnología |
|---|---|
| Framework | Next.js 16 (App Router) |
| UI | React 19 + Tailwind CSS v4 + shadcn/ui |
| Animaciones | Framer Motion 12 (`AnimatePresence`, slide, fade) |
| Lenguaje | TypeScript 5 |
| Fuentes | Space Mono · Space Grotesk · Geist Mono |
| Analytics | Vercel Analytics + Google Analytics 4 |
| Deploy | Vercel (auto-deploy desde `main`) |
| Imágenes | Vercel Blob CDN (`*.public.blob.vercel-storage.com`) |
| API | `https://api.zarpazo.art` (Express + SQLite) |

## URLs

| Entorno | URL |
|---|---|
| Producción | https://zarpazo.art |
| API backend | https://api.zarpazo.art |
| Admin panel | https://admin.zarpazo.art |

## Variables de entorno

```bash
NEXT_PUBLIC_API_URL=https://api.zarpazo.art   # URL del backend (fallback: https://zarpazo-backend.fly.dev)
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX                # Google Analytics 4 Measurement ID
REVALIDATE_TOKEN=…
