---
repo: "nikonikoCW/Meteor3DEditor"
name: "Meteor3DEditor"
description: "基于 Three.js 和 Vue3 的三维引擎低代码编辑开发平台，专注于数字孪生和物联网数据大屏可视化开发。A low-code editing and development platform for 3D engines based on Three.js and Vue3, focusing on digital twin and IoT data visualization on large screens."
readmeQualityOk: true
url: "https://github.com/nikonikoCW/Meteor3DEditor"
homepage: "http://www.meteor3d.cn"
language: "JavaScript"
languages: ["JavaScript", "Vue"]
languagePcts: [63, 34]
topics: ["3d-visualization", "digital-twin", "editor", "low-code", "scene-editor", "scene", "threejs", "bi", "iot", "webgl"]
stars: 60
forks: 16
openIssues: 1
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 0
createdAt: "2025-05-28T06:46:08Z"
lastCommitAt: "2026-07-31T06:28:54Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 55
undervaluedScore: 41
maintainers: ["nikonikoCW"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/github-production-repository-image-32fea6/991790727/85fa2fe8-5ee7-42c3-9565-9f202496ed36?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAVCODYLSA53PQK4ZA%2F20260731%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20260731T063217Z&X-Amz-Expires=300&X-Amz-Signature=c375766622515d095b2b26c1a6a3420081319eaf8a37696512f607080a1586c7&X-Amz-SignedHeaders=host&jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoiaHR0cHM6Ly9yZXBvc2l0b3J5LWltYWdlcy5naXRodWJ1c2VyY29udGVudC5jb20vIiwia2V5Ijoia2V5MSIsImV4cCI6MTc4NTQ3OTgzNywibmJmIjoxNzg1NDc5NTM3LCJwYXRoIjoicmVwb3NpdG9yeS1pbWFnZXMuZ2l0aHVidXNlcmNvbnRlbnQuY29tIn0.vU9oUXHgGForzzbcixQuPTtTUM1F9fUiLCy69nu36xs"
---

# Meteor3D

  <strong>🚀 低代码 3D 场景可视化编辑平台</strong>
</p>

</p>

> ⚠️ **注意**：官方演示服务器为 1M 带宽小型服务器，首次加载 3D 模型可能较慢，请耐心等待。

---

## ✨ 功能特性

### 🎨 场景编辑器 (Scene Editor)
- **可视化 3D 场景搭建** - 拖拽式操作，所见即所得
- **模型属性编辑** - 位置、旋转、缩放实时调整
- **场景树管理** - 层级结构清晰，便于管理复杂场景
- **GIS 投影支持** - 经纬度坐标系统，适配数字孪生场景
- **卫星影像底图** - 自动加载瓦片地图，构建真实地理环境

</p>

### 📦 资产管理器 (Asset Manager)
- **3D 模型上传** - 支持 GLTF/GLB 格式
- **自动缩略图生成** - 基于 Three.js 的智能预览
- **模型优化处理** - 自动生成 LOD 和 Draco 压缩版本
- **分类筛选** - 快速定位所需资产

</p>

### 🔧 Core SDK
- **开箱即用** - 独立可用的 3D 渲染核心
- **场景序列化** - 支持保存和加载场景数据
- **GIS 坐标转换** - WGS84 与本地坐标系互转
- **性能监控** - 内置 FPS、三角面数统计

### 🌟 应用编辑器 (App Editor) `内测中`

> **拖拽搭建 3D 数据可视化大屏，零代码交付！**

</p>

- 🎯 **可视化画布** - 自定义分辨率，适配各类大屏
- 🔗 **组件交互** - 按钮点击触发场景切换、数据联动
- 📊 **数据面板** - ECharts 图表、3D 标签实时渲染
- 🚀 **一键预览** - 所见即所得，秒级部署上线

</p>

---

## 🚀 快速开始

### 环境要求

- Node.js >= 16
- pnpm >= 8

### 安装

```bash
# 克隆仓库
git clone https://github.com/nikonikoCW/Meteor3DEditor.git
cd Meteor3DEditor

# 安装依赖
pnpm install
```

### 启动开发服务

```bash
# 启动场景编辑器 (端口 5173)
pnpm dev:scene

# 启动资产管理器 (端口 5175)
pnpm dev:asset

# 启动后端服务 (端口 3001)
cd meteor3d-server && node app.js
```

---

## 🛠️ 技术栈

### 前端

| 技术 | 版本 | 用途 |…
