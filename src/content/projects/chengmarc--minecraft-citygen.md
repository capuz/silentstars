---
repo: "chengmarc/minecraft-citygen"
name: "minecraft-citygen"
description: "Minecraft CityGen: Turn your own Minecraft builds into an entire city. "
readmeQualityOk: true
url: "https://github.com/chengmarc/minecraft-citygen"
homepage: "https://www.minecraftforum.net/forums/mapping-and-modding-java-edition/minecraft-tools/3231254-minecraft-citygen-customizable-ai-city-generator"
language: "Python"
languages: ["Python"]
languagePcts: [73]
topics: ["minecraft", "city-generator", "generative-art", "level-generation", "minecraft-java", "minecraft-tools", "procedural-generation", "schematic", "world-generation", "city-builder"]
stars: 476
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 1
createdAt: "2026-08-18T10:41:04Z"
lastCommitAt: "2026-11-25T13:21:38Z"
lastReleaseAt: "2026-09-14T17:30:26Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 88
undervaluedScore: 24
maintainers: ["chengmarc", "claude"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1338283854/49410e97-6649-4672-9f55-563385f6be76"
---

## Generated Cities

# Built-in Assets

## Modern Assets

## Medieval Assets

# Tutorial - Marking Your Own Assets

### Your buildings must face south

**MC CityGen** builds cities from structures you mark up inside your own MC world,
using a handful of marker blocks.

For buildings, place: 
- a **Gold block** and a **Diamond block** at two opposite corners of each region you want captured.
- an **Emerald block** horizontally adjacent to the bottom gold block to mark the authored ground level. 

## One-piece building & three-piece building
- One gold/diamond pair creates a one-piece building.
- Three vertically aligned pairs with the same footprint create a stackable building with bottom, middle, and top pieces. 
- You can tune any three-piece building with a sign directive above its emerald: `stack: 3-7` — how many middle sections it may grow (min–max)

The exact rules for roads and buildings are in the
[in-world asset conventions](https://github.com/chengmarc/minecraft-citygen/blob/HEAD/src/README.md#in-world-asset-conventions).

# Technical Details

```bash
python -m pip install -e .
python -m pytest -q
pythonw src/application.pyw
```
