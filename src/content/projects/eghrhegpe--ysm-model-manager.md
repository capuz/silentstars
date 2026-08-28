---
repo: "eghrhegpe/ysm-model-manager"
name: "ysm-model-manager"
description: "🎮 Minecraft YSM 模型管理器 - 硬链接/符号链接/复制三种模式，本地管理、网页搜索ysm、mmd、vrm、资源包、光影包、蓝图"
readmeQualityOk: true
url: "https://github.com/eghrhegpe/ysm-model-manager"
language: "TypeScript"
languages: ["TypeScript", "Go"]
languagePcts: [54, 30]
stars: 38
forks: 3
openIssues: 2
closedIssues: 2
watchers: 0
contributors: 3
recentReleases: 10
createdAt: "2026-06-03T09:00:45Z"
lastCommitAt: "2026-08-28T15:30:50Z"
lastReleaseAt: "2026-06-07T17:05:13Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 87
undervaluedScore: 40
maintainers: ["eghrhegpe"]
openGraphImageUrl: "https://opengraph.githubassets.com/36749e400b700dfd43902f2538ddbd77d79de6cb28153a201197bbeac1a745ce/eghrhegpe/ysm-model-manager"
---

# 🧱 YSM 模型管理器

> > 像 Steam 创意工坊一样，管理你的 Minecraft YSM 模型。
> > [https://eghrhegpe.github.io/ysm-model-manager/](https://eghrhegpe.github.io/ysm-model-manager/)

**技术栈**：Go (Wails v3) + 原生 HTML/CSS/TS (Web Components + Shadow DOM) + Three.js + YSMParser WASM

**✅ Windows (amd64) · ✅ Linux (amd64) · ⚠️ macOS (实验性)** 具备完整的导入、预览、分类、同步功能。

**✅Android「3D预览器」** 授权公共仓库路径后， `os.*` 直读模型文件。

**✅网页版「3D预览器」** 经 backend 适配器路由到 IndexedDB 模型库（`resolveBackend` 双实现）。

---

## ⚡ 快速开始

1. **下载**： [GitHub Releases](https://github.com/eghrhegpe/ysm-model-manager/releases) 的 `YSM-Model-Manager_windows_amd64.exe`
2. **解压**：解压到任意目录（如 `D:\YSM-Model-Manager\`）
3. **首次配置**：启动程序 → 设置游戏根目录（`.minecraft` 文件夹）→ 设置模型仓库路径
4. **开始使用**：把模型文件放入仓库目录，或通过拖拽导入

> 📖 **详细说明见 [用户指南](https://github.com/eghrhegpe/ysm-model-manager/blob/HEAD/docs/guide/index.md)**，包含 FAQ、故障排查、链接模式详解等。
> 🎨 **设计规范见 [Design.md](https://github.com/eghrhegpe/ysm-model-manager/blob/HEAD/docs/Design.md)**， 包含 UI 设计指南。
> 🧭 **主站介绍见 [docs/index.md](https://github.com/eghrhegpe/ysm-model-manager/blob/HEAD/docs/index.md)**，包含 项目进展。
> AI 协作规则见 [AGENTS.md](https://github.com/eghrhegpe/ysm-model-manager/blob/HEAD/AGENTS.md)。

---

## 🖥️ 功能一览

左侧导航 →…
