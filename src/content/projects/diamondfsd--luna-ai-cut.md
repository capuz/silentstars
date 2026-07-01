---
repo: "diamondfsd/luna-ai-cut"
name: "luna-ai-cut"
description: "Luna AI Cut 是一款面向 Insta360 Luna Ultra 相机的桌面媒体管理工具。PC 通过 Wi-Fi 连接相机后，可以浏览、选择、下载相机中的照片和视频，支持水印导出、批量操作、边到边预览等丰富功能。"
url: "https://github.com/diamondfsd/luna-ai-cut"
homepage: "https://diamondfsd.github.io/luna-ai-cut/"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [73]
stars: 13
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 10
createdAt: "2026-06-25T07:50:04Z"
lastCommitAt: "2026-07-01T07:04:28Z"
lastReleaseAt: "2026-06-26T11:34:30Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 80
undervaluedScore: 51
maintainers: ["diamondfsd"]
openGraphImageUrl: "https://opengraph.githubassets.com/c3dfd67ad256dd06bd0bc917c03dd424e12983a0b3767b1c1af30fff60e67416/diamondfsd/luna-ai-cut"
---

# Luna AI Cut

> Insta360 Luna Ultra 相机的桌面搭档 —— 媒体管理 · 水印导出 · 一站式完成

Luna AI Cut 是一款面向 Insta360 Luna Ultra 相机的桌面媒体管理工具。通过 Wi-Fi 连接相机后，可以浏览、选择、下载相机中的照片和视频，支持水印导出、批量操作、边到边预览等丰富功能。

## 下载

前往 [GitHub Releases](https://github.com/diamondfsd/luna-ai-cut/releases) 下载最新版本：

| 平台 | 格式 | 架构 |
|------|------|------|
| macOS | `.dmg` | Apple Silicon（M 系列芯片） |
| macOS | `.dmg` | Intel（x64） |
| Windows | `.exe` (NSIS) | x64 |

## 使用文档

- 产品介绍与使用指南：[https://diamondfsd.github.io/luna-ai-cut/](https://diamondfsd.github.io/luna-ai-cut/)

## 核心功能

- **一键连接相机** — 连接 Luna Wi-Fi 热点后，应用自动检测设备并加载媒体库
- **媒体浏览管理** — 按日期分组浏览，支持全部/照片/视频快速筛选，三种缩略图尺寸自由切换
- **高效选择下载** — 框选、单选、组选灵活切换，批量下载到本地日期目录，实时进度显示
- **边到边预览** — 全屏暗色预览，右侧信息面板展示分辨率、文件大小、拍摄时间等关键元数据
- **水印与导出** — 支持多种水印样式、位置和大小，导出时自动添加品牌标识
- **本地资源管理** — 已下载文件跨会话保持状态，无需重复连接相机即可浏览管理

## 开发指南

### 环境要求

- Node.js >= 22
- npm（项目使用 npm 管理依赖）

### 快速开始

```bash
# 1. 安装依赖
npm install

# 2. 启动开发服务器（Vite + 热更新）
npm run dev
```

### 常用命令

| 命令 | 说明 |
|------|------|
| `npm run dev` | 启动 Vite 开发服务器（支持热更新） |
| `npm run build:app` | 仅构建前端（tsc + vite build） |
| `npm run build` | 完整构建（tsc + vite build + electron-builder 打包） |
| `npm run pack:mac:arm64` | 打包 macOS ARM64 DMG…
