---
repo: "ncoevoet/facet"
name: "facet"
description: "Local AI photo scoring, culling, and gallery — score, organise, and explore your library with face recognition and semantic search. No cloud, no subscriptions."
url: "https://github.com/ncoevoet/facet"
homepage: "https://ncoevoet.github.io/facet/"
language: "Python"
languages: ["Python", "TypeScript"]
languagePcts: [66, 32]
topics: ["aesthetic-quality", "angular", "clip", "computer-vision", "face-recognition", "fastapi", "image-analysis", "image-quality", "photo", "photo-scoring"]
stars: 124
forks: 14
openIssues: 0
closedIssues: 5
watchers: 3
contributors: 7
recentReleases: 2
createdAt: "2026-02-16T16:44:55Z"
lastCommitAt: "2026-07-02T06:33:29Z"
lastReleaseAt: "2026-05-19T22:39:48Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 100
undervaluedScore: 37
maintainers: ["ncoevoet"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1159371371/55607b5e-ad04-48a2-a45e-9050b49eee90"
discussionCount: 4
---

# Facet

> 🌐 **English** · [Français](README.fr.md) · [Deutsch](README.de.md) · [Italiano](README.it.md) · [Español](README.es.md) · [Português](README.pt.md)

Facet is a local photo-analysis and culling engine. It scores each image across 9 dimensions — from aesthetic quality to face sharpness — then lets you browse, cull, and organize through a web gallery. Everything runs on your machine; no cloud, accounts, or API keys.

</p>

## How It Works

1. **Scan** — Point Facet at a folder of photos. Each image is analyzed for quality, composition, and faces. Supports JPG, HEIF/HEIC, and 10 RAW formats (CR2, CR3, NEF, ARW, RAF, RW2, DNG, ORF, SRW, PEF).
2. **Browse** — Open the web gallery to explore your library with filters, search, and multiple view modes.
3. **Cull** — Facet detects bursts, flags blinks, groups similar photos, and surfaces top picks.

GPU is auto-detected and optional. Facet runs CPU-only or with up to 24 GB VRAM.

## Features

### Score

Each photo is scored across 9 dimensions: aesthetic quality, composition, face quality, eye sharpness, technical sharpness, color, exposure, subject saliency, and dynamic range. Photos are categorized by content (portrait,…
