---
repo: "avarth/UrbanSolarCarver"
name: "UrbanSolarCarver"
description: "GPU-accelerated generation of maximum buildable volumes that respect solar access, daylight, and thermal comfort constraints in urban environments."
readmeQualityOk: true
url: "https://github.com/avarth/UrbanSolarCarver"
homepage: "https://avarth.github.io/UrbanSolarCarver/"
language: "Python"
languages: ["Python", "TypeScript"]
languagePcts: [61, 37]
topics: ["computational-design", "daylight", "gpu", "grasshopper", "python", "voxel", "solar-envelope", "architecture", "design", "planning"]
stars: 6
forks: 1
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2026-04-03T07:01:24Z"
lastCommitAt: "2026-10-24T08:05:44Z"
lastReleaseAt: "2026-04-06T18:54:47Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 80
undervaluedScore: 55
maintainers: []
openGraphImageUrl: "https://opengraph.githubassets.com/772ff49f4feb0969160c99bcb97e74664d2ae873187a5d61d5b38e94d202265a/avarth/UrbanSolarCarver"
---

# Urban Solar Carver

Urban Solar Carver (USC) is a Python library for generating maximum buildable volumes that respect solar access, daylight, and thermal comfort constraints in urban environments. It uses GPU-accelerated voxel carving driven by climate data to produce 3D building envelopes ready for urban planning, design, and architectural applications.

> **Paper:** USC is presented at [ReSBE 2026](https://resbe2026.web.auth.gr/) (ReShaping the Built Environment through Sustainability and Circularity), 20-23 October 2026, Thessaloniki, Greece. The paper is published open access in Springer's Lecture Notes in Civil Engineering, vol. 905: [doi.org/10.1007/978-3-032-34930-9_70](https://doi.org/10.1007/978-3-032-34930-9_70) ([PDF](https://github.com/avarth/UrbanSolarCarver/blob/HEAD/docs/publications/Vartholomaios_2026_ReSBE_Urban_Solar_Carver.pdf)).

## How It Works

The user provides a **maximum volume mesh** (the theoretical buildable mass, e.g., a block extrusion from zoning boundaries), a set of **test surfaces** (planar faces whose solar or daylight access must be protected, such as facades, courtyards, or PV arrays), an **EPW weather file** for the site location, and a…
