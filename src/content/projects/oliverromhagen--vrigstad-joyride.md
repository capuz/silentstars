---
repo: "OliverRomhagen/vrigstad-joyride"
name: "vrigstad-joyride"
description: "Open-world driving game and 3D map of Vrigstad, Sweden, in a single HTML file"
readmeQualityOk: true
url: "https://github.com/OliverRomhagen/vrigstad-joyride"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [86]
stars: 6
forks: 3
openIssues: 191
closedIssues: 46
watchers: 0
contributors: 7
recentReleases: 5
createdAt: "2026-11-12T09:50:39Z"
lastCommitAt: "2026-11-22T01:09:29Z"
lastReleaseAt: "2026-11-21T19:30:01Z"
status: "newborn"
tags: ["needs_contributors", "hidden_gem", "release_machine"]
healthScore: 79
undervaluedScore: 57
maintainers: ["MikaelJohnAndersson", "OliverRomhagen", "AxelTidehorn"]
openGraphImageUrl: "https://opengraph.githubassets.com/814fc298211f1082b7d484ac206f6c95cf59b6974a71e6cb4286357857b3f799/OliverRomhagen/vrigstad-joyride"
---

# Vrigstad Joyride

A small open-world driving game set in the real village of Vrigstad, Sweden (57.3555° N, 14.4756° E), plus the 3D map it grew out of. Everything runs in the browser from a single HTML file.

- **The game** (`src/index.html`): walk around, steal a Volvo 240, a Saab 900, an EPA-traktor or a tractor, and outrun the police.
- **The map** (`src/map.html`) is an interactive 3D terrain model of the same 2.2 × 2.2 km area.

The teaser and poster are rendered from the game itself by the scripts in `tools/trailer/` (`npm install` in the repo root and in `tools/trailer/`, then `npm run trailer` and `npm run poster`; needs Node and Chrome).

## Play

Play it at https://oliverromhagen.github.io/vrigstad-joyride/, or run `npm install && npm run build` and open `dist/index.html`. It needs WebGL. The fonts load from a CDN, so offline it falls back to system fonts.
