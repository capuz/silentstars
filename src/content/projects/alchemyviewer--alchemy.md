---
repo: "AlchemyViewer/Alchemy"
name: "Alchemy"
description: "Alchemy is an openmetaverse compatible viewer striving to be at the forefront of stability, performance, and technological advancement in the open-source metaverse viewer field."
url: "https://github.com/AlchemyViewer/Alchemy"
homepage: "https://www.alchemyviewer.org"
language: "C++"
languages: ["C++"]
languagePcts: [92]
topics: ["metaverse", "secondlife"]
stars: 57
forks: 31
openIssues: 137
closedIssues: 68
watchers: 10
contributors: 118
recentReleases: 0
createdAt: "2022-12-08T13:48:04Z"
lastCommitAt: "2026-06-27T00:36:31Z"
lastReleaseAt: "2025-11-01T04:42:52Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "fork_magnet"]
healthScore: 85
undervaluedScore: 52
maintainers: ["RyeMutt", "gwigz", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/b33f0f8544a6b738cdc5d9c6e95ebb3f5c7f6b8bf0461a496c51fc5eb6e1382d/AlchemyViewer/Alchemy"
discussionCount: 2
---

<picture>
  <source srcset="doc/alchemy_logo.png">
</picture>

# Alchemy Viewer

[Alchemy Viewer](https://www.alchemyviewer.org) is a third-party client for [Second Life](https://secondlife.com), forked from the official [Linden Lab viewer](https://github.com/secondlife/viewer). We focus on a cohesive, modern experience built on thoughtful defaults — while staying on the bleeding edge of new platform features.

## 📥 Download

Most users install a [pre-built release][releasesgh] for Windows, macOS, or Linux. Release candidates and project viewers are announced on our [Discord server][discord].

## 🔨 Building from source

Alchemy uses CMake with vcpkg for dependency management. Platform setup, presets, build options, tests, packaging, and troubleshooting all live in [**doc/BUILD.md**](doc/BUILD.md).

```
git clone --recurse-submodules https://github.com/AlchemyViewer/Alchemy.git alchemy
cd alchemy
python3 -m venv .venv && source .venv/bin/activate   # Windows: .\.venv\Scripts\Activate.ps1
pip install -r requirements.txt
dotnet tool restore                                  # packaging only
cmake -S indra --preset <preset>                     # see BUILD.md for presets
cmake --build…
