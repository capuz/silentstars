---
repo: "andrzejsheltered589/story_editor"
name: "story_editor"
description: "Build a Cocos Creator story editor for visual dialogue flow, node linking, JSON import/export, auto layout, and real-time preview"
readmeQualityOk: true
url: "https://github.com/andrzejsheltered589/story_editor"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [84]
topics: ["ai", "canvas", "csharp", "facebook", "filters", "fluentdesign", "flutter-package", "game", "image-processing", "imageeditor"]
stars: 5
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2026-04-17T10:53:49Z"
lastCommitAt: "2026-09-07T08:34:15Z"
status: "thriving"
tags: []
healthScore: 55
undervaluedScore: 9
maintainers: ["andrzejsheltered589", "lyh1992"]
openGraphImageUrl: "https://opengraph.githubassets.com/5fdf2d5d21a15b01e57199238ede4b1707d761ee30140e4ba3dc897863e9d0a6/andrzejsheltered589/story_editor"
---

# Cocos Creator 故事编辑器

一个功能强大的可视化剧情编辑器扩展，专为 Cocos Creator 设计，帮助游戏开发者轻松创建和管理对话故事流程。

## ✨ 功能特性

- 📊 **可视化节点编辑** - 直观的拖拽式节点编辑器
- 🔗 **贝塞尔曲线连线** - 优美的贝塞尔曲线连接节点
- 📝 **多种节点类型** - 支持开始、对话、判断、动作、过渡、结束等节点
- 💾 **故事导入导出** - 支持导入和导出 JSON 格式的故事文件
- 🎨 **自动布局** - 智能的自动布局算法，快速整理节点
- ⌨️ **快捷键操作** - 便捷的键盘快捷键提升效率
- 🔄 **实时预览** - 实时预览故事流程

## 🚀 快速开始

### 环境要求

- Cocos Creator >= 3.8.6
- Node.js >= 14.x

### 安装

1. 将扩展包放入 Cocos Creator 项目的 `extensions` 目录
2. 在 Cocos Creator 中打开扩展管理器
3. 启用"故事编辑器"扩展

### 构建开发版本

```bash
# 安装依赖
npm install

# 构建项目
npm run build
```

## 📖 使用说明

### 打开编辑器

在菜单栏点击 `扩展 → 故事编辑器 → 打开编辑器`，即可打开故事编辑面板。

### 节点类型

| 节点类型    | 说明               | 可编辑内容                   |
| ----------- | ------------------ | ---------------------------- |
| 🟢 开始节点 | 故事起点，不可删除 | 展示文字                     |
| 💬 对话节点 | 角色对话内容       | 对话内容、发起角色、目标角色 |
| 🔀 判断节点 | 条件分支判断       | 绑定变量、判断条件           |
| ⚡ 动作节点 | 执行特定动作       | 指定角色、动作说明           |
| 🔄 过渡节点 | 场景过渡           | 展示文字                     |
| 🔴 结束节点 | 故事终点           | 无                           |

### 基本操作

- **创建节点** - 点击工具栏的节点按钮
- **编辑节点** - 点击节点打开编辑对话框
- **移动节点** - 拖拽节点到目标位置
- **删除节点** - 选中节点后按 `Delete` 键
- **连接节点** -…
