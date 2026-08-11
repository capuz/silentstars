---
repo: "blueish0930/BIKINI"
name: "BIKINI"
description: "专注于几何节点与用户体验的Blender Branch，与每日版同步更新。"
readmeQualityOk: true
url: "https://github.com/blueish0930/BIKINI"
language: "Python"
languages: ["Python"]
languagePcts: [90]
stars: 15
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 1
createdAt: "2026-07-24T22:58:10Z"
lastCommitAt: "2026-08-11T04:49:11Z"
lastReleaseAt: "2026-08-08T09:06:44Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 80
undervaluedScore: 42
maintainers: ["blueish0930"]
openGraphImageUrl: "https://opengraph.githubassets.com/9eb4c7f748da79c7477bc7e1ad8a1b1b60c19ae2207fa1d63e4b0dac9a381e08/blueish0930/BIKINI"
---

# BIKINI

非官方 **Blender 5.3** 便携构建（Windows x64）。在主线之上做自己真正想用的节点、图像工具与编辑器体验。

**文档：** [主页](https://blueish0930.github.io/BIKINI/) · [更新日志](https://blueish0930.github.io/BIKINI/changelog.html) · 本地 `docs/`

**仓库：** [GitHub（站点 / 发布）](https://github.com/blueish0930/BIKINI) · [源码（projects.blender.org）](https://projects.blender.org/blueish/BIKINI)
---

## 中文

### 目标

- 跟进 **Blender main / 5.3**，不当死分叉。
- 以 **Geometry Nodes** 为中枢，补齐几何处理、稀疏求解、交互选择与重网格等能力。
- 新增 **GPU Texture Editor（Image Process）**：面向贴图 / 栅格 / 流体的节点图（COP 向）。
- 改进 **节点编辑器 UX** 与调试（Portal、对齐、组接口、属性预览等）。
- 便携分发：解压即用，文档随包。

### 已优化 / 主要方向

| 方向 | 内容概要 |
|------|----------|
| 几何节点 | Portal、Clip、Loop 细分、近邻、Debug、Time Shift、Select/Edit、Heat Geodesic、染色、切向场、曲线求交、Expression、Write at Index、Delaunay… |
| 稀疏数学 | Mesh Laplacian → Sparse Matrix Math → Linear Solver（稀疏求解 / 分解 / 特征） |
| 重网格与破碎 | Instant Meshes、QuadWild、Triangle Remesh、Voronoi Fracture |
| 图像节点 | Point Stamp、光栅化、法线/高度、Paint、Histogram、流体区、SDF/Fractal、Bake、Sample/Write at Pixel… |
| 着色器 | SDF Shape、Fractal、HLSL、Image Socket |
| 界面 | 抖动拆线、U 对齐、组 Separator/Message、Ctrl/Alt 改 socket、Menu 多选、Spreadsheet 排序… |
| 编辑器 | Data-Block Graph；合成器内嵌 GTE 组节点 |

### 使用

1. 下载并**整包解压**（勿只拷…
