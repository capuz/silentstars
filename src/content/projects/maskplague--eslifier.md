---
repo: "MaskPlague/ESLifier"
name: "ESLifier"
description: "A tool to find ESL flaggable mods, compact form IDs, and patch dependent plugins/files automatically."
readmeQualityOk: true
url: "https://github.com/MaskPlague/ESLifier"
homepage: "https://www.nexusmods.com/skyrimspecialedition/mods/145168"
language: "Python"
languages: ["Python"]
languagePcts: [99]
stars: 28
forks: 1
openIssues: 4
closedIssues: 183
watchers: 1
contributors: 1
recentReleases: 0
createdAt: "2024-12-20T20:38:45Z"
lastCommitAt: "2026-09-10T08:20:45Z"
lastReleaseAt: "2025-03-10T22:57:49Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 89
undervaluedScore: 63
maintainers: ["MaskPlague"]
openGraphImageUrl: "https://opengraph.githubassets.com/0721ca9ae25c10a60504b7e4788c0a8edee7a23386187ed91ce7c6e012e72c31/MaskPlague/ESLifier"
---

# ESLifier (This README may be outdated, when in doubt, refer to the tool tips inside the program)
ESLifier allows users to scan their mod list for plugins that can either be flagged as ESL or compacted to fit ESL conditions. The user can then flag or compact the relevant plugins.
If the user compacts a plugin, then ESLifier will also patch and rename all files that have that mod as a master (plugins and files that directly reference a Form ID present in the compacted plugin). The user can also
scan for files and plugins that are added after compacting so that they can also be patched to fit the new Form IDs of the compacted master.

Nexus Mods [ESLifier](https://www.nexusmods.com/skyrimspecialedition/mods/145168)

Nexus Mods [ESLifier MO2 Integration Plugin](https://www.nexusmods.com/skyrimspecialedition/mods/126298)
  
# For Users
## Files that are patched by ESLifier
<details>
  <summary>Files Patched</summary>
  
  <details>
    <summary>.INI Files</summary>

    Animated Object Swapper
    AutoBody
    Base Object Swapper
    Completionist
    Container Item Distributor
    Container Record Distributor
    Crafting Inventory Extender
    Description Framework
    DtryKeyUtil…
