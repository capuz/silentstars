---
repo: "Karazaa/Argus"
name: "Argus"
description: "An RTS made in Unreal Engine"
readmeQualityOk: true
url: "https://github.com/Karazaa/Argus"
language: "C++"
languages: ["C++"]
languagePcts: [98]
topics: ["ecs", "entity-component-system", "fog-of-war", "realtimestrategy", "rts-game", "ue5-game", "unrealengine5", "singleplayer"]
stars: 19
forks: 8
openIssues: 11
closedIssues: 273
watchers: 2
contributors: 1
recentReleases: 0
createdAt: "2024-01-16T06:00:03Z"
lastCommitAt: "2026-08-14T05:14:39Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "under_pressure"]
healthScore: 99
undervaluedScore: 69
maintainers: ["Karazaa"]
openGraphImageUrl: "https://opengraph.githubassets.com/aad37715d3ad65936c8820dbdded041705013ecd7e9ccb9cdecbbee633552e67/Karazaa/Argus"
discussionCount: 2
---

# Argus

Argus is a singleplayer Real Time Strategy(RTS) game project made in Unreal Engine. This project originally started as a workspace for me to experiment with Unreal Engine in my free time as I joined a game development studio working primarily in Unreal Engine. I've also treated this project as an opportunity to implement systems and architectures that I've been interested in learning more about. On past games projects, I used Entity Component Systems(ECS) pretty heavily, but was not involved in the original architecting nor implementation. ECS is the backbone of Argus, and I tried to author Argus's ECS in a way that benefits from spatial and temporal locality, while also having utilities that may be more accessible to folks with an Object Oriented programming background. In order to make building features in Argus convenient, I also make heavy use of code generation through an Unreal Engine plugin I made called ArgusCodeGeneratorPlugin. The plugin is not the cleanest nor most performant code, (string manipulation in C++ is definitely not my strong suit), but has been instrumental in spinning up all the utility functionality around the ECS, especially the classes that are…
