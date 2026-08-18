---
repo: "flowrix-io/florr_clone"
name: "florr_clone"
description: "Florr.io clone"
readmeQualityOk: true
url: "https://github.com/flowrix-io/florr_clone"
homepage: "https://flowrix.sussybite.dev"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [94]
topics: ["florr", "florrio"]
stars: 7
forks: 5
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 8
recentReleases: 0
createdAt: "2024-12-03T02:32:34Z"
lastCommitAt: "2026-08-18T04:08:59Z"
status: "thriving"
tags: ["hidden_gem", "fork_magnet"]
healthScore: 85
undervaluedScore: 83
maintainers: ["sussybite8888", "elioliveiraoliveira-coder"]
openGraphImageUrl: "https://opengraph.githubassets.com/c68dbb8b66b7306d4f65bdf1d46a070a17578a2edf29872ae5ad47fde6567199/flowrix-io/florr_clone"
discussionCount: 0
---

# florr.io clone

A browser-based multiplayer survival game inspired by [florr.io](https://florr.io).

> **License notice:** As of July 2026 this project is licensed under the
> [GNU General Public License v3.0 or later](https://github.com/flowrix-io/florr_clone/blob/HEAD/LICENSE) (previously ISC).
> If you distribute this software or a modified version of it, you must do so
> under the same license and make the corresponding source code available.

## Quick start

Requires Node.js 22+

```bash
npm install
npm run build   # builds cpp, webpacks the client, compresses bundle
npm start       # compiles the server and runs dist/server.js
```

Open `https://localhost:3000`.

## Scripts

| Script | Purpose |
| --- | --- |
| `npm run build` | Build cpp module, bundle client (production), compress bundle |
| `npm run build:server` | TypeScript compile of the server only |
| `npm run build:client` | TypeScript compile of the client only |
| `npm start` | Build server and run `dist/server.js` |
| `npm run dev` | Webpack dev watch |
| `npm run dev:server` | Run server under `ts-node-dev` |
| `npm run svg2skin -- art.svg` | Convert an SVG into custom-skin commands |

### Biomes

The world is…
