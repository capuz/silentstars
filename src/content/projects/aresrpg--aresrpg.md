---
repo: "aresrpg/aresrpg"
name: "aresrpg"
description: "AresRPG — a source-available web MMORPG built on Sui and Three.js, developed in the open"
readmeQualityOk: true
url: "https://github.com/aresrpg/aresrpg"
homepage: "https://aresrpg.world"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [75]
topics: ["sui", "mmorpg", "voxel", "threejs", "rpg", "web-game", "browser-game", "blockchain-gaming", "on-chain", "zklogin"]
stars: 10
forks: 1
openIssues: 0
closedIssues: 1456
watchers: 0
contributors: 7
recentReleases: 0
createdAt: "2026-07-19T21:38:41Z"
lastCommitAt: "2026-10-26T09:14:10Z"
lastReleaseAt: "2026-07-21T21:00:38Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 99
undervaluedScore: 55
maintainers: ["Sceat", "MidwestGentleman"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1306029909/f8b4b856-47c9-49c6-83b4-7bfe58bd402f"
---

AresRPG is a browser MMORPG where every character, item, fight and trade is a Sui object — the
client is a renderer of chain truth, with zkLogin onboarding and player-paid transactions.
This repository is the whole game: frontend, 3D voxel engine, deterministic combat and its Move
twin, SDK, indexer, server, protocol, immutable rules, and the authored seed corpus. Game content
(items, mobs, spells, and worlds) lives in `seed/` and is published on-chain.

## Install / run / test

```bash
bun install
bun run dev            # frontend at localhost:5173
bun run lint           # eslint + prettier
bun run test           # every package's unit tests — same command CI runs
```

Committed `pins.json` describes mainnet. Local testnet uses ignored `.dev/pins.json`; it never
falls back to mainnet. Run the frontend normally for the selected network.

Blast hosts the standalone KARES presale. The in-game card links to Blast and reads its funding
progress when a presale is configured. The app's `/kares` page hosts staking; the encyclopedia
explains allocations, vesting and rewards.

Solana bridge reads use the same-origin `/api/solana` function. Set `SOLANA_RPC_URL` as a
server-only secret in…
