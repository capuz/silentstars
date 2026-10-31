---
repo: "opensro-dev/opensro"
name: "opensro"
description: "🏯 Silkroad Online v1.150 rebuilt end to end: a WebGPU browser client 🎮, a Go game server ⚔️ and the asset pipeline 🧰 that ties them together. Play in your browser."
readmeQualityOk: true
url: "https://github.com/opensro-dev/opensro"
homepage: "https://opensro.online"
language: "Go"
languages: ["Go", "JavaScript"]
languagePcts: [50, 28]
topics: ["browser-game", "game-server", "golang", "mmorpg", "reverse-engineering", "silkroad-online", "typescript", "webgpu"]
stars: 69
forks: 46
openIssues: 29
closedIssues: 391
watchers: 1
contributors: 14
recentReleases: 0
createdAt: "2026-09-27T11:39:04Z"
lastCommitAt: "2026-10-31T09:54:32Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "funded", "fork_magnet"]
healthScore: 98
undervaluedScore: 43
maintainers: ["soyeonp92"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1390713648/4854aba6-e7cc-4f22-b9aa-6395370b3005"
fundingLinks: ["KO_FI:https://ko-fi.com/opensro"]
---

# 🏯 OpenSRO

**Silkroad Online v1.150 (Legend III), rebuilt end to end as open-source software for the browser.**

OpenSRO is a complete game stack, not just an emulator:

- 🎮 **A full browser client:** TypeScript and WebGPU, no install and no plugin. The original interface, world, characters, effects and sound, drawn natively in the browser.
- ⚔️ **A full game server:** Go, with an Agent (login, accounts, characters) and GameWorld shards (combat, skills, monsters, quests, guilds, fortresses, PK, trade).
- 🧰 **An asset pipeline:** turns your own v1.150 client installation into compact browser- and server-ready game data.
- 🛰️ **Operations tooling:** Nomad jobs, a release pipeline, and an observatory dashboard for running your own server.

Behaviour is ported from the original game, not guessed: the v1.150 client defines what exists, and server rules follow the original server's instructions. Reverse-engineering evidence (function addresses) sits right next to the code that ports it.

> 💬 **Questions about the code?** Join our [Discord](https://discord.gg/RUua9HY657).

---

## 🚀 Quick start

The full walkthrough, with the exact tool versions, is…
