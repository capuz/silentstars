---
repo: "tr7zw/EntityCulling"
name: "EntityCulling"
description: "Using async path-tracing to hide Tiles/Entities that are not visible"
readmeQualityOk: true
url: "https://github.com/tr7zw/EntityCulling"
language: "Java"
languages: ["Java"]
languagePcts: [92]
topics: ["fabric", "forge", "minecraft", "fabric-mod", "forge-mod", "culling", "path-tracing", "async"]
stars: 333
forks: 66
openIssues: 18
closedIssues: 225
watchers: 3
contributors: 39
recentReleases: 0
createdAt: "2021-02-18T16:29:40Z"
lastCommitAt: "2026-09-20T08:46:34Z"
lastReleaseAt: "2023-02-18T21:44:40Z"
status: "thriving"
tags: ["legacy_hero", "funded"]
healthScore: 94
undervaluedScore: 34
maintainers: ["tr7zw", "nunoguevara", "Fhilips613"]
openGraphImageUrl: "https://opengraph.githubassets.com/c58a2aa7aa628abbc625fb321575653303a17f70c098d122c8230a75a6077eda/tr7zw/EntityCulling"
fundingLinks: ["KO_FI:https://ko-fi.com/tr7zw"]
---

</p>

<br>

Minecraft skips rendering things that are behind you, so why is it rendering everything that you still can't see because of walls or ceilings in the way?

This mod introduces **asynchronous path-tracing** to efficiently determine what's actually visible to the player. Using other available CPU cores, it calculates line-of-sight visibility in real time and eliminates unnecessary draw calls/processing for hidden block entities and entities.

This can drastically improve the frame rate, depending on the number of entities and the position in the world.

<br>

<br>

### Asynchronous Path-Tracing

- Uses spare CPU threads to calculate visibility
- Runs alongside the main game thread without blocking (every few ticks, required data will be collected on the main thread)
- Updates visibility data in real time, keeping pop-ins to a minimum

### Entity Tick Optimization

- Reduces client impact from entities that are not visible
- Fully configurable and compatible with most mods
- No impact on server-side simulation, farms, or mob behavior

### Fully Configurable

- All features of the mod can be toggled on/off in the config screen
- Whitelist entities and block entities that…
