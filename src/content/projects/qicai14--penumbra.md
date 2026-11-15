---
repo: "qicai14/penumbra"
name: "penumbra"
description: "Penumbra: lunar south-pole landing survival planner"
readmeQualityOk: true
url: "https://github.com/qicai14/penumbra"
homepage: "https://penumbra-lunar.pages.dev"
language: "JavaScript"
languages: ["JavaScript", "Rust"]
languagePcts: [37, 25]
topics: ["artemis", "landing-site", "lola", "lunar", "moon", "nasa-space-apps", "rust", "south-pole", "svelte", "threejs"]
stars: 7
forks: 0
openIssues: 16
closedIssues: 51
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2026-11-13T20:42:29Z"
lastCommitAt: "2026-11-15T11:22:38Z"
status: "newborn"
tags: ["hidden_gem", "under_pressure"]
healthScore: 95
undervaluedScore: 53
maintainers: ["qicai14", "ambatuCode887"]
openGraphImageUrl: "https://opengraph.githubassets.com/7e27939a9bbae77bde261e46968b52c1be25e4a982118e5ac6c9b1e16f2d3eae/qicai14/penumbra"
---

Penumbra tells a lunar landing planner how many hours of sunlight and Earth contact a lander gets at a south-pole site and date, and when the first lethal shadow arrives. One Rust model runs natively for validation and as WASM in the browser, checked against JPL Horizons and NASA LOLA illumination maps.

NASA Space Apps Challenge 2026 · Team **Fractured Toes**: Charls Pua Vui Hau and Lim Qi Cai.

## Who it is for

You plan a landing for a CLPS lander or an Artemis crew. You have a few candidate sites near the south pole and a few possible dates. At that latitude the Sun skims the horizon, so a distant ridge decides whether your solar panels charge and a crater rim can cut your line to Earth. For each site and date you need to know how long the lander will have power, how long it can talk home, and when the first shadow it cannot survive arrives.

Two recent landers show what happens when that goes wrong. Intuitive Machines' Odysseus (IM-1) landed on 2024-02-22 at 80.1276° S, 1.4367° E (E72a, E72b) on a 12° slope, came to rest about 30° off the surface, and ended "as the sun moved out of view of the one illuminated solar panel"…
