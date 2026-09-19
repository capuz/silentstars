---
repo: "siohaza/OpenGromada"
name: "OpenGromada"
description: "Reverse engineered engine powering various Sigma Games titles"
readmeQualityOk: true
url: "https://github.com/siohaza/OpenGromada"
language: "C++"
languages: ["C++"]
languagePcts: [91]
topics: ["alien-shooter", "c", "cpp", "reverse-engineering", "sdl", "sdl3", "sigma-games", "sigma-team"]
stars: 9
forks: 0
openIssues: 0
closedIssues: 2
watchers: 1
contributors: 1
recentReleases: 2
createdAt: "2026-08-29T11:31:35Z"
lastCommitAt: "2026-09-19T08:14:28Z"
lastReleaseAt: "2026-08-31T15:24:07Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 98
undervaluedScore: 34
maintainers: ["siohaza"]
openGraphImageUrl: "https://opengraph.githubassets.com/4352c39041335ac200f44c0c1dfb543fec96a8cb6d1270d1ffcdb9d90ae045d8/siohaza/OpenGromada"
---

# OpenGromada

Reverse engineered engine that is used in variety of games developed by Sigma Games and some of 3rdparty games using this engine. Naming comes from the internal naming of the engine in registry code.

## Features

- Supports AS1/ZS1, Theseus, Crazy Lunch, Locoland/Steamland.
- Cross-platform and cross-arch support
- Widescreen resolution support
- Gamepad support
- Bumped engine limits up to 8192. Use `GETSPRITE_VID + nvid` for the
entire range

## Building

Requirements:

- CMake/Premake
- C++20 compiler
- SDL3
- Steamworks SDK (optional, needed only for Steam's AS1)
- FFmpeg 6+ (optional, needed for Locoland videos)

```sh
cmake -S . -B build/native -DCMAKE_BUILD_TYPE=Release
cmake --build build/native --parallel
```

The single-configuration executable is `build/native/OpenGromada` on Unix-like
systems or `OpenGromada.exe` on Windows.

Place the executable beside `objects.res` and
the game's data directories. Alternatively, point to that directory with
`--data-path="/path/to/game"`.

## Runtime options

| Option | What it does |
|---|---|
| `--renderer=auto\|gpu\|software` | Selects actual game rendering. `auto` tries the GPU and falls back to software if…
