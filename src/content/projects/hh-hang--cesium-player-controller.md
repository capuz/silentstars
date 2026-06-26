---
repo: "hh-hang/cesium-player-controller"
name: "cesium-player-controller"
description: "A first-person & third-person character controller for CesiumJS."
url: "https://github.com/hh-hang/cesium-player-controller"
homepage: "https://hh-hang.github.io/cesium-player-controller/"
language: "JavaScript"
languages: ["JavaScript"]
languagePcts: [95]
topics: ["3d-tiles", "cesium", "cesiumjs", "character-controller", "collision-detection", "first-person", "fps", "player-controller", "rapier", "third-person"]
stars: 23
forks: 2
openIssues: 0
closedIssues: 0
watchers: 2
contributors: 1
recentReleases: 2
createdAt: "2026-06-18T15:46:16Z"
lastCommitAt: "2026-06-26T06:47:18Z"
lastReleaseAt: "2026-06-22T09:23:30Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem"]
healthScore: 80
undervaluedScore: 33
maintainers: ["hh-hang"]
openGraphImageUrl: "https://opengraph.githubassets.com/ea655b1f66cdba59388cccbe7bf01fbf6a4d320ea9c512108867a700c71537f7/hh-hang/cesium-player-controller"
---

中文 | [English](README_En.md)

# cesium-player-controller

> **注意：** 由于 CesiumJS 无法通过 CPU 直接获取 3D Tiles 的顶点坐标，您可以使用 [collider-forge](https://github.com/hh-hang/collider-forge) 工具来制作碰撞体。

基于 CesiumJS 的玩家控制器，开箱即用，提供人物胶囊体碰撞、动画、第一 / 第三人称切换、相机避障。

# 示例

# 安装

```bash
npm install cesium-player-controller @dimforge/rapier3d-compat
```

# 本地运行

```bash
git clone https://github.com/hh-hang/cesium-player-controller.git
npm install
npm run dev
```

浏览器访问 `http://localhost:5173/cesium-player-controller/`。

# 使用

```ts
import {
    Cartesian3,
    Cesium3DTileset,
    Viewer,
    Math as CMath,
    Cartographic,
} from "cesium";
import "cesium/Build/Cesium/Widgets/widgets.css";
import { playerController } from "cesium-player-controller";

// 搭建 CesiumJS 环境
const viewer = new Viewer("cesiumContainer", {
    timeline: false,
    animation: false,
});

// 加载 3D Tiles 场景
const tileset = await Cesium3DTileset.fromUrl("./tileset.json");
viewer.scene.primitives.add(tileset);
await viewer.flyTo(tileset);

// 设置人物出生点
const center = tileset.boundingSphere.center;
const carto = Cartographic.fromCartesian(center);
const initPos = Cartesian3.fromDegrees(
    CMath.toDegrees(carto.longitude),…
