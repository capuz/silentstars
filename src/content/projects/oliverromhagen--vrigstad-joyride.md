---
repo: "OliverRomhagen/vrigstad-joyride"
name: "vrigstad-joyride"
description: "Open-world driving game and 3D map of Vrigstad, Sweden, in a single HTML file"
readmeQualityOk: true
url: "https://github.com/OliverRomhagen/vrigstad-joyride"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [88]
stars: 7
forks: 3
openIssues: 296
closedIssues: 75
watchers: 0
contributors: 7
recentReleases: 7
createdAt: "2026-11-12T09:50:39Z"
lastCommitAt: "2026-11-27T16:12:58Z"
lastReleaseAt: "2026-11-25T10:29:03Z"
status: "newborn"
tags: ["needs_contributors", "hidden_gem", "release_machine"]
healthScore: 79
undervaluedScore: 55
maintainers: ["MikaelJohnAndersson", "OliverRomhagen", "AxelTidehorn"]
openGraphImageUrl: "https://opengraph.githubassets.com/263d1b68801466a1f522dbbeccbd65eb445aaa72717ffe9c5d609df2c1c59469/OliverRomhagen/vrigstad-joyride"
---

# Vrigstad Joyride

A small open-world driving game set in the real village of Vrigstad, Sweden (57.3555° N, 14.4756° E), plus the 3D map it grew out of. Everything runs in the browser from a single HTML file.

- **The game** (`src/index.html`): walk around, steal a Volvo 240, a Saab 900, an EPA-traktor or a tractor, and outrun the police.
- **The map** (`src/map.html`) is an interactive 3D terrain model of the same 2.2 × 2.2 km area.

The teaser and poster are rendered from the game itself by the scripts in `tools/trailer/` (`npm install` in the repo root and in `tools/trailer/`, then `npm run trailer` and `npm run poster`; needs Node and Chrome). `npm run timelapse` there renders `media/timelapse.mp4`: the same police chase in every release (the `v*` tags) and then today's game, cut fast between cameras, to show how it grew.

## Play

Play it at https://oliverromhagen.github.io/vrigstad-joyride/, or run `npm install && npm run build && npm run preview` and open the address it prints. It needs WebGL. Opening `dist/index.html` from disk doesn't work: the browser won't load the fonts and models beside it over `file://`.
