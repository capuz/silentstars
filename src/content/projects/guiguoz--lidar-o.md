---
repo: "guiguoz/lidar-o"
name: "lidar-o"
description: "Pipeline de génération de cartes CO (ISOM) depuis le LiDAR HD IGN — végétation, relief, BD TOPO → .omap"
readmeQualityOk: true
url: "https://github.com/guiguoz/lidar-o"
language: "Python"
languages: ["Python"]
languagePcts: [99]
topics: ["cartography", "france", "gis", "isom", "lidar", "openorienteering", "orienteering"]
stars: 5
forks: 1
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 1
createdAt: "2026-07-06T15:46:09Z"
lastCommitAt: "2026-11-12T11:37:55Z"
lastReleaseAt: "2026-08-16T16:57:57Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 62
undervaluedScore: 49
maintainers: ["guiguoz"]
openGraphImageUrl: "https://opengraph.githubassets.com/2410ae451ca0237003fe99296bb993a6b10083b5f4484c6a9b7e31c72d1228fa/guiguoz/lidar-o"
---

# Lidar'O

*[Version française](https://github.com/guiguoz/lidar-o/blob/HEAD/README.fr.md)*

**Lidar'O automatically generates an orienteering base map** from LiDAR data and geographic databases.
It produces a `.omap` file ready to open in OpenOrienteering Mapper, with contours, roads, hydrography, and a first vegetation estimate.

The mapper retains field verification, vegetation correction, and fine detail work.

> **Full documentation in French** — see [README.fr.md](https://github.com/guiguoz/lidar-o/blob/HEAD/README.fr.md) and [docs/guide_utilisateur.md](https://github.com/guiguoz/lidar-o/blob/HEAD/docs/guide_utilisateur.md)

---

*Lidar'O GUI — LiDAR / BD TOPO selectors, vegetation engine and export mode*

*Lidar'O output opened in OpenOrienteering Mapper — Grimbosq terrain (Normandy, France)*

---

## What Lidar'O produces

```
vectorised and symbolised:
  contour lines       — from Karttapullautin
  tracks / roads      — BD TOPO
  buildings           — BD TOPO
  hydrography         — BD TOPO
  open land and agricultural areas
  out-of-bounds areas
  vegetation 406 / 408 / 410  — automatic estimate (see vegetation modes below)

assembled and georeferenced
→ .omap file,…
