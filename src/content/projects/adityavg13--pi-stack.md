---
repo: "AdityaVG13/pi-stack"
name: "pi-stack"
description: "My Pi Packages"
readmeQualityOk: true
url: "https://github.com/AdityaVG13/pi-stack"
language: "JavaScript"
languages: ["JavaScript"]
languagePcts: [100]
stars: 5
forks: 1
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 0
createdAt: "2026-07-25T19:55:19Z"
lastCommitAt: "2026-09-19T08:15:56Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem"]
healthScore: 78
undervaluedScore: 48
maintainers: ["AdityaVG13"]
openGraphImageUrl: "https://opengraph.githubassets.com/a043cd2b0425fd250f4b28c5f0e6cfde2644022c3a7cf43b4d898fe3540ea961/AdityaVG13/pi-stack"
---

# pi-stack

Pi / OMP packages for [pi.dev](https://pi.dev) and [omp.sh](https://omp.sh). Each folder under `packages/` is its own npm package — install what you need, skip the rest.

| Package | Does | Install |
|---------|------|---------|
| [pi-papercuts](https://github.com/AdityaVG13/pi-stack/blob/HEAD/packages/pi-papercuts) | Agent files friction notes into `.papercuts.jsonl` and keeps going | `pi install npm:pi-papercuts` · `omp install npm:pi-papercuts` |
| [pi-deferred-context-engine](https://github.com/AdityaVG13/pi-stack/blob/HEAD/packages/pi-deferred-context-engine) | Hides inactive tool/skill noise; promotes matches for one run via `search_tools` | `pi install npm:pi-deferred-context-engine` · `omp install npm:pi-deferred-context-engine` |
| [pi-supernova](https://github.com/AdityaVG13/pi-stack/blob/HEAD/packages/pi-supernova) | One CodeMode invocation with `read`, `edit`, `write`, and `bash` inside; automatic read batching and ordered mutations | `pi install npm:pi-supernova` · `omp install npm:pi-supernova` |

If you use deferred-context-engine, install it **last** so it sees tools other extensions registered. **pi-supernova** exposes one `supernova` tool on Pi and…
