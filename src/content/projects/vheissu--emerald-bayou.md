---
repo: "Vheissu/emerald-bayou"
name: "emerald-bayou"
description: "Browser airboat game in the south Florida backcountry. three.js + Vite, no engine: a 25.6 km streamed swamp with quadtree LOD terrain, reflective water, weather, wildlife and thirteen jobs."
readmeQualityOk: true
url: "https://github.com/Vheissu/emerald-bayou"
homepage: "https://vheissu.github.io/emerald-bayou/"
language: "JavaScript"
languages: ["JavaScript"]
languagePcts: [98]
topics: ["browser-game", "game", "javascript", "open-world", "procedural-generation", "threejs", "vite", "webgl"]
stars: 8
forks: 3
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 1
createdAt: "2026-08-28T22:55:08Z"
lastCommitAt: "2026-08-29T10:21:51Z"
lastReleaseAt: "2026-08-28T22:55:41Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem"]
healthScore: 80
undervaluedScore: 46
maintainers: ["Vheissu"]
openGraphImageUrl: "https://opengraph.githubassets.com/0462cf22e2f77f5e7b9112ab10d0e5389c417faa1798b7479b2c0732bc1e7625/Vheissu/emerald-bayou"
---

# Emerald Bayou

An airboat game set in the south Florida backcountry. Runs in a browser, built on three.js and Vite, with no game engine underneath it. You get a 16 mile square of streamed swamp, thirteen jobs, a radio that talks back, and weather that will ruin your afternoon.

[Play Emerald Bayou](https://vheissu.github.io/emerald-bayou/)

Everything you see is generated at runtime except a handful of GLB props. The terrain, the rivers, the sawgrass prairie, the cypress, the fish camps and the people standing on their docks are all seeded from world coordinates, so the map is the same every time you load it and none of it is stored on disk.

<table>
<tr>
<td width="50%"><img src="docs/screenshots/01-hero.jpg" alt="Home bayou at mid afternoon"></td>
<td width="50%"><img src="docs/screenshots/03-wake.jpg" alt="Running a creek at 32 mph"></td>
</tr>
<tr>
<td><img src="docs/screenshots/05-night.jpg" alt="Running the channel after dark with the spotlight on"></td>
<td><img src="docs/screenshots/07-camp.jpg" alt="A fish camp under a live oak in a squall"></td>
</tr>
</table>

## Running it

```bash
git clone git@github.com:Vheissu/emerald-bayou.git
cd emerald-bayou
npm install
npm…
