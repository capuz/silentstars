---
repo: "co3moz/minecraft-render"
name: "minecraft-render"
description: "Minecraft block rendering with node.js"
readmeQualityOk: true
url: "https://github.com/co3moz/minecraft-render"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [87]
stars: 53
forks: 25
openIssues: 0
closedIssues: 8
watchers: 2
contributors: 3
recentReleases: 0
createdAt: "2021-07-23T01:31:35Z"
lastCommitAt: "2026-07-19T06:11:14Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 100
undervaluedScore: 50
maintainers: ["co3moz"]
openGraphImageUrl: "https://opengraph.githubassets.com/592a0b379e402eb7e0db57d7ce317e3443cc32c1c9b8984ff8b99d89b858613e/co3moz/minecraft-render"
---

minecraft-render
=======================

Renders minecraft block models from a .jar file using `THREE.js`.
Default output format is PNG `1000x1000`. Vanilla and **mod** jars are supported,
and rendering can be **parallelized** across worker processes.

### Pre-rendered assets

Pre-rendered block & item galleries live in the [wiki](https://github.com/co3moz/minecraft-render/wiki),
with a separate page per Minecraft release. A weekly job renders any new
release automatically.

Browse them here: [minecraft-render wiki](https://github.com/co3moz/minecraft-render/wiki)

### Binaries

> Please ensure Node.js version 22 or above is installed to run the binaries.

Basic usage;

```sh
npx minecraft-render

Usage: minecraft-render <jar> [output]

Options:
  -w, --width [width]        output image width (default: 1000)
  -t, --height [height]      output image height (default: 1000)
  -d, --distance [distance]  distance between camera and block (default: 20)
  -v, --verbose              increases logging level (default: 3)
  -p, --plane                debugging plane and axis (default: 0)
  -A, --no-animation         disables apng generation
  -f, --filter <regex>       regex pattern to…
