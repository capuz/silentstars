---
repo: "blackwithersteve/soldiermc"
name: "soldiermc"
description: "TF2 Soldier for Minecraft 26.2 (Fabric)"
readmeQualityOk: true
url: "https://github.com/blackwithersteve/soldiermc"
language: "Java"
languages: ["Java"]
languagePcts: [81]
stars: 15
forks: 0
openIssues: 0
closedIssues: 1
watchers: 0
contributors: 1
recentReleases: 1
createdAt: "2026-09-06T22:36:48Z"
lastCommitAt: "2026-09-08T08:15:15Z"
lastReleaseAt: "2026-09-08T08:16:03Z"
status: "newborn"
tags: ["hidden_gem"]
healthScore: 90
undervaluedScore: 17
maintainers: ["blackwithersteve"]
openGraphImageUrl: "https://opengraph.githubassets.com/37af3d048d95a3344fc861ad31b5e8cfe38f9bc1bf02ecf9573c93a42ba7297b/blackwithersteve/soldiermc"
---

# SoldierMC

Team Fortress 2's Soldier in Minecraft 26.2 (Fabric).

## Requirements

- JDK 25
- A local Team Fortress 2 install

## Build

```
JAVA_HOME=/path/to/jdk-25 ./gradlew build
```

Jar lands in `build/libs/`. `build` also runs `checkServerSafe`, which byte-scans compiled common
classes and fails on any reference to `net/minecraft/client/` or `com/soldiermc/client/`.

## Assets

No TF2 asset is committed or shipped in the jar. `tools/extract-tf2-assets.ps1` pulls the model,
textures and audio out of a local install into `tf2-assets-staging/`, from which the mod loads them
at runtime and builds a resource pack under `resourcepacks/` for the audio. Without that directory
the mod runs with vanilla rendering and no audio, and the tests that need assets skip.

## Layout

| Path | |
|---|---|
| `com.soldiermc.source` | Movement, weapon state machine, blast. Imports `java.*` only. |
| `com.soldiermc.bridge` | Engine to Minecraft: units, collision queries, the substep pump. |
| `com.soldiermc.studio` | MDL/VVD/VTX readers, animation decode, skinning. |
| `com.soldiermc.animstate` | `CMultiPlayerAnimState` port. |
| `com.soldiermc.client` | Rendering, HUD, input, audio. |
|…
