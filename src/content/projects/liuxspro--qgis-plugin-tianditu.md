---
repo: "liuxspro/qgis-plugin-tianditu"
name: "qgis-plugin-tianditu"
description: "Tianditu plugin for QGIS"
readmeQualityOk: true
url: "https://github.com/liuxspro/qgis-plugin-tianditu"
homepage: "https://liuxs.pro/projects/tianditu-tools"
language: "Python"
languages: ["Python"]
languagePcts: [85]
topics: ["qgis-plugin", "tianditu"]
stars: 68
forks: 6
openIssues: 0
closedIssues: 21
watchers: 2
contributors: 2
recentReleases: 0
createdAt: "2022-10-04T07:16:14Z"
lastCommitAt: "2026-11-09T12:00:03Z"
lastReleaseAt: "2024-04-15T06:42:47Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 93
undervaluedScore: 47
maintainers: ["liuxspro"]
openGraphImageUrl: "https://opengraph.githubassets.com/af910f8c21b3e0cd28fd39c675822ccee93c0f12bcc17c4fa31566f958c21588/liuxspro/qgis-plugin-tianditu"
---

# TianDiTu Tools

QGIS 天地图工具，方便进行天地图瓦片底图的添加以及简单实现了部分[天地图 Web 服务 API](http://lbs.tianditu.gov.cn/server/guide.html)（地名搜索、地理编码查询、逆地理编码查询）。

此外，还内置了部分**天地图省级节点历史影像**、**谷歌地图**、**ESRI**、**高德地图**等常用第三方在线地图源。

---

## 功能特性

- **天地图底图添加** — 一键添加天地图矢量、影像、地形、山体阴影等官方瓦片底图
- **EPSG:4490 图层** — 天地图经纬度（CGCS2000）瓦片，供需要 4490 坐标系的项目直接使用
- **省级历史影像** — 支持部分天地图省级节点历史遥感影像
- **第三方地图** — 内置 Google Maps、ESRI、高德地图等常用在线地图源
- **地名搜索** — 调用天地图地名搜索 API，检索地点
- **地理编码查询** — 将地址转换为坐标
- **逆地理编码查询** — 将坐标转换为地址
- **结果定位** — 双击（或点击链接）搜索结果项，自动在地图上添加标记并定位
- **多 Key 管理** — 支持保存多个天地图 Key，可指定使用或随机选用
- **地图源管理** — 可勾选需要显示在「添加地图」菜单中的地图源

---

## 使用说明

安装插件后，QGIS 工具栏会增加一个名为 **"天地图 Tools 工具栏"** 的专属工具栏，包含以下按钮：

| 按钮         | 功能                                           |
| ------------ | ---------------------------------------------- |
| 底图下拉菜单 | 选择并添加各种在线地图底图                     |
| 搜索按钮     | 打开搜索面板，进行地名/地理编码/逆地理编码查询 |
| 设置按钮     | 配置天地图 API Key                             |

### 1. 设置天地图 Key

使用前需要先设置天地图 Key：

1. 点击工具栏上的**设置按钮**，打开设置面板
2. 输入你的天地图 Key，点击**「验证并添加」**；验证通过后会自动保存并设为当前 Key
3. 可以保存多个 Key，后续在设置列表中点击即可切换当前 Key，也可勾选「随机使用列表中的 Key」

> 天地图 Key 需要到 [天地图控制台](https://cloudcenter.tianditu.gov.cn/center/development/myApp)…
