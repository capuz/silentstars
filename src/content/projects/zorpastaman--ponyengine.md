---
repo: "ZorPastaman/PonyEngine"
name: "PonyEngine"
description: "Pony Engine is a modular game engine with a minimal core."
readmeQualityOk: true
url: "https://github.com/ZorPastaman/PonyEngine"
language: "C++"
languages: ["C++"]
languagePcts: [95]
topics: ["cpp", "cpp23", "d3d12", "game-engine", "gamedev", "modular-engine", "windows"]
stars: 5
forks: 0
openIssues: 0
closedIssues: 0
watchers: 2
contributors: 1
recentReleases: 2
createdAt: "2023-12-12T21:44:40Z"
lastCommitAt: "2026-04-21T09:03:56Z"
lastReleaseAt: "2026-04-21T09:04:56Z"
status: "quiet"
tags: ["solo_builder"]
healthScore: 48
undervaluedScore: 45
maintainers: ["ZorPastaman"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/730876672/e582d4aa-84d0-43c7-8ffd-0b1d4e694c0f"
---

# Pony Engine
Pony Engine is a modular game engine with a minimal core. Users can easily add their own modules and even replace the engine modules.

## Key features

- Modular architecture;
- Replaceable engine modules;
- Easily extensible;
- Mesh shader–based render.

## Prerequisites

- CMake 3.31+;
- Ninja generator;
- C\++ 23 compiler;
- HLSL SM 6.6+ compiler;
- Platform SDKs.

## Quick start for game developers

### Simple way

1. Download any sample project from [here](https://github.com/ZorPastaman/PonyEngine/blob/HEAD/Game);
2. Follow instructions of the chosen sample.

### Advanced way

1. Build C++ std module;
2. Add the engine as a dependency to your CMake project. Add this to your project `CMakeLists.txt`:
```
FetchContent_Declare(
	PonyEngine
	GIT_REPOSITORY https://github.com/ZorPastaman/PonyEngine.git
	GIT_TAG <Branch_or_Tag>
)
FetchContent_MakeAvailable(PonyEngine)
```
3. Add your game modules (see [Architecture](#Architecture) and [Modules](#modules) for details);
4. Link the engine and game modules to the engine application module. 
5. Build and install the project.

## Architecture

The engine core is intentionally minimal. Most functionality is implemented in…
