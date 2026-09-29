---
repo: "SaraKale/Model-To-PMX"
name: "Model-To-PMX"
description: "Convert .fbx, .unitypackage, .vrm, and .pmx into each other"
readmeQualityOk: true
url: "https://github.com/SaraKale/Model-To-PMX"
language: "Python"
languages: ["Python"]
languagePcts: [100]
topics: ["convert", "fbx", "model", "pmx", "vrm", "mmd"]
stars: 12
forks: 1
openIssues: 1
closedIssues: 0
watchers: 1
contributors: 1
recentReleases: 10
createdAt: "2026-09-13T12:23:24Z"
lastCommitAt: "2026-09-29T08:09:59Z"
lastReleaseAt: "2026-09-27T11:14:28Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 79
undervaluedScore: 28
maintainers: ["SaraKale", "ulyssas"]
openGraphImageUrl: "https://opengraph.githubassets.com/018d112cd6d8af0ab7cbf1383522924a93f1c4deeee2e880348e6fc7fb5d7dc5/SaraKale/Model-To-PMX"
---

# Model Converter (Pure Python)

Convert `.fbx`, `.unitypackage`, `.vrm`, `.pmx`, and `.uemodel` (UEFormat) into each other — and `.psk` / `.pskx` (Unreal ActorX) into PMX — **entirely with the Python standard library**.
No Blender / Autodesk FBX SDK / Unity 3D required, and no plugins such as mmd_tools / UniVRM.
It reads and writes the binary formats directly — just drag a file into the window to convert.

[English](https://github.com/SaraKale/Model-To-PMX/blob/HEAD/README.md) | [简体中文](https://github.com/SaraKale/Model-To-PMX/blob/HEAD/README_SC.md) | [繁體中文](https://github.com/SaraKale/Model-To-PMX/blob/HEAD/README_TC.md) | [日本語](https://github.com/SaraKale/Model-To-PMX/blob/HEAD/README_JP.md)

---

## Download

Download the latest version from [releases](https://github.com/SaraKale/Model-to-PMX/releases/latest).

## 1. Features

### Supported conversion directions

| Direction | Description |
|---|---|
| FBX / unitypackage → PMX | PMX 2.0 for MMD; quads are auto-fan-triangulated |
| VRM (0.x / 1.0) → PMX | Auto-detects humanoid bones; fills missing ones with placeholder bones |
| PMX → VRM (0.x / 1.0) | Auto-writes VRM meta, humanoid bone mapping, and morph targets |
| uemodel…
