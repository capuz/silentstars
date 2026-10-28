---
repo: "AlchemyViewer/Alchemy"
name: "Alchemy"
description: "Alchemy is an openmetaverse compatible viewer striving to be at the forefront of stability, performance, and technological advancement in the open-source metaverse viewer field."
readmeQualityOk: true
url: "https://github.com/AlchemyViewer/Alchemy"
homepage: "https://www.alchemyviewer.org"
language: "C++"
languages: ["C++"]
languagePcts: [91]
topics: ["metaverse", "secondlife"]
stars: 58
forks: 41
openIssues: 140
closedIssues: 78
watchers: 8
contributors: 128
recentReleases: 0
createdAt: "2022-12-08T13:48:04Z"
lastCommitAt: "2026-10-28T09:57:44Z"
lastReleaseAt: "2025-01-19T04:53:52Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "fork_magnet"]
healthScore: 86
undervaluedScore: 54
maintainers: ["RyeMutt", "Martin-Pitt"]
openGraphImageUrl: "https://opengraph.githubassets.com/d34b8dbdcf22f719aa126af1698688db7b82520fecb6b096e092ba2e8cea71ea/AlchemyViewer/Alchemy"
discussionCount: 3
---

# Alchemy Viewer

[Alchemy Viewer](https://www.alchemyviewer.org) is a third-party client for [Second Life](https://secondlife.com), forked from the official [Linden Lab viewer](https://github.com/secondlife/viewer). We focus on a cohesive, modern experience built on thoughtful defaults — while staying on the bleeding edge of new platform features.

## 📥 Download

Most users install a [pre-built release][releasesgh] for Windows, macOS, or Linux. Release candidates and project viewers are announced on our [Discord server][discord].

## 🔨 Building from source

Alchemy uses CMake with vcpkg for dependency management. Platform setup, presets, build options, tests, packaging, and troubleshooting all live in [**doc/BUILD.md**](https://github.com/AlchemyViewer/Alchemy/blob/HEAD/doc/BUILD.md).

```
git clone --recurse-submodules https://github.com/AlchemyViewer/Alchemy.git alchemy
cd alchemy
cmake -S indra --preset <preset>                     # see BUILD.md for presets
cmake --build build-<OS>-<preset> --config Release
```

## 🤝 Contribute

File bug reports, suggest enhancements, or open a pull request — see…
