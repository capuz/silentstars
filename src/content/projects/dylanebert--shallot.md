---
repo: "dylanebert/shallot"
name: "shallot"
description: "WebGPU game engine"
readmeQualityOk: true
url: "https://github.com/dylanebert/shallot"
homepage: "https://dylanebert.com/shallot"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [84]
stars: 434
forks: 16
openIssues: 1
closedIssues: 2
watchers: 3
contributors: 2
recentReleases: 10
createdAt: "2026-04-26T12:55:58Z"
lastCommitAt: "2026-11-02T15:16:11Z"
lastReleaseAt: "2026-10-19T18:14:36Z"
status: "thriving"
tags: ["solo_builder", "release_machine"]
healthScore: 93
undervaluedScore: 28
maintainers: ["dylanebert"]
openGraphImageUrl: "https://opengraph.githubassets.com/f57a8450fb3f3a9c61b7bd8c410f980fa423368e3f5c48c17958501234758782/dylanebert/shallot"
---

# shallot

webgpu game engine. fast by default, instant iteration, runs where webgpu does.

The CLI runs on Node 22 or newer or Bun 1.4.3 or newer, from an npm or Bun install. Engine development, tests and the optional scaffold use Bun.

## quick start

```bash
# install bun
curl -fsSL https://bun.sh/install | bash

# new project
bun create shallot my-game
cd my-game
bun install

# list commands
bunx shallot --help

# run the game
bun run dev
```

open the url in a [supported browser](https://caniuse.com/webgpu).

## examples

get started by exploring [examples](https://dylanebert.com/shallot/). start from one:

```bash
# list them
bun create shallot --help

# copy one
bun create shallot first-person --template first-person
```

## more

- questions: [discord](https://discord.gg/eEY75Nqk3C). bugs: [issues](https://github.com/dylanebert/shallot/issues). releases: [npm](https://www.npmjs.com/package/@dylanebert/shallot)
- upgrading: [`MIGRATION.md`](https://github.com/dylanebert/shallot/blob/HEAD/MIGRATION.md)
- changing the engine: [contributing](https://github.com/dylanebert/shallot/blob/main/CONTRIBUTING.md)

mit, see…
