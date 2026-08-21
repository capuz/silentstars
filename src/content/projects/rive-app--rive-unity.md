---
repo: "rive-app/rive-unity"
name: "rive-unity"
description: "Unity runtime for Rive"
readmeQualityOk: true
url: "https://github.com/rive-app/rive-unity"
homepage: "https://rive.app/"
language: "C#"
languages: ["C#"]
languagePcts: [100]
topics: ["design", "game-development", "ui", "unity", "rive", "animation"]
stars: 206
forks: 21
openIssues: 29
closedIssues: 134
watchers: 11
contributors: 12
recentReleases: 0
createdAt: "2023-10-31T03:49:34Z"
lastCommitAt: "2026-08-21T04:12:03Z"
lastReleaseAt: "2025-05-02T01:03:44Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 89
undervaluedScore: 42
maintainers: []
openGraphImageUrl: "https://opengraph.githubassets.com/857d865449ad1358cf2c66f7e46afd9912a986f5d5be2291200f7dbc50cab8d7/rive-app/rive-unity"
---

# Rive Unity

A Unity runtime library for [Rive](https://rive.app). This is currently a **technical preview** for Mac and Windows installs of Unity. We're hoping to gather feedback about the API and feature-set as we expand platform support.

## Unity Version Support

The package supports Unity LTS versions from 2021 upwards (including Unity 6).

### Rendering support

Currently supported platforms and backends include:

- [WebGL](https://github.com/rive-app/rive-unity/blob/HEAD/WEBGL.md)
- Metal on Mac
- Metal on iOS
- D3D11 on Windows
- OpenGL on Windows
- OpenGL on Android
- Vulkan on Windows
- Vulkan on Android
- Vulkan on Linux (x86_64)

Planned support for:

- D3D12

### Feature support

The rive-unity runtime uses the latest Rive C++ runtime.

| Feature                                                                                                                                  | Supported   |
| ---------------------------------------------------------------------------------------------------------------------------------------- | ----------- |
| [Animation Playback](https://rive.app/community/doc/animation-playback/docDKKxsr7ko)                            | ✅…
