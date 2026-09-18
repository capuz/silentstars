---
repo: "huzunjie/qtiled"
name: "qtiled"
description: "一套多边形平铺或错列布局库。Staggered arrangement method of polygon tiles."
readmeQualityOk: true
url: "https://github.com/huzunjie/qtiled"
language: "JavaScript"
languages: ["JavaScript"]
languagePcts: [100]
topics: ["javascript", "game", "nodejs", "canvas", "tilemap", "tile", "tiled"]
stars: 13
forks: 0
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 1
recentReleases: 0
createdAt: "2018-04-03T06:12:05Z"
lastCommitAt: "2026-09-18T14:03:11Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "legacy_hero"]
healthScore: 89
undervaluedScore: 41
maintainers: []
openGraphImageUrl: "https://opengraph.githubassets.com/7eca9cb8547711745b1b6efc64a9347aefbaf5e91b84e6fdde108608c1eb9ad2/huzunjie/qtiled"
---

# QTiled

这是一套 Tiled 多边形布局基础库。

## DEMO

结合 [spritejs](https://github.com/spritejs) 的几种基本用法示例：https://lab.pyzy.net/qtiled

### 菱形布局示例

### 六边形布局示例

## 计划列表

### Basic Shapes - 基础图形
+ [x] Polygon - 多边形
  + [x] getPolygonVertexes 获取多边形顶点坐标集
  + [x] getPolygonPositions 按目标区间方向获取多个多边形位置坐标集
  + [x] twoDimForEach 按目标区间方向进行二维遍历
  + [x] getPolygonInfoByPos 根据当前任意坐标&原点坐标&单个瓦片尺寸等，取得目标瓦片的二维坐标及渲染坐标值
+ [x] Rect - 矩形
  + [x] getRectVertexes 获取矩形顶点坐标集
  + [x] getRectPositions 获取多个矩形位置坐标集
  + [x] getRectInfoByPos 根据当前任意坐标&原点坐标&单个瓦片尺寸等，取得目标瓦片的二维坐标及渲染坐标值
  + [x] getNeighbors - 获得当前点周边的邻居，可用于寻路等
+ [x] Rhombus - 菱形
  + [x] getRhombusVertexes 获取菱形顶点坐标集
  + [x] getRhombusPositions 按目标区间方向获取多个菱形的错列布局位置坐标集
  + [x] getRhombusInfoByPos 根据当前任意坐标&原点坐标&单个瓦片尺寸等，取得目标瓦片的二维坐标及渲染坐标值
  + [x] getIsometricRhombusPositions 按目标区间方向获取多个菱形的等距布局位置坐标集
  + [x] getIsometricRhombusInfoByPos 根据任意点&原点&单瓦片尺寸，取得瓦片的等距二维坐标及渲染坐标
  + [x] getNeighbors - 获得错列布局当前点周边的邻居，可用于寻路等
  + [x] getIsometricNeighbors - 获得等距布局当前点周边的邻居，可用于寻路等
+ [x] Hexagon - 六边形
  + [x] getHexagonVertexes 获取六边形顶点坐标集
  + [x] getHexagonPositions 按目标区间方向获取多个六边形的错列布局位置坐标集
  + [x] getHexagonInfoByPos 根据当前任意坐标&原点坐标&单个瓦片尺寸等，取得目标瓦片的二维坐标及渲染坐标值
  + [x] getNeighbors…
