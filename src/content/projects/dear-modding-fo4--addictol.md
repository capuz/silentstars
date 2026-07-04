---
repo: "Dear-Modding-FO4/Addictol"
name: "Addictol"
description: "Combining all engine fixes for Fallout 4"
url: "https://github.com/Dear-Modding-FO4/Addictol"
language: "C++"
languages: ["C++"]
languagePcts: [99]
stars: 24
forks: 2
openIssues: 0
closedIssues: 22
watchers: 3
contributors: 5
recentReleases: 10
createdAt: "2026-01-28T06:05:51Z"
lastCommitAt: "2026-07-04T06:10:39Z"
lastReleaseAt: "2026-05-27T00:02:16Z"
status: "thriving"
tags: ["hidden_gem", "release_machine"]
healthScore: 98
undervaluedScore: 49
maintainers: ["Perchik71", "northaxosky", "TheGamerX20"]
openGraphImageUrl: "https://opengraph.githubassets.com/a0320e295fd220d6b4b79313f5a4c37a9da7a118f0e730e70318f75ba080e876/Dear-Modding-FO4/Addictol"
---

# Addictol

An F4SE plugin that combines engine fixes, crash fixes, and performance patches for Fallout 4. Supports OG, NG, and AE runtimes.

Consolidates patches from Buffout 4, X-Cell, Mentats, Escape Freeze Fix, Maka MaxPapyrusOps, Interior NavCut Fix, and Faster Workshop into a single plugin.

## Features

- **Memory Manager** - Replaces the game's allocator with Voltek for better performance
- **Faster Workshop** - O(1) keyword lookups instead of scanning all constructible objects
- **LibDeflate** - Faster BA2 decompression via libdeflate
- **Facegen** - Validates NPC face textures before using preprocessed data
- **Input Switch** - Proper keyboard/gamepad device switching
- **Scaleform Allocator** - Replaces Scaleform's memory mapper with configurable page/heap sizes
- **Archive Limits** - Increases max BA2 archives the game can load
- **Profiler** - Profiler for definitions performance your collection mods
- **Papyrus GC Bug** - Fixes a critical bug in garbage collection that causes premature loop termination
- ~60 additional crash fixes and stability patches

Each module can be individually toggled via `Addictol.toml`.

## Building

Requires Visual Studio 2022 Build Tools…
