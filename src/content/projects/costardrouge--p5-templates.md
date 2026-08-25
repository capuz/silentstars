---
repo: "CostardRouge/p5-templates"
name: "p5-templates"
description: "https://p5.steeve.website"
readmeQualityOk: true
url: "https://github.com/CostardRouge/p5-templates"
homepage: "https://p5.steeve.website"
language: "JavaScript"
languages: ["JavaScript", "TypeScript"]
languagePcts: [50, 49]
topics: ["ffmpeg", "gallery", "p5js", "postgres", "recording", "redis", "sketch"]
stars: 6
forks: 1
openIssues: 1
closedIssues: 11
watchers: 1
contributors: 4
recentReleases: 0
createdAt: "2025-02-14T10:55:38Z"
lastCommitAt: "2026-08-25T04:09:55Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 96
undervaluedScore: 83
maintainers: ["CostardRouge", "claude", "webbrain-one"]
openGraphImageUrl: "https://opengraph.githubassets.com/286aaca9998b8a0a52a5be1e5a943b088db57d6ff0fe480ddf4d66eda006cd7d/CostardRouge/p5-templates"
---

# Sketchbook

A Next.js app for building and exporting visuals from creative-coding sketches. Sketches run on multiple engines (p5.js, GSAP, Three.js); configure them through a UI, then render and export them as images or videos — either in-browser or via a headless Playwright backend.

## Stack

- **Next.js 16** (App Router) · **TypeScript** · **Tailwind CSS**
- **p5.js**, **GSAP**, and **Three.js** rendering engines
- **Prisma + PostgreSQL** for persistence
- **BullMQ + Redis** for background job processing
- **MinIO** for S3-compatible video/image storage
- **Playwright** for headless recording

## Getting Started

Run the setup script to install dependencies and spin up infrastructure:

```bash
chmod +x setup.sh && ./setup.sh
```

This creates `.env` from `.env.example`, starts Docker services (Redis, MinIO, PostgreSQL), installs npm packages, and runs DB migrations.

### Development

**Native (recommended for Apple Silicon):**
```bash
docker-compose up -d redis minio postgres
npm run dev
```

**Full Docker:**
```bash
make app-dev
```

App runs at `http://localhost:3000`.

### Production

```bash
make app-prod
```

## Services

| Service | URL |
|---|---|
| App |…
