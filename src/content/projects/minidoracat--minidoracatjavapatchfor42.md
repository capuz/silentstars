---
repo: "Minidoracat/MinidoracatJavaPatchFor42"
name: "MinidoracatJavaPatchFor42"
description: "Bytecode patches for Project Zomboid Build 42: dedicated-server fixes for freezes, data loss, main-thread hot spots and bandwidth loops, plus optional client fixes. Each patch documented with root cause and measurements."
readmeQualityOk: true
url: "https://github.com/Minidoracat/MinidoracatJavaPatchFor42"
language: "Java"
languages: ["Java"]
languagePcts: [84]
topics: ["asm", "bytecode", "dedicated-server", "java", "project-zomboid"]
stars: 5
forks: 0
openIssues: 0
closedIssues: 1
watchers: 2
contributors: 1
recentReleases: 10
createdAt: "2026-09-29T17:36:06Z"
lastCommitAt: "2026-11-17T14:38:20Z"
lastReleaseAt: "2026-11-10T11:45:24Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "funded", "release_machine"]
healthScore: 89
undervaluedScore: 61
maintainers: ["Minidoracat"]
openGraphImageUrl: "https://opengraph.githubassets.com/e386e1f64e4b90d6c02e8835af986241c2b48c69d4aa694cbbbb17b80c2b9428/Minidoracat/MinidoracatJavaPatchFor42"
fundingLinks: ["KO_FI:https://ko-fi.com/minidoracat"]
---

# MinidoracatJavaPatchFor42

**English** | [繁體中文](https://github.com/Minidoracat/MinidoracatJavaPatchFor42/blob/HEAD/README.zh-TW.md)

Bytecode patches for **Project Zomboid Build 42** (currently **42.22.2**) that fix vanilla bugs and remove
hot spots we found while running a busy multiplayer server, plus an optional client package for players.

- **Server patches**: a Java agent swaps official classes for patched versions as the dedicated server
  starts (the official jar and its signature stay untouched). They address main-loop freezes and livelocks,
  lost chunks, animals and vehicles, main-thread hot spots, bandwidth loops, stuck timed actions and log
  noise. 83 patched classes, 248 patch sites and 103 helper classes on 42.22.2.
- **Client patches**: an optional package for players (invisible players/zombies/vehicles; two disconnects while
  chunks load near player-built buildings; mod vehicles re-animated every frame while parked; vehicles thrown tens or hundreds of tiles away when driving into an area that has not loaded; a vehicle pushed under the floor in a collision, which blacks out the screen; floor blood after a horde slowing the frame rate; a ground item without a…
