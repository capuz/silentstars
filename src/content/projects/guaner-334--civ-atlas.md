---
repo: "guaner-334/civ-atlas"
name: "civ-atlas"
description: "Generate a complete planet in the browser and simulate its history, producing an editable map and chronicle. Aimed at original worldbuilding for novels, setting bibles, and tabletop RPGs."
originalDescription: "在浏览器里生成一颗完整的星球并推演它的历史，得到可以编辑的地图和编年史。面向小说、设定集、跑团等原创世界观创作。"
descriptionLang: "zh"
readmeQualityOk: true
url: "https://github.com/guaner-334/civ-atlas"
homepage: "https://atlas.gerdor.top/"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [96]
stars: 383
forks: 37
openIssues: 118
closedIssues: 11
watchers: 1
contributors: 1
recentReleases: 6
createdAt: "2026-09-30T10:32:26Z"
lastCommitAt: "2026-11-06T11:23:13Z"
lastReleaseAt: "2026-11-01T16:10:05Z"
status: "newborn"
tags: ["solo_builder", "release_machine", "under_pressure"]
healthScore: 81
undervaluedScore: 25
maintainers: ["guaner-334"]
openGraphImageUrl: "https://opengraph.githubassets.com/aa4fdda94121182753824314f40973e72c01495a91a6bb7d11616a4a05b1c807/guaner-334/civ-atlas"
---

Generate a complete planet in the browser and simulate its history: use plate tectonics, river erosion, climate, and ocean currents to compute terrain and ecology, then simulate peoples, states, wars, and dynastic succession, producing an editable map and chronicle. Aimed at original worldbuilding for novels, setting bibles, and tabletop RPGs.

**[Use online](https://atlas.gerdor.top)** | [Roadmap](#路线图) | [Development notes](https://github.com/guaner-334/civ-atlas/blob/HEAD/docs/development.md) | [Report issues](https://github.com/guaner-334/civ-atlas/issues) | [QQ discussion group 925687934](#反馈与参与)

The website is free to use. Generation, simulation, editing, saving, and exporting all happen in the browser; no installation or registration is required. Within the same version, the same seed and parameters produce a bit-for-bit identical world on any device; save files record only the seed, parameters, and edits, and are usually just a few KB.

## Features

### Planet generation

- **Spherical mesh**: spherical Poisson-disk sampling plus spherical Delaunay triangulation, about 36,000 irregular cells by default, adjustable up to 200,000. The map wraps east-west, includes both…
