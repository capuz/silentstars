---
repo: "huayuxingtguiyujing/WarGameMap"
name: "WarGameMap"
description: "package to help build a SLG map"
readmeQualityOk: true
url: "https://github.com/huayuxingtguiyujing/WarGameMap"
language: "C#"
languages: ["C#"]
languagePcts: [95]
stars: 16
forks: 1
openIssues: 0
closedIssues: 1
watchers: 1
contributors: 1
recentReleases: 0
createdAt: "2025-02-07T12:56:17Z"
lastCommitAt: "2026-09-13T08:28:23Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 65
undervaluedScore: 39
maintainers: ["huayuxingtguiyujing"]
openGraphImageUrl: "https://opengraph.githubassets.com/2861af4393a4507cf333ba43114eea2bd90e629696ed9201279ecea78c2fcf6e/huayuxingtguiyujing/WarGameMap"
---

一个正在开发的unity内地图包，支持SLG游戏内的地图构建<br> 

#### 如何使用：<br> 
1.先打开 `unity-packagemanager` ，使用 `add from disk` 添加此包所在的文件夹<br> 
2.到unity上方工具栏 `GameMap`处，使用 `InitMapEditor`初始化配置，`OpenMapEditor`打开地图编辑器界面<br> 

#### 会有以下功能：<br> 
-大规模`Terrain`生成，以及`Terrain`数据管理<br> 
-`Terrain LOD`<br> 
-`Terrain` 的地貌纹理混合，地貌图导入导出<br> 
-类`《文明》`的六边形网格地图生成<br> 
-河流、道路生成<br> 
-植被、建筑等地表装饰物构建<br> 
-战争迷雾、寻路<br> 
-划分地图上势力，GamePlay方面的功能<br> 

#### 目前进度（2025.8.5）：<br> 

正在做类似文明6的六边形地图...
现已支持河流编辑

支持地形Mesh减面：<br> 

支持使用真实地理高度图生成地形，接收`TIF`、`Raw`高度图数据的输入，构建的地形规模可达 `20000*20000`，目前使用 `ChunkedLOD` <br> 

支持大地图的地貌图导出，目前的地貌模型应用到地形效果图如下<br> 

地图包正在迭代开发中，文档暂时没有...<br> 

#### 相关链接：
如果您对我的工作感兴趣，可以关注：
