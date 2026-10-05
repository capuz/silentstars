---
repo: "SpongePowered/Sponge"
name: "Sponge"
description: "The SpongeAPI implementation targeting vanilla Minecraft and 3rd party platforms."
readmeQualityOk: true
url: "https://github.com/SpongePowered/Sponge"
language: "Java"
languages: ["Java"]
languagePcts: [100]
topics: ["java", "gradle", "minecraft", "sponge", "spongeapi", "spongepowered", "mixins", "mixin-framework", "minecraft-server", "hacktoberfest"]
stars: 433
forks: 220
openIssues: 192
closedIssues: 2257
watchers: 35
contributors: 128
recentReleases: 0
createdAt: "2015-04-11T20:38:48Z"
lastCommitAt: "2026-10-05T10:48:11Z"
lastReleaseAt: "2020-12-13T18:42:03Z"
status: "thriving"
tags: ["needs_contributors", "legacy_hero", "funded", "fork_magnet"]
healthScore: 93
undervaluedScore: 29
maintainers: ["aromaa", "Yeregorix", "avaruus1"]
openGraphImageUrl: "https://opengraph.githubassets.com/101748d0400324b08e36e0d9b608506727110faf6ccdf25d96897391e33028f2/SpongePowered/Sponge"
fundingLinks: ["PATREON:https://patreon.com/Sponge"]
---

Sponge [](https://github.com/SpongePowered/Sponge/actions/workflows/deploy.yaml)
=============

The SpongeAPI implementation targeting vanilla Minecraft and 3rd party platforms. It is licensed under the [MIT License].

* [Homepage]
* [Source]
* [Issues]
* [Documentation]
* [Discord] `#sponge`

## Latest Builds

### SpongeVanilla

### SpongeForge

### SpongeNeo

## Prerequisites
* [Java] 21

## Clone
The following steps will ensure your project is cloned properly.

1. `git clone --recursive https://github.com/SpongePowered/Sponge.git`
2. `cd Sponge`
3. `cp scripts/pre-commit .git/hooks`

## Setup
**Note**: Sponge uses [Gradle] as its build system. The repo includes the Gradle wrapper that will automatically download the correct Gradle 
version. Local installations of Gradle may work (as long as they are using Gradle 8.7+) but are untested. To execute the Gradle wrapper, run the 
`./gradlew` script on Unix systems or only `gradlew` on Windows systems.

To have browsable sources for use in-IDE, run `./gradlew :decompile`. This command will need to be re-ran after any change to
Minecraft version or to `.accesswidener` files. If sources are not appearing properly, an IDE refresh should…
