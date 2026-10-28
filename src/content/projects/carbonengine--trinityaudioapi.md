---
repo: "carbonengine/trinityaudioapi"
name: "trinityaudioapi"
description: "Single source of truth for audio interfaces shared between Carbon Trinity and Carbon Audio."
readmeQualityOk: true
url: "https://github.com/carbonengine/trinityaudioapi"
language: "CMake"
languages: ["CMake"]
languagePcts: [84]
stars: 7
forks: 12
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 19
recentReleases: 3
createdAt: "2026-05-18T15:50:17Z"
lastCommitAt: "2026-10-28T09:57:39Z"
lastReleaseAt: "2026-10-28T09:58:15Z"
status: "thriving"
tags: ["fork_magnet"]
healthScore: 74
undervaluedScore: 47
maintainers: ["ccptoebeans", "DanielPreineder", "phevosccp"]
openGraphImageUrl: "https://opengraph.githubassets.com/ccd229aa29002dabef5cd4a073f28bc746b114391a6a94d1f615fd839aef23ef/carbonengine/trinityaudioapi"
---

# Carbon Trinity-Audio Interfaces
Single source of truth for audio interfaces shared between Carbon Trinity and Carbon Audio systems. This repository centralizes interface definitions to prevent API inconsistencies and maintain compatibility between systems.

# Current Interfaces

- `include/ITr2AudEmitter.h` - Interface for audio emitters
- `include/ITr2AudParentBall.h` - Interface for telling an audio emitter which ball it is mounted on
- `include/ITr2Audio.h` - Interface for audio functionality on assets
- `include/IAudioInputMgr.h` - Interface for audio input management

# Usage
To use this library in your project, add the following to your CMakeLists.txt:

```cmake
find_package(CarbonTrinityAudioAPI REQUIRED)
target_link_libraries(YourTarget INTERFACE CarbonTrinityAudioAPI)
```

# Building the default project Locally

1. run after cloning this repository, or any carbon-component, `cd` into it and run `git submodule update --init` 
2. At the top level of your project (alongside your CMakeLists.txt file) create a file called: `CMakeUserPresets.json`
3. Copy the contents of the `CMakePresets.json` file into `CMakeUserPresets.json` and delete everything from the…
