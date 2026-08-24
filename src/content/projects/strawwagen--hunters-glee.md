---
repo: "StrawWagen/hunters_glee"
name: "hunters_glee"
description: "Gmod Gamemode. Live to buy. Struggle to escape, inevitably die. Only to haunt those left alive..."
readmeQualityOk: true
url: "https://github.com/StrawWagen/hunters_glee"
language: "Lua"
languages: ["Lua"]
languagePcts: [100]
stars: 6
forks: 8
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 9
recentReleases: 0
createdAt: "2022-12-08T20:24:48Z"
lastCommitAt: "2026-08-24T04:21:59Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "fork_magnet"]
healthScore: 86
undervaluedScore: 85
maintainers: ["StrawWagen", "Broadcloth0", "legokidlogan"]
openGraphImageUrl: "https://opengraph.githubassets.com/18ab1d56f0fa9206f8bbe73f9581e59e4bd5a2c34cfb5c38b3d63545ff96ba56/StrawWagen/hunters_glee"
---

# Hunter's Glee

A **PVPVE survival gamemode** for Garry's Mod.

It's you (and your friends?) versus a variety of relentless enemies. Get close to hunting NPCs to earn score, then spend it all in the shop on weapons, beartraps, innate upgrades, and more.

Collect skulls from dead enemies and players to purchase rare, heavy weapons.
Or even to eventually escape...

But it gets better: **the fun really begins when you die**. As a ghost, you unlock a whole new shop selection. Lock doors, place traps for your friends, or build a tempting supply room rigged with explosive barrels!

Spawn. Buy. Escape? or Die.

> 🎮 [Steam Workshop](https://steamcommunity.com/sharedfiles/filedetails/?id=2848253104)

---

## Project Structure

```
hunters_glee/
├── gamemodes/hunters_glee/gamemode/   # Core gamemode logic
├── lua/
│   ├── glee_shopitems/                # Shop item definitions (auto-loaded)
│   ├── glee_spawnsets/                # Enemy spawnset(misery) definitions (auto-loaded)
│   ├── entities/                      # Custom entities
│   ├── weapons/                       # Custom weapons
│   └── effects/                       # Visual effects
├── materials/                         #…
