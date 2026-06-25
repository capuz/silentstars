---
repo: "weapp-vite/weapp-vite"
name: "weapp-vite"
description: "weapp-vite 把现代化的 web 开发方式，带入传统的小程序开发吧！"
url: "https://github.com/weapp-vite/weapp-vite"
homepage: "https://vite.icebreaker.top/"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [81]
topics: ["mini", "miniprogram", "vite", "weapp", "wechat"]
stars: 349
forks: 22
openIssues: 10
closedIssues: 146
watchers: 3
contributors: 10
recentReleases: 0
createdAt: "2024-09-18T16:21:53Z"
lastCommitAt: "2026-06-25T01:31:59Z"
lastReleaseAt: "2024-09-25T19:41:52Z"
status: "thriving"
tags: ["solo_builder", "needs_contributors", "funded"]
healthScore: 99
undervaluedScore: 39
maintainers: ["sonofmagic", "github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/2d351de11e6cf9fb115d5f52c76557c501fee96c01015bdb2d33b9e019a8340e/weapp-vite/weapp-vite"
fundingLinks: ["CUSTOM:https://github.com/sonofmagic/sponsors"]
discussionCount: 19
---

</p>

<h1 align="center">weapp-vite</h1>

</p>

`weapp-vite` 面向正在维护小程序的团队：既保留原生小程序的目录、语法和平台能力，又把 TypeScript、Vite/Rolldown、Vue SFC、自动化调试和 AI 协作带进日常研发。你可以从一个新模板开始，也可以把已有项目渐进接入进来。

## 目录

- [为什么选择 weapp-vite](#为什么选择-weapp-vite)
- [特性亮点](#特性亮点)
- [快速开始](#快速开始)
- [仓库结构](#仓库结构)
- [核心包](#核心包)
- [文档](#文档)
- [参与贡献](#参与贡献)
- [贡献者](#贡献者)
- [Star History](#star-history)
- [许可证](#许可证)

## 为什么选择 weapp-vite

- **不必推翻现有小程序**：可以继续写原生 `Page` / `Component`、WXML、WXSS 和 JSON 配置；存量项目也能按目录迁移、配置补齐、依赖安装的方式渐进接入。
- **把日常开发效率补齐**：TypeScript、ESM、Sass/Less、PostCSS、Tailwind CSS、JSONC、路径别名和 Vite 插件生态可以直接进入小程序工程，不再靠零散脚本拼维护体验。
- **减少小程序工程的重复劳动**：自动构建 `miniprogram_npm`、分包依赖分析、自动导入组件、自动路由、布局、生成页面/组件等能力，适合页面多、分包多、组件多的项目。
- **保留原生能力，同时可逐步升级写法**：团队可以先用 `weapp-vite + 原生` 稳定构建链路，再在新页面或局部模块中引入 Vue SFC 与 Wevu，而不是一次性重写业务。
- **更适合真实小程序调试和验收**：`wv dev --open`、DevTools 配置预热、日志桥接、截图、截图对比、`preview/upload` 透传和 `analyze` 能覆盖从开发到上传前检查的常见链路。
- **让 AI 协作落到真实运行时**：脚手架会生成 `AGENTS.md`，并可接入 MCP、DevTools 日志、运行时截图和截图对比，让 AI 不只改代码，还能按小程序环境做验证。

## 特性亮点

- 新项目：用 [`create-weapp-vite`](packages/create-weapp-vite) 选择原生、Wevu、Tailwind CSS、TDesign、Vant、插件或组件库模板，并自动对齐依赖组合。
- 存量项目：通过手动集成或 `wv init` 接入现有小程序，保留原有页面结构和平台能力。
- Vue SFC：在小程序里使用…
