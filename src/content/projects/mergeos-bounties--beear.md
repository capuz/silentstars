---
repo: "mergeos-bounties/BeeAR"
name: "BeeAR"
description: "BeeAR — virtual try-on for glasses and accessories (web + Windows + Android)"
readmeQualityOk: true
url: "https://github.com/mergeos-bounties/BeeAR"
homepage: "https://mergeos.shop"
language: "JavaScript"
languages: ["JavaScript", "Python"]
languagePcts: [59, 25]
topics: ["android", "ar", "bounty", "glasses", "mergeos", "python", "threejs", "virtual-try-on"]
stars: 7
forks: 15
openIssues: 14
closedIssues: 24
watchers: 1
contributors: 11
recentReleases: 2
createdAt: "2026-07-12T14:06:09Z"
lastCommitAt: "2026-07-18T05:46:07Z"
lastReleaseAt: "2026-07-13T04:32:35Z"
status: "newborn"
tags: ["needs_contributors", "hidden_gem", "fork_magnet"]
healthScore: 82
undervaluedScore: 71
maintainers: ["TUPM96", "key1989han", "slipknoo822-lang"]
openGraphImageUrl: "https://opengraph.githubassets.com/ea9341e939dcd013154d250f6c70d7f51fe961232fafa2f916b9556907869848/mergeos-bounties/BeeAR"
---

# BeeAR

**BeeAR** is a **virtual try-on** stack for **glasses and accessories** — frame catalog, **full 3D person + glasses GLB** studio, pupil-distance (PD) fit, multi-frame compare, plus web / desktop / Android clients on shared libraries.

**Product:** [mergeos-bounties/BeeAR](https://github.com/mergeos-bounties/BeeAR) · **Live demo:** [mergeos-bounties.github.io/BeeAR](https://mergeos-bounties.github.io/BeeAR/)

---

## Live demo (GitHub Pages)

Static, **minified** browser demo — no Python server required:

| Page | URL |
| --- | --- |
| **Camera / 2D try-on** | https://mergeos-bounties.github.io/BeeAR/ |
| **3D person studio** | https://mergeos-bounties.github.io/BeeAR/studio3d.html |

- Catalog + SVG + GLB assets are shipped as static files (`site/catalog/`).
- API calls are shimmed by `static-api.js` (sessions/wishlist soft-mocked).
- Build locally: `node scripts/build-pages.mjs` → open `site/` with any static server.
- Deploy: GitHub Actions workflow **pages** (push to `master` or **workflow_dispatch**).
- On **library release** (`node scripts/release-libs.mjs`), try-on IIFE is emitted as **`.min.js`** and the Pages site is rebuilt with minified JS/CSS.

```powershell
#…
