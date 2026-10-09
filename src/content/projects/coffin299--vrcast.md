---
repo: "coffin299/VRCast"
name: "VRCast"
description: "An app that lets you use VRChat avatars like VSeeFace with OBS and other tools."
originalDescription: "VRChatアバターをVseeFace風にOBSとかで扱えるようにするアプリ"
descriptionLang: "ja"
readmeQualityOk: true
url: "https://github.com/coffin299/VRCast"
homepage: "https://coffin299.booth.pm/items/8933317"
language: "C#"
languages: ["C#"]
languagePcts: [91]
stars: 16
forks: 2
openIssues: 1
closedIssues: 8
watchers: 0
contributors: 4
recentReleases: 10
createdAt: "2026-10-03T01:21:29Z"
lastCommitAt: "2026-10-09T10:51:56Z"
lastReleaseAt: "2026-10-07T04:17:00Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "funded", "release_machine"]
healthScore: 98
undervaluedScore: 57
maintainers: ["coffin299", "cursoragent", "tanaka-yoshida3"]
openGraphImageUrl: "https://opengraph.githubassets.com/5f7c53a39544446ff1dff8d05df999c844db2c9b77444d98f733e7b55f28c76a/coffin299/VRCast"
fundingLinks: ["GITHUB:https://github.com/coffin299", "KO_FI:https://ko-fi.com/coffin299"]
---

# VRCast

A lightweight standalone runtime for 3D avatars for VRChat. Instead of requiring a full Unity project per avatar, it works with each avatar on its own. It aims to display and track avatars easily, like VSeeFace, and output them to streaming software such as OBS.

```text
VRChat avatar (Unity / VCC project)          VRM avatar (VRoid, etc.)
        ↓  com.vrcast.converter (Editor-only package)      │
MyAvatar.vrcaster                                    MyAvatar.vrm (no conversion needed)
        ↓                                                │
VRCast.exe (Runtime)  ←──────────────────────────────────┘
        ↓
OBS (Window Capture / Game Capture / Spout2) / virtual camera (Discord / Zoom, etc.)
```

The design goal is that users do not need to keep the Unity Editor, VCC, or VRChat projects running at all times.

- Website (overview and help; available in Japanese / English / Korean / Simplified and Traditional Chinese. Defaults to the browser language. Light / dark): <https://coffin299.github.io/VRCast/>
  (Source is on the [`webpage` branch](https://github.com/coffin299/VRCast/tree/webpage); the branch root is published via GitHub Pages)

## Current status

**Version…
