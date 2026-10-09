---
repo: "NVIDIA-RTX/NRISamples"
name: "NRISamples"
description: "A collection of NRI samples demonstrating basic usage (also works as a test bench)"
readmeQualityOk: true
url: "https://github.com/NVIDIA-RTX/NRISamples"
language: "C++"
languages: ["C++"]
languagePcts: [88]
stars: 60
forks: 21
openIssues: 2
closedIssues: 12
watchers: 17
contributors: 7
recentReleases: 0
createdAt: "2021-09-27T16:49:17Z"
lastCommitAt: "2026-10-09T10:50:50Z"
lastReleaseAt: "2026-06-03T03:31:38Z"
status: "thriving"
tags: ["solo_builder", "legacy_hero"]
healthScore: 87
undervaluedScore: 44
maintainers: ["dzhdanNV", "EvanLuo42"]
openGraphImageUrl: "https://opengraph.githubassets.com/89fbfc42e0673a20c05835c5f17874f48d56c822e64890a9344d304b9bf9f92b/NVIDIA-RTX/NRISamples"
---

# NRI Samples

This is the test bench for [*NRI (NVIDIA Rendering Interface)*](https://github.com/NVIDIA-RTX/NRI).

## Build instructions

### Windows

- Install **WindowsSDK** and **VulkanSDK**
- Clone project and init submodules
- Generate and build project using **cmake**
  - To build the binary with static MSVC runtime, add `-DCMAKE_MSVC_RUNTIME_LIBRARY="MultiThreaded$<$<CONFIG:Debug>:Debug>"` parameter

Or by running scripts only:
- Run `Scripts/Windows/1-Deploy.bat`
- Run `Scripts/Windows/2-Build.bat`

### Linux

- Install **VulkanSDK**, **xorg-dev**,
- Clone project and init submodules
- Generate and build project using **cmake**

Or by running scripts only:
- Run `bash Scripts/Linux/1-Deploy.sh`
- Run `bash Scripts/Linux/2-Build.sh`

### macOS

- Install Xcode command line tools, CMake 3.30+, Ninja and the [Vulkan SDK](https://vulkan.lunarg.com/sdk/home#mac)
- Source the Vulkan SDK's `setup-env.sh`
- Run `bash Scripts/MacOS/1-Deploy.sh`, then `bash Scripts/MacOS/2-Build.sh`

Scripts resolve the project root from their own location and can be launched from any working directory. Build output remains in `_Build` and `_Bin` at the project root.

To clean generated files, run…
