---
repo: "AxorBisInfinitive/infs-farlands"
name: "infs-farlands"
description: "Brings back the Far Lands in modern Minecraft."
originalDescription: "Brings back the Far Lands in modern Minecraft."
descriptionLang: "zh"
readmeQualityOk: true
url: "https://github.com/AxorBisInfinitive/infs-farlands"
language: "Java"
languages: ["Java"]
languagePcts: [100]
stars: 9
forks: 0
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 1
recentReleases: 5
createdAt: "2026-07-20T07:48:03Z"
lastCommitAt: "2026-10-25T02:47:41Z"
lastReleaseAt: "2026-08-24T10:51:36Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 90
undervaluedScore: 50
maintainers: ["AxorBisInfinitive"]
openGraphImageUrl: "https://opengraph.githubassets.com/f87bce87c74fe7c7fed727601c8b5cb5d63955c77ef1af6e17b343acc2ab5174/AxorBisInfinitive/infs-farlands"
---

# Inf's Farlands

[English](https://github.com/AxorBisInfinitive/infs-farlands/blob/HEAD/README.EN_US.md) / [Wiki](https://github.com/AxorBisInfinitive/infs-farlands/blob/HEAD/docs/wiki/wiki.md)

## Build

```bash
./gradlew build
```

## Features

- Changes the game's X/Y/Z axis limits to [-2147483648, 2147483647].
- Wrote a separate **lighting engine** and **terrain pipeline** for the full Y axis.
- Fixed some abnormal game behaviors at high coordinates.

## Notes

This mod does not depend on `Fabric API`.

The configuration file is located at `config/infs-farlands.json`.

The lighting engine and terrain pipeline are currently still in **testing**.

## Warning

This mod is experimental.

Some bugs may cause the following:

- CTD
- OOM
- Game freeze
- Data corruption

If you find a bug, or want to make a suggestion, please create an Issue and Pull Request.

## Compatibility

### Known incompatible mods

- **C2ME**
- **ScalableLux**

### Compatible mods

- **Sodium 0.9.2**
- **Chunky 1.5.3**
