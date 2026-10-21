---
repo: "ncoevoet/facet"
name: "facet"
description: "Local AI photo scoring, culling, and gallery — score, organise, and explore your library with face recognition and semantic search. No cloud, no subscriptions."
readmeQualityOk: true
url: "https://github.com/ncoevoet/facet"
homepage: "https://ncoevoet.github.io/facet/"
language: "Python"
languages: ["Python", "TypeScript"]
languagePcts: [73, 24]
topics: ["aesthetic-quality", "angular", "clip", "computer-vision", "face-recognition", "fastapi", "image-analysis", "image-quality", "photo", "photo-scoring"]
stars: 300
forks: 32
openIssues: 0
closedIssues: 38
watchers: 2
contributors: 14
recentReleases: 0
createdAt: "2026-02-16T16:44:55Z"
lastCommitAt: "2026-10-21T21:15:42Z"
lastReleaseAt: "2026-05-19T22:39:48Z"
status: "thriving"
tags: []
healthScore: 99
undervaluedScore: 33
maintainers: ["ncoevoet", "bepcyc", "dependabot[bot]"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1159371371/55607b5e-ad04-48a2-a45e-9050b49eee90"
discussionCount: 8
---

# Facet

> 🌐 **English** · [Français](https://github.com/ncoevoet/facet/blob/HEAD/README.fr.md) · [Deutsch](https://github.com/ncoevoet/facet/blob/HEAD/README.de.md) · [Italiano](https://github.com/ncoevoet/facet/blob/HEAD/README.it.md) · [Español](https://github.com/ncoevoet/facet/blob/HEAD/README.es.md) · [Português](https://github.com/ncoevoet/facet/blob/HEAD/README.pt.md) · [简体中文](https://github.com/ncoevoet/facet/blob/HEAD/README.zh.md)

Facet is a local photo-analysis and culling engine. It scores each image across 9 dimensions — from aesthetic quality to face sharpness — then lets you browse, cull, and organize through a web gallery. Everything runs on your machine; no cloud, accounts, or API keys.

## How It Works

1. **Scan** — Point Facet at a folder of photos. Each image is analyzed for quality, composition, and faces. Supports JPG, HEIF/HEIC/HIF (Canon HDR PQ `.HIF` stills are decoded with the SMPTE ST 2084 PQ transfer function and tone-mapped to SDR sRGB automatically), 10 RAW formats (CR2, CR3, NEF, ARW, RAF, RW2, DNG, ORF, SRW, PEF), and PNG, GIF, WebP, BMP, TIFF, and AVIF stills (AVIF needs a Pillow built with AVIF support, native from 11.3). A RAW LibRaw can't…
