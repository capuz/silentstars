---
repo: "longsizhuo/holocard"
name: "holocard"
description: "Automatically slices any photo into foreground, midground, and background layers, each with its own foil surface, rendered as an interactive holographic card."
originalDescription: "把任意照片自动切成前中后景，每层各上各的箔面，渲染成可交互的全息闪卡"
descriptionLang: "zh"
readmeQualityOk: true
url: "https://github.com/longsizhuo/holocard"
homepage: "https://holocard.longsizhuo.com"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [73]
topics: ["css-effects", "depth-estimation", "holographic", "image-segmentation", "onnx", "parallax", "pokemon-cards", "trading-cards", "transformers-js"]
stars: 9
forks: 1
openIssues: 2
closedIssues: 3
watchers: 0
contributors: 3
recentReleases: 1
createdAt: "2026-09-21T04:30:46Z"
lastCommitAt: "2026-10-11T10:15:05Z"
lastReleaseAt: "2026-10-08T07:56:50Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem"]
healthScore: 92
undervaluedScore: 53
maintainers: ["longsizhuo", "TinyAlmond"]
openGraphImageUrl: "https://opengraph.githubassets.com/a930c41a88ee6efd1b512e8bb407f99eb71ce0be5ec27573b6dfe6ed7c568c80/longsizhuo/holocard"
---

# HoloCard

Chinese | [English](https://github.com/longsizhuo/holocard/blob/HEAD/README.en.md)

HoloCard automatically splits a photo into layers and renders it as an interactive holographic card. The server estimates the photo's depth and divides it into several foreground, midground, and background layers, each with its own independent foil surface. The card rotates with the pointer or with device tilt. Live site: https://holocard.longsizhuo.com

The foil effect and interaction feel are ported from [pokemon-cards-css](https://github.com/simeydotme/pokemon-cards-css) (Simon Goellner, GPL-3.0). That project requires hand-drawn foil masks for each card. HoloCard uses a layering algorithm to generate the masks automatically, so any photo can be turned into a card.

## Documentation

Full documentation is published at https://holocard.longsizhuo.com/docs/ , and the source files are in [`docs-site/`](https://github.com/longsizhuo/holocard/blob/HEAD/docs-site/).

| Topic | Link |
|---|---|
| Introduction and usage | [/docs/](https://holocard.longsizhuo.com/docs/) |
| API | [/docs/api/](https://holocard.longsizhuo.com/docs/api/) |
| Player `@holocard/player` |…
