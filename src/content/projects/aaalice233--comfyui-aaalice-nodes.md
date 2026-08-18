---
repo: "Aaalice233/ComfyUI-Aaalice-Nodes"
name: "ComfyUI-Aaalice-Nodes"
description: "Aaalice 的 ComfyUI 自定义节点合集（重置版主包）"
readmeQualityOk: true
url: "https://github.com/Aaalice233/ComfyUI-Aaalice-Nodes"
language: "JavaScript"
languages: ["JavaScript"]
languagePcts: [78]
stars: 12
forks: 4
openIssues: 0
closedIssues: 1
watchers: 1
contributors: 1
recentReleases: 0
createdAt: "2026-07-13T01:49:35Z"
lastCommitAt: "2026-08-18T04:08:50Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem"]
healthScore: 100
undervaluedScore: 53
maintainers: ["Aaalice233"]
openGraphImageUrl: "https://opengraph.githubassets.com/74b86c7365013dd61172d64087a2c0ef74337926d0e2649916fdd725ba2d9f4b/Aaalice233/ComfyUI-Aaalice-Nodes"
---

</p>

</p>

# ComfyUI-Aaalice-Nodes

面向 ComfyUI 的紧凑参数控件和工作流工具。

> 当前为已发布的预览版。首次稳定发布前，工作流格式和节点行为仍可能调整。旧版工作流不会自动迁移；词库管理可以导入下文列出的受支持旧版词库导出文件。

> [!WARNING]
> **不要与 [ComfyUI-Danbooru-Gallery](https://github.com/Aaalice233/ComfyUI-Danbooru-Gallery) 同时安装**：两者注册了相同的节点 ID（`PromptSelector`、`GroupIsEnabled`、`SimpleNotify`、`SimpleStringSplit`、`FetchFromKrita`），且旧版包前端仍会挂钩这些节点类型，同时安装会产生重复控件和不可预期行为。请只保留其中一个。若检测到两者共存，界面会弹出警告提示。

## 📋 环境要求

- 支持 V3 自定义节点的较新 ComfyUI。
- 支持经典画布和 Nodes 2.0；暂不支持 App Mode。
- 内置 English 和简体中文界面；其它语言回退到 English。

## 📥 安装

### 📦 ComfyUI Manager（推荐）

1. 打开 **ComfyUI Manager**，进入自定义节点管理页面。
2. 搜索 `ComfyUI-Aaalice-Nodes` 或 Registry 包 ID `comfyui-aaalice-nodes`。
3. 点击 **Install**，完成后重启 ComfyUI 并刷新浏览器。

Manager 会安装 Registry 中已发布的 [`comfyui-aaalice-nodes`](https://registry.comfy.org/nodes/comfyui-aaalice-nodes) 及其声明依赖。日常安装和更新推荐使用 Manager。

### 🔧 手动 Git 安装

仅在需要最新开发版本或指定提交时使用 Git。将仓库克隆到 `ComfyUI/custom_nodes`，使用 ComfyUI 所在的 Python 环境安装依赖，然后重启：

```bash
cd ComfyUI/custom_nodes
git clone https://github.com/Aaalice233/ComfyUI-Aaalice-Nodes.git
cd ComfyUI-Aaalice-Nodes
pip install -r requirements.txt
```

## 🔄 更新与故障排查

- Registry 安装请通过 ComfyUI Manager 更新。
- 手动 Git 安装可在仓库目录执行…
