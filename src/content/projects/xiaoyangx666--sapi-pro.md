---
repo: "XiaoYangx666/SAPI-Pro"
name: "SAPI-Pro"
description: "A practical library for Minecraft Bedrock ScriptAPI"
readmeQualityOk: true
url: "https://github.com/XiaoYangx666/SAPI-Pro"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [100]
topics: ["minecraft", "minecraft-bedrock", "script-api"]
stars: 8
forks: 1
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 3
recentReleases: 1
createdAt: "2025-02-27T15:31:18Z"
lastCommitAt: "2026-09-19T01:19:47Z"
lastReleaseAt: "2026-09-16T13:49:27Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 82
undervaluedScore: 62
maintainers: ["XiaoYangx666"]
openGraphImageUrl: "https://opengraph.githubassets.com/4a80ab59cb10177bb4023ffe027b5f5d081b43636144a4719b3ec68abf9c59b7/XiaoYangx666/SAPI-Pro"
---

# SAPI-Pro

 

[简体中文](https://github.com/XiaoYangx666/SAPI-Pro/blob/HEAD/README.md)|[English](https://github.com/XiaoYangx666/SAPI-Pro/blob/HEAD/README_EN.md)

## 目录

- [安装](#安装)
    - [使用create-mcbe创建(推荐)](#方式一使用-create-mcbe-创建推荐)
    - [现有项目手动安装](#方式二现有项目手动安装)
- [核心功能](#核心功能)
    - [命令系统](#命令系统)
    - [表单导航](#表单导航)
    - [数据存储](#-数据存储)
    - [多包通信](#多包通信)
    - [多语言](#多语言)
- [示例行为包](#示例行为包)
- [参考文档](#参考文档)
- [SKILL（AI 辅助开发）](#skillai-辅助开发)
- [支持与贡献](#支持与贡献)

---

## 📦 安装

### 方式一：使用 create-mcbe 创建（推荐）

如果你想基于 SAPI-Pro 创建新的脚本行为包，可以使用 [create-mcbe](https://www.npmjs.com/package/create-mcbe) 的 sapi-pro 模板。模板自带 [BEPack](https://www.npmjs.com/package/@bepack/cli) 构建/打包配置，并内置 sapi-pro 依赖解析插件，自动选择与 `@minecraft/*` 渠道匹配的 sapi-pro 版本。

1. 创建项目（默认使用 stable 渠道）

    ```bash
    npm create mcbe@latest my-addon -- --template sapi-pro --yes --install
    ```

2. 构建 / 开发

    ```bash
    cd my-addon
    npm run build   # 构建
    npm run dev     # 监听 + 复制到游戏开发目录
    npm run pack    # 打包 mcpack/mcaddon
    ```

> **提示**
> - 如需 Beta API：将 bepack.config.ts 中 `packs.bp.dependencies` 的 `@minecraft/server`、`@minecraft/server-ui`、`sapi-pro` 都改为 `"beta"`，再执行 `npm run bepack:install`。
> - sapi-pro 由…
