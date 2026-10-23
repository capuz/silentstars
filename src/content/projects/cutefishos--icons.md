---
repo: "cutefishos/icons"
name: "icons"
description: "The Cutefish icon theme, based on Colloid"
readmeQualityOk: true
url: "https://github.com/cutefishos/icons"
homepage: "https://cutefish.org"
language: "CMake"
languages: ["CMake"]
languagePcts: [100]
stars: 40
forks: 20
openIssues: 3
closedIssues: 0
watchers: 4
contributors: 11
recentReleases: 0
createdAt: "2021-04-03T12:49:51Z"
lastCommitAt: "2026-10-23T01:04:35Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "legacy_hero", "funded"]
healthScore: 78
undervaluedScore: 43
maintainers: ["reionwong"]
openGraphImageUrl: "https://opengraph.githubassets.com/b576af5847f8b1468de535257531fb92b42228545236d458ecf2655a87b9458a/cutefishos/icons"
fundingLinks: ["GITHUB:https://github.com/cutefishos"]
---

# Cutefish Icon Theme

Based on [Colloid-icon-theme](https://github.com/vinceliuice/Colloid-icon-theme).
The window control symbolics are adapted from FishUI's artwork.

## Build and install

```sh
cmake -S . -B build
sudo cmake --install build
```

The theme installs as `Cutefish` under `/usr/share/icons`; set
`CMAKE_INSTALL_PREFIX` to choose another prefix.
