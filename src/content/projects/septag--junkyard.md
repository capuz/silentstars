---
repo: "septag/Junkyard"
name: "Junkyard"
description: "Yet another multiplatform C++ framework to make games"
readmeQualityOk: true
url: "https://github.com/septag/Junkyard"
language: "C++"
languages: ["C++"]
languagePcts: [90]
stars: 91
forks: 4
openIssues: 0
closedIssues: 0
watchers: 4
contributors: 1
recentReleases: 0
createdAt: "2023-02-04T18:52:33Z"
lastCommitAt: "2026-10-12T11:14:46Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 68
undervaluedScore: 28
maintainers: ["septag"]
openGraphImageUrl: "https://opengraph.githubassets.com/946d71678a4afb712051137016ab60bd0bf48010baac13990052ecee338865fd/septag/Junkyard"
---

# Junkyard

Yet another portable C++ framework to make games and maybe some other related high-performance applications.

The goal is to focus on simplicity, fast iteration and development. Features will be developed based on the game/projects I do with it, so this is not going to be do-it-all engine/framework at all, but probably with a strong foundation to build your own renderers and other stuff on top of it.

It's very much WIP, so not much to show off right now.

## Overview and Features

- Multiplatform. Currently supported platforms (ARM64, x86_64 architectures only):
    - Windows (Tested on Windows 10 x64)
    - Linux (Tested on Ubuntu 22/PopOS): *Not Tested with latest updates* 
    - MacOS-Arm64 M1 and up (through MoltenVk 1.3): *Not Tested with latest updates*
    - ~~Android~~ (Currently broken, might work with Vulkan 1.3 hardware)
- Minimal C'ish C++20: Some people call it Sane-C++ or similarly [Orthodox-C++](https://gist.github.com/bkaradzic/2e39896bc7d8c34e042b). I use a very small subset of newer C++ standards:
    - No stdc++ allowed in the code
    - No RTTI/Exceptions
    - Relying heavily on POD (Plain-old-data) structs, zero-init by default and avoiding…
