---
repo: "kokic/mooncraft"
name: "mooncraft"
description: "work in progress"
readmeQualityOk: true
url: "https://github.com/kokic/mooncraft"
language: "MoonBit"
languages: ["MoonBit"]
languagePcts: [99]
stars: 30
forks: 4
openIssues: 3
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 0
createdAt: "2026-01-16T02:12:44Z"
lastCommitAt: "2026-09-28T10:07:02Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 68
undervaluedScore: 36
maintainers: ["kokic"]
openGraphImageUrl: "https://opengraph.githubassets.com/3a9809f8420eb02e2740482ce4f45ceea5e08641c091a9b4da5b757c73d96fe3/kokic/mooncraft"
---

### Screenshot

### Build

```sh
# cd browser && npm install # once
cd browser
npm run build
```

### Run

```sh
cd browser
npm run serve
```

### World Type

The `launchGame` browser entry point selects the world type (`browser/main.mbt`):

```js
launchGame(seed, "Infinite", height, saveText)
```

Supported play-world names:

- `Infinite`
- `Finite`
- `Flat`
- `PreClassic`

## Code structure

The repository is a MoonBit workspace (`moon.work`) with four modules:

- `cubical/` (engine): types, math, FFI, camera, shaders, glTF, render models.
- `mooncraft/` (game core): `chunk/`, `level/`, `player/`, `entity/`, `mob/`,
  `block/`, `item/`, `mesh/`, plus generation, commands, and blueprints.
- `browser/` (browser launcher): `client/` assembles the runtime and registers
  the browser APIs, `bridge/` calls back into JS, and `web/` holds the browser
  integration and assets.

## Asset Copyright Notice (Minecraft EULA)

- Files under `browser/web/assets` may contain textures or other resources derived from Minecraft.
- Minecraft and all related assets and intellectual property are owned by Mojang Studios / Microsoft.
- This project is an unofficial fan project and is not affiliated…
