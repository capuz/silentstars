---
repo: "Virtastic/openmw-web"
name: "openmw-web"
description: "Play Morrowind in your browser — the OpenMW engine compiled to WebAssembly, now with multiplayer and a cloud locker for your own game data."
readmeQualityOk: true
url: "https://github.com/Virtastic/openmw-web"
homepage: "https://morrowind.virtastic.app"
language: "C++"
languages: ["C++"]
languagePcts: [63]
topics: ["browser-game", "cpp", "emscripten", "game-engine", "morrowind", "openmw", "wasm", "webassembly", "webgl2", "elder-scrolls"]
stars: 134
forks: 14
openIssues: 1
closedIssues: 10
watchers: 2
contributors: 2
recentReleases: 9
createdAt: "2026-07-02T13:33:08Z"
lastCommitAt: "2026-10-21T23:36:34Z"
lastReleaseAt: "2026-09-08T23:51:28Z"
status: "thriving"
tags: ["solo_builder", "funded", "release_machine"]
healthScore: 97
undervaluedScore: 37
maintainers: ["dumpster-TechOps"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1287211841/03f08a53-9dcd-44d3-98ce-4b59e7cb687b"
fundingLinks: ["PATREON:https://patreon.com/virtastic", "KO_FI:https://ko-fi.com/virtastic", "CUSTOM:https://virtastic.app"]
discussionCount: 1
---

# openmw-web

**Play Morrowind in your browser.** The OpenMW engine, compiled to WebAssembly, by [Virtastic](https://virtastic.app).

openmw-web is a WebAssembly build of [OpenMW](https://openmw.org/), the open-source
reimplementation of *The Elder Scrolls III: Morrowind*. The whole engine runs client-side in
a desktop browser - no plugins, no streaming service, and no game data included: you bring
your own legally-owned copy.

**New in 1.2.0: the admin dashboard.** Run your own server entirely from a browser - a setup
wizard, a mod manager with drag-to-order, Tamriel Rebuilt support, savegame export, backups,
logs and accounts. Multiplayer (added in 1.1.0) is there too, behind an experimental flag.

## Quick start: your own server

You need [Docker](https://docs.docker.com/get-started/get-docker/) and your own copy of
Morrowind. Then:

```bash
git clone https://github.com/Virtastic/openmw-web.git
cd openmw-web
./setup.sh        # Windows: .\setup.ps1
```

Nothing compiles: the script checks out the newest release and pulls its prebuilt server
image, `ghcr.io/virtastic/openmw-web-server:<tag>` (multiplayer-capable, published by every
release). `./setup.sh --update` or the…
