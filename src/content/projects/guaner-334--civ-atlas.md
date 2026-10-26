---
repo: "guaner-334/civ-atlas"
name: "civ-atlas"
description: "Generate a complete planet in the browser and simulate its history, yielding an editable map and chronicle. Aimed at original worldbuilding for novels, setting bibles, tabletop RPGs, and similar creative work."
originalDescription: "在浏览器里生成一颗完整的星球并推演它的历史，得到可以编辑的地图和编年史。面向小说、设定集、跑团等原创世界观创作。"
descriptionLang: "zh"
readmeQualityOk: true
url: "https://github.com/guaner-334/civ-atlas"
homepage: "https://atlas.gerdor.top/"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [95]
stars: 160
forks: 25
openIssues: 20
closedIssues: 11
watchers: 1
contributors: 1
recentReleases: 4
createdAt: "2026-09-30T10:32:26Z"
lastCommitAt: "2026-10-26T18:06:05Z"
lastReleaseAt: "2026-10-25T07:39:38Z"
status: "newborn"
tags: ["solo_builder", "under_pressure"]
healthScore: 87
undervaluedScore: 31
maintainers: ["guaner-334"]
openGraphImageUrl: "https://opengraph.githubassets.com/df12e482e17d2772656b9a7a0edac2a9be68b9284a163065f3fdd76464a02db6/guaner-334/civ-atlas"
---

Generate a complete planet in the browser and simulate its history: compute terrain and ecology from plate tectonics, river erosion, climate, and ocean currents, then simulate peoples, states, wars, and dynastic changes, yielding an editable map and chronicle. Aimed at original worldbuilding for novels, setting bibles, tabletop RPGs, and similar creative work.

**[Use online](https://atlas.gerdor.top)** | [Roadmap](#路线图) | [Development notes](https://github.com/guaner-334/civ-atlas/blob/HEAD/docs/development.md) | [Report issues](https://github.com/guaner-334/civ-atlas/issues) | [QQ discussion group 925687934](#反馈与参与)

The website is free to use. Generation, simulation, editing, saving, and export all happen in the browser; no installation or registration is required. Within the same version, the same seed and parameters produce bit-for-bit identical worlds on any device; save files record only the seed, parameters, and edits, and are usually just a few KB.

## Features

### Planet generation

- **Spherical mesh**: spherical Poisson-disk sampling with spherical Delaunay triangulation; about 36,000 irregular cells by default, adjustable up to 200,000. The map wraps east–west,…
