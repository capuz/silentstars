---
repo: "esrrhs/fakefish"
name: "fakefish"
description: "Demo game for verifying FakeLua capabilities: Big Fish Eat Small Fish coin ball"
originalDescription: "验证 FakeLua 能力的大鱼吃小鱼金币球 demo 游戏"
descriptionLang: "zh"
readmeQualityOk: true
url: "https://github.com/esrrhs/fakefish"
language: "JavaScript"
languages: ["JavaScript", "Lua"]
languagePcts: [45, 37]
stars: 5
forks: 2
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 2
recentReleases: 0
createdAt: "2016-05-13T06:32:41Z"
lastCommitAt: "2026-09-29T10:04:19Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "legacy_hero"]
healthScore: 80
undervaluedScore: 49
maintainers: ["esrrhs"]
openGraphImageUrl: "https://opengraph.githubassets.com/9bf62faf597317a8d6412412f99e65d37666d52da108cb2ff527dc97575227ed/esrrhs/fakefish"
---

# FakeFish

A **demo game** for verifying [esrrhs/fakelua](https://github.com/esrrhs/fakelua) capabilities: Connects FakeLua's script runtime, `runtime.tick` event pump, WebSocket, HTTP, MySQL, JSON, timers, and configuration parsing capabilities in a real playable scenario.

Gameplay is a simple web-based 2D PVP: **Coin Ball · Big Fish Eat Small Fish**. The server is a single-threaded FakeLua program with all gameplay logic in the backend; the frontend only handles presentation and input reporting. Account data is stored in MySQL, and the client communicates with the server via WebSocket.

> This repository is a demonstration and capability verification project, not a complete game product intended for commercial operation.

---

## Design Document

### 1. One-line gameplay

After logging in, players control a 'coin ball' moving in a shared 2D arena. The more coins, the larger the ball; when colliding, the larger ball eats the smaller ball, taking all the opponent's current coins, and the smaller ball respawns at a random position with initial coins/size.

### 2. Goals and Non-goals

| Goals | Non-goals (not in this phase) |
|------|----------------------------|
| Verify FakeLua…
