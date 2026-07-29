---
repo: "NomadDigita/The-Vagabond"
name: "The-Vagabond"
description: "The Best Telegram Text Based Game 🎮  — currently under development"
readmeQualityOk: true
url: "https://github.com/NomadDigita/The-Vagabond"
homepage: "https://t.me/TheVagabondBot"
language: "Go"
languages: ["Go"]
languagePcts: [84]
topics: ["game", "game-development", "game-engine", "gamedev", "games", "gaming", "go", "golang", "mmo-engine", "mmorpg"]
stars: 5
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2026-06-16T03:32:41Z"
lastCommitAt: "2026-07-29T06:12:55Z"
status: "newborn"
tags: ["hidden_gem"]
healthScore: 90
undervaluedScore: 51
maintainers: ["NomadDigita", "claude"]
openGraphImageUrl: "https://opengraph.githubassets.com/26714975c49af345720d65cb1eb141b1c9f6af81e514dbabd540271cc830a224/NomadDigita/The-Vagabond"
discussionCount: 0
---

# 🛰️ THE VAGABOND

> A persistent, tick-based Telegram MMO — a from-scratch revival of the
> discontinued **SpaceHunt**, rebuilt under a new identity with the same
> command feel, the same emoji language, and a deeper combat/economy
> layer underneath it.

The Vagabond runs entirely inside a Telegram chat. There's no separate
app or website — you build an outpost, recruit an army, raid other
survivors (or the world's AI-controlled Rogue Drone Nests), research
technologies, run a faction, and fight world bosses, all through
buttons and slash commands in one bot conversation. A background tick
engine advances the whole world on a fixed heartbeat, independent of
whether any particular player is online.

---

## What's actually in the game right now

This project has gone through several development phases (see
`SPACEHUNT_PHASE7_LOG.md` for the currently active one), so "what
exists" has grown a lot past the original engine. As of this writing:

- **Persistent combat lifecycle** — raids and Rogue Drone Nest
  skirmishes both go through `marching → engaged → returning →
  completed`, with per-phase notifications, a full battle report
  renderer, retaliation, and toughness-weighted…
