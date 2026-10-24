---
repo: "kend1e/fantasy-armor"
name: "fantasy-armor"
description: "Repository of the Fantasy Armor Minecraft mod."
readmeQualityOk: true
url: "https://github.com/kend1e/fantasy-armor"
homepage: "https://www.curseforge.com/minecraft/mc-mods/fantasy-armor"
language: "Java"
languages: ["Java"]
languagePcts: [84]
stars: 6
forks: 7
openIssues: 8
closedIssues: 27
watchers: 3
contributors: 8
recentReleases: 0
createdAt: "2024-06-29T19:41:47Z"
lastCommitAt: "2026-10-24T08:20:30Z"
lastReleaseAt: "2026-03-31T13:38:27Z"
status: "thriving"
tags: ["solo_builder", "needs_contributors", "fork_magnet"]
healthScore: 93
undervaluedScore: 82
maintainers: ["kend1e"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/821909975/2c01e0d7-dc7b-47bd-8d61-601713fc2ca1"
discussionCount: 0
---

# Fantasy Armor

A Minecraft mod with armor sets and effects for Forge, NeoForge, and Fabric.

| Loader   | Minecraft                                |
|----------|------------------------------------------|
| Forge    | 1.19.4, 1.20.1, 1.21.1, 1.21.10, 1.21.11 |
| NeoForge | 1.21.1, 1.21.10, 1.21.11                 |
| Fabric   | 1.19.4, 1.20.1, 1.21.1, 1.21.10, 1.21.11 |

Project needs JDK 21 to run Gradle. Toolchains select Java 17 or 21 for each target.

```bash
# Build all platforms
./gradlew assemble

# Build one platform
./gradlew :platforms:fabric-1.21.1:assemble

# Run a development client or server
./gradlew :platforms:fabric-1.21.1:runClient
./gradlew :platforms:fabric-1.21.1:runServer
```

Result JARs go to `dist/`.
`./gradlew clean` removes build outputs and `dist/`.

Content structure:

- [definitions/armor.kt](https://github.com/kend1e/fantasy-armor/blob/HEAD/definitions/armor.kt) - armor sets, attributes, effects, and recipe ingredients.
- [definitions/translations.kt](https://github.com/kend1e/fantasy-armor/blob/HEAD/definitions/translations.kt) - localized names and descriptions.
-…
