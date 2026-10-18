---
repo: "guaner-334/civ-atlas"
name: "civ-atlas"
description: "Generate a complete planet in the browser and simulate its history, yielding an editable map and chronicle. Aimed at original worldbuilding for novels, setting bibles, tabletop RPGs, and similar creative work."
originalDescription: "在浏览器里生成一颗完整的星球并推演它的历史，得到可以编辑的地图和编年史。面向小说、设定集、跑团等原创世界观创作。"
descriptionLang: "zh"
readmeQualityOk: true
url: "https://github.com/guaner-334/civ-atlas"
homepage: "https://atlas.gerdor.top"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [95]
stars: 136
forks: 22
openIssues: 6
closedIssues: 10
watchers: 1
contributors: 1
recentReleases: 2
createdAt: "2026-09-30T10:32:26Z"
lastCommitAt: "2026-10-18T08:17:23Z"
lastReleaseAt: "2026-10-11T07:24:44Z"
status: "newborn"
tags: ["solo_builder"]
healthScore: 92
undervaluedScore: 33
maintainers: ["guaner-334"]
openGraphImageUrl: "https://opengraph.githubassets.com/d3e4425d3df67ae1343bef14e427be178ffb7a4e0398859c206aca91f243789a/guaner-334/civ-atlas"
---

Generate a complete planet in the browser and simulate its history: use plate tectonics, river erosion, climate, and ocean currents to compute terrain and ecology, then simulate peoples, states, wars, and dynastic changes, yielding an editable map and chronicle. Aimed at original worldbuilding for novels, setting bibles, tabletop RPGs, and similar creative work.

**[Try it online](https://atlas.gerdor.top)** | [Roadmap](#路线图) | [Development notes](https://github.com/guaner-334/civ-atlas/blob/HEAD/docs/development.md) | [Report issues](https://github.com/guaner-334/civ-atlas/issues) | [QQ discussion group 925687934](#反馈与参与)

The site is free to use. Generation, simulation, editing, saving, and export all happen in the browser, with no installation or registration required. With the same version, the same seed and parameters produce a bit-for-bit identical world on any device. A save file only records the seed, parameters, and edits, and is usually just a few KB.

## Features

### Planet generation

- **Spherical mesh**: spherical Poisson-disk sampling plus spherical Delaunay triangulation, with about 36,000 irregular cells by default, adjustable up to 200,000. The map wraps…
