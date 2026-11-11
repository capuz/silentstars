---
repo: "AndyGura/gg-web-engine"
name: "gg-web-engine"
description: "TypeScript browser game engine: peer-to-peer multiplayer physics with no game server, cars and character controllers, on Three.js/Pixi.js with Rapier, Ammo.js or Matter.js"
readmeQualityOk: true
url: "https://github.com/AndyGura/gg-web-engine"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [97]
topics: ["ammojs", "game-engine-2d", "game-engine-3d", "gamedevelopment", "matter-js", "multiplayer", "p2p", "physics", "pixijs", "rapier"]
stars: 10
forks: 0
openIssues: 0
closedIssues: 3
watchers: 1
contributors: 2
recentReleases: 0
createdAt: "2022-09-28T08:02:39Z"
lastCommitAt: "2026-11-11T11:22:05Z"
lastReleaseAt: "2023-10-27T01:02:41Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 99
undervaluedScore: 72
maintainers: ["AndyGura"]
openGraphImageUrl: "https://opengraph.githubassets.com/eff6fa0fce3401d160a3e6bb80b5073acc63a6d5bc6738ea7901ee7c6e6a1dd0/AndyGura/gg-web-engine"
---

---

GG Web Engine is an open-source TypeScript game engine for the browser. Its strongest case is one the
usual browser engines leave to you: **2-8 players share one physics world over WebRTC, peer to peer**, with
ownership, late join, reconnection and replica correction built in - no game server to write or
host ([how](#-multiplayer-in-a-dozen-lines)). It also ships the parts that driving and character
games take longest to get right: a car model with engine, torque curve and gearbox, raycast
vehicles, and first-person, third-person and 2D platformer character controllers.

It does not reinvent rendering or physics. A small, strictly typed core - worlds, entities, clocks,
input, levels, networking - drives battle-tested libraries plugged in behind it:
[Three.js](https://github.com/mrdoob/three.js) or [Pixi.js](https://github.com/pixijs/pixijs) for
rendering, [Rapier](https://github.com/dimforge/rapier.js), [Ammo.js](https://github.com/kripken/ammo.js)
or [Matter.js](https://github.com/liabru/matter-js) for physics. Your game code talks to the core, so
switching to another backend of the same dimension takes one line and, apart from a few documented
gaps, needs no gameplay-code…
