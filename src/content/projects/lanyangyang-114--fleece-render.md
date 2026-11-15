---
repo: "LanYangYang-114/fleece-render"
name: "fleece-render"
description: "Minecraft player model rendering engine written in Rust | Minecraft player model rendering engine written in Rust"
originalDescription: "Minecraft player model rendering engine written in Rust | 使用Rust编写的Minecraft玩家模型渲染引擎"
descriptionLang: "zh"
readmeQualityOk: true
url: "https://github.com/LanYangYang-114/fleece-render"
language: "Rust"
languages: ["Rust"]
languagePcts: [93]
stars: 8
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 3
createdAt: "2026-11-12T05:41:30Z"
lastCommitAt: "2026-11-15T08:18:11Z"
lastReleaseAt: "2026-11-13T06:55:05Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem"]
healthScore: 80
undervaluedScore: 25
maintainers: ["LanYangYang-114"]
openGraphImageUrl: "https://opengraph.githubassets.com/be6d52c9493aea52f0d0bd04e9ac641b5b3de0af5c1d7580eaa30a34f373fc51/LanYangYang-114/fleece-render"
---

# Fleece Render

Simplified Chinese | [English](https://github.com/LanYangYang-114/fleece-render/blob/HEAD/README_en.md)

Minecraft player model rendering engine written in Rust

## Features

- **3D full-body image**: Supports classic and slim models. Can render a cape or elytra, and optionally shows a name tag. Can output a front view, a back view, or a combined front-and-back image, with transparent background support.
- **2D avatar**: Outputs a 64×64 PNG with transparent background support.
- **Dual-layer skin**: Both the 3D full-body image and the 2D avatar enable the outer skin layer by default. You can also render only the base layer.
- **Multiple inputs**: Skins can be fetched by player name or UUID from Mojang or LittleSkin. Skin textures can also be provided via URL, a server-local file, Base64, a data URL, or image bytes.

## Examples

3D full body

```plain
GET http://127.0.0.1:57680/mojang/image/both
    ?name=LanYangYang_CN
    &style=3d
    &transparent=true
    &showName=false
```

2D avatar

```plain
GET http://127.0.0.1:57680/mojang/image/front
    ?name=LanYangYang_CN
    &style=avatar
    &transparent=true
```

## Quick Start

### Build from source

Follow the…
