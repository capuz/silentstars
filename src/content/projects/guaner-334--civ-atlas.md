---
repo: "guaner-334/civ-atlas"
name: "civ-atlas"
description: "Generate a complete planet in the browser and simulate its history, producing an editable map and a chronicle. Aimed at original worldbuilding for novels, setting bibles, and tabletop RPGs."
originalDescription: "在浏览器里生成一颗完整的星球并推演它的历史，得到可以编辑的地图和编年史。面向小说、设定集、跑团等原创世界观创作。"
descriptionLang: "zh"
readmeQualityOk: true
url: "https://github.com/guaner-334/civ-atlas"
homepage: "https://atlas.gerdor.top/"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [96]
stars: 443
forks: 42
openIssues: 123
closedIssues: 11
watchers: 1
contributors: 1
recentReleases: 7
createdAt: "2026-09-30T10:32:26Z"
lastCommitAt: "2026-11-08T10:41:56Z"
lastReleaseAt: "2026-11-08T07:38:53Z"
status: "newborn"
tags: ["solo_builder", "release_machine", "under_pressure"]
healthScore: 81
undervaluedScore: 24
maintainers: ["guaner-334"]
openGraphImageUrl: "https://opengraph.githubassets.com/517097b3e5ab51438ab59f65e5b5e3c6645988df4cb5525842d1ce0631435c68/guaner-334/civ-atlas"
---

Generate a complete planet in the browser and simulate its history: compute terrain and ecology from plate tectonics, river erosion, climate, and ocean currents, then simulate peoples, states, wars, and dynastic changes, producing an editable map and a chronicle. Aimed at original worldbuilding for novels, setting bibles, and tabletop RPGs.

**[Use online](https://atlas.gerdor.top)** | [Roadmap](#路线图) | [Development notes](https://github.com/guaner-334/civ-atlas/blob/HEAD/docs/development.md) | [Report issues](https://github.com/guaner-334/civ-atlas/issues) | [QQ discussion group 925687934](#反馈与参与)

The website is free to use. Generation, simulation, editing, saving, and export all happen in the browser; no installation or registration is required. Within the same version, the same seed and parameters produce bit-for-bit identical worlds on any device. Saves record only the seed, parameters, and edits, usually just a few KB.

## Features

### Planet generation

- **Spherical mesh**: spherical Poisson-disk sampling plus spherical Delaunay triangulation; about 36,000 irregular cells by default, adjustable up to 200,000. The map wraps east-west and includes both poles, with no planar…
