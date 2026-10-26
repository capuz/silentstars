---
repo: "mateo-cogeanu/ps5-minecraft-java"
name: "ps5-minecraft-java"
description: "Future Minecraft Java Edition homebrew for PS5. Java runtime port: https://github.com/mateo-cogeanu/ps5-java25-homebrew"
readmeQualityOk: true
url: "https://github.com/mateo-cogeanu/ps5-minecraft-java"
language: "Java"
languages: ["Java", "C++"]
languagePcts: [41, 41]
stars: 7
forks: 1
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 10
createdAt: "2026-10-13T18:20:46Z"
lastCommitAt: "2026-10-26T09:17:44Z"
lastReleaseAt: "2026-10-24T09:26:23Z"
status: "thriving"
tags: ["solo_builder", "release_machine"]
healthScore: 80
undervaluedScore: 55
maintainers: ["mateo-cogeanu"]
openGraphImageUrl: "https://opengraph.githubassets.com/d349540fc5c5c15379d7a5c937e656b7a2635a046969005291f6947199ce1175/mateo-cogeanu/ps5-minecraft-java"
---

# ProsperoCraft

A homebrew project exploring **Minecraft Java Edition on PlayStation 5** — starting with a stable, unmodified dedicated server, then server-side mods, followed by the client and controller support.

> **Status: Fabric/Paper playtests, continuous direct rendering and software OpenGL bootstrap pass on PS5.** Client **01.000.023** passes all fifteen checks;retrieved reports confirm494direct FIFO frames,1,482scene draws,all3phases,physical inputs and JVM shutdown. Camera controls and Minecraft startup remain ahead;server two-hour endurance stays deferred.

## The goal

Bring Java Edition's worlds and ecosystem to native PS5 homebrew through small, console-tested milestones.

| Direction | What we're aiming for |
| :--- | :--- |
| **Server first** | Start a vanilla server, create and reload a world, connect over the network and verify save integrity |
| **Server mods next** | Validate compatible server mod loaders and individual mods against pinned game versions |
| **Client afterward** | Bring up native bindings, a window, rendering, audio and controller input |

Graphics exploration includes OpenGL and Vulkan possibilities. Backend availability, native bindings and…
