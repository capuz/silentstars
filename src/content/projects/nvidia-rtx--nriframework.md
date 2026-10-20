---
repo: "NVIDIA-RTX/NRIFramework"
name: "NRIFramework"
description: "Simple framework & sandbox for NRI based apps"
readmeQualityOk: true
url: "https://github.com/NVIDIA-RTX/NRIFramework"
language: "C++"
languages: ["C++"]
languagePcts: [92]
stars: 35
forks: 21
openIssues: 0
closedIssues: 5
watchers: 16
contributors: 7
recentReleases: 0
createdAt: "2021-09-27T16:48:49Z"
lastCommitAt: "2026-10-20T08:48:51Z"
status: "thriving"
tags: ["solo_builder", "legacy_hero", "fork_magnet"]
healthScore: 95
undervaluedScore: 59
maintainers: ["dzhdanNV", "selimsandal"]
openGraphImageUrl: "https://opengraph.githubassets.com/3c6474b89dc84c5304e240ffec14812cd7356d50d0913a2ff34576a4f0ef4cf4/NVIDIA-RTX/NRIFramework"
---

# NRI framework

It's a simple sandbox for developement of sample applications based on [*NRI (NVIDIA Rendering Interface)*](https://github.com/NVIDIA-RTX/NRI)

## Build scripts

Install CMake 3.30+ and the platform's C/C++ toolchain. On macOS, also install Ninja and the [Vulkan SDK](https://vulkan.lunarg.com/sdk/home#mac), then source the SDK's `setup-env.sh`.

- Windows: run `Scripts/Windows/1-Deploy.bat`, then `Scripts/Windows/2-Build.bat`
- Linux: run `bash Scripts/Linux/1-Deploy.sh`, then `bash Scripts/Linux/2-Build.sh`
- macOS: run `bash Scripts/MacOS/1-Deploy.sh`, then `bash Scripts/MacOS/2-Build.sh`

Scripts resolve the NRIFramework root from their own location and can be launched from any working directory. Build output remains in `_Build` and `_Bin` at the project root.

To clean generated files, run `Scripts/Windows/4-Clean.bat`, `bash Scripts/Linux/4-Clean.sh` or `bash Scripts/MacOS/4-Clean.sh`. Each also calls NRI's cleanup script in the corresponding `External/NRI/Scripts/` platform folder.
