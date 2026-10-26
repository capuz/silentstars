---
repo: "flatcar/scripts"
name: "scripts"
description: "image build and composition scripts for Flatcar Container Linux"
readmeQualityOk: true
url: "https://github.com/flatcar/scripts"
homepage: "https://github.com/flatcar/flatcar/issues"
language: "Shell"
languages: ["Shell"]
languagePcts: [91]
topics: ["flatcar", "flatcar-linux", "sdk", "hacktoberfest"]
stars: 85
forks: 118
openIssues: 0
closedIssues: 0
watchers: 10
contributors: 242
recentReleases: 0
createdAt: "2018-03-05T14:43:05Z"
lastCommitAt: "2026-10-26T09:18:00Z"
lastReleaseAt: "2022-11-09T13:47:29Z"
status: "thriving"
tags: ["hidden_gem", "legacy_hero", "fork_magnet"]
healthScore: 89
undervaluedScore: 54
maintainers: ["sayanchowdhury", "tormath1", "krnowak"]
openGraphImageUrl: "https://opengraph.githubassets.com/b85f9c29a5f1cfe3028fc43fc54b85e4ae22b684418ef8bf3f589996f232b8bc/flatcar/scripts"
discussionCount: 0
---

> **Note:** To file an issue for any Flatcar repository, please use the [central Flatcar issue tracker](https://github.com/flatcar/Flatcar/issues).

# Flatcar Container Linux SDK scripts

Welcome to the scripts repo, your starting place for most things here in the Flatcar Container Linux SDK. To get started you can find our documentation on [the Flatcar docs website][flatcar-docs].

The SDK can be used to
* Patch or update applications or libraries included in the Flatcar OS image
* Add or remove applications and / or libraries
* Modify the kernel configuration and add or remove kernel modules included with Flatcar
* Build OS images for a variety of targets (qemu, bare metal, AWS, Azure, VMWare, etc.)
* And lastly, the SDK can be used to upgrade SDK packages and to build new SDKs

[flatcar-docs]: https://www.flatcar.org/docs/latest/reference/developer-guides/sdk-modifying-flatcar/

# Using the scripts repository

The repository is meant to be the entry point for Flatcar builds and development.
Ebuilds for all packages reside in one of 2 subdirectories - [coreos-overlay](https://github.com/flatcar/scripts/blob/HEAD/sdk_container/src/third_party/coreos-overlay) and…
