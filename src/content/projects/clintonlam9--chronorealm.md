---
repo: "clintonlam9/ChronoRealm"
name: "ChronoRealm"
description: "See your real world, live, as a medieval realm—without losing what actually exists."
readmeQualityOk: true
url: "https://github.com/clintonlam9/ChronoRealm"
language: "Python"
languages: ["Python"]
languagePcts: [94]
topics: ["ai", "flux", "flux2", "medieval", "nvidia", "open-source", "python", "realtime", "stable-diffusion", "webcam"]
stars: 6
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 0
createdAt: "2026-07-27T16:35:14Z"
lastCommitAt: "2026-11-15T11:17:12Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 55
undervaluedScore: 9
maintainers: ["clintonlam9"]
openGraphImageUrl: "https://opengraph.githubassets.com/453952197f8ae73bcf61c37f0f84ae5dc9ef5d403a0b5b7b7e21240c03c8ca31/clintonlam9/ChronoRealm"
---

# ChronoRealm — see your real room, live, as a medieval world

ChronoRealm **v2** is a real-time / scan-to-bake camera system powered by [FluxRT](https://github.com/tensorforger/FluxRT) (FLUX.2-Klein stream editing). It restyles your webcam view into a photorealistic medieval look (LotR / Game of Thrones tone) while aiming to keep the same room layout and object identities.

---

## What it does

| Mode | How it works | Best for |
|------|----------------|----------|
| **Live Flux** | Every camera frame is edited by FluxRT in real time | Moving scenes, no setup |
| **Scan → Bake → Live** | Capture keyframes → offline medieval bake → high-FPS playback from baked views | Static rooms, higher FPS after bake |

**Live Flux** trades speed for always-fresh AI.  
**Scan mode** bakes style once, then matches the live camera to the nearest keyframe so playback stays smooth.

---

## Features

- Real-time OpenCV side-by-side preview (camera | medieval)
- Scan mode with hold-to-record keyframes
- Offline Flux bake (or dry-copy for pipeline testing)
- High-FPS realm live from pre-baked images
- Menu launcher + Windows `.bat` shortcuts
- Low-VRAM oriented defaults (int8, modest resolution)
-…
