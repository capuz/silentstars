---
repo: "hikarii-dev/veloria-cs2-dumper"
name: "veloria-cs2-dumper"
description: "Counter-Strike: 2 Offset/vpk Dumper"
readmeQualityOk: true
url: "https://github.com/hikarii-dev/veloria-cs2-dumper"
language: "C++"
languages: ["C++", "Zig", "Rust", "C#"]
languagePcts: [26, 25, 25, 23]
stars: 10
forks: 1
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2026-07-15T06:17:59Z"
lastCommitAt: "2026-10-18T08:16:27Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 80
undervaluedScore: 44
maintainers: ["github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/bbe2238ed1df08b98a438ab15f5c80c200564a5bcbcbd03fab3093faa2ff1f10/hikarii-dev/veloria-cs2-dumper"
---

# veloria-cs2-dumper

This repository is automatically updated and serves as the asset and offset storage. It contains CS2 game data extracted and processed on every game update.

## Contents

### Assets
- **`maps/`** - Radar images and coordinate data for all official CS2 maps
- **`workshop/`** - Radar images and data for Steam Workshop maps
- **`icons/`** - Weapon and item icons used in the radar overlay
- **`characters/`** - Player model thumbnails
- **`manifest.json`** - Current CS2 build ID and map index

### Schemas (live dump)
- **`schemas/`** - Full schema dump from a running CS2 process - all classes, enums, fields per DLL

| File pattern | Contents |
|---|---|
| `client_dll.*`, `engine2_dll.*`, ... | All classes and fields for each DLL |
| `buttons.*` | Key buttons |
| `interfaces.*` | Engine interfaces |
| `offsets.*` | Live offsets |
| `info.*` | Build ID and timestamp |

Formats: json / hpp / rs / cs / zig

### Offsets (static)
- **`offsets/`** - Game offsets extracted from CS2 DLLs, updated on every patch

| File | Format | Usage |
|------|--------|-------|
| `offsets.json` | JSON | General purpose, web/scripts |
| `offsets.hpp` | C++ header | Native plugins |
|…
