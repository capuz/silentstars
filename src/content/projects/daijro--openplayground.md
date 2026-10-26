---
repo: "daijro/openplayground"
name: "openplayground"
description: "Use Adobe, Microsoft Office, Autodesk, FL Studio, Figma & other alternatives for free in your browser."
readmeQualityOk: true
url: "https://github.com/daijro/openplayground"
homepage: "https://playground.daijro.dev"
language: "JavaScript"
languages: ["JavaScript"]
languagePcts: [86]
stars: 26
forks: 2
openIssues: 1
closedIssues: 7
watchers: 0
contributors: 3
recentReleases: 1
createdAt: "2026-10-08T02:07:49Z"
lastCommitAt: "2026-10-26T03:02:09Z"
lastReleaseAt: "2026-10-08T03:59:14Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 97
undervaluedScore: 47
maintainers: ["github-actions[bot]", "daijro"]
openGraphImageUrl: "https://opengraph.githubassets.com/7d2e07beb8c5ca85344557e8fb7c075f8a0861cad9f30a9756ace691ddfba08e/daijro/openplayground"
---

# OpenPlayground

Use open-source, clean-room alternatives to popular creative and office apps, by [ArtCraft](https://github.com/storytold) and others, in your browser.

Releases are fetched every 15min.

> [!NOTE]
> Note: Hardware accelerated GPU is highly recommended!

---

## Optimizations

- Apps are recompiled with -O3 & SIMD acceleration
- WASM files compressed with gzip for faster load time
- Compile shaders in the background to prevent hanging
- Render viewers on the page's own GPU instead of in background workers
- Video frames are copied straight to the GPU as YUV & skips late frames so stacked clips play smoother
- Preload neighboring photos in background workers so LightCraft and LightCraft Classic don't freeze

## Features

- [Community plugins](https://github.com/akkk09/artcraft-store) integration
- Support for reading your system's fonts
- Dark theme follows your system preference
- Workaround to enable clipboard access
- In browser file explorer & file menu (draggable into your apps)

## Real time collaboration

Work alongside others, in every app:

https://github.com/user-attachments/assets/5ac6496a-4166-4658-b998-c0fd142a35c6

## Source code and licences

- Every…
