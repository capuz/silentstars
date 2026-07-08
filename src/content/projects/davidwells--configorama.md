---
repo: "DavidWells/configorama"
name: "configorama"
description: "⚙️ ${variable} support for config files"
readmeQualityOk: true
url: "https://github.com/DavidWells/configorama"
homepage: "https://configorama.netlify.app"
language: "JavaScript"
languages: ["JavaScript"]
languagePcts: [93]
topics: ["wired"]
stars: 25
forks: 2
openIssues: 14
closedIssues: 29
watchers: 1
contributors: 1
recentReleases: 0
createdAt: "2018-09-18T03:36:08Z"
lastCommitAt: "2026-07-08T05:42:59Z"
status: "thriving"
tags: ["solo_builder", "legacy_hero", "funded", "under_pressure"]
healthScore: 92
undervaluedScore: 61
maintainers: ["DavidWells"]
openGraphImageUrl: "https://opengraph.githubassets.com/567091ca17b2d2e8418e12b7dc448d1cefe580cd41a38018b3974b99ceca2391/DavidWells/configorama"
fundingLinks: ["GITHUB:https://github.com/DavidWells"]
---

# configorama monorepo

This repo is a pnpm + lerna monorepo. The published packages live under [`packages/`](https://github.com/DavidWells/configorama/blob/HEAD/packages).

| Package | npm | What it is |
|---------|-----|------------|
| [`configorama`](https://github.com/DavidWells/configorama/blob/HEAD/packages/configorama) | `configorama` | Variable support for configuration files (the core library + CLI + bundled plugins) |
| [`@davidwells/configx`](https://github.com/DavidWells/configorama/blob/HEAD/packages/configx) | `@davidwells/configx` | Resolve a configorama config and run a command with it as environment |

The `configorama` README (usage, syntax, plugins, API) is in [`packages/configorama/README.md`](https://github.com/DavidWells/configorama/blob/HEAD/packages/configorama/README.md).

## Develop

```bash
pnpm install          # links the workspace (configx uses the local configorama)
pnpm test             # run every package's tests (pnpm -r test)
pnpm -r --if-present typecheck
```

Per package:

```bash
cd packages/configorama && npm test
cd packages/configx && npm test
```

Because it's a workspace, `configx` depends on `configorama` via `workspace:^`, so changes to…
