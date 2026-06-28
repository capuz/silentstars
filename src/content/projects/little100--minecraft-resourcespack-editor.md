---
repo: "Little100/Minecraft-Resourcespack-Editor"
name: "Minecraft-Resourcespack-Editor"
description: "a minecraft resourcespack maker,can ez to make packs or edit pack for noob man"
url: "https://github.com/Little100/Minecraft-Resourcespack-Editor"
language: "TypeScript"
languages: ["TypeScript", "CSS"]
languagePcts: [57, 23]
stars: 33
forks: 4
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 2
recentReleases: 0
createdAt: "2025-11-26T10:30:47Z"
lastCommitAt: "2026-06-28T02:01:04Z"
lastReleaseAt: "2025-12-06T06:56:04Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "funded"]
healthScore: 90
undervaluedScore: 38
maintainers: ["github-actions[bot]", "Little100"]
openGraphImageUrl: "https://opengraph.githubassets.com/77357a612f375d1738a9fdfecf65a7bb48ee4dfc103db685838bb0d1f89757df/Little100/Minecraft-Resourcespack-Editor"
fundingLinks: ["CUSTOM:https://afdian.com/a/little100"]
---

# Minecraft Resourcespack Editor

  <h2>一个功能强大的 Minecraft 资源包编辑器</h2>
  <h3>支持最新版本的材质包格式，让您轻松创建和编辑资源包</h3>
  <p>此文档由Ai生成(未经过审查)</p>
</div>

## ✨ 功能特性

- 🎨 **可视化编辑** - 直观的图形界面，支持实时预览
- 📦 **多种导入方式** - 支持从 ZIP 文件或文件夹导入资源包
- 🔧 **完整编辑功能** - 编辑材质、模型、音效等资源文件
- 🎯 **元数据管理** - 轻松编辑 pack.mcmeta 配置
- 🖼️ **图像编辑器** - 内置图像查看和编辑工具
- 📝 **代码编辑器** - 支持 JSON、MCMETA 等文件的语法高亮
- 🌐 **Web 服务** - 可选的局域网/公网访问功能
- 🎨 **主题切换** - 支持亮色/暗色主题
- 💾 **历史记录** - 支持编辑历史的撤销/重做
- 🔄 **模板缓存** - 智能缓存 Minecraft 版本文件

## 🚀 快速开始

### 环境要求

- Node.js 16+
- Rust 1.70+
- Windows 10/11 (当前版本)

### 安装依赖

```bash
# 安装前端依赖
npm install

# 安装 Tauri CLI (如果尚未安装)
npm install -g @tauri-apps/cli
```

### 开发模式

```bash
# 启动开发服务器
npm run dev

# 或者只启动 Vite 开发服务器
npm run dev:vite
```

### 构建应用

```bash
# 构建生产版本
npm run build

# 预览构建结果
npm run preview
```

## 📖 使用指南

### 导入资源包

1. **从文件夹导入** - 选择包含资源包文件的文件夹
2. **从 ZIP 导入** - 选择 .zip 格式的资源包文件
3. **从零创建** - 创建全新的资源包项目

### 编辑资源

- 在左侧文件树中浏览资源文件
- 双击文件进行编辑
- 支持的文件类型：
  - 图像文件 (.png, .jpg, .jpeg)
  - JSON 文件 (.json, .mcmeta)
  - 文本文件 (.txt, .md)

### 导出资源包

编辑完成后，点击"导出"按钮将资源包保存为 ZIP 文件。

## 🛠️ 技术栈

### 前端
- **React 19** - UI 框架
- **TypeScript** - 类型安全
- **Vite** - 构建工具

### 后端
- **Tauri…
