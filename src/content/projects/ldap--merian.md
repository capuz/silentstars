---
repo: "LDAP/merian"
name: "merian"
description: "A Vulkan development framework"
readmeQualityOk: true
url: "https://github.com/LDAP/merian"
language: "C++"
languages: ["C++", "C"]
languagePcts: [50, 39]
stars: 18
forks: 3
openIssues: 0
closedIssues: 3
watchers: 2
contributors: 3
recentReleases: 0
createdAt: "2023-06-08T19:15:17Z"
lastCommitAt: "2026-10-23T11:14:24Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 99
undervaluedScore: 67
maintainers: ["LDAP"]
openGraphImageUrl: "https://opengraph.githubassets.com/9e4e505eac49265ec4bdf9c5e3b2d6f37885050da61241b10436c34c6a811f24/LDAP/merian"
---

# Merian 🎨

~ _A Vulkan development framework._ ~

Merian is split into multiple components:

 - [`merian`](https://github.com/LDAP/merian/tree/main/include/merian): Provides core abstractions and utilities (Vulkan context, memory allocation, configuration, IO, ...).
 - [`merian-graph`](https://github.com/LDAP/merian/tree/main/include/merian-graph): Implements an extensible Vulkan processing graph. Already implemented nodes can be found [here](https://github.com/LDAP/merian/tree/main/include/merian-graph/nodes).
 - [`merian-shaders`](https://github.com/LDAP/merian/tree/main/include/merian-shaders): Reusable shader code plus the scene representation, glTF/FBX/PBRT loaders, material system and texture management.

Merian aims for compatibility with Windows, Linux as well as all major GPU vendors.

## Getting started

### Build

You need the [Meson](https://github.com/mesonbuild/meson) buildsystem along with ninja and cmake. You can install it using your favorite package manager or pip: `pip3 install meson ninja cmake`.

```bash
git clone --recursive https://github.com/LDAP/merian
cd merian
# optionally clone any plugin you want to use into subprojects:
# cd subprojects
# git clone…
