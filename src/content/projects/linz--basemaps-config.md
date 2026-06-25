---
repo: "linz/basemaps-config"
name: "basemaps-config"
description: "Configuration for LINZ Basemaps"
url: "https://github.com/linz/basemaps-config"
language: "TypeScript"
languages: ["TypeScript", "Shell"]
languagePcts: [52, 35]
stars: 8
forks: 1
openIssues: 0
closedIssues: 7
watchers: 5
contributors: 28
recentReleases: 0
createdAt: "2020-09-29T20:59:27Z"
lastCommitAt: "2026-06-25T02:07:55Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "legacy_hero"]
healthScore: 98
undervaluedScore: 72
maintainers: ["linz-li-bot", "AlyshaJ-QC", "Wentao-Kuang"]
openGraphImageUrl: "https://opengraph.githubassets.com/8cb15083c4dea498c59296abcf4d23c89274496455d5da825a1f3e6858bf4747/linz/basemaps-config"
---

# Basemaps Config

LINZ specific configuration and deployment of [basemaps](https://github.com/linz/basemaps).

## Usage

This package initially is to control the imagery present in the LINZ basemaps product.

### Server

This configuration can be used with basemaps server @basemaps/server to create a working tile server

```
yarn add @basemaps/server

npx basemaps-server config
```

You will need access to basemaps imagery, if you need access to basemaps imagery please contact basemaps@linz.govt.nz 

### Tileset `/config/tileset`

Specifies how the imagery is combined into a single layer

[config/tileset/aerial.json](./config/tileset/aerial.json) - https://basemaps.linz.govt.nz/?i=aerial

Each layer inside the tile set is also created as a individual layer that can be viewed by name or by id

For example the layer "Auckland 0.075m Rural Aerial Photos (2020)" has one name and two ids

```
name: auckland-rural-2022-0.075m
3857/WebMercator: 01G4XPQKF6VB9SXCQ93R2XC1W8
2193/NZTM2000Quad: 01G4XPNP9JTGGPABCFRWC4N21E
```

which create the following urls

#### By Name
- [3857/WebMercator - auckland-rural-2022-0.075m](https://basemaps.linz.govt.nz/?i=auckland-rural-2022-0.075m)
-…
