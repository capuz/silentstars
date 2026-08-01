---
repo: "Fabricators-of-Create/Porting-Lib"
name: "Porting-Lib"
description: "A collection of utilities for porting mods from Forge to Fabric."
readmeQualityOk: true
url: "https://github.com/Fabricators-of-Create/Porting-Lib"
language: "Java"
languages: ["Java"]
languagePcts: [100]
topics: ["fabricmc", "hacktoberfest", "minecraft", "minecraft-mod", "quiltmc"]
stars: 148
forks: 52
openIssues: 25
closedIssues: 100
watchers: 4
contributors: 14
recentReleases: 0
createdAt: "2022-02-26T02:56:18Z"
lastCommitAt: "2026-08-01T06:12:22Z"
lastReleaseAt: "2022-05-17T02:28:41Z"
status: "thriving"
tags: []
healthScore: 79
undervaluedScore: 27
maintainers: ["BluSpring", "vgskye", "PssbleTrngle"]
openGraphImageUrl: "https://opengraph.githubassets.com/46c38e04f42e99c318acc882e9d2a6ca390ff37d91e85426f21cd6041ebd508e/Fabricators-of-Create/Porting-Lib"
---

# Porting Lib
### A collection of utilities for porting mods from Forge to Fabric.

## Use
Porting Lib is split into modules. All modules are available on this maven:
```groovy
maven { url = "https://mvn.devos.one/releases/" }
```

You can depend on Porting Lib like this once you add the maven:
```groovy
modImplementation(include("io.github.fabricators_of_create.Porting-Lib:<module>:<version>"))
```

You can find the latest version on [Modrinth](https://modrinth.com/mod/porting_lib/versions).
Just choose a version and use its version number.

### Modules
| Module                    | Description                                                                                    |
|---------------------------|------------------------------------------------------------------------------------------------|
| `attributes`              | Additional Entity Attributes; step height, gravity, swim speed                                 |
| `base`                    | Code that has not yet been split into modules                                                  |
| `blocks`                  | Adds extra block extensions.                                                                   |
|…
