---
repo: "StevenMiller123/shadNet-PS4"
name: "shadNet-PS4"
description: "shadNet for PS4"
readmeQualityOk: true
url: "https://github.com/StevenMiller123/shadNet-PS4"
language: "C++"
languages: ["C++"]
languagePcts: [97]
stars: 6
forks: 1
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 5
recentReleases: 1
createdAt: "2026-08-24T15:30:54Z"
lastCommitAt: "2026-11-06T02:43:33Z"
lastReleaseAt: "2026-11-03T14:39:17Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 80
undervaluedScore: 50
maintainers: ["StevenMiller123", "kalaposfos13", "ItsJokerZz"]
openGraphImageUrl: "https://opengraph.githubassets.com/bbc7144b11d9c0ffd945ae5a3ca4280daab788631797c023400035f4fc4bf034/StevenMiller123/shadNet-PS4"
---

# shadNet PS4

This is a GoldHEN plugin designed to bring shadNet to jailbroken PS4s. This is still extremely early in development, expect bugs.

## Compiling this project

This project relies on the [OpenOrbis PS4 Toolchain](https://github.com/StevenMiller123/OpenOrbis-PS4-Toolchain).

### Setting up the OpenOrbis PS4 Toolchain
Download the toolchain from https://github.com/StevenMiller123/OpenOrbis-PS4-Toolchain/releases/latest/download/openorbis_toolchain.tar.gz, \
then extract the toolchain and set the OO_PS4_TOOLCHAIN environment variable to the "PS4Toolchain" folder in the extracted contents.

### Windows instructions

#### Building the plugin

```pwsh
git clone https://github.com/StevenMiller123/shadNet-PS4.git --recursive
cd ./shadNet-PS4
cmake -S . -B build -G Ninja
cmake --build build --parallel $env:NUMBER_OF_PROCESSORS
```

### Linux instructions

#### Building the plugin

```bash
git clone https://github.com/StevenMiller123/shadNet-PS4.git --recursive
cd ./shadNet-PS4
cmake -S . -B build
cmake --build build --parallel $(nproc)
```

## Installing the plugin

After that, the compiled GoldHEN plugin should be in ./bin/plugins/prx_final.
Copy the .prx from there to your…
