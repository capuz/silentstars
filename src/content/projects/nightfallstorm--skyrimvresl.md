---
repo: "Nightfallstorm/SkyrimVRESL"
name: "SkyrimVRESL"
description: "Adds ESL support to Skyrim"
readmeQualityOk: true
url: "https://github.com/Nightfallstorm/SkyrimVRESL"
language: "C++"
languages: ["C++"]
languagePcts: [79]
stars: 12
forks: 3
openIssues: 3
closedIssues: 35
watchers: 2
contributors: 5
recentReleases: 0
createdAt: "2023-02-18T00:44:44Z"
lastCommitAt: "2026-10-31T09:53:06Z"
lastReleaseAt: "2026-03-09T08:36:56Z"
status: "thriving"
tags: ["needs_contributors", "hidden_gem"]
healthScore: 98
undervaluedScore: 40
maintainers: ["alandtse"]
openGraphImageUrl: "https://opengraph.githubassets.com/2b9aa27d3872c38f26a999ba95631a06348bed08cc1671b665ae086a4e4b8ce9/Nightfallstorm/SkyrimVRESL"
---

# Skyrim VR ESL

Adds ESL support to SkyrimVR.

- [Nexus](https://www.nexusmods.com/skyrimspecialedition/mods/106712)

## Requirements

- [CMake](https://cmake.org/)
  - Add this to your `PATH`
- [PowerShell](https://github.com/PowerShell/PowerShell/releases/latest)
- [Vcpkg](https://github.com/microsoft/vcpkg)
  - Add the environment variable `VCPKG_ROOT` with the value as the path to the folder containing vcpkg
- [Visual Studio Community 2022](https://visualstudio.microsoft.com/)
  - Desktop development with C++
- [CommonLibVR](https://github.com/alandtse/CommonLibVR/tree/ng) (CommonLibSSE-NG, VR runtime)
  - Add this as as an environment variable `CommonLibVRPath`

## User Requirements

- [VR Address Library for SKSEVR](https://www.nexusmods.com/skyrimspecialedition/mods/58101)
  - Needed for VR

## Local Development Setup

After cloning, install the pre-commit hooks (requires [pre-commit](https://pre-commit.com/)):
```
pre-commit install
```
This runs `clang-format` on staged files before each commit, matching the CI format check.

## Register Visual Studio as a Generator

- Open `x64 Native Tools Command Prompt`
- Run `cmake`
- Close the cmd window

## Building

```
git clone…
