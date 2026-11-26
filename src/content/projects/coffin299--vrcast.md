---
repo: "coffin299/VRCast"
name: "VRCast"
description: "An app that lets you use VRChat avatars in OBS and more, VSeeFace-style / An app that lets you handle VRChat avatars like VSeeFace in OBS and similar tools"
originalDescription: "An app that lets you use VRChat avatars in OBS and more, VSeeFace-style / VRChatアバターをVSeeFace 風にOBSとかで扱えるようにするアプリ"
descriptionLang: "ja"
readmeQualityOk: true
url: "https://github.com/coffin299/VRCast"
homepage: "https://coffin299.booth.pm/items/8933317"
language: "C#"
languages: ["C#"]
languagePcts: [95]
topics: ["obs", "vrc", "vrchat", "vrchat-tool", "vtuber"]
stars: 32
forks: 3
openIssues: 1
closedIssues: 10
watchers: 1
contributors: 4
recentReleases: 10
createdAt: "2026-10-03T01:21:29Z"
lastCommitAt: "2026-11-26T23:34:07Z"
lastReleaseAt: "2026-10-07T04:17:00Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "funded", "release_machine"]
healthScore: 97
undervaluedScore: 49
maintainers: ["coffin299"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1402515874/9028ceae-b6d6-4912-a209-7f4ceb82232c"
fundingLinks: ["GITHUB:https://github.com/coffin299", "KO_FI:https://ko-fi.com/coffin299"]
---

# VRCast

A lightweight standalone runtime that runs 3D avatars for VRChat in a form close to individual avatars, rather than requiring a full Unity project. It aims to display and track avatars easily, like VSeeFace, and output them to streaming software such as OBS.

```text
VRChat avatar (Unity / VCC project)          VRM avatar (VRoid, etc.)
        ↓  com.vrcast.converter (Editor-only package)      │
MyAvatar.vrcaster                                   MyAvatar.vrm (no conversion needed)
        ↓                                                │
VRCast.exe (Runtime)  ←──────────────────────────────────┘
        ↓
OBS (Window Capture / Game Capture / Spout2) / virtual camera (Discord / Zoom, etc.)
```

The design goal is that users do not need to keep the Unity Editor, VCC, or the VRChat project running at all times.

**In-app multilingual support**: English / 日本語 / 한국어 / 简体中文 / 繁體中文 (the default is "Auto", which matches the OS language; you can switch at any time with the button at the top of the screen)
