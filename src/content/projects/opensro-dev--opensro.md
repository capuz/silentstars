---
repo: "opensro-dev/opensro"
name: "opensro"
description: "OpenSRO: a Silkroad Online v1.150 server in Go and a WebGPU browser client"
readmeQualityOk: true
url: "https://github.com/opensro-dev/opensro"
homepage: "https://opensro.online"
language: "Go"
languages: ["Go", "JavaScript"]
languagePcts: [49, 32]
topics: ["browser-game", "game-server", "golang", "mmorpg", "reverse-engineering", "silkroad-online", "typescript", "webgpu"]
stars: 6
forks: 6
openIssues: 0
closedIssues: 3
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2026-09-27T11:39:04Z"
lastCommitAt: "2026-09-30T09:56:57Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "funded", "fork_magnet"]
healthScore: 100
undervaluedScore: 69
maintainers: ["soyeonp92"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1390713648/4854aba6-e7cc-4f22-b9aa-6395370b3005"
fundingLinks: ["KO_FI:https://ko-fi.com/skillman1337"]
---

# OpenSRO

A Silkroad Online v1.150 (Legend III) server written in Go and a WebGPU browser
client, plus the asset pipeline that turns a licensed client installation into
browser- and server-ready data.

**To run it locally, follow [docs/GETTING_STARTED.md](https://github.com/opensro-dev/opensro/blob/HEAD/docs/GETTING_STARTED.md).**

## Layout

| Folder | Contents |
| --- | --- |
| `apps/server/` | Go Agent and GameWorld processes, Nomad jobs, operator docs |
| `apps/client-next/` | Browser client (TypeScript, WebGPU, Vite) |
| `apps/server-observatory/` | Local read-only operations dashboard |
| `scripts/` | Asset pipeline, repository checks and the `pnpm task` runner |
| `docs/` | Setup, architecture and asset-pipeline documentation |
| `patches/` | Dependency patches applied by pnpm |

Ignored and local only: `.generated/` (all generated game data), `.state/`
(caches and locks), `.tools/` (pinned binaries such as Nomad), `temp/` (scratch
output), `node_modules/`.

Retail game media is never committed. The asset build reads a licensed
extraction next to the checkout; see
[docs/ASSET_PIPELINE.md](https://github.com/opensro-dev/opensro/blob/HEAD/docs/ASSET_PIPELINE.md).

## Common…
