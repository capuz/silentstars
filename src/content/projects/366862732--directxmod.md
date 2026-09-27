---
repo: "366862732/DirectXmod"
name: "DirectXmod"
description: "Use DX12 in Minecraft?"
originalDescription: "在我的世界使用DX12?"
descriptionLang: "zh"
readmeQualityOk: true
url: "https://github.com/366862732/DirectXmod"
language: "C++"
languages: ["C++", "Java"]
languagePcts: [60, 39]
stars: 8
forks: 1
openIssues: 1
closedIssues: 1
watchers: 0
contributors: 1
recentReleases: 1
createdAt: "2026-06-12T11:41:23Z"
lastCommitAt: "2026-09-27T09:27:15Z"
lastReleaseAt: "2026-09-06T10:56:38Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 79
undervaluedScore: 48
maintainers: ["366862732"]
openGraphImageUrl: "https://opengraph.githubassets.com/a60af130d2a901bd624a2315009da798a0e92bf3bdc10e78403d49cf19eefafb/366862732/DirectXmod"
---

# DirectXMod (gl4dx12)

> **Native D3D12 rendering backend for Minecraft 26.2 Fabric Mod.**
> By implementing Minecraft's official `GpuBackend` / `GpuDeviceBackend` interfaces, replace the OpenGL/Vulkan rendering path with a C++ native DLL (`dx12_mc.dll`), allowing Minecraft to use D3D12 to directly render the game screen, while retaining Mod extension points (AA settings, ModMenu integration).

## Notes
> This mod cannot possibly change the vast ecosystem of OpenGL/Vulkan (officially appointed), and will stop any updates other than version adaptation after reaching a stable state, and will open source using the CC0 protocol.

> Credits: 爱睡觉的白洲梓 / xiaozi Graphics Development Team

## Overview

This project uses **Mixin injection** to modify Minecraft's graphics API selection logic, allowing the game to use D3D12 backend rendering, while providing rendering state synchronization, configuration management, and Mod compatibility layer through the Java layer.

### Core Features

- **Mixin Injection**: 12 Mixins cover graphics API selection + initialization/rendering/resource loading/world loading/chunks/camera/fog full-chain diagnosis (see [Mixin Injection Points](#mixin-注入点))
-…
