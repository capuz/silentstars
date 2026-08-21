---
repo: "edcfoshan/polygon-txt"
name: "polygon-txt"
description: "极思G界址点互转工具 — SHP/GDB 面要素与界址点 TXT 双向转换。纯 Rust,无需 ArcPy。"
readmeQualityOk: true
url: "https://github.com/edcfoshan/polygon-txt"
language: "Rust"
languages: ["Rust"]
languagePcts: [62]
topics: ["gdb", "gis", "rust", "shapefile", "tauri", "boundary-point", "boundary", "cadastre", "cgcs2000", "converter"]
stars: 6
forks: 2
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 10
createdAt: "2026-06-09T09:20:50Z"
lastCommitAt: "2026-08-21T04:10:39Z"
lastReleaseAt: "2026-08-21T04:01:41Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 68
undervaluedScore: 60
maintainers: ["edcfoshan"]
openGraphImageUrl: "https://opengraph.githubassets.com/17dcffe296a7ebcde3c3e07cfabb72a1d0488c004cf9d1bc50401bd8fe33e23f/edcfoshan/polygon-txt"
---

# 极思G界址点互转工具

> 面要素（SHP / GDB）与标准界址点 TXT 文件的双向转换 — 轻量级 GIS 桌面工具，专为测绘与国土行业设计

[English](https://github.com/edcfoshan/polygon-txt/blob/HEAD/README.en.md) | 中文

## 简介

**极思G界址点互转工具** 是一款面向测绘与国土行业的轻量级 GIS 桌面工具，实现面要素（SHP / GDB）与标准界址点 TXT 文件的双向转换。

传统作业流程里，界址点 TXT 与 GIS 面要素之间的互转往往要靠 ArcMap 配合 Python 脚本或人工处理，繁琐且易错。本工具把这件**最常做的小事**做成了**一键操作**——选文件、点转换、出结果，中间不用写一行代码。纯 Rust 实现，**无需安装 ArcPy / ArcGIS**。

## 主要功能

- **面 → TXT**：导入 SHP、GDB 面要素，输出标准界址点 TXT 文件
- **TXT → 面**：解析 TXT 文件，生成 SHP 矢量面数据
- 三种输出模式：一对一 / 按地块拆分 / 全合并
- 支持 **2000 国家大地坐标系、1980 西安、1954 北京、WGS84**
- 高斯-克吕格投影 3°/6° 分带，自动识别 PRJ 并提取带号
- **输出公里网**：导入经纬度（大地坐标系）SHP/GDB 时，可一键投影为 CGCS2000 高斯-克吕格平面坐标（米）+ 带号前缀
- 字段自动匹配（简单 / 高级 / 补充耕地三档预设）
- 自动面积计算（按平方米 / 公顷）
- 浅色 / 暗色 × 8 色系 = 16 种主题组合；折叠收纳式三栏布局；窗口大小与位置全部记忆

## 核心功能详解

### 1. 双向转换 · 无损往返

转换不是简单的"复制粘贴"。**面 → TXT** 方向会先做环向归一化（外环逆时针、洞顺时针），识别洞与多部件并逐环编号界址线号，从 PRJ 自动识别坐标系并提取带号；**TXT → 面** 方向则按界址线号切环重建多边形、校验首末点闭合、回填 DBF 属性表。整个过程保证**无损往返**——转过去再转回来，坐标一根不差。

- **面 → TXT**：SHP / GDB 面要素一键输出标准界址点 TXT，J 序号在单个地块内跨环连续递增
- **TXT → 面**：解析 TXT 生成带属性表的 SHP，可直接进 ArcMap / QGIS / ArcGIS Pro
- **三种输出模式**：一对一（每源一个 TXT）/ 按地块拆分（文件名取自 DKMC 等字段）/ 全合并（整库归档带时间戳）

### 2. 字段映射 · 从简单到专业

三档字段映射满足不同精度需求：

-…
