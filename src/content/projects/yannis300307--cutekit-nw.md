---
repo: "yannis300307/CuteKit-Nw"
name: "CuteKit-Nw"
description: "A complete rendering toolkit for extremelly limited hardware."
readmeQualityOk: true
url: "https://github.com/yannis300307/CuteKit-Nw"
language: "Rust"
languages: ["Rust"]
languagePcts: [85]
topics: ["2d", "3d", "gui", "numworks", "optimized"]
stars: 5
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2026-05-29T00:07:17Z"
lastCommitAt: "2026-08-30T00:42:27Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "funded"]
healthScore: 75
undervaluedScore: 29
maintainers: ["yannis300307"]
openGraphImageUrl: "https://opengraph.githubassets.com/18e68bf1500e28b065ae64251f04ba6be4555dadd1e8a656f665cfc1cf46028f/yannis300307/CuteKit-Nw"
fundingLinks: ["GITHUB:https://github.com/yannis300307"]
---

# CuteKit (Nw)

A rendering toolkit for extremelly limited hardware featuring a 2D drawing abstraction layer, a layout system for GUIs and a fully textured 3D renderer. Made for the Numworks calculator.

The 3D renderer is based on my Numcraft project but has been highly reworked.

## DISCLAIMER

### My engine is not production ready yet! Please wait for this notice to be removed before using the engine in your games as it will be updated very often with breaking changes. Moreover, some features are not usable yet.

### The code also contains temporary testing code and is not usable as a lib.

## Setup the build environment

### For Debian based Linux distros

You can use the installer. Run `bash ./setup.sh` and the installer should install everything for you. (Not widely tested. Use it at your own risk.)

### Other distros and Macos

To build this app, you will need to install an embedded ARM rust compiler, the [Arm GCC compiler](https://developer.arm.com/downloads/-/gnu-rm) as well as [Node.js](https://nodejs.org/en/). 
The SDK for Epsilon apps is shipped as a npm module called [nwlink](https://www.npmjs.com/package/nwlink) that will automatically be installed at compile time.…
