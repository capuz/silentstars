---
repo: "idoknow/guilinol"
name: "guilinol"
description: "Guilin Online · 网上桂林 — Third-person 3D city walkthrough of Guilin with a real geographic layout (three.js, chunked streaming)"
originalDescription: "Guilin Online · 网上桂林 — 真实地理布局的桂林 3D 城市漫游（three.js 分块流式）"
descriptionLang: "zh"
readmeQualityOk: true
url: "https://github.com/idoknow/guilinol"
homepage: "https://glol.rcpd.cc"
language: "Python"
languages: ["Python", "TypeScript", "JavaScript"]
languagePcts: [43, 33, 20]
stars: 10
forks: 1
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 9
recentReleases: 10
createdAt: "2026-11-18T05:58:26Z"
lastCommitAt: "2026-11-23T13:26:49Z"
lastReleaseAt: "2026-11-21T15:34:06Z"
status: "thriving"
tags: ["release_machine"]
healthScore: 90
undervaluedScore: 55
maintainers: ["RockChinQ", "fhzit", "CheatAndei"]
openGraphImageUrl: "https://opengraph.githubassets.com/effa9ded78c9b90ec3c544445b17249aaadc6d0bac1c00a3dc805e9501374f0c/idoknow/guilinol"
---

# Guilin Online · 网上桂林

A third-person 3D city walkthrough of Guilin with a real geographic layout. Target address: https://glol.rcpd.cc .

- Approach: three.js + offline data preprocessing + 256 m chunked streaming. Playable on both desktop and mobile.
- Handoff document: `docs/handoff-roc14.md` (research, data survey, initial plan).
- Raw data (OSM / Overture / Terrarium DEM) is not stored in the repository. Place it in `raw/`. For how to obtain it, see section 8 of the handoff document.

Data attribution: © OpenStreetMap contributors (ODbL); Overture Maps Foundation / Zenodo 8174931 building data (CC BY 4.0); Mapzen Terrarium elevation tiles.

## Local generation and viewing (M1a)

Requires Node.js 22.12+, npm, uv, and Python 3.11–3.13 (uv can install it). The browser needs WebGL2. Building the Huajiang expansion area requires the 2026-11-23 snapshot described in `docs/expanded-raw.md`. The old IDOK-114 snapshot does not cover Huajiang. In the root of a freshly cloned repository, run:

```sh
# Place the expansion-area OSM, Overture and DEM data into raw/
npm ci
npm run world
npm run build
npm run preview
```
